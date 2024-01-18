const router = require('express').Router();
const LoginPage = require('../../components/LoginPage');
const RegPage = require('../../components/RegPage');

router.get('/login', (req, res) => {
  const html = res.renderComponent(LoginPage, { title: 'Авторизация' });
  res.send(html);
});

router.get('/reg', (req, res) => {
  const html = res.renderComponent(RegPage, { title: 'Регистрация' });
  res.send(html);
});

module.exports = router;
