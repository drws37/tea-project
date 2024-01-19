const addComment = document.querySelector('.add-comments');

if (addComment) {
  addComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { comment } = e.target;
    const res = await fetch(`/api/comments/${e.target.id}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: comment.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      document
        .querySelector('.comments-container')
        .insertAdjacentHTML('beforeend', data.html);
      e.target.removeEventListener();
    } else {
      alert(data.message);
    }
  });
}
