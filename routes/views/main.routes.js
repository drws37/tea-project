const router = require('express').Router();

const MainPage = require('../../components/Main');

router.get('/', (req, res) => {
  const html = res.renderComponent(MainPage, {}, { doctype: true });
  res.send(html);
});

module.exports = router;
