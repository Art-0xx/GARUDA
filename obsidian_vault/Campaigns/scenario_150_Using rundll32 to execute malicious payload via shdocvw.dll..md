---
type: campaign
scenario_id: 150
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 to execute malicious payload via shdocvw.dll.

## Threat Description
Using rundll32 to execute malicious payload via shdocvw.dll.

## Attack Command
```
rundll32 shdocvw.dll,OpenURL "$(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).html) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor rundll32 shdocvw: `wmic process where name='rundll32.exe' get commandline | findstr shdocvw`; YARA rule: `rule Rundll32Shdocvw { strings: $a = /rundll32.*shdocvw/ nocase; condition: $a }`

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Use AppLocker to block shdocvw execution.

## AI Training Prompt
Train AI to detect rundll32 shdocvw execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
