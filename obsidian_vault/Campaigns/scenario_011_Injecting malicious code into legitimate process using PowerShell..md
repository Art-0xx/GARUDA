---
type: campaign
scenario_id: 11
tactic: Privilege Escalation
technique: "T1055: Process Injection"
technique_id: T1055
tags: [campaign, lotl, privilege_escalation]
---

# Injecting malicious code into legitimate process using PowerShell.

## Threat Description
Injecting malicious code into legitimate process using PowerShell.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; [Reflection.Assembly]::Load([Convert]::FromBase64String('payload')).GetType('Injector').GetMethod('Inject').Invoke($null, @($pid))"
```

## Detection Logic
Monitor process injection: `sysmon -c process_access`; Event ID 10.

## Mitigation
Enable process access auditing: `auditpol /set /category:"Detailed Tracking" /success:enable`; Use EDR to detect injection patterns.

## AI Training Prompt
Train AI to detect process injection via PowerShell and suggest auditing.

## References
- MITRE ATT&CK T1055: https://attack.mitre.org/techniques/T1055/
- CWE-94: https://cwe.mitre.org/data/definitions/94.html
