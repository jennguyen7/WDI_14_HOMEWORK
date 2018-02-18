var express = require('express');
var request = require('request');



//get request for melbourne weather
// api.openweathermap.org/data/2.5/weather?q=Melbourne&APPID=85a4e3ff76a5a49cb2fb2b3417491cc8



request('http://api.openweathermap.org/data/2.5/weather?q=Melbourne&APPID=85a4e3ff76a5a49cb2fb2b3417491cc8', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  //why doesn this work??
  //console.log('main:', body.main);

  console.dir(JSON.parse(body), {depth: 1});
  //convert from kelvin to celcius
  console.dir(Math.round(JSON.parse(body).main.temp - 273));

});

