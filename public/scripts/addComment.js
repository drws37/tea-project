const formComment = document.querySelector('.newComment');

if (formComment) {
  formComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { id, comment } = e.target;
    console.log(id, comment);
    const res = await fetch('/api/comment', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        id,
        comment: comment.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
       document.querySelector('.commentsList').remove()
      document.querySelector('.container-tea').insertAdjacentHTML('beforeend', data.html);
    }
  });
}
