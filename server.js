
var express = require('express');
var app = express();
const port = 3000;

const requestIp = require('request-ip');


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get("/api/whoami", function (req, res) {

  let getLanguage = req.get('Accept-Language');
  let systemInfos = req.get('User-Agent');
  let getIp = requestIp.getClientIp(req);

  res.send(
    {
      "ipaddress": getIp,
      "language": getLanguage,
      "software": systemInfos
    }
    );

});


app.listen(port, () => console.log(`Example app listening on port ${port}`))


