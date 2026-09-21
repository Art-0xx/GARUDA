---
type: campaign
scenario_id: 110
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 to execute malicious payload via shell32.dll.

## Threat Description
Using rundll32 to execute malicious payload via shell32.dll.

## Attack Command
```
rundll32 shell32.dll,ShellExec_RunDLL "powershell -c 'I$(echo malicious | base64 -w0)'"
```

## Detection Logic
Monitor rundll32 shell32: `wmic process where name='rundll32.exe' get commandline | findstr shell32`; YARA rule: `rule Rundll32Shell { strings: $a = /rundll32.*shell32.*ShellExec/ nocase; condition: $a }`

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Use AppLocker to block shell32 execution.

## AI Training Prompt
Train AI to detect rundll32 shell32 execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
