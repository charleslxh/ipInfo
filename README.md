# ipInfo
Get IP information from http://ipinfo.io

## Install

```bash
npm install js-ipinfo --save
```

##Methods

### getIpInfo(ip, options, callback)

- ip `[String]`: The ip address which you want to query.
- options `[Array]` The keys you want to be returned, it can include the followings:
    + ip, the ip you want to query.
    + hostname, the hostname of this ip.
    + city, city of this ip.
    + region, region of this ip.
    + country, country of this ip.
    + loc, longitude and latitude of this ip.
    + org, owner of this ip.

## How to use

```js
var ipinfo = require('js');

// Get ip information
ipinfo.getIpInfo('115.29.172.241', ['city'], function(ret) {
    console.log('This IP in city: ' + ret.city);
});

// Get local address
var publicIp = ipinfo.getIp()
```

**Developmenting, welcome contributors join us.**
