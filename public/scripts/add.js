const addForm = document.querySelector('#add-tea');
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, place, coordsX, coordsY, img, description } = e.target;

    const formData = new FormData();

    formData.append('img', img.files[0]);
    formData.append('title', title.value);
    formData.append('place', place.value);
    formData.append('coordsX', coordsX.value);
    formData.append('coordsY', coordsY.value);
    formData.append('description', description.value);

    const res = await fetch('/api/teas', {
      method: 'post',
      body: formData,
    });
    const data = await res.json();
    if (data.message === 'success') {
      document
        .querySelector('.teas-container')
        .insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    } else {
      alert(data.message);
    }
  });
}
