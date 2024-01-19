const router = require('express').Router();
const { Tea } = require('../../db/models/tea');
const { User } = require('../../db/models/user');
const { Comment } = require('../../db/models/comment');

router.post('/add-comment', async (req, res) => {
  try {
    const { teaId } = req.params;
    const comment = await Comment.findAll({ where: { tea_id: teaId } });
  } catch ({ message }) {
    res.json({ message });
  }
});
