#6. Customize Styles

##6.1 Using CSS
All style changes, fixes, and improvements made for Remark will typically be added to ```(layout)/assets/css``` folder.
The pre-complied styles for 3rd plugins are in each plugin folders under ```global/vendor/(plugin name)``` folder.

To prevent losing your changes, you should add all of your customizations to a new stylesheet and include it separately in your pages. **Note** Also you must disable all ```grunt dist-css``` tasks in ```Gruntfile.js```.

##6.2 Using Sass
 [Bootstrap](http://getbootstrap.com/) uses [Sass](http://sass-lang.com/) as its CSS pre-processor system. It will give you access to all the tools to perform even the most complex customizations with ease. So it is highly recommended that you switch to use the [Sass](http://sass-lang.com/) system as it is far superior, and offers a great deal of features and optimizations.

All the original [Sass](http://sass-lang.com/) files used for development are included for you to modify.

    (layout)/src/scss/
    ├── layouts/
    ├── sections/
    ├── _vars-customs.scss
    ├── _vars-site.scss
    ├── _vars.scss
    └── site.scss

    global/src/scss/
    ├── bootstrap/ (bootstrap source files)
    ├── bootstrap_extend/ (improvements styles for remark)
    ├── mixins/ (basic scss mixins from bootstrap)
    ├── mixins_extend/ (more useful mixins we defined)
    ├── fonts/ (the fonts config we added to remark)
    ├── components/ (the components we added to remark)
    ├── _vars-bootstrap.scss
    ├── _vars-components.scss
    ├── _vars.scss
    ├── bootstrap-extend.scss
    └── bootstrap.scss

If you're new to [Sass](http://sass-lang.com/) and want to give it a try, you can find all the information you need here: **[http://sass-lang.com/](http://sass-lang.com/)**

Note that when compile the ```layout``` scss files, it will use the ```global``` scss files. Keep the global folder and if you need move the global folder to other level, you need modify the ```(layout)/config.json``` file.

##6.3 Easily Customize
This section is only for [Sass](http://sass-lang.com/) users.

We have added many features that allow variables, mixins, functions and many other techniques that allow you to make CSS more maintainable, themable and extendable. You will find them in ```global/src/scss/mixins_extend``` and you can use them to write the styles you like.

In fact there is a simpler way to customize Remark. We have defined many variables in remark.
If you want a customized site, you just change them and use ```grunt dist-css``` command to compile **css**. The style will be changed.

The core variables is defined in:

* **global/src/scss/vars_bootstrap.scss**: bootstrap override variables
* **global/src/scss/vars_color.scss**: color variables
* **(layout)/scss/vars_site.scss**: site variables

More variables is defined on the header of each **scss** files. For example:

    /* global/src/scss/bootstrap_extend/alerts.scss */
    $alert-padding-horizontal:        20px;

    $alert-list-padding-left:         13px;
    $alert-list-item-padding-left:    7px;
