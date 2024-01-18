const router = require('express').Router();
const { Tea } = require('../../db/models');

router.get('/', async (req, res) => {
  const teas = await Tea.findAll({ raw: true });
  res.json({ teas });
});

module.exports = router;
