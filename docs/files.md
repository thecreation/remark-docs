#4. File Structure
We list the necessary styles and scripts that you can use in a page in this section.

##4.1 Styles
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

``` html
<link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>
```

Note: You can use another fonts by edit `src/scss/_vars.scss` file.

##4.2 Javascript

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
Breakpoints will setup media query breakpoints with js.

``` html
<script src="../../global/vendor/breakpoints/breakpoints.js"></script>
<script>
Breakpoints();
</script>
```

### Scipts at bottom

#### Core and plugin dependencies

``` html
<script src="../../global/vendor/babel-external-helpers/babel-external-helpers.js"></script>
<script src="../../global/vendor/jquery/jquery.js"></script>
<script src="../../global/vendor/tether/tether.js"></script>
<script src="../../global/vendor/bootstrap/bootstrap.js"></script>
<script src="../../global/vendor/animsition/animsition.js"></script>
<script src="../../global/vendor/mousewheel/jquery.mousewheel.js"></script>
<script src="../../global/vendor/asscrollbar/jquery-asScrollbar.js"></script>
<script src="../../global/vendor/asscrollable/jquery-asScrollable.js"></script>
<script src="../../global/vendor/ashoverscroll/jquery-asHoverScroll.js"></script>
<script src="../../global/vendor/screenfull/screenfull.js"></script>
<script src="../../global/vendor/slidepanel/jquery-slidePanel.js"></script>
```

#### Template relating scripts

``` html
<script src="../../global/js/State.js"></script>
<script src="../../global/js/Component.js"></script>
<script src="../../global/js/Plugin.js"></script>
<script src="../../global/js/Base.js"></script>
<script src="../../global/js/Config.js"></script>
<script src="../assets/js/Section/Menubar.js"></script>
<script src="../assets/js/Section/GridMenu.js"></script>
<script src="../assets/js/Section/Sidebar.js"></script>
<script src="../assets/js/Section/PageAside.js"></script>
<script src="../assets/js/Plugin/menu.js"></script>
```

#### Template config scripts

``` html
<script src="../../global/js/config/colors.js"></script>
<script>
Config.set('assets', '../assets');
</script>
```

#### Template initialise script
By adding the script below, it will initialise the template functions. We explain this more in the following sections.

``` html
<script src="../assets/js/Site.js"></script>
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
