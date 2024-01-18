const router = require('express').Router();
const mainRouter = require('./views/main.routes')
const profileRouter = require('./views/profile.routes');
const teaRouter = require('./views/teas.routes');

router.use('/', mainRouter);
router.use('/profile', profileRouter);
router.use('/', teaRouter);

module.exports = router;
