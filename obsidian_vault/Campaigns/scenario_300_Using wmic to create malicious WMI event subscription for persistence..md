---
type: campaign
scenario_id: 300
tactic: Persistence
technique: "T1546.003: Windows Management Instrumentation Event Subscription"
technique_id: T1546.003
tags: [campaign, lotl, persistence]
---

# Using wmic to create malicious WMI event subscription for persistence.

## Threat Description
Using wmic to create malicious WMI event subscription for persistence.

## Attack Command
```
wmic /NAMESPACE:\\root\subscription PATH __EventFilter CREATE Name="$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)",Query="SELECT * FROM __InstanceCreationEvent WITHIN 60 WHERE TargetInstance ISA 'Win32_Process' AND TargetInstance.Name='$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)'"
```

## Detection Logic
Monitor WMI subscriptions: `wmic /NAMESPACE:\\root\subscription PATH __EventFilter GET /FORMAT:LIST | findstr evil`; Event ID 5861.

## Mitigation
Restrict WMI: `icacls %windir%\System32\wbem\wmic.exe /deny Everyone:RX`; Audit WMI changes: `auditpol /set /subcategory:'Other Object Access Events' /success:enable`.

## AI Training Prompt
Train AI to detect WMI event subscription tampering and suggest auditing.

## References
- MITRE ATT&CK T1546.003: https://attack.mitre.org/techniques/T1546/003/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
