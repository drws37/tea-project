const ymaps3 = require('ymaps3');


function init() {
  const map = new ymaps.Map('map', {
    center: [59.950453606790376, 30.314892820837734],
    zoom: 14,
  });
}
ymaps.redy(init);
