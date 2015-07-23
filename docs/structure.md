#5. Theme Structure

The general template structure is the same throughout the template. Here is the general structure.

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


