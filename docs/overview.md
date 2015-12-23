#1. Overview

##1.1 Introduction
The Remark template is an awesome web application and admin dashboard template which built with Boostrap 3 and jQuery. There is an extra package supports Angular-UI. It provides a large selection of ready-made UI Components, Widgets, Modules and Web Apps for you to customize and create multiple projects.

##1.2 Dependencies
Remark template depends on two main frameworks. The downloadable package contains both of these libraries, so you don't have to manually download them.

* [Bootstrap 3](http://getbootstrap.com/)
* [jQuery 1.11+](http://jquery.com/)

And the angular-ui pages depends on

* [Angular Js](https://angularjs.org/)

##1.3 What's included
You'll find the following folder struction and files in Remark download package.

###Folders
Once downloaded, unzip the compressed folder to see the structure of (the compiled) Remark. You'll see something like this:
We have ```classic``` style and ```material``` style. You can choose one to use. Under ```classic/material``` folder, you will find ```global``` folder and some layouts folder.

    remark/
    ├── classic/
    │   ├── global/
    │   ├── base/ (layout)
    │   ├── iconbar/ (layout)
    │   ├── mmenu/ (layout)
    │   └── topbar/ (layout)
    ├── material/
    │   ├── global/
    │   └── base/ (layout)
    ├── changelog.md
    └── docs

###Global's Folder
The global folder includes the pre-compiled assets, CSS, JavaScript, Fonts files, along with source Less, and JavaScript. It have independent grunt/gulp environment. The assets will serve all layouts.

    global/
    ├── css/
    ├── fonts/
    ├── js/
    ├── grunt/ (grunt task configs)
    ├── gulp/ (gulp task configs)
    ├── portraits/ (example portraits images)
    ├── vendor/ (3rd plugins)
    ├── src/ (source files)
    │   ├── fonts/
    │   ├── js/
    │   │   ├── components/
    │   │   ├── configs/
    │   │   ├── plugins/
    │   │   └── core.js
    │   ├── less/
    │   │   ├── bootstrap/ (bootstrap source files)
    │   │   ├── bootstrap_extend/ (bootstrap override files)
    │   │   ├── mixins/ (bootstrap mixins)
    │   │   └── vars.less
    │   ├── skins/
    │   └── vendor/
    ├── config.json (config for grunt or gulp)
    ├── color.yml (use for generate src/less/vars-color.less)
    ├── components.json (define which component file to be combined)
    ├── Gruntfile.js
    ├── gulpfile.js
    ├── package.json
    ├── package.json.grunt (use to replace package.json if use grunt)
    └── package.json.gulp (use to replace package.json if use gulp)

###Layout's Folder
The layout folder is the main folder that you may working with. Each layout have independent grunt/gulp environment. The folder includes the pre-complied assets, source files, and examples pages. More specifically, it includes the following and more:

    base/
    ├── assets/
    │   ├── css/
    │   ├── data/
    │   ├── examples/ (assets files for example pages)
    │   ├── images/
    │   ├── js/
    │   └── skins/
    ├── grunt/ (grunt task configs)
    ├── gulp/ (gulp task configs)
    ├── html/ (compiled html file)
    ├── src/ (source files)
    ├── README.md
    ├── bower.json
    ├── config.json (config for grunt or gulp)
    ├── Gruntfile.js
    ├── gulpfile.js
    ├── package.json
    ├── package.json.grunt (use to replace package.json if use grunt)
    └── package.json.gulp (use to replace package.json if use gulp)

###Layout's Source Folder
The layout's source folder inludes source Less, JavaScript, Skins less, Templates hbs files and assets source files for examples pages.

    src/
    ├── examples/
    ├── js/
    ├── less/
    ├── skins/
    └── templates/

##1.4 Browser Support
Remark is built to work best in the latest desktop and mobile browsers, older browsers might display differently styled, though fully functional, renderings of certain components.

* IE9+
* FireFox (latest)
* Safari (latest)
* Chrome (latest)
* Opera (latest)

**Note**: IE9 does not support transitions or animations. The template will function properly but it won't use animations/transitions on IE9.

Learn more form [bootstrap documentation](http://getbootstrap.com/getting-started/#support).
