---
type: campaign
scenario_id: 227
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using wevtutil to collect event logs for analysis.

## Threat Description
Using wevtutil to collect event logs for analysis.

## Attack Command
```
wevtutil qe Security /f:text /q:"*[System[(EventID=4624)]]" > $(echo logs$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor wevtutil: `wmic process where name='wevtutil.exe' get commandline | findstr Security`; Event ID 4663.

## Mitigation
Restrict wevtutil: `icacls %windir%\System32\wevtutil.exe /deny Everyone:RX`; Protect event logs: `icacls %windir%\System32\winevt\Logs /deny Everyone:R`.

## AI Training Prompt
Train AI to detect wevtutil log collection and suggest log protections.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
