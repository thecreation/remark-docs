#3. Building Tools
##3.1 Files Structure
We supply building tools for each layouts and global folder. They are independent that you need install the packages separately. The files relating to the building tools you will see below:

    (layout)/
    ├── tasks/
    ├── .babelrc
    ├── config.js
    ├── gulpfile.babel.js
    └── package.json

##3.2 Install Tools

### Node version manager

Install [NVM](https://github.com/creationix/nvm). And use the latest version of NodeJS.

```
nvm install node
nvm use node
```

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

```
gem install sass
```

Before install sass, you should [install Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [install Gem](https://rubygems.org/pages/download).


### Install Babel

[Install Babel globally](https://babeljs.io/docs/usage/cli/#installation).

```
npm install --global babel-cli
```

### Install Gulp
[Install Gulp globally](http://gulpjs.com/).

```
npm install --global gulp-cli
```


##3.3 Getting started

###Install Dependencies
Before using gulp, we need go to the layout folder, installing the dependencies.

```bash
$ npm install
```

###Build the project

```bash
$ gulp
```

##3.4 List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.
Almost all tasks also have watch mode - `gulp watch:[task_name]`, but you don't need to use it directly.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build`            | builds all content and assets from `src` to `html` and `assets`.
`dev`              | builds your project without optimization.

### Core tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`styles`           | compile all scss from `src/scss` to `assets/css` folder. 
`scripts`          | compile all js from `src/es` to `assets/js` folder. 
`html`             | compile all hbs files to html files.
`usemin`           | replaces references to non-optimized scripts or stylesheets into a set of HTML files
`skins`            | compile all scss from `src/skins` to `assets/skins` folder. 

### Assets related tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`vendor`           | copy vendor files from registry distributions to `assets/vendor` path.
`fonts`            | copy files from `src/fonts` path to `assets/fonts` path.
`images`           | optimize and copies images in `src/images` to `assets/images`.

### Dev tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`clean`            | remove `html` folder.
`beautify`         | beautify your source files in `src/scss` and `src/es`.
`server`           | start a BrowserSync instance.
`watch`            | watchs for changes in `src/` path and rebuilds parts of the site as necessary.

### Dev tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`examples`         | generate examples assets

### Version tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`version:major`    | MAJOR version when you make incompatible API changes
`version:minor`    | MINOR version when you add functionality in a backwards-compatible manner
`version:patch`    | PATCH version when you make backwards-compatible bug fixes.
`version`          | alias to `version:path`.

All available tasks are placed in a folder `tasks`. 

## 3.5 Configuration
Global variables and site metadata can be found inside `config.js`. Your can make some modification in the file.