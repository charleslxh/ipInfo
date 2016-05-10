var http = require('http');
var net = require('net');
var ip = require('ip');

var ipInfoHost = 'http://ipinfo.io/';
var hostnameRegex = new RegExp("^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$");

var getIpAddress = function() {
  return ip.address();
}

var getIpInformation = function(ipAddress, keys, callback) {
  if (typeof keys === 'function') {
    callback = keys;
    keys = [];
  }

  if (!net.isIPv4(ipAddress) && !net.isIPv6(ipAddress)) {
    return callback('Invalid IP Address.');
  }

  http.get(ipInfoHost + ipAddress, function(res) {
    var info = '';
    res.on('data', function(chunk) {
      info += chunk;
    });

    res.on('end', function(){
      result = {};
      info = JSON.parse(info);
      if ( keys.length > 0 ) {
        for(var i = 0; i < keys.length; i++) {
          result[keys[i]] = info[keys[i]];
        }
      } else {
        result = info;
      }
      callback(null, result);
    });

    res.on('error', function(err) {
      callback(err);
    });
  });
}

var getHostInformation = function(hostname, callback) {

}

module.exports = {
  getIp: getIpAddress,
  getIpInfo: getIpInformation
}
