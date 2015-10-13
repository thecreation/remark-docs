#2. Building Tools

##2.1 Install Node.js
First, you must download and **install node.js** (which includes npm). **npm** stands for node packaged modules and is a way to manage development dependencies through [Node.js](http://nodejs.org/download/). You can check it in your terminal window using these commands ```node --version``` and ```npm --version```. You can download [Node.js](http://nodejs.org/download/) here.

##2.2 Working with Grunt
[Grunt](http://gruntjs.com/) is a JavaScript task runner (Automation), save yourself from repetitive tasks. It's how we compile our code, run tests, and more.

###Installing Grunt
From the command line:

* Install **grunt-cli** globally with ```npm install -g grunt-cli```.
* Navigate to the root ```/remark/``` directory, then run ```npm install```. **npm** will look at the ```package.json``` file and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

###Grunt Commands

    grunt

We have defined all the task by default. **Grunt** will compile **less** files. You can modify or add your task in ```Grunfile.js```.

Useful commands list:

* **grunt clean-dist**: clean task.
* **grunt dist-js**: complied js file and minify them.
* **grunt dist-css**: complied less file and minify them.
* **grunt dist-html**: html distribution task.
* **grunt less-compile**: complied less file.
* **grunt dist-vendor**: vendor distribution task.
* **grunt dist-fonts**: fonts distribution task.
* **grunt dist-examples**: example css & js distribution task.
* **grunt dist**: full distribution task.

**Note**: more task configs we defined are under the ```grunt``` folder.

You can learn more about how to write grunt task files from **[http://gruntjs.com/](http://gruntjs.com/)**

##2.3 Working with Gulp
[Gulp](http://gruntjs.com/) is another awesome JavaScript task runner. If you are familiar with gulp, you can use it instead of Grunt.

###Installing Gulp
From the command line:

* Install gulp globally with ```npm install --global gulp```.
* Navigate to the root ```/remark/``` directory.
* Rename ```package.json.gulp``` to ```package.json``` to replace the old one. Then run ```npm install```. **npm** will look at the ```package.json``` file and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Gulp commands provided from the command line.

###Gulp Commands

    gulp

We have defined all the task by default. **Gulp** will compile **less** files. You can modify or add your task in ```gulpfile.js```.

Useful commands list:

* **gulp clean-dist**: clean task.
* **gulp dist-js**: complied js file and minify them.
* **gulp dist-css**: complied less file and minify them.
* **gulp dist-html**: html distribution task.
* **gulp less-compile**: complied less file.
* **gulp dist-vendor**: vendor distribution task.
* **gulp dist-fonts**: fonts distribution task.
* **gulp dist-examples**: example css & js distribution task.
* **gulp dist**: full distribution task.

**Note**: more task configs we defined are under the ```gulp``` folder.

You can learn more about how to write gulp task files from **[http://gulpjs.com/](http://gulpjs.com/)**
