const router = require('express').Router();
const ProfilePage = require('../../components/ProfilePage');
const { Comment, Tea } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { user_id: res.locals.user.id },
      include: Tea,
    });
    console.log(comments);
    const html = res.renderComponent(
      ProfilePage,
      {
        title: 'Profile page',
        comments,
      },
      { doctype: true }
    );
    res.send(html);
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
