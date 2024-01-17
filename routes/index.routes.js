const router = require('express').Router();

const mainRouter = require('./views/main.routes')
const profileRouter = require('./views/profile.routes');

router.use('/profile', profileRouter);
router.use('/', mainRouter);

module.exports = router;
