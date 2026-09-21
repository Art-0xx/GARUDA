---
type: campaign
scenario_id: 171
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using arp.exe to execute malicious script via network reconnaissance.

## Threat Description
Using arp.exe to execute malicious script via network reconnaissance.

## Attack Command
```
arp -a | findstr $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) && cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)
```

## Detection Logic
Monitor arp: `wmic process where name='arp.exe' get commandline | findstr findstr`; Event ID 4688.

## Mitigation
Restrict arp: `icacls %windir%\System32\arp.exe /deny Everyone:RX`; Monitor network activity: `netsh advfirewall firewall add rule name='Log ARP' dir=out action=allow enable=yes`.

## AI Training Prompt
Train AI to detect arp.exe abuse and suggest network monitoring.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
