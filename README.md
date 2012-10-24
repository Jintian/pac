## what's this
This is the proxy settings on my mac.

* HTTPS requests be diverted to SSH Proxy.
* HTTP requests be diverted to GoAgent Proxy.

## how to install
1. modify `proxy.pac` with your HTTP, HTTPS proxies hosts.
2. modify `com.dongbeta.autossh.plist` with your SSH account.
2. modify `com.dongbeta.goagent.plist` with your goagent settings.
3. put `com.dongbeta.autossh.plist` and `com.dongbeta.goagent.plist` under `~/Library/LaunchAgents/` then run 

```shell
launchctl load -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist
launchctl load -w ~/Library/LaunchAgents/com.dongbeta.goagent.plist
```
4. restart your mac

## how to reload
```shell
launchctl unload -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist
launchctl load -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist

launchctl unload -w ~/Library/LaunchAgents/com.dongbeta.goagent.plist
launchctl load -w ~/Library/LaunchAgents/com.dongbeta.goagent.plist
```

## how to uninstall
```shell
launchctl unload -w ~/Library/LaunchAgents/com.dongbeta.autossh.plist
launchctl unload -w ~/Library/LaunchAgents/com.dongbeta.goagent.plist
rm  ~/Library/LaunchAgents/com.dongbeta.autossh.plist
rm  ~/Library/LaunchAgents/com.dongbeta.goagent.plist
```
