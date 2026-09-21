---
type: campaign
scenario_id: 320
tactic: Persistence
technique: "T1546.008: Accessibility Features"
technique_id: T1546.008
tags: [campaign, lotl, persistence]
---

# Abusing osk.exe for persistence via replacement.

## Threat Description
Abusing osk.exe for persistence via replacement.

## Attack Command
```
copy /y $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) %windir%\System32\osk.exe
```

## Detection Logic
Monitor osk changes: `dir %windir%\System32\osk.exe /a`; Event ID 4657.

## Mitigation
Restrict osk: `icacls %windir%\System32\osk.exe /deny Everyone:WX`; Enable file integrity monitoring: `sfc /scannow`.

## AI Training Prompt
Train AI to detect osk tampering and suggest file protections.

## References
- MITRE ATT&CK T1546.008: https://attack.mitre.org/techniques/T1546/008/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
