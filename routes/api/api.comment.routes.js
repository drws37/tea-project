const router = require('express').Router();
const { Comment, User } = require('../../db/models');
const CommentsList = require('../../components/CommentsList');

router.post('/', async (req, res) => {
  try {
    const { id, comment } = req.body;
    const com = await Comment.create({ text: comment, user_id: res.locals.user.id, tea_id: id });
    const comments = await Comment.findAll({ where: { tea_id: id } });
    const users = await User.findAll();
    const html = res.renderComponent(CommentsList, { comments, users });
    res.json({ html, message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
