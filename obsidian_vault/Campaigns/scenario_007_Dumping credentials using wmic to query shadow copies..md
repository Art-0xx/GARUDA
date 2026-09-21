---
type: campaign
scenario_id: 7
tactic: Credential Access
technique: "T1003: OS Credential Dumping"
technique_id: T1003
tags: [campaign, lotl, credential_access]
---

# Dumping credentials using wmic to query shadow copies.

## Threat Description
Dumping credentials using wmic to query shadow copies.

## Attack Command
```
wmic shadowcopy call create Volume=$(shuf -n1 /etc/fstab | cut -f1)
```

## Detection Logic
Monitor wmic execution: `wmic process where name='wmic.exe' get commandline`; Event ID 4688.

## Mitigation
Disable WMIC: `sc config winmgmt start= disabled`; Restrict shadow copy access: `vssadmin delete shadows /all /quiet`.

## AI Training Prompt
Train AI to detect wmic-based credential dumping and suggest service restrictions.

## References
- MITRE ATT&CK T1003: https://attack.mitre.org/techniques/T1003/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
