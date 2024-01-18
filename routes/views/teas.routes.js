const router = require('express').Router();
const TeaPage = require('../../components/TeaPage');
const { Tea } = require('../../db/models');

router.get('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    console.log(req.params);
    const tea = await Tea.findOne({ where: { id: teaId } });
    const html = res.renderComponent(TeaPage, { title: 'tea page', tea });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
