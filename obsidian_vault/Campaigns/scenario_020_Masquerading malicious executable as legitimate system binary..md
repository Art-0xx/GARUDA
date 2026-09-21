---
type: campaign
scenario_id: 20
tactic: Defense Evasion
technique: "T1036: Masquerading"
technique_id: T1036
tags: [campaign, lotl, defense_evasion]
---

# Masquerading malicious executable as legitimate system binary.

## Threat Description
Masquerading malicious executable as legitimate system binary.

## Attack Command
```
copy $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) %windir%\System32\notepad.exe
```

## Detection Logic
Monitor file replacements: `dir %windir%\System32\notepad.exe /a`; Event ID 4657.

## Mitigation
Enable file integrity: `sfc /scannow`; Restrict System32 writes: `icacls %windir%\System32 /deny Everyone:WX`.

## AI Training Prompt
Train AI to detect binary masquerading and suggest integrity checks.

## References
- MITRE ATT&CK T1036: https://attack.mitre.org/techniques/T1036/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
