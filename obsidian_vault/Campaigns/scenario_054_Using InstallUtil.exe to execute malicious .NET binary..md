---
type: campaign
scenario_id: 54
tactic: Defense Evasion
technique: "T1218.004: InstallUtil"
technique_id: T1218.004
tags: [campaign, lotl, defense_evasion]
---

# Using InstallUtil.exe to execute malicious .NET binary.

## Threat Description
Using InstallUtil.exe to execute malicious .NET binary.

## Attack Command
```
InstallUtil /U $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor InstallUtil: `wmic process where name='InstallUtil.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict InstallUtil: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe /deny Everyone:RX`; Use AppLocker for .NET binaries.

## AI Training Prompt
Train AI to detect InstallUtil execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.004: https://attack.mitre.org/techniques/T1218/004/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
