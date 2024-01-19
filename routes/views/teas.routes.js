const router = require('express').Router();
const TeaPage = require('../../components/TeaPage');
const { Tea, Comment, User } = require('../../db/models');

router.get('/tea/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const tea = await Tea.findOne({ where: { id: teaId } });
    const comments = await Comment.findAll({ where: { tea_id: teaId } });
    const users = await User.findAll();
    const html = res.renderComponent(TeaPage, {
      title: 'tea page', tea, comments, users,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
