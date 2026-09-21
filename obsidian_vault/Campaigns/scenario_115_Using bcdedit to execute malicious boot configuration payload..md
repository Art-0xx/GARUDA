---
type: campaign
scenario_id: 115
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using bcdedit to execute malicious boot configuration payload.

## Threat Description
Using bcdedit to execute malicious boot configuration payload.

## Attack Command
```
bcdedit /set {current} recoveryenabled Yes && bcdedit /set {current} recoverysequence {$(uuidgen)} && bcdedit /set {$(uuidgen)} application osloader path \$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor bcdedit: `wmic process where name='bcdedit.exe' get commandline | findstr recovery`; Event ID 4688.

## Mitigation
Restrict bcdedit: `icacls %windir%\System32\bcdedit.exe /deny Everyone:RX`; Audit boot changes: Event ID 4657.

## AI Training Prompt
Train AI to detect bcdedit boot manipulation and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
