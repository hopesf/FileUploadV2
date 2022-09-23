const express = require('express');
const fileupload = require('express-fileupload');
const path = require('path');
const cors = require('cors');

//middlewares
const filesPayloadExist = require('./middleware/filesPayloadExist');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');
const fileExtLimiter = require('./middleware/fileExtLimiter');

const app = express();
app.use('/uploads', express.static('../public_html/uploads'));
app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const whitelist = [
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.webp',
  '.mp4',
  '.mov',
  '.webm',
  '.xlsx',
  '.xlsm',
  '.xlsb',
  '.xltx',
  '.docx',
  '.doc',
  '.dot',
  '.pdf',
];

app.post(
  '/upload',
  fileupload({ createParentPath: true }),
  filesPayloadExist,
  fileExtLimiter(whitelist),
  fileSizeLimiter,
  async (req, res) => {
    const files = req.files;

    let sendData = [];

    Object.keys(files).forEach((key) => {
      const filePath = path.join(__dirname, '../public_html/uploads', files[key].name);
      sendData.push(`http://localhost:3100/uploads/${files[key].name}`);
      files[key].mv(filePath, (err) => {
        if (err) return res.status(500).json({ status: 'error', message: err });
      });
    });
    console.log(sendData);

    return res.json({ status: 'success', sendData });
  }
);

app.use((req, res, next) => {
  return res.json({ code: 'This route does not exist.' });
});

app.use((err, req, res, next) => {
  console.log(err);

  if (err) {
    if (err.output) {
      return res.status(err.output.statuscode || 500).json(err.output.payload);
    }

    return res.status(500).json(err);
  }
});

const port = process.env.PORT || 3100;
app.listen(port, () => console.log('server running 3100'));
