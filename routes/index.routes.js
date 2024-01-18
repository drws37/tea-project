const router = require('express').Router();
const mainRouter = require('./view/main.routes');
const teaRouter = require('./view/teas.routes');

router.use('/', mainRouter);
router.use('/', teaRouter);

module.exports = router;
