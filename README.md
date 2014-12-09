Protee
======

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

Be sure to serve all assets (including html) with a static server.

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

##### Generate lorem

```html
<p data-protee-lorem></p>
```

Generated html

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus, eveniet magnam iste labore. Doloremque accusantium illum voluptate fuga architecto dolores! Eum aut eos facere illum facilis possimus expedita sint!</p>
```

Lorem in different language

```html
<p data-protee-lorem="zh_CN"></p>
```

Generated html

```html
<p>他思车连龙所什机金，之严先角去品资政，动响询七号命家。花应少住积很必速，求那却红交周十，法杏辅对置置。东却局相必回照内世而容少教层，极层百县还铁9七需非容斗。 江花重积走系有社性包，者省最八会林工权参，之养蠢弦些你僚伯。圆收运石精光复转几员问，革类年共生做活育易，事展届包足往复加雪。</p>
```

Currently supported languages are

1. English
2. Chinese simplified

##### Generate placeholder image

Protee uses [placehold.it](http://placehold.it) to generate image placeholders. Simply use `data-protee-imgholder`.

```html
<img data-protee-imgholder></img>
```

By default the image will be 150x150.

```html
<img src="http://placehold.it/150x150"></img>
```

You can specify any dimension you like.

```html
<img data-protee-imgholder="321x123"></img>
```

Generated html

```html
<img src="http://placehold.it/321x123"></img>
```

### Browser Support

Hey! Remember, you are prototyping! So just use cutting-edge modern browsers! :)

### Contribute

Your contribution will be appreciated! :)

- submit issue
- fork
- send pull request

### LICENSE
MIT

