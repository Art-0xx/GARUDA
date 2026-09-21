---
type: campaign
scenario_id: 19
tactic: Privilege Escalation
technique: "T1134: Access Token Manipulation"
technique_id: T1134
tags: [campaign, lotl, privilege_escalation]
---

# Manipulating access tokens using PowerShell to escalate privileges.

## Threat Description
Manipulating access tokens using PowerShell to escalate privileges.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; [Security.Principal.WindowsIdentity]::GetCurrent().AccessToken | % { [Security.Principal.WindowsIdentity]::Impersonate($_) }"
```

## Detection Logic
Monitor token manipulation: `sysmon -c token_access`; Event ID 4692.

## Mitigation
Enable token auditing: `auditpol /set /category:"System" /subcategory:"Security System Extension" /success:enable`; Use EDR for token abuse detection.

## AI Training Prompt
Train AI to detect token manipulation and suggest auditing.

## References
- MITRE ATT&CK T1134: https://attack.mitre.org/techniques/T1134/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
