const router = require('express').Router();
const multer = require('multer');
const TeaItem = require('../../components/TeaItem');
const { Tea } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('img'), async (req, res) => {
  try {
    // console.log(req.body);
    const { title, place, coordsX, coordsY, description } = req.body;

    const newFileUrl = `/img/${req.file.originalname}`;

    const tea = await Tea.create({
      title,
      place,
      coordsX,
      coordsY,
      img: newFileUrl,
      description,
      user_id: res.locals.user.id,
    });
    const html = res.renderComponent(TeaItem, { tea }, { doctype: false });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ message: 'teas router' });
  }
});

router.delete('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const destroy = await Tea.destroy({ where: { id: teaId } });
    if (destroy > 0) {
      res.json({
        message: 'success',
      });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
