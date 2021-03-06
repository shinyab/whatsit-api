'use strict'
var NRP    = require('node-redis-pubsub');

var config = {
  //url: 'http://127.0.0.1:6379',
  port  : 6379  , // Port of your locally running Redis server
  host  : '35.197.141.242',
  //host    : '127.0.0.1',
  scope : 'demo'  // Use a scope to prevent two NRPs from sharing messages
};


exports.emit = function (schedule) {
  var nrp = new NRP(config);
  nrp.emit('whatsit/schedule/create', JSON.stringify(schedule))
}

exports.emit = function (connectionName, schedule) {
  var nrp = new NRP(config);
  nrp.emit('whatsit/schedule/connect:'+connectionName, JSON.stringify({ schedule: schedule }))
}