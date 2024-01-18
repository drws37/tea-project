const express = require('express');

const router = express.Router();

const authRouter = require('./views/auth.routes');

const apiAuthRouter = require('./api/api.auth.routes');

// const apiAuthRouter = require('./api/api.auth.routes');

router.use('/auth', authRouter);

router.use('/api/auth', apiAuthRouter);

// router.use('/api/auth', apiAuthRouter);

module.exports = router;
