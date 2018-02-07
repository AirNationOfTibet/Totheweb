let express = require('express');
let app = express();

app.use(express.static('server/public'));
const port = 6000;

app.listen(port, function() {
  console.log(`server listening on port ${port}`);
});
