const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../Utils/authUtils');
const configJWT = require('../../middleware/configJWT');

router.post('/login', async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;
    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({ message: 'Юзер не существует или пароль неверный' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Юзер не существует или пароль неверный' });
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });

    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/reg', async (req, res) => {
  let user;
  try {
    const {
      name, password, rpassword, img,
    } = req.body;
    if (password !== rpassword) {
      res.json({ message: 'Пароли не совпадают' });
      return;
    }
    user = await User.findOne({ where: name });
    if (User) {
      res.json({ message: 'Логин занят' });
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, password: hash, img });
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });

    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

// router.get('/logout', (req, res) => {
//   res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
//   res.redirect('/');
// });

module.exports = router;
