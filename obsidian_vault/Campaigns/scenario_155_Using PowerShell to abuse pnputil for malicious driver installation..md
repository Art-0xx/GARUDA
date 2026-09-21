---
type: campaign
scenario_id: 155
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse pnputil for malicious driver installation.

## Threat Description
Using PowerShell to abuse pnputil for malicious driver installation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; pnputil /add-driver C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf) /install"
```

## Detection Logic
Monitor pnputil: `wmic process where name='pnputil.exe' get commandline | findstr add-driver`; Event ID 4688.

## Mitigation
Restrict pnputil: `icacls %windir%\System32\pnputil.exe /deny Everyone:RX`; Require driver signing: `bcdedit /set testsigning off`.

## AI Training Prompt
Train AI to detect pnputil driver installation and suggest driver signing enforcement.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
