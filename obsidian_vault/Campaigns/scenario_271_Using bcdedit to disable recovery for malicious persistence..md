---
type: campaign
scenario_id: 271
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using bcdedit to disable recovery for malicious persistence.

## Threat Description
Using bcdedit to disable recovery for malicious persistence.

## Attack Command
```
bcdedit /set {default} recoveryenabled no
```

## Detection Logic
Monitor bcdedit: `wmic process where name='bcdedit.exe' get commandline | findstr recoveryenabled`; Event ID 4688.

## Mitigation
Restrict bcdedit: `icacls %windir%\System32\bcdedit.exe /deny Everyone:RX`; Audit boot configuration: `auditpol /set /subcategory:'System' /success:enable`.

## AI Training Prompt
Train AI to detect bcdedit recovery tampering and suggest boot auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
