function FindProxyForURL(url, host) {

    var DIRECT      = "DIRECT";
    var AUTO_PROXY  = "DIRECT";

    var HTTP_PROXY  = "PROXY 127.0.0.1:8087";
    var HTTPS_PROXY = "SOCKS 127.0.0.1:7070";

    var IP = dnsResolve(host);

    if (url.substring(0, 6) == "https:") {
        AUTO_PROXY = HTTPS_PROXY;
    } else {
        AUTO_PROXY = HTTP_PROXY;
    }

    var HTTPS_PROXY_DOMAINS = [
        '.google.com', '.googleusercontent.com', '.appspot.com',
        '.twitter.com', '.t.co',
        'just-ping.com'
    ];

    var DIRECT_IP = [
        '^127\.0\.0\.1$',
        '^192\.168\.\\d+\.\\d+$',
        '^203\.208\.46\.\\d+$',
        '^203\.208\.47\.\\d+$',
        '^10\.\\d+\.\\d+\.\\d+$'
    ];

    var AUTO_PROXY_DOMAINS = [
        '.facebook.com', '.facebook.net', '.fbcdn.net',
        '.youtube.com', '.ytimg.com',
        '.wordpress.com', '.blogspot.com', '.blogger.com',
        '.feedburner.com', 'gongm.in',
        '.staticflickr.com', 
        '.vimeo.com', 'dropbox.com',
        'fluidapp.com'
    ];

    for (var key in DIRECT_IP) {
        var regex = new RegExp(DIRECT_IP[key]);
        if (regex.test(IP)) {
            return DIRECT;
        }
    }

    for (var key in HTTPS_PROXY_DOMAINS) {
        if (dnsDomainIs(host, HTTPS_PROXY_DOMAINS[key])) {
            return HTTPS_PROXY;
        }
    }

    for (var key in AUTO_PROXY_DOMAINS) {
        if (dnsDomainIs(host, AUTO_PROXY_DOMAINS[key])) {
            return AUTO_PROXY;
        }
    }

    return DIRECT;
}
