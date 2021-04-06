const express = require('express');
const app = express();

app.listen(4000,()=>{console.log("Listening to 3000")})
app.use(express.static('public'));