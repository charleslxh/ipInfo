var ipinfo = require('./index.js')

ipinfo.getIpInfo('115.29.172.241', ['city'], function(err, info) {
  if (err) {
    console.log(err);
  }  else {
    console.log(info);
  }
});

console.log(ipinfo.getIp());
