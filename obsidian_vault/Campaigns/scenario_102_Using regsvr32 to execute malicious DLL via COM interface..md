---
type: campaign
scenario_id: 102
tactic: Defense Evasion
technique: "T1218.010: Regsvr32"
technique_id: T1218.010
tags: [campaign, lotl, defense_evasion]
---

# Using regsvr32 to execute malicious DLL via COM interface.

## Threat Description
Using regsvr32 to execute malicious DLL via COM interface.

## Attack Command
```
regsvr32 /s /i:COM $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor regsvr32 COM: `wmic process where name='regsvr32.exe' get commandline | findstr COM`; YARA rule: `rule Regsvr32COM { strings: $a = /regsvr32.*COM/ nocase; condition: $a }`

## Mitigation
Restrict regsvr32: `icacls %windir%\System32\regsvr32.exe /deny Everyone:RX`; Use AppLocker to block unsigned DLLs.

## AI Training Prompt
Train AI to detect regsvr32 COM execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.010: https://attack.mitre.org/techniques/T1218/010/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
