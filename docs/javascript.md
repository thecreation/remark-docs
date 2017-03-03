#7. Modular JavaScript

##7.1 Source Structure
Remark template features a highly modular JavaScript source system. Each page only uses the JavaScript it needs and nothing more.
The complied files are under ``(layout)/assets/js`` and ``global/js/`` folder:

    (layout)/assets/js/
    ├── config/
    ├── Plugin/ (speical plugin for site)
    ├── App/ (app script, such as: Calendar, Forum...)
    ├── Section/ (site section script, such as: nav, sidebar...)
    ├── BaseApp.js (basic script for app)
    └── Site.js (site initialize function)

    global/js/
    ├── config/ (global config, such as color)
    ├── Plugin/ (3rd plugins adapter)
    ├── Base.js (core script)
    ├── Component.js (simple viewmodel class)
    ├── Config.js (getter/setter helper for config)
    ├── Plugin.js (base plugin class)
    └── State.js (simple state container for apps)

You can find their source files from ``(layout)/src/es/`` and ``global/src/es`` folder.

##7.2 ES2015

With new remark 3.0, every js scripts have been rewritten in ES2015 to take advantage of the newest JavaScript enhancements and use `babel` as a compiler.
The new features make our code more strong and readable.

We use ``babel-es2015-preset`` and UMD support in the babel config. You can customize them in ``global/grunt/babel.js`` or ``global/gulp/options/script.js``.

##7.3 Core Script
We build components that manage their own state, in this case the code will have a better logic.

In `global/js/core.js`, we provided three useful functionalities: **Site initialization**, **Config api**, and **Component registration**.

###State Container
`State`is a state container which is defined in `global/js/State.js`.

You can initialize the new state with `State Class`:

``` javascript
let initialState = {
  x: 'valueX',
  y: 'valueY'
}
let state = new State(initialState);
```

You can use getter/setter function in ``State Object``:

``` javascript
state.get('x') //valueX

state.set('y', 'newValueY')
state.get('y') //valueY
```

You can add listener to attach an handler when the value has been changed:

``` javascript
state.on('x', ()=>{
  console.log('Value x has been changed');
});
```

###Base Component

``Component`` is the core Class of Remark Template, it's defined in ``global/js/Component.js``.

It don't determine anything about your HTML or CSS for you. The general idea is to organize your interface into logical views, backed by state, each of which can be updated independently when the model changes, without having to redraw the page.

You can define an component extend ``Component``, and when you initialize it,  the component have to reference an element already in the DOM by pass the jquery element object as an option:

``` javascript
class Menubar extends Component {
  constructor(){

  }
  ...
}

let menubar = new Menubar({
  $el: $('.site-menubar')
})
```

We introduce mutable state to the component. ``this.state`` is private to the component and can be changed by calling ``this.setState()`` and get the value by ``this.getState()``.
``getDefaultState()`` executes exactly once during the lifecycle of the component and sets up the initial state of the component.

``` javascript
class Menubar extends Component {
  getDefaultState(){
     return {
      menubarType: 'unfold'
    };
  }
}
```

You add the value change handle in ``getDefaultActions()``, and when you update the state by ``this.setState()``, the handle will be called:


``` javascript
class Menubar extends Component {
  getDefaultState(){
     return {
      menubarType: 'unfold' // unfold, fold, open, hide;
    };
  }

  getDefaultActions() {
    return {
      menubarType: 'change'
    };
  }

  change(type) {
    console.log("menubarType value is change to "+type );
  }
}

let menubar = new Menubar({
  $el: $('.site-menubar')
})

menubar.setState('menubarType', 'fold') //menubarType value is fold
```

There are two methods are executed at specific points in a component's lifecycle. ``willProccess()`` will be invoked before component run and ``proccessed()`` will be invoked after component run.

##7.4 Site initialization
We provided a site initialization script which helps you hook your scripts into the process easily.

You can hook your scripts by extending ``Site``. It's extend by ``Component``, so you can defined the state or use ``willProccess`` and ``proccessed`` function in the ``Site``.

We also provided ``assets/js/Site.js`` file which sets up all theme functionalities e.g. menubar, gridmenu, sidebar...
Example code snippet below:

``` javascript
class Site extends Base {
  willProcess() {
    this.initializePluginAPIs();
    this.initializePlugins();
  }

  processed() {
    this.polyfillIEWidth();
    this.initBootstrap();

    this.setupMenubar();
    this.setupGridMenu();
  }

  getDefaultState() {
    return {
      menubarType:'folded'
    };
  }

  getDefaultActions() {
    return {
      menubarType(type) {
        let toggle = function($el) {
          $el.toggleClass('hided', !(type === 'open'));
          $el.toggleClass('unfolded', !(type === 'fold'));
        };

        $('[data-toggle="menubar"]').each(function() {
          let $this = $(this);
          let $hamburger = $(this).find('.hamburger');

          if ($hamburger.length > 0) {
            toggle($hamburger);
          } else {
            toggle($this);
          }
        });
      }
    };
  }
  ....
}
```

In your html, just add the scripts as follows:

``` html
<script>
$(document).ready(function(){
  Site.run();
});
</script>
```

All theme functionalities will be initialized. If you need to add some extensions, you can inherit ``Site class``:

```javascript
//need complie by babel
class YourSite extends Site{
  ...
}

$(document).ready(function(){
  YourSite.run();
});
```

