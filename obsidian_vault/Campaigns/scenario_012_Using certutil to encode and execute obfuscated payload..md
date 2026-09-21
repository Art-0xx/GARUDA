---
type: campaign
scenario_id: 12
tactic: Defense Evasion
technique: "T1027: Obfuscated Files or Information"
technique_id: T1027
tags: [campaign, lotl, defense_evasion]
---

# Using certutil to encode and execute obfuscated payload.

## Threat Description
Using certutil to encode and execute obfuscated payload.

## Attack Command
```
certutil -encode $(echo payload.exe) $(echo temp$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) && certutil -decode $(echo temp$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) payload.exe && start payload.exe
```

## Detection Logic
Monitor certutil: `wmic process where name='certutil.exe' get commandline`; YARA rule: `rule CertutilObfuscation { strings: $a = /certutil.*-encode.*-decode/ nocase; condition: $a }`

## Mitigation
Restrict certutil: `icacls %windir%\System32\certutil.exe /deny Everyone:RX`; Monitor file creation: Event ID 11.

## AI Training Prompt
Train AI to detect certutil obfuscation and suggest access restrictions.

## References
- MITRE ATT&CK T1027: https://attack.mitre.org/techniques/T1027/
- CWE-523: https://cwe.mitre.org/data/definitions/523.html
