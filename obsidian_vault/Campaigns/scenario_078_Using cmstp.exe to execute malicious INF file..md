---
type: campaign
scenario_id: 78
tactic: Defense Evasion
technique: "T1218.003: CMSTP"
technique_id: T1218.003
tags: [campaign, lotl, defense_evasion]
---

# Using cmstp.exe to execute malicious INF file.

## Threat Description
Using cmstp.exe to execute malicious INF file.

## Attack Command
```
cmstp /s $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf)
```

## Detection Logic
Monitor cmstp: `wmic process where name='cmstp.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict cmstp: `icacls %windir%\System32\cmstp.exe /deny Everyone:RX`; Disable INF execution: AppLocker.

## AI Training Prompt
Train AI to detect cmstp INF execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.003: https://attack.mitre.org/techniques/T1218/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
