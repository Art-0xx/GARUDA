---
type: campaign
scenario_id: 209
tactic: Persistence
technique: "T1546.004: Unix Shell Configuration Modification"
technique_id: T1546.004
tags: [campaign, lotl, persistence]
---

# Injecting malicious code into profile for persistence on Linux.

## Threat Description
Injecting malicious code into profile for persistence on Linux.

## Attack Command
```
echo 'bash -c "/tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh"' >> ~/.profile
```

## Detection Logic
Monitor profile changes: `cat ~/.profile | grep bash`; Audit file changes: `auditctl -w ~/.profile -p wa`.

## Mitigation
Restrict profile writes: `chmod 600 ~/.profile`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect profile tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.004: https://attack.mitre.org/techniques/T1546/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
