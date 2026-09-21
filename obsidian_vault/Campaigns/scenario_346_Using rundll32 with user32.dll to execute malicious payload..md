---
type: campaign
scenario_id: 346
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 with user32.dll to execute malicious payload.

## Threat Description
Using rundll32 with user32.dll to execute malicious payload.

## Attack Command
```
rundll32 user32.dll,MessageBoxTimeoutA 0 "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" "Title" 0x40000 5000
```

## Detection Logic
Monitor rundll32 user32: `wmic process where name='rundll32.exe' get commandline | findstr user32`; YARA rule: `rule Rundll32User32 { strings: $a = /rundll32.*user32.*http/ nocase; condition: $a }`.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Block user32 execution: AppLocker.

## AI Training Prompt
Train AI to detect rundll32 user32 execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
