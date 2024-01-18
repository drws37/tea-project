const router = require('express').Router();

const MainPage = require('../../components/Main');

router.get('/', (req, res) => {
  const html = res.renderComponent(MainPage, { title: 'Главная' }, { doctype: true });
  res.send(html);
});

module.exports = router;
