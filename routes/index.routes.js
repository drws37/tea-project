const router = require('express').Router();
const Main = require('../components/Main');

router.get('/', (req, res) => {
  const html = res.renderComponent(Main,{}, { doctype: true });
  res.send(html)
})

module.exports = router;
