---
type: campaign
scenario_id: 46
tactic: Defense Evasion
technique: "T1553.002: Code Signing"
technique_id: T1553.002
tags: [campaign, lotl, defense_evasion]
---

# Abusing signtool.exe to sign malicious executable with stolen certificate.

## Threat Description
Abusing signtool.exe to sign malicious executable with stolen certificate.

## Attack Command
```
signtool sign /f $(echo stolen$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).pfx) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor signtool: `wmic process where name='signtool.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict signtool: `icacls %windir%\System32\signtool.exe /deny Everyone:RX`; Secure certificate storage: `certutil -store my`.

## AI Training Prompt
Train AI to detect signtool misuse and suggest certificate protections.

## References
- MITRE ATT&CK T1553.002: https://attack.mitre.org/techniques/T1553/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
