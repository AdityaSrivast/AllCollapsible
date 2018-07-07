# AllCollapsible
*one collapsible for all*

[![GitHub version](https://badge.fury.io/gh/AdityaSrivast%2FAllCollapsible.svg)](https://badge.fury.io/gh/AdityaSrivast%2FAllCollapsible)
[![npm version](https://badge.fury.io/js/allcollapsible.svg)](https://badge.fury.io/js/allcollapsible)
[![](https://david-dm.org/adityasrivast/AllCollapsible.svg)](https://david-dm.org/adityasrivast/AllCollapsible)
[![](https://data.jsdelivr.com/v1/package/gh/adityasrivast/allcollapsible/badge)](https://www.jsdelivr.com/package/gh/adityasrivast/allcollapsible)

### DEMO:
https://adityasrivast.github.io/AllCollapsible/demo/example.html

## QUICKSTART:

- [Download the latest release](https://github.com/AdityaSrivast/AllCollapsible/releases/latest) of AllCollapsible directly from GitHub.
- Clone the repo: `git clone https://github.com/AdityaSrivast/AllCollapsible.git`
- Include the files via [jsDelivr](https://www.jsdelivr.com/package/gh/adityasrivast/allcollapsible).
- Install with [npm](https://www.npmjs.com): `npm install allcollapsible`

## CDN:

Just add the link to the files in your `<head>` tag.
```html
  <!--Minified css file-->
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/adityasrivast/AllCollapsible@1.1.0/dist/css/allcollapsible.min.css">
  <!--Minified js file-->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/adityasrivast/AllCollapsible@1.1.0/dist/js/allcollapsible.min.js"></script>
```

Apart from these don't forget to add cdn for jquery before `<script>` tag for js file.

```html
<script src="https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js"></script>
```

## USAGE:

### Default
```html
<ul class="collapsible">
    <li>
      <div class="collapsible-title">First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-title">Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
    <li>
      <div class="collapsible-title">Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
</ul>
```

### Extensible
```html
<ul class="collapsible extensible">
    <li>
      <div class="collapsible-title">First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-title">Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
    <li>
      <div class="collapsible-title">Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
</ul>
```

### Collapsible With Arrows

#### Default
```html
<ul class="collapsible with-arrow">
    <li>
      <div class="collapsible-title">First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-title">Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
    <li>
      <div class="collapsible-title">Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
</ul>
```

#### Extensible
```html
<ul class="collapsible extensible with-arrow">
    <li>
      <div class="collapsible-title">First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-title">Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
    <li>
      <div class="collapsible-title">Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
</ul>
```

Similar format is to be followed for classes: `with-plus`,`with-vertical-bar`,`with-star`,`with-pencil`,`with-bullets`,`with-pointer`,`with-caret`,`with-right-caret`.

For Demo of these classes, [click here](https://adityasrivast.github.io/AllCollapsible/demo/example.html).

### Coloured Collapsible
You can even beautify the title and body for the collapsible by adding colours to it. The only thing you have to do is add a class to `<div class="collapsible-title">` and(or) `<div class="collapsible-body">`. There are total 178 shades available as of now.
For Example:
```html
  <ul class="collapsible">
    <li>
      <div class="collapsible-title teal">First</div>
      <div class="collapsible-body teal-lighten-3"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
    <li>
      <div class="collapsible-title red">Second</div>
      <div class="collapsible-body red-lighten-2"><span>Lorem ipsum dolor sit amet</span></div>
    </li>
    <li>
</ul>
```

The colours available are: red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, available in 10 shades of each, viz., base-color, color-lighten-1, color-lighten-2, color-lighten-3, color-lighten-4, color-lighten-5, color-accent-1, color-accent-2, color-accent-3, color-accent-4. In addition, colours, brown, grey, blue-grey are also available, with 6 six shades each, viz., base-color, color-lighten-1, color-lighten-2, color-lighten-3, color-lighten-4, color-lighten-5.

### Special Effects

In addition to these, special effects for hover on `collapsible title` can be used.
For hover, two effects can be used: fade-in and fade-out. Correspondingly, two classes, `fadein-effect` and(or) `fadeout-effect` need to be added to `<ul>` tag.

### BUGS
For any bugs or issue, report at:
https://github.com/AdityaSrivast/AllCollapsible/issues

You may also mail at:
adityasrivast@acm.org

### DEPENDENCIES
JQuery 1.4 or higher

### LICENSE

MIT License

Copyright (c) 2018 Aditya Srivastava
