---
type: campaign
scenario_id: 18
tactic: Persistence
technique: "T1546.008: Accessibility Features"
technique_id: T1546.008
tags: [campaign, lotl, persistence]
---

# Using sticky keys for persistence via sethc.exe replacement.

## Threat Description
Using sticky keys for persistence via sethc.exe replacement.

## Attack Command
```
copy /y $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) %windir%\System32\sethc.exe
```

## Detection Logic
Monitor sethc.exe changes: `dir %windir%\System32\sethc.exe /a`; Event ID 4657.

## Mitigation
Restrict sethc.exe: `icacls %windir%\System32\sethc.exe /deny Everyone:WX`; Enable file integrity monitoring.

## AI Training Prompt
Train AI to detect sethc.exe tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.008: https://attack.mitre.org/techniques/T1546/008/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
