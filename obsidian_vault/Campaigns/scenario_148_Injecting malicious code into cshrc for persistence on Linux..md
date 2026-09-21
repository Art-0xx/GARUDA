---
type: campaign
scenario_id: 148
tactic: Persistence
technique: "T1546.004: Unix Shell Configuration Modification"
technique_id: T1546.004
tags: [campaign, lotl, persistence]
---

# Injecting malicious code into cshrc for persistence on Linux.

## Threat Description
Injecting malicious code into cshrc for persistence on Linux.

## Attack Command
```
echo 'csh -c "$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh"' >> ~/.cshrc
```

## Detection Logic
Monitor cshrc changes: `cat ~/.cshrc | grep csh`; Audit file changes: `auditctl -w ~/.cshrc -p wa`.

## Mitigation
Restrict cshrc writes: `chmod 600 ~/.cshrc`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect cshrc tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.004: https://attack.mitre.org/techniques/T1546/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
