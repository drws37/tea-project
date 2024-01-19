require('@babel/register');
const express = require('express');
require('dotenv').config();

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const ssr = require('./middleware/ssr');
const getUser = require('./middleware/getUser');
const { verifyAccessToken } = require('./middleware/verifyJWT');
const Error404 = require('./components/Error404');

const indexRouter = require('./routes/index.routes');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use(verifyAccessToken);
app.use(getUser);

app.use('/', indexRouter);

app.use('*', (req,res) => {
  const html = res.renderComponent(Error404);
  res.send(html)
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`it is ${PORT}`);
});
