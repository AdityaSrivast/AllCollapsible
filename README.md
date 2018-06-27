# AllCollapsible
Collapsible for developers

## DEMO:
https://adityasrivast.github.io/AllCollapsible/example.html

## CDN:

Just add the link to the files in your head tag.
<pre>
  &lt;!--Minified css file--&gt;
  &lt;link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/adityasrivast/AllCollapsible@1.0.0/allcollapsible.min.css"&gt;
  &lt;!--Minified js file--&gt;
  &lt;script type="text/javascript" src="https://cdn.jsdelivr.net/gh/adityasrivast/AllCollapsible@1.0.0/allcollapsible.min.js"&gt;&lt;/script&gt;
</pre>

Apart from these don't forget to add cdn for jquery before script tag for js file.

<pre>
  &lt;script src="https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js"&gt; &lt;/script&gt;
</pre>

## USAGE:

### Default
<pre>
&lt;ul class="collapsible"&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;First&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet.&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Second&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Third&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

### Extensible
<pre>
&lt;ul class="collapsible extensible"&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;First&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet.&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Second&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Third&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

### Collapsible With Arrows

#### Default
<pre>
  &lt;ul class="collapsible with-arrow"&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;First&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Second&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Third&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

#### Extensible
<pre>
  &lt;ul class="collapsible extensible with-arrow"&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;First&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Second&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title"&gt;Third&lt;/div&gt;
      &lt;div class="collapsible-body"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

### Coloured Collapsible
You can even beautify the title and body for the collapsible by adding colours to it. The only thing you have to do is add a class to li.collapsible-title and(or) li.collapsible-body. There are total 178 shades available as of now.
For Example:
<pre>
  &lt;ul class="collapsible"&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title teal"&gt;First&lt;/div&gt;
      &lt;div class="collapsible-body teal-lighten-3"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class="collapsible-title red"&gt;Second&lt;/div&gt;
      &lt;div class="collapsible-body red-lighten-2"&gt;&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
&lt;/ul&gt;
</pre>

The colours available are: red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, available in 10 shades of each, viz., base-color,  color-lighten-1, color-lighten-2, color-lighten-3, color-lighten-4, color-lighten-5, color-accent-1, color-accent-2, color-accent-3, color-accent-4. In addition, colours, brown, grey, blue-grey are also available, with 6 six shades each, viz., base-color, color-lighten-1, color-lighten-2, color-lighten-3, color-lighten-4, color-lighten-5.

### BUGS
For any bugs or issue:
https://github.com/AdityaSrivast/AllCollapsible/issues

You may also mail at:
adityasrivast.acm.org

### DEPENDENCIES
JQuery
