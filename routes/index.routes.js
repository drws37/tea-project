const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const authRouter = require('./views/auth.routes');
const profileRouter = require('./views/profile.routes');
const teaRouter = require('./views/teas.routes');

const apiMarkersRouter = require('./api/api.markers.routes');
const apiAuthRouter = require('./api/api.auth.routes');
const apiTeasRouter = require('./api/api.teas.routes');

router.use('/markers', apiMarkersRouter);
router.use('/', mainRouter);
router.use('/', teaRouter);
router.use('/profile', profileRouter);
router.use('/auth', authRouter);

router.use('/api/auth', apiAuthRouter);
router.use('/api/teas', apiTeasRouter);

module.exports = router;
