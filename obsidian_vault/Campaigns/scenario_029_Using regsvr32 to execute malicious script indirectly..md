---
type: campaign
scenario_id: 29
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using regsvr32 to execute malicious script indirectly.

## Threat Description
Using regsvr32 to execute malicious script indirectly.

## Attack Command
```
regsvr32 /s /u $(echo script$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sct) "javascript:evil()"
```

## Detection Logic
Monitor regsvr32: `wmic process where name='regsvr32.exe' get commandline`; YARA rule: `rule Regsvr32Exec { strings: $a = /regsvr32.*javascript/ nocase; condition: $a }`

## Mitigation
Restrict regsvr32: `icacls %windir%\System32\regsvr32.exe /deny Everyone:RX`; Use AppLocker to block SCT files.

## AI Training Prompt
Train AI to detect regsvr32 script execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
