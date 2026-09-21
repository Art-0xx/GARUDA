---
type: campaign
scenario_id: 84
tactic: Persistence
technique: "T1546.006: LC_LOAD_DYLIB Addition"
technique_id: T1546.006
tags: [campaign, lotl, persistence]
---

# Injecting malicious dylib on macOS for persistence.

## Threat Description
Injecting malicious dylib on macOS for persistence.

## Attack Command
```
install_name_tool -add_rpath /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dylib /usr/bin/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor dylib changes: `otool -L /usr/bin/*`; Audit file changes: `auditctl -w /usr/bin -p wa`.

## Mitigation
Restrict dylib modifications: `chmod 755 /usr/bin/*`; Enable SIP: `csrutil enable`.

## AI Training Prompt
Train AI to detect dylib injections and suggest SIP enforcement.

## References
- MITRE ATT&CK T1546.006: https://attack.mitre.org/techniques/T1546/006/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
