#3. File Structure
We list the necessary styles and scripts that you can use in a page in this section.

##3.1 Styles
You should include stylesheet files below within `<head>` tag.

### Bootstrap and site stylesheets
``` html
<link rel="stylesheet" href="../../global/css/bootstrap.min.css">
<link rel="stylesheet" href="../../global/css/bootstrap-extend.min.css">
<link rel="stylesheet" href="../assets/css/site.min.css">
```

### Necessary plugin stylesheets
``` html
<link rel="stylesheet" href="../../global/vendor/animsition/animsition.css">
<link rel="stylesheet" href="../../global/vendor/asscrollable/asScrollable.css">
<link rel="stylesheet" href="../../global/vendor/switchery/switchery.css">
<link rel="stylesheet" href="../../global/vendor/slidepanel/slidePanel.css">
<link rel="stylesheet" href="../../global/vendor/flag-icon-css/flag-icon.css">
```

### Icon stylesheets
``` html
<link rel="stylesheet" href="../../global/fonts/web-icons/web-icons.min.css">
<link rel="stylesheet" href="../../global/fonts/brand-icons/brand-icons.min.css">
```

### Font stylesheets
You can use another fonts by edit `src/less/vars.less` file.

``` html
<link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>
```

##3.2 Javascript

### Ie polyfill/shiv
You should add scripts below within `<head>` tag if you want support ie 9/10.

``` html
<!--[if lt IE 9]>
  <script src="../../global/vendor/html5shiv/html5shiv.min.js"></script>
<![endif]-->
<!--[if lt IE 10]>
  <script src="../../global/vendor/media-match/media.match.min.js"></script>
  <script src="../../global/vendor/respond/respond.min.js"></script>
<![endif]-->
```

### Scripts in head
Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser. And breakpoints will setup media query breakpoints with js.

``` html
<script src="../../global/vendor/modernizr/modernizr.js"></script>
<script src="../../global/vendor/breakpoints/breakpoints.js"></script>
<script>
Breakpoints();
</script>
```

### Scipts at bottom

#### Core and plugin dependencies

``` html
<script src="../../global/vendor/jquery/jquery.js"></script>
<script src="../../global/vendor/bootstrap/bootstrap.js"></script>
<script src="../../global/vendor/animsition/animsition.js"></script>
<script src="../../global/vendor/asscroll/jquery-asScroll.js"></script>
<script src="../../global/vendor/mousewheel/jquery.mousewheel.js"></script>
<script src="../../global/vendor/asscrollable/jquery.asScrollable.all.js"></script>
<script src="../../global/vendor/ashoverscroll/jquery-asHoverScroll.js"></script>
<script src="../../global/vendor/switchery/switchery.min.js"></script>
<script src="../../global/vendor/screenfull/screenfull.js"></script>
<script src="../../global/vendor/slidepanel/jquery-slidePanel.js"></script>
```

#### Template relating scripts

``` html
<script src="../../global/js/core.js"></script>
<script src="../assets/js/site.js"></script>
<script src="../assets/js/sections/menu.js"></script>
<script src="../assets/js/sections/menubar.js"></script>
<script src="../assets/js/sections/gridmenu.js"></script>
<script src="../assets/js/sections/sidebar.js"></script>
```

#### Template config scripts

``` html
  <script src="../../global/js/configs/config-colors.js"></script>
  <script src="../../global/js/components/asscrollable.js"></script>
  <script src="../../global/js/components/animsition.js"></script>
  <script src="../../global/js/components/slidepanel.js"></script>
  <script src="../../global/js/components/switchery.js"></script>
```


#### Template initialise script
By adding the script below, it will initialise the template functions. We explain this more in the following sections.

``` html
<script>
(function(document, window, $) {
  'use strict';
  var Site = window.Site;
  $(document).ready(function() {
    Site.run();
  });
})(document, window, jQuery);
</script>
```
