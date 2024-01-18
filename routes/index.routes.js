const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const authRouter = require('./views/auth.routes');
const profileRouter = require('./views/profile.routes');
const teaRouter = require('./views/teas.routes');

const apiAuthRouter = require('./api/api.auth.routes');

router.use('/', mainRouter);
router.use('/', teaRouter);
router.use('/profile', profileRouter);
router.use('/auth', authRouter);

router.use('/api/auth', apiAuthRouter);

module.exports = router;
