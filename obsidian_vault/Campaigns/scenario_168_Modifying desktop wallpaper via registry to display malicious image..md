---
type: campaign
scenario_id: 168
tactic: Impact
technique: "T1491.001: Defacement: Internal Defacement"
technique_id: T1491.001
tags: [campaign, lotl, impact]
---

# Modifying desktop wallpaper via registry to display malicious image.

## Threat Description
Modifying desktop wallpaper via registry to display malicious image.

## Attack Command
```
reg add "HKCU\Control Panel\Desktop" /v Wallpaper /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bmp)" /f && rundll32 user32.dll,UpdatePerUserSystemParameters
```

## Detection Logic
Monitor wallpaper changes: `reg query "HKCU\Control Panel\Desktop" /v Wallpaper`; Event ID 4657.

## Mitigation
Restrict wallpaper writes: `regini -h deny "HKCU\Control Panel\Desktop"`; Audit registry: Event ID 4657.

## AI Training Prompt
Train AI to detect wallpaper defacement and suggest registry protections.

## References
- MITRE ATT&CK T1491.001: https://attack.mitre.org/techniques/T1491/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
