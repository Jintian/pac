function FindProxyForURL(url, host) {

    var DIRECT = "DIRECT";
    var PROXY = "DIRECT";

    var HTTP_CONNECT = "PROXY 127.0.0.1:8087";
    var HTTPS_CONNECT = "SOCKS 127.0.0.1:7070";

    var IP = dnsResolve(host);

    if (url.substring(0, 6) == "https:") {
        PROXY = HTTPS_CONNECT;
    } else {
        PROXY = HTTP_CONNECT;
    }

    var DIRECT_IP = [
        '^127\.0\.0\.1$',
        '^192\.168\.\\d+\.\\d+$',
        '^203\.208\.46\.\\d+$',
        '^203\.208\.47\.\\d+$'
    ];

    var PROXY_DOMAINS = [
        '.google.com',
        'twitter.com', '.twitter.com', 't.co', '.t.co',
        '.facebook.com', '.facebook.net', '.fbcdn.net',
        '.youtube.com', '.ytimg.com',
        '.wordpress.com', '.blogspot.com', '.blogger.com',
        '.feedburner.com', 'gongm.in',
        '.staticflickr.com', 
        '.vimeo.com', 'dropbox.com'
    ];

    for (var key in DIRECT_IP) {
        var regex = new RegExp(DIRECT_IP[key]);
        if (regex.test(IP)) {
            return DIRECT;
        }
    }

    for (var key in PROXY_DOMAINS) {
        if (dnsDomainIs(host, PROXY_DOMAINS[key])) {
            return PROXY;
        }
    }

    return DIRECT;
}
