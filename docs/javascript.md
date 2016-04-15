#7. Modular JavaScript
##7.1 Source Structure
Remark template features a highly modular JavaScript source system. Each page only uses the JavaScript it needs and nothing more.

The pre-complied files are under ```(layout)/assets/js/``` and ```global/js``` folder:

    (layout)/assets/js/
    ├── configs/
    ├── sections/ (site section script, such as: nav, sidebar...)
    ├── app.js (basic app site example)
    └── site.js (site initialize function)

    global/js/
    ├── components/ (bootstrap source files)
    ├── configs/ (js config file)
    ├── plugins/ (template plugins)
    ├── components.js (combine the files in components folder)
    └── core.js (define root object $.site and $.components)

You can find their source files from ```(layout)/src/js/``` and ```global/src/js``` folder.

##7.2 Core.js
In ```global/js/core.js```, we provided three useful functionalities: **Site initialization**, **Config api**, and **Component registration**.

###Site initialization
We provided a site initialization script which helps you hook your scripts into the process easily.
You can hook your scripts by extending ```$.site```.

We have a dequeue system. It provides dequeue functions for prepare, run and complete state.

``` javascript
/* line 10 */
$.extend($.site, {
  _queue: {
    prepare: [],
    run: [],
    complete: []
  },

  dequeue: function(name, done) {
    var self = this,
      queue = this.getQueue(name),
      fn = queue.shift(),
      next = function() {
        self.dequeue(name, done);
      };

    if (fn) {
      fn.call(this, next);
    } else if ($.isFunction(done)) {
      done.call(this);
    }
  },

  getQueue: function(name) {
    if (!$.isArray(this._queue[name])) {
      this._queue[name] = [];
    }

    return this._queue[name];
  }
};
```

The main run function is defined below in the file:

``` javascript
/* line 17 */
run: function() {
  var self = this;

  this.dequeue('prepare', function() {
    self.trigger('before.run', self);
  });

  this.dequeue('run', function() {
    self.dequeue('complete', function() {
      self.trigger('after.run', self);
    });
  });
}
```

And the ```$.site.extend``` method below:

``` javascript
/* line 54 */
extend: function(obj) {
  $.each(this._queue, function(name, queue) {
    if ($.isFunction(obj[name])) {
      queue.push(obj[name]);

      delete obj[name];
    }
  });

  $.extend(this, obj);

  return this;
}
```

We also provided ```assets/js/site.js``` file which sets up all theme functionalities e.g. menubar, gridmenu, sidebar, tooltip, page load animation and components.
Example code snippet below:

``` javascript
/* line 18 */
window.Site = $.site.extend({
  run: function(next) {
    $('html').removeClass('before-run').addClass('after-run');

    // polyfill
    this.polyfillIEWidth();

    // Menubar setup
    // =============
    $.site.menu.init();

    $(".site-menubar").on('changing.site.menubar', function() {
      $('[data-toggle="menubar"]').each(function() {
        var $this = $(this);
        var $hamburger = $(this).find('.hamburger');

        function toggle($el) {
          $el.toggleClass('hided', !$.site.menubar.opened);
          $el.toggleClass('unfolded', !$.site.menubar.folded);
        }
        if ($hamburger.length > 0) {
          toggle($hamburger);
        } else {
          toggle($this);
        }
      });
    });

    // ...
  }
});
```

So, in your html, just add ```global/js/core.js``` and ```assets/js/site.js``` to the page, then write your scripts as follows:


``` html
<script src="../global/js/core.js"></script>
<script src="assets/js/site.js"></script>
<script>
window.YouSite = Site.extend({
  run: function(next) {
    // your scripts here

    next();
  }
});

$(document).ready(function(){
  YouSite.run();
});
</script>
```

It will be executed on document ready and all theme functionalities will be initialized.

##6.3 Config api
In ```global/js/core.js```, we provide a simple config api:

``` javascript
/* line 121 */
// Configs
// =======
$.configs = $.configs || {};

$.extend($.configs, {
  data: {},
  get: function(name) {
    var callback = function(data, name) {
      return data[name];
    }

    var data = this.data;

    for (var i = 0; i < arguments.length; i++) {
      name = arguments[i];

      data = callback(data, name);
    }

    return data;
  },

  set: function(name, value) {
    this.data[name] = value;
  },

  extend: function(name, options) {
    var value = this.get(name);
    return $.extend(true, value, options);
  }
});
```

You can share your config data on all your js files loaded in the page.

For example, you can setup your site configs in your ```assets/js/configs.js```:

``` javascript
$.configs.set('site', {
  fontFamily: "Noto Sans, sans-serif",
  primaryColor: "blue"
});
```

Then in your ```assets/js/site.js```

``` javascript
var color = $.configs.get('site', 'primaryColor');
console.info(color); // will output 'blue'
```

##6.4 Component registration
In ```global/js/core.js``` we also provide a simple component registration that will help your organize your 3rd component.

The full implementation code:

