---
type: campaign
scenario_id: 80
tactic: Persistence
technique: "T1546.005: Trap"
technique_id: T1546.005
tags: [campaign, lotl, persistence]
---

# Using trap command in Linux shell for persistence.

## Threat Description
Using trap command in Linux shell for persistence.

## Attack Command
```
echo 'trap "bash -c \"$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh\"" INT' >> ~/.bashrc
```

## Detection Logic
Monitor trap commands: `cat ~/.bashrc | grep trap`; Audit file changes: `auditctl -w ~/.bashrc -p wa`.

## Mitigation
Restrict bashrc writes: `chmod 600 ~/.bashrc`; Monitor trap configurations.

## AI Training Prompt
Train AI to detect trap command tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.005: https://attack.mitre.org/techniques/T1546/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
