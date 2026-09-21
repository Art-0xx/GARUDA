---
type: campaign
scenario_id: 5
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using cmd.exe to execute obfuscated commands for payload delivery.

## Threat Description
Using cmd.exe to execute obfuscated commands for payload delivery.

## Attack Command
```
cmd /c "set x=$(for /l %i in (1,1,100) do echo.)&call %x%&&powershell -c I$(echo 'malicious' | base64 -w0)"
```

## Detection Logic
Monitor cmd.exe with unusual arguments: `wmic process where name='cmd.exe' get commandline`; YARA rule: `rule ObfuscatedCmd { strings: $a = /cmd.*call.*powershell/ nocase; condition: $a }`

## Mitigation
Restrict cmd.exe execution: `AppLocker policy to deny cmd.exe for non-admins`; Enable command-line logging.

## AI Training Prompt
Train AI to detect obfuscated cmd.exe commands and suggest AppLocker restrictions.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
