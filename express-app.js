const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')
var output = loremIpsum({count: 3, units: 'paragraphs', format: 'HTML'});

app.get('/lorem', function(req, res){
  res.send(output);
});

app.listen(3000, function(){
  console.log('Successfully displayed 3 paragraphs using node and lorem-ipsum package')
});
