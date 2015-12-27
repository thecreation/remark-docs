#7. Template Structure

The general template structure is the same throughout the template. Here is the general structure.

##7.1 Sections

###Header

Main header is within a div with an classname of "site-navbar":

    <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
      <div class="navbar-header">
        ......
      </div>
      <div class="navbar-container container-fluid">
        ......
      </div>
    </nav>

###Content
Content is within the main content area which is nested within a div with an classname of ```"page"```:

    <div class="page">
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">Page Title</h1>
      </div>
      <!-- End Page Header -->

      <!-- Page Content -->
      <div class="page-content">

        <!-- Panel -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Panel Title</h3>
          </div>
          <div class="panel-body"></div>
        </div>
        <!-- End Panel -->

        <!-- Panel -->
        <div class="panel">
        </div>
        <!-- End Panel -->

        ......

      </div>
      <!-- End Page Content -->
    </div>

###Site Menu
The site menu is within a div with an classname of ```"site-menubar"```:

    <div class="site-menubar">
      <ul class="site-menu">
        <!-- Menu Category-->
        <li class="site-menu-category">Category</li>
        <!-- End Menu Category-->

        <!-- Site Menu Item-->
        <li class="site-menu-item">
          <a href="#">Item Name</a>
        </li>
        <!-- End Site Menu Item-->

        <!-- Site Menu Item With Sub-->
        <li class="site-menu-item has-sub">
          <a href="#">Item Name</a>
          <ul class="site-menu-sub">
            Sub Nav Item......
          </ul>
        </li>
        <!-- End Site Menu Item With Sub-->

        ......
      </ul>
    </div>

If you would like to edit the color, font, or style of any elements in one of these columns, you would do the following:

```css
  .class-name a {
    color: #somecolor;
  }
```

So, to ensure that your new styles are applied, make sure that they carry enough "weight" and that there isn't a style lower in the CSS file that is being applied after yours.

Remark template comes with some layouts for you to use.

##7.2 Layouts

###Default

The default layout provide a responsive menubar. You can add ```css-menubar``` class to html element to get menubar style when browser js not enabled.

``` html
<html class="no-js css-menubar" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Default Layout</title>

  /* stylesheets */
</head>
<body>
  <nav class="site-navbar" role="navigation">...</nav>
  <div class="site-menubar">...</div>
  <div class="site-gridmenu">...</div>
  <div class="page">...</div>
  <footer class="site-footer">...</footer>

  /* javascripts */
</body>
</html>
```
### Boxed layout
Just add ```layout-boxed``` class to ```body``` element.

``` html
<html class="no-js css-menubar" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Default Layout</title>

  /* stylesheets */
</head>
<body class="layout-boxed">
  <nav class="site-navbar" role="navigation">...</nav>
  <div class="site-menubar">...</div>
  <div class="site-gridmenu">...</div>
  <div class="page">...</div>
  <footer class="site-footer">...</footer>

  /* javascripts */
</body>
</html>
```

### Menu Collapsed

If you want menu collapsed by default, you should remove ```css-menubar``` class from html element and add ```class="site-menubar-fold site-menubar-keep"``` to ```body``` element.

``` html
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Menu Collapsed</title>

  /* stylesheets */
</head>
<body class="site-menubar-fold site-menubar-keep" data-auto-menubar="false">
  <nav class="site-navbar" role="navigation">...</nav>
  <div class="site-menubar">...</div>
  <div class="site-gridmenu">...</div>
  <div class="page">...</div>
  <footer class="site-footer">...</footer>

  /* javascripts */
</body>
</html>
```

### Menu Expended
If you want menu expended by default, you should remove ```css-menubar``` class from html element and add ```class="site-menubar-unfold site-menubar-keep"``` to ```body``` element.

``` html
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Menu Expended</title>

  /* stylesheets */
</head>
<body class="site-menubar-unfold site-menubar-keep">
  <nav class="site-navbar" role="navigation">...</nav>
  <div class="site-menubar">...</div>
  <div class="site-gridmenu">...</div>
  <div class="page">...</div>
  <footer class="site-footer">...</footer>

  /* javascripts */
</body>
</html>
```
