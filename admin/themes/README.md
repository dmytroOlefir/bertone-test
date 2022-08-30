# Atelier Design Boilerplate

### A) Available reusable AD functions

### • **Toggle active class**

######  Usage : 

```javascript
import ToggleActive from "path";

ToggleActive({
class: ".item_to-toggle",
activeClass: "active", 
})
```

### • **Get current year**

######  Usage : 

```html
<span class="year"></span>
```

Make sure that  getYear() is imported into index.js
```javascript
import { getYear } from './lib/ad-get-year'
```

### B) Polylang Alt images

DevPlus created special functions to allow us to write alternative textes for images in every language

######  Import the .json ACF file (on Poolfino i.e.) wich allow you to add "alt" fields to any media file
######  Example of usage : 
```php
<?php

$image = get_field('advantages_image');

if (!empty($image)) : ?>

<?php devplus_the_image( $image, 'FullWidth', 'class="img__bg"' ); ?>

<?php endif; ?>
```