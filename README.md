## what's this
This is the proxy settings on my mac.

* HTTPS requests be diverted to SOCKS.
* HTTP requests be diverted to GoAgent.

## how to install
1. modify `proxy.pac` with your HTTP, HTTPS proxies hosts.
2. modify `com.dongbeta.autossh.plist` with your SSH account.
3. put `com.dongbeta.autossh.plist` under `~/Library/LaunchAgents/` then run `launchctl load -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist`
4. restart your mac

## how to reload
```
launchctl unload ~/Library/LaunchAgents/com.dongbeta.autossh.plist
launchctl load -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist
```

## how to uninstall
```
launchctl load -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist
rm  ~/Library/LaunchAgents/com.dongbeta.autossh.plist
```
