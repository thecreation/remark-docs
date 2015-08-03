#6. Layouts

Remark template comes with some layouts for you to use.

##6.1 Default

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

##6.2 Menu Collapsed

If you want menu collapsed by default, you should remove ```css-menubar``` class from html element and add ```class="site-menubar-fold" data-auto-menubar="false"``` to ```body``` element.

``` html
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Menu Collapsed</title>

  /* stylesheets */
</head>
<body class="site-menubar-fold" data-auto-menubar="false">
  <nav class="site-navbar" role="navigation">...</nav>
  <div class="site-menubar">...</div>
  <div class="site-gridmenu">...</div>
  <div class="page">...</div>
  <footer class="site-footer">...</footer>

  /* javascripts */
</body>
</html>
```

##6.3 Menu Expended
If you want menu expended by default, you should remove ```css-menubar``` class from html element and add ```class="site-menubar-unfold" data-auto-menubar="false"``` to ```body``` element.

``` html
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title>Menu Expended</title>

  /* stylesheets */
</head>
<body class="site-menubar-unfold" data-auto-menubar="false">
  <nav class="site-navbar" role="navigation">...</nav>
  <div class="site-menubar">...</div>
  <div class="site-gridmenu">...</div>
  <div class="page">...</div>
  <footer class="site-footer">...</footer>

  /* javascripts */
</body>
</html>
```

##6.4 Boxed layout
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
