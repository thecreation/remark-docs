#4. Modular JavaScript
##4.1 Source Structure
Remark template features a highly modular JavaScript source system. Each page can only uses the JavaScript it needs and nothing more.

All javascript source files are under ```src/js/``` folder:

      src/js/
      ├── angular/
      │   ├── app.js (angular app)
      │   ├── router.js (angular router)
      │   └── ui/
      ├── apps/ (app initialize function extend from site initialize)
      ├── components/ (components data api)
      ├── configs/ (js config file)
      ├── plugins/ (template plugins)
      ├── sections/ (site section script, such as: nav, sidebar...)
      ├── site.js (site initialize function)
      └── core.js (define root object $.site and $.components)

All minified and combined files are under ```assets/js/``` folder.

##4.2 Data API
We appreciate **data-api** syntax defined by [Bootstrap](http://getbootstrap.com/). It's a modualr way to organize the initialize script for the 3rd plugin.

###Register
We use the function below to register data-api:

    $.components.register(name, obj);

The ```obj``` is defined ```data-api``` mode and plugin initialize function. There are three modes in Remark template:

* ```api```: will use **dataAPI{plugin name}** function and not need to be re-initialized when new elements added in ```document```.
* ```default```: will use **default initialize function**.
* ```init```: will use **init{plugin name}** function and need to be re-initialized when new elements added in ```document```.

The card  ```obj``` example:

    /*src/js/components/card.js*/
    $.components.register("card", {
      mode: "init",
      init: function(context) {
        if (!$.fn.card) return;
        var defaults = $.components.getDefaults("card");

        $('[data-plugin="card"]', context).each(function() {
          var options = $.extend({}, defaults, $(this).data());

          if (options.target) {
            options.container = $(options.target);
          }
          $(this).card(options);
        });
      }
    });


###Usage
Just like [Bootstrap](http://getbootstrap.com/) ```data-api``` usage, add data-plugin="{plugin name}" to element and add [data-{options}] to element. The plugin will be initialized. You can also manually initialize the ```data-api``` whose type is ```default``` or ```init```:

    $.components.get('multiSelect').init();

##4.3 Options
We define the **default options** for 3rd plugin by default property in each components' object. You can modify the **default** property to suit your use case.
When you manually initialize plugin, you can get the defaults options:

    var defaults = $.components.getDefaults('{plugin name}');


##4.4 Javascript Initialization
Site core javascript initialization implemented in ```src/js/site.js'```.

Run the code below:

    $(document).ready(function(){
      Site.run();
    });

It will initialize the registed ```data-api``` and initialize site structure script. Maybe you need more customize initialization script, you can refer to the following example:

    var MyApp = Site.extend({
      customFunction : function(){
          ....
      },

      run: function(next) {
        this.customFunction();

        next();//queue next run function
      }
    });

    MyApp.run();

