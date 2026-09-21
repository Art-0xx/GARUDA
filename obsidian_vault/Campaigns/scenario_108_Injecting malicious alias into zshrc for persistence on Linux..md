---
type: campaign
scenario_id: 108
tactic: Persistence
technique: "T1546.004: Unix Shell Configuration Modification"
technique_id: T1546.004
tags: [campaign, lotl, persistence]
---

# Injecting malicious alias into zshrc for persistence on Linux.

## Threat Description
Injecting malicious alias into zshrc for persistence on Linux.

## Attack Command
```
echo 'alias ls="bash -c \"$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh\""' >> ~/.zshrc
```

## Detection Logic
Monitor zshrc changes: `cat ~/.zshrc | grep alias`; Audit file changes: `auditctl -w ~/.zshrc -p wa`.

## Mitigation
Restrict zshrc writes: `chmod 600 ~/.zshrc`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect zshrc alias tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.004: https://attack.mitre.org/techniques/T1546/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
