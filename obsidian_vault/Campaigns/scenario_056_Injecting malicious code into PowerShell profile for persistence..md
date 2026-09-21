---
type: campaign
scenario_id: 56
tactic: Persistence
technique: "T1546.013: PowerShell Profile"
technique_id: T1546.013
tags: [campaign, lotl, persistence]
---

# Injecting malicious code into PowerShell profile for persistence.

## Threat Description
Injecting malicious code into PowerShell profile for persistence.

## Attack Command
```
echo "I$(echo 'malicious' | base64 -w0)" >> $PROFILE.CurrentUserAllHosts
```

## Detection Logic
Monitor PowerShell profiles: `Get-Content $PROFILE.CurrentUserAllHosts`; File change events: Event ID 4663.

## Mitigation
Restrict profile writes: `icacls $PROFILE.CurrentUserAllHosts /deny Everyone:WX`; Monitor profile modifications.

## AI Training Prompt
Train AI to detect PowerShell profile tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.013: https://attack.mitre.org/techniques/T1546/013/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
