require('@babel/register');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const ssr = require('./middleware/ssr');
const { verifyAccessToken } = require('./middleware/verifyJWT');

const app = express();
const PORT = 3000;
const indexRouter = require('./routes/index.routes');

app.use(ssr);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(verifyAccessToken);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`it is ${PORT}`);
});