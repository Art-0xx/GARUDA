---
type: campaign
scenario_id: 187
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using nbtstat.exe to execute malicious script via network reconnaissance.

## Threat Description
Using nbtstat.exe to execute malicious script via network reconnaissance.

## Attack Command
```
nbtstat -A $(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3) && cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)
```

## Detection Logic
Monitor nbtstat: `wmic process where name='nbtstat.exe' get commandline | findstr -A`; Event ID 4688.

## Mitigation
Restrict nbtstat: `icacls %windir%\System32\nbtstat.exe /deny Everyone:RX`; Monitor network activity: `netsh advfirewall firewall add rule name='Log NBT' dir=out action=allow enable=yes`.

## AI Training Prompt
Train AI to detect nbtstat abuse and suggest network monitoring.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
