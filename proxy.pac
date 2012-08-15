function FindProxyForURL(url, host) {

    var DIRECT_CONNECT = "DIRECT";
    var PROXY_CONNECT  = "DIRECT";
    var HTTP_CONNECT   = "PROXY 127.0.0.1:8087";
    var HTTPS_CONNECT  = "SOCKS 127.0.0.1:7070";
    var IP             = dnsResolve(host);

    if (url.substring(0, 6) == "https:") {
        PROXY_CONNECT = HTTPS_CONNECT;
    } else {
        PROXY_CONNECT = HTTP_CONNECT;
    }

    var DIRECT_IP_PREFIXES = [
          '127.0.0',
          '192.168',
          '203.208.46'
        ];

    var PROXY_DOMAINS = [
          '.google.com',
          'twitter.com', '.twitter.com', '.t.co',
          '.facebook.com', '.facebook.net', '.fbcdn.net',
          '.youtube.com', '.ytimg.com',
          '.wordpress.com', '.blogspot.com',
          '.feedburner.com'
        ];

    for (var key in DIRECT_IP_PREFIXES) {
        var length = DIRECT_IP_PREFIXES[key].length;
        if (IP.substring(0, length) === DIRECT_IP_PREFIXES[key]) {
          return DIRECT_CONNECT;
        }
    }

    for (var key in PROXY_DOMAINS) {
        if (dnsDomainIs(host, PROXY_DOMAINS[key])) {
            return PROXY_CONNECT;
        }
    }

    return DIRECT_CONNECT;
}
