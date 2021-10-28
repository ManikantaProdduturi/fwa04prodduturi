var express = require('express');
var router = express.Router();
var value=Math.round(Math.random()*100);

var s= Math.hypot(value)  ;
var t=Math.ceil(value) 
var h=Math.clz32(value)
 

/* GET home page. */
router.get('/', function(req, res, next) {

 
 res.send('the function [Math.hypot() applied to] ['+ value+'] is ['+s+']\nthe function [Math.ceil() applied to] ['+ value+'] is ['+t+']\nthe function [Math.clz32() applied to] ['+ value+'] is ['+h+']');

});

module.exports = router;