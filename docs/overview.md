#1. Overview

##1.1 Introduction
The Remark template is an awesome web application and admin dashboard template which built with Boostrap 4 and jQuery. It provides a large selection of ready-made UI Components, Widgets, Modules and Web Apps for you to customize and create multiple projects.

##1.2 Dependencies
Remark template depends on two main frameworks. The downloadable package contains both of these libraries, so you don't have to manually download them.

* [Bootstrap 4](getbootstrap.com)
* [jQuery 3.2.1](http://jquery.com/)

##1.3 What's included
You'll find the following folder struction and files in Remark download package.

###Folders
Once downloaded, unzip the compressed folder to see the structure of (the compiled) Remark. You'll see something like this:
We have ```classic``` style and ```material``` style. You can choose one to use. Under ```classic/material``` folder, you will find ```global``` folder and some layouts folder.

    remark/
    ├── classic/
    │   ├── global/
    │   ├── base/ (layout)
    │   ├── center/ (layout)
    │   ├── iconbar/ (layout)
    │   ├── mmenu/ (layout)
    │   ├── topicon/ (layout)
    │   └── topbar/ (layout)
    ├── material/
    │   ├── global/
    │   ├── base/ (layout)
    │   ├── center/ (layout)
    │   ├── iconbar/ (layout)
    │   ├── mmenu/ (layout)
    │   ├── topicon/ (layout)
    │   └── topbar/ (layout)
    ├── changelog.md
    └── docs

###Global's Folder
The global folder includes the pre-compiled assets, CSS, JavaScript, Fonts files, along with source Less, and JavaScript. It has independent gulp environment. The assets will serve all layouts.

    global/
    ├── css/
    ├── fonts/
    ├── js/
    ├── tasks/
    ├── portraits/ (example portraits images)
    ├── vendor/ (3rd plugins)
    ├── src/ (source files)
    │   ├── fonts/
    │   ├── es/
    │   │   ├── components/
    │   │   ├── configs/
    │   │   ├── plugins/
    │   │   └── core.js
    │   ├── scss/
    │   │   ├── bootstrap/ (bootstrap source files)
    │   │   ├── bootstrap_extend/ (bootstrap override files)
    │   │   ├── mixins/ (bootstrap mixins)
    │   │   └── vars.scss
    │   ├── skins/
    │   └── vendor/
    ├── bower.json
    ├── manifest.json (config file for vendors)
    ├── config.js
    ├── gulpfile.babel.js
    └── package.json

###Layout's Folder
The layout folder is the main folder that you may working with. Each layout have independent gulp environment. The folder includes the pre-complied assets, source files, and examples pages. More specifically, it includes the following and more:

    base/ (layout root)
    ├── assets/
    │   ├── css/
    │   ├── data/
    │   ├── examples/ (assets files for example pages)
    │   ├── images/
    │   ├── js/
    │   └── skins/
    ├── tasks/
    ├── html/ (compiled html file)
    ├── src/ (source files)
    ├── README.md
    ├── bower.json
    ├── config.js
    ├── gulpfile.js
    └── package.json

###Layout's Source Folder
The layout's source folder inludes source scss, JavaScript, Skins scss, Templates hbs files and assets source files for examples pages.

    src/
    ├── examples/
    ├── es/
    ├── scss/
    ├── skins/
    └── templates/

##1.4 Plain Html Version
If you just want use plain html without sources and build tools, you can copy these folders out into a new folder.

    base/ (layout root)
    ├── assets/
    │   ├── css/
    │   ├── data/
    │   ├── examples/
    │   ├── images/
    │   ├── js/
    │   └── skins/
    ├── html/

    global/
    ├── css/
    ├── fonts/
    ├── js/
    ├── vendor/ (3rd plugins)

The root html file is `(new folder)/base/html/index.html`.

##1.5 Browser Support
Remark is built to work best in the latest desktop and mobile browsers, older browsers might display differently styled, though fully functional, renderings of certain components.

* IE9+
* FireFox (latest)
* Safari (latest)
* Chrome (latest)
* Opera (latest)

**Note**: IE9 does not support transitions or animations. The template will function properly but it won't use animations/transitions on IE9.

Learn more form [bootstrap documentation](http://getbootstrap.com/getting-started/#support).
