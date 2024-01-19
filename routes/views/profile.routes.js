const router = require('express').Router();
const ProfilePage = require('../../components/ProfilePage');
const { Comment, Tea } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { user_id: res.locals.user.id },
      include: Tea,
    });
    const teas = await Tea.findAll();
    console.log(teas);
    const html = res.renderComponent(
      ProfilePage,
      {
        title: 'Profile page',
        comments,
        teas,
      },
      { doctype: true }
    );
    res.send(html);
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
