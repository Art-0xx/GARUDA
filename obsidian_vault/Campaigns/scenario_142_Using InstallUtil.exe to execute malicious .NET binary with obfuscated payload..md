---
type: campaign
scenario_id: 142
tactic: Defense Evasion
technique: "T1218.004: InstallUtil"
technique_id: T1218.004
tags: [campaign, lotl, defense_evasion]
---

# Using InstallUtil.exe to execute malicious .NET binary with obfuscated payload.

## Threat Description
Using InstallUtil.exe to execute malicious .NET binary with obfuscated payload.

## Attack Command
```
InstallUtil /logfile= /LogToConsole=false /U $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor InstallUtil: `wmic process where name='InstallUtil.exe' get commandline | findstr LogToConsole`; YARA rule: `rule InstallUtilObf { strings: $a = /InstallUtil.*LogToConsole/ nocase; condition: $a }`

## Mitigation
Restrict InstallUtil: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe /deny Everyone:RX`; Use AppLocker for .NET binaries.

## AI Training Prompt
Train AI to detect InstallUtil obfuscated execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.004: https://attack.mitre.org/techniques/T1218/004/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
