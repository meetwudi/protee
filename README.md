Protee
======

**Protee** is under early-stage development.

**Protee** is a designer-friendly javascript library for fast prototyping. It is helpful when you want to build an interactive prototype. 

Protee covers common prototyping needs like repeating DOM several times, including another HTML file. It does not need any JavaScript programming experience, which is good for designers who know HTML/CSS but struggle with JS :)

### Dependencies

- jQuery (>=1.9)

### Installation

```
bower install protee --save
```

Make sure to include protee after jQuery.

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/protee.js"></script>
```

### Usage

##### Repeating DOM

Use `data-protee-repeat` HTML attribute to repeat certain DOM for several times.

```html
<div class="container" data-protee-repeat="2">
  <h1 data-protee-repeat="3">Hello</h1>
</div>
```

Generated html will be

```html
<div class="container">
  <h1>Hello</h1>
  <h1>Hello</h1>
  <h1>Hello</h1>
</div>
<div class="container">
  <h1>Hello</h1>
  <h1>Hello</h1>
  <h1>Hello</h1>
</div>
```

##### Include external html

Sometimes it is helpful to include external html, like page header or page footer. `data-protee-include` allows you to include external html.

```html
<!-- /host.html -->
<div data-protee-include="include.html"></div>

<!-- /include.html -->
<h1>Hello</h1>
```

Generated html will be

```html
<!-- /host.html -->
<div>
  <h1>Hello</h1>
</div>
```

Specifing `data-protee-include-replace` will replace the container DOM.

```html
<!-- /host.html -->
<div data-protee-include="include.html"></div>

<!-- /include.html -->
<h1>Hello</h1>
```

Generated html will be

```html
<!-- /host.html -->
<h1>Hello</h1>
```


### Browser Support

Hey! Remember, you are prototyping! So just use cutting-edge modern browsers! :)