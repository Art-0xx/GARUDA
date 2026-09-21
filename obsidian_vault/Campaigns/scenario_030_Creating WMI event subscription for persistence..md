---
type: campaign
scenario_id: 30
tactic: Persistence
technique: "T1546.003: Windows Management Instrumentation Event Subscription"
technique_id: T1546.003
tags: [campaign, lotl, persistence]
---

# Creating WMI event subscription for persistence.

## Threat Description
Creating WMI event subscription for persistence.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Register-WmiEvent -Query 'SELECT * FROM __InstanceCreationEvent WHERE TargetInstance ISA "Win32_Process"' -Action { powershell -c 'I$(echo payload | base64 -w0)' }"
```

## Detection Logic
Monitor WMI subscriptions: `Get-WmiObject -Namespace root\subscription -Class __EventConsumer`; Event ID 5861.

## Mitigation
Restrict WMI subscriptions: `netsh advfirewall firewall add rule name='Block WMI' dir=in action=block service=winmgmt`; Enable WMI auditing.

## AI Training Prompt
Train AI to detect WMI event subscriptions and suggest firewall rules.

## References
- MITRE ATT&CK T1546.003: https://attack.mitre.org/techniques/T1546/003/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
