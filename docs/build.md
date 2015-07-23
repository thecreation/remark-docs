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

We have defined all the task by default. **Grunt** will compile **less** and **js** files. You can modify or add your task in ```Grunfile.js```.

Useful commands list:

* **grunt clean-dist**: clean task.
* **grunt dist-js**: complied js file and minify them.
* **grunt dist-css**: complied less file and minify them.
* **grunt less-compile**: complied less file.
* **grunt dist-vendor**: vendor distribution task.
* **grunt dist-fonts**: fonts distribution task.
* **grunt dist**: full distribution task.

**Note**: more task configs we defined are under the ```grunt``` folder.

You can learn more about how to write grunt task files from **[http://gruntjs.com/](http://gruntjs.com/)**