##7.5 Config api
In ``global/js/Config.js``, we provide a simple getter/setter api. By them, you can share your config data on all your js files loaded in the page.
For example, you can setup your site configs in your ``assets/js/config/tour.js``:


``` javascript
Config.set('tour', {
    steps: [{
      element: "#toggleMenubar",
      position: "right",
      intro: "Offcanvas Menu <p class='content'>It is nice custom navigation for desktop users and a seek off-canvas menu for tablet and mobile users</p>"
    }, {
      element: "#toggleFullscreen",
      intro: "Full Screen <p class='content'>Click this button you can view the admin template in full screen</p>"
    }, {
      element: "#toggleChat",
      position: 'left',
      intro: "Quick Conversations <p class='content'>This is a sidebar dialog box for user conversations list, you can even create a quick conversation with other users</p>"
    }],
    skipLabel: "<i class='wb-close'></i>",
    doneLabel: "<i class='wb-close'></i>",
    nextLabel: "Next <i class='wb-chevron-right-mini'></i>",
    prevLabel: "<i class='wb-chevron-left-mini'></i>Prev",
    showBullets: false
  })
```

Then in your ``assets/js/site.js``.

``` javascript
let tourOptions = Config.get('tour');
introJs().setOptions(tourOptions)
```

##7.6 Plugin adapter and Data API

In `global/js/Plugin.js` we also provide a simple adapter to register and organize your 3rd component.

The raty  ``obj`` example:

``` javascript
    /*global/js/Plugin/raty.js*/
    const NAME = 'rating';

    class Rating extends Plugin {
      getName() {
        return NAME;
      }

      static getDefaults() {
        return {
          targetKeep: true,
          icon: 'font',
          starType: 'i',
          starOff: 'icon wb-star',
          starOn: 'icon wb-star orange-600',
          cancelOff: 'icon wb-minus-circle',
          cancelOn: 'icon wb-minus-circle orange-600',
          starHalf: 'icon wb-star-half orange-500'
        };
      }

      render() {
        if (!$.fn.raty) {
          return;
        }

        let $el = this.$el;

        if (this.options.hints) {
          this.options.hints = this.options.hints.split(',');
        }

        $el.raty(this.options);
      }
    }
```

You can defined the defaults options in the static function `getDefaults()` and initialize the plugin in the `render()`. The `render()` function will be invoked when Plugin is initialized;
And then you can use the function below to register plugin:

``` javascript
    Plugin.register(NAME, Rating);
```

### Default Options for 3rd plugin
We define the **default options** for 3rd plugin by default property in each components' object. You can modify the **default** property to suit your use case.
When you manually initialize plugin, you can get the defaults options as follow:

``` javascript
    import {getDefaults} from Plugin;

    var defaults = getDefaults('{plugin name}');
```

### Data API
The full implementation code:

Our plugin solution is very similar with [Bootstrap](http://getbootstrap.com/) **data-api** syntax. It's a modular way to organize the initialize script for the 3rd plugin.
Just like [Bootstrap](http://getbootstrap.com/) ``data-api`` usage, add ``data-plugin="{plugin name}"`` to element and add ``[data-{options}]`` to element. The components will be initialized.

For example:

``` html
// Load plugin necessary files
<link rel="stylesheet" href="assets/vendor/raty/jquery.raty.css">
<script src="assets/vendor/raty/jquery.raty.js"></script>
// Load Component register file
<script src="global/js/Plugin/raty.js"></script>
// Plugin dom
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
  $('.rating').each(function(){
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

``` javascript
  import {pluginFactory} from Plugin;

  let plugin = pluginFactory('rating', $('.page'), options);
  plugin.initialize();
```

And if you want get the registed plugin object, you can use the code below:

```javascript
  import {getPlugin} from Plugin;

  let Rating = getPlugin('rating');
  let plugin= new Rating($('.page'), options);
  plugin.initialize();
```

### Components Initialization
The components initialization script is implemented in ``assets/js/Site.js``.

``` javascript
class Site extends Base {
  willProcess() {
    this.initializePluginAPIs();
    this.initializePlugins();
  }
  ...
}
```

You can remove it if you don't need our components solution.

##7.7 Using Site and Plugin Api With ES5.
### Site Api
You can using `Site.getInstance()` method to get `Site` instance. It have some useful api to work with.

For example, you can initialze all plugin components with `initializePlugins` method.

``` javascript
var site = Site.getInstance();
site.initializePlugins();
```

`initializePlugins` method can works with specific dom element.

``` javascript
var site = Site.getInstance();
site.initializePlugins($('#page-content'));
```

### Plugin Api
YOu can use `Plugin` instance to work with plugins.

The `getDefaults` method will return the default options of a specific plugin that uesd in the `Remark`.

``` javascript
var defaults = Plugin.getDefaults('switchery');

// Define the options
var options = jQuery.extends(true, defaults, {
    color: '#64bd63'
});

var elem = document.querySelector('.switch');
var switchery = new Switchery(elem, options);
```

The `getPlugin` method will a specific plugin instance wrapper to work with the plugin.

The code below will works result the same as the code above:
It use custom color option for the `.switch` element. Also the options will extends the default template specific settings.
``` javascript
var Switcher = Plugin.getPlugin('switchery');

var #elem = $('.switch');
var plugin= new Switcher($elem, {
    color: '#64bd63'
});
plugin.initialize();
```

