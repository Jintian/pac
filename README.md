## what's this
This is the proxy settings on my mac.

* HTTPS requests be diverted to SOCKS.
* HTTP requests be diverted to GoAgent.

## how to work
1. modify `proxy.pac` with your HTTP, HTTPS proxies.
2. put `com.dongbeta.autossh.plist` under `~/Library/LaunchAgents/` and run
    launchctl load -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist
3. restart your mac