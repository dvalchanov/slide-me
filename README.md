# SlideMe

Simple CSS3 transitions slider.

## Example

```js
var slideMe = new SlideMe("#slider");

slideMe.to.next().end();
slideMe.to.previous().end();
slideMe.to.first().end()
slideMe.within(2, "s").to.page(3).end();
slideMe.within(3, "milliseconds").to.last().end();
```
