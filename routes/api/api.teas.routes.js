const router = require('express').Router();
const TeaItem = require('../../components/TeaItem');
const { Tea } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    // console.log(req.body);
    const {
      title, place, coordsX, coordsY, img, description,
    } = req.body;
    console.log(res.locals.user.id, 33333333333333333333333);
    const tea = await Tea.create({
      title, place, coordsX, coordsY, img, description, user_id: res.locals.user.id,
    });
    console.log(tea);
    const html = res.renderComponent(TeaItem, { tea }, { doctype: false });
    console.log(html);
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ message: 'teas router' });
  }
});

router.delete('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const destroy = await Tea.destroy({ where: { id: teaId } });
    if (destroy > 0) {
      res.json({
        message: 'success',
      });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