``` javascript
/* line 176 */
// Components
// ==========
$.components = $.components || {};

$.extend($.components, {
  _components: {},

  register: function(name, obj) {
    this._components[name] = obj;
  },

  init: function(name, context, args) {
    var self = this;

    if (typeof name === 'undefined') {
      $.each(this._components, function(name) {
        self.init(name);
      });
    } else {
      context = context || document;
      args = args || [];

      var obj = this.get(name);

      if (obj) {
        switch (obj.mode) {
          case 'default':
            return this._initDefault(name, context);
          case 'init':
            return this._initComponent(name, obj, context, args);
          case 'api':
            return this._initApi(name, obj, args);
          default:
            this._initApi(name, obj, context, args);
            this._initComponent(name, obj, context, args);
            return;
        }
      }
    }
  },

  /* init alternative, but only or init mode */
  call: function(name, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    var obj = this.get(name);

    context = context || document;

    return this._initComponent(name, obj, context, args);
  },

  _initDefault: function(name, context) {
    if (!$.fn[name]) return;

    var defaults = this.getDefaults(name);

    $('[data-plugin=' + name + ']', context).each(function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data());

      $this[name](options);
    });
  },


  _initComponent: function(name, obj, context, args) {
    if ($.isFunction(obj.init)) {
      obj.init.apply(obj, [context].concat(args));
    }
  },

  _initApi: function(name, obj, args) {
    if (typeof obj.apiCalled === 'undefined' && $.isFunction(obj.api)) {
      obj.api.apply(obj, args);

      obj.apiCalled = true;
    }
  },


  getDefaults: function(name) {
    var component = this.get(name);

    if (component && typeof component.defaults !== "undefined") {
      return component.defaults;
    } else {
      return {};
    }
  },

  get: function(name, property) {
    if (typeof this._components[name] !== "undefined") {
      if (typeof property !== "undefined") {
        return this._components[name][property];
      } else {
        return this._components[name];
      }
    } else {
      console.warn('component:' + component + ' script is not loaded.');

      return undefined;
    }
  }
});
```


##6.5 Data API
Our component solution is very similar with [Bootstrap](http://getbootstrap.com/) **data-api** syntax. It's a modular way to organize the initialize script for the 3rd plugin.

###Register
We use the function below to register component:

    $.components.register(name, obj);

We defined component register mode and initialize function in the object as second argument passed to the register method. There are three modes in the template:

* ```api```: will use **api** function defined in the obj and not need to be re-initialized when new elements added in ```document```.
* ```default```: will use **default initialize function** which is defined in ```global/js/core.js```.
* ```init```: will use **init** function and need to be re-initialized when new elements added in ```document```.

The raty  ```obj``` example:

    /*global/src/js/components/raty.js*/
    $.components.register("rating", {
      mode: "init",
      defaults: {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon wb-star",
        starOn: "icon wb-star orange-600",
        cancelOff: "icon wb-minus-circle",
        cancelOn: "icon wb-minus-circle orange-600",
        starHalf: "icon wb-star-half orange-500"
      },
      init: function(context) {
        if (!$.fn.raty) return;

        var defaults = $.components.getDefaults("rating");

        $('[data-plugin="rating"]', context).each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
        });
      }
    });


### Default Options for 3rd plugin
We define the **default options** for 3rd plugin by default property in each components' object. You can modify the **default** property to suit your use case.
When you manually initialize plugin, you can get the defaults options as follow:

    var defaults = $.components.getDefaults('{plugin name}');


### Usage
Just like [Bootstrap](http://getbootstrap.com/) ```data-api``` usage, add ```data-plugin="{plugin name}"``` to element and add ```[data-{options}]``` to element. The components will be initialized.

For example:

``` html
// Load plugin necessary files
<link rel="stylesheet" href="assets/vendor/raty/jquery.raty.css">
<script src="assets/vendor/raty/jquery.raty.js"></script>
// Load Component register file
<script src="assets/js/components/raty.js"></script>
// Component dom
<div class="rating" data-score="4" data-plugin="rating"></div>
```

The rating component will be initialized after when page ready.

If we write script without our component solution, it will be

``` html
// Load plugin necessary files
<link rel="stylesheet" href="assets/vendor/raty/jquery.raty.css">
<script src="../global/vendor/raty/jquery.raty.js"></script>
// Component dom
<div class="rating" data-score="4"></div>

// Init Script
<script>
$(document).ready(function(){
  $('rating').each(function(){
    var $this = $(this);
    var score = $this.data('score');

    $this.raty({
      score: score,
      targetKeep: true,
      icon: "font",
      starType: "i",
      starOff: "icon wb-star",
      starOn: "icon wb-star orange-600",
      cancelOff: "icon wb-minus-circle",
      cancelOn: "icon wb-minus-circle orange-600",
      starHalf: "icon wb-star-half orange-500"
    });
  });
});
</script>
```

The code is simple for one instance, but if you need use a lot rating instaces in different pages, and all rating instaces have different options or can not be initialized with the same code, that will be hard to maintenance.

###Manually call
You can also initialize the component manually:

    $.components.init('rating');

We can specific the context with the second argument for the component, it's very useful when we load the dom via ajax:

    $.components.init('rating', $('.page'));


### Components Initialization
The components initialization script is implemented in ```src/js/site.js'```.

``` html
window.Site = $.site.extend({
  run: function(next) {
    // code omitted
    // ...

    /* line 194 */
    // Init Loaded Components
    // ======================
    $.components.init();
  }
});
```

You can remove it if you don't need our components solution.
