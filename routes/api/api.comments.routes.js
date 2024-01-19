const router = require('express').Router();
const { Comment } = require('../../db/models');
const CommentsSection = require('../../components/CommentsSection');

router.post('/:teaId', async (req, res) => {
  try {
    const { comment } = req.body;
    console.log(comment);
    const { teaId } = req.params;
    const comment1 = await Comment.create({
      text: comment,
      user_id: res.locals.user.id,
      tea_id: teaId,
    });
    const html = res.renderComponent(
      CommentsSection,
      { comment1 },
      { doctype: false }
    );
    console.log(html);
    res.json({ message: 'success', html });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
