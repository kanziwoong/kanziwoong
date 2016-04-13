'use strict';
/**
 * Created by kanziw on 2016. 4. 13..
 */

const express = require('express');
const app = express();

app.use('/count', express.static('./'));

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
