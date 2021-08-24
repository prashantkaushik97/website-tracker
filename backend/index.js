import express from "express"
import getMetaData from 'metadata-scraper'
import cors from 'cors';

const app = express()
const port = 8000;
app.use(express.json())
app.use(cors());

app.post('/check', function (req, res, next) {
  var url = req.body.url
  getMetaData(url).then((data) => {
    res.json({
      "title": data.title,
      "url": data.url,
      "status": "Live"
    })
  }).catch(error => {
    res.json({
      "url": url,
      "status": "Error"
    })
  })
});
app.listen(port, () => { console.log(`listening on port:`, port) })