const router = require('express').Router();

const ProfilePage = require('../../components/ProfilePage');
const { User, Tea } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({})
    const teas = await Tea.findAll();
    const html = res.renderComponent(ProfilePage, {
      title: 'Profile page',
      teas,
    });
    res.send(html);
  } catch ({ message }) {
    console.log({ message: 'profile router' });
  }
});

module.exports = router;
