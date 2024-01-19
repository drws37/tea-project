const addForm = document.querySelector('#add-tea');
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      title, place, coordsX, coordsY, img, description,
    } = e.target;
    // console.log(title.value, place.value, coordsx.value, coordsy.value, img.value, description.value);
    const res = await fetch('/api/teas', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        place: place.value,
        description: description.value,
        coordsX: coordsX.value,
        coordsY: coordsY.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      document.querySelector('.teas-container').insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    } else {
      alert(data.message);
    }
  });
}
