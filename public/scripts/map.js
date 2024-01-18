async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;
  const {
    YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer,
  } = ymaps3;
  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById('map'),
    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [59.950453606, 30.3148928],

        // Уровень масштабирования
        zoom: 2,
      },
    },
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
  const defaultFeaturesLayer = new YMapDefaultFeaturesLayer();
  // add to map
  map.addChild(defaultFeaturesLayer);

  // Marker
  
  const res = await fetch('/markers');
  const data = await res.json();
  console.log(data.teas);

  const popup = document.getElementById('popup');
  data.teas.map((tea) => {
    const cent = [tea.coordsY, tea.coordsX];
    const markerEl = document.createElement('img');
    markerEl.className = 'icon-marker';
    markerEl.src = '/img/maps-and-flags.png';
    map.addChild(new YMapMarker({ coordinates: cent, popup: { content: 'hehe' } }, markerEl));

    markerEl.addEventListener('click', () => {
      window.location.assign(`/tea/${tea.id}`);
    });
    markerEl.addEventListener('mouseover', () => {
      setTimeout(() => {
        popup.innerText = tea.title;
        popup.style.display = 'block';
        // const markerRect = markerEl.getBoundingClientRect();
        // console.log(markerRect.bottom);
        // popup.style.bottom = `${markerRect.top}px`;
      }, 100);
    });
    markerEl.addEventListener('mouseleave', () => {
      setTimeout(() => {
        popup.style.display = 'none';
      }, 100);
    });
  });
}

initMap();

// document.addEventListener('DOMContentLoaded', () => {
//   const openPopupBtn = document.querySelector('.ymaps3x0--marker');
//   const closePopupBtn = document.getElementById('closePopupBtn');
//   const popup = document.getElementById('popup');

//   console.log(openPopupBtn);

//   openPopupBtn.addEventListener('click', () => {
//     popup.style.display = 'block';
//   });

//   closePopupBtn.addEventListener('click', () => {
//     popup.style.display = 'none';
//   });

//   // Закрывать всплывающее окно при клике вне его области
//   window.addEventListener('click', (event) => {
//     if (event.target == popup) {
//       popup.style.display = 'none';
//     }
//   });
// });

//   const map = new ymaps.Map('map', {
//     center: [59.950453606790376, 30.314892820837734],
//     zoom: 14,
//   });
// }
// ymaps.redy(init);
