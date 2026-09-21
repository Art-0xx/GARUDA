---
type: campaign
scenario_id: 136
tactic: Persistence
technique: "T1546.006: LC_LOAD_DYLIB Addition"
technique_id: T1546.006
tags: [campaign, lotl, persistence]
---

# Injecting malicious dylib into macOS binary for persistence.

## Threat Description
Injecting malicious dylib into macOS binary for persistence.

## Attack Command
```
install_name_tool -add_rpath /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dylib /Applications/$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8).app/Contents/MacOS/*
```

## Detection Logic
Monitor dylib changes: `otool -L /Applications/*`; Audit file changes: `auditctl -w /Applications -p wa`.

## Mitigation
Restrict dylib modifications: `chmod 755 /Applications/*`; Enable SIP: `csrutil enable`.

## AI Training Prompt
Train AI to detect dylib injections and suggest SIP enforcement.

## References
- MITRE ATT&CK T1546.006: https://attack.mitre.org/techniques/T1546/006/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
