---
type: campaign
scenario_id: 118
tactic: Defense Evasion
technique: "T1218.003: CMSTP"
technique_id: T1218.003
tags: [campaign, lotl, defense_evasion]
---

# Using cmstp.exe to execute malicious INF file with obfuscated payload.

## Threat Description
Using cmstp.exe to execute malicious INF file with obfuscated payload.

## Attack Command
```
cmstp /ni /s $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor cmstp: `wmic process where name='cmstp.exe' get commandline | findstr inf`; YARA rule: `rule CmstpInf { strings: $a = /cmstp.*inf/ nocase; condition: $a }`

## Mitigation
Restrict cmstp: `icacls %windir%\System32\cmstp.exe /deny Everyone:RX`; Disable INF execution: AppLocker.

## AI Training Prompt
Train AI to detect cmstp INF execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.003: https://attack.mitre.org/techniques/T1218/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
