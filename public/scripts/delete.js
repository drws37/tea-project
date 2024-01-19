const teaContainer = document.querySelector('.teas-container');

if (teaContainer) {
  teaContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete')) {
      const answer = confirm('Вы уверены?');
      if (answer) {
        if (answer) {
          const { id } = event.target.dataset;
          const res = await fetch(`/api/teas/${id}`, {
            method: 'delete',
          });
          const data = await res.json();
          if (data.message === 'success') {
            event.target.closest('.tea-card').remove();
          } else {
            alert(data.message);
          }
        }
      }
    }
  });
}
