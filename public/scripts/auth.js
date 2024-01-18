const loginForm = document.querySelector('#log-page');
const regForm = document.querySelector('#reg-page');

if (loginForm) {
  loginForm.addEventListener('sybmit', async (event) => {
    event.preventDefault();
    const { name, password } = event.target;
    const res = await fetch('/api/auth/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      name, password, rpassword, img,
    } = event.target;
    const res = fetch('/api/auth/reg', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        rpassword: rpassword.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      document.querySelector('.sign-up__error').innerText = data.message;
    }
  });
}