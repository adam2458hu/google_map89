const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,(port)=>console.log('App is running on port '+ port));