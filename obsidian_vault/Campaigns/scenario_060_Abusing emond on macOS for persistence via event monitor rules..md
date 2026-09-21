---
type: campaign
scenario_id: 60
tactic: Persistence
technique: "T1546.014: Emond"
technique_id: T1546.014
tags: [campaign, lotl, persistence]
---

# Abusing emond on macOS for persistence via event monitor rules.

## Threat Description
Abusing emond on macOS for persistence via event monitor rules.

## Attack Command
```
echo 'command=/bin/sh -c "$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh"' > /etc/emond.d/rules/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).plist
```

## Detection Logic
Monitor emond rules: `ls /etc/emond.d/rules`; Audit file changes: `auditctl -w /etc/emond.d -p wa`.

## Mitigation
Restrict emond rules: `chmod 700 /etc/emond.d`; Disable emond: `launchctl unload /System/Library/LaunchDaemons/com.apple.emond.plist`.

## AI Training Prompt
Train AI to detect emond rule tampering and suggest access controls.

## References
- MITRE ATT&CK T1546.014: https://attack.mitre.org/techniques/T1546/014/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
