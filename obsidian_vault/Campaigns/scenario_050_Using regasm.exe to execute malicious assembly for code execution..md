---
type: campaign
scenario_id: 50
tactic: Defense Evasion
technique: "T1218.009: Regasm"
technique_id: T1218.009
tags: [campaign, lotl, defense_evasion]
---

# Using regasm.exe to execute malicious assembly for code execution.

## Threat Description
Using regasm.exe to execute malicious assembly for code execution.

## Attack Command
```
regasm /codebase $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor regasm: `wmic process where name='regasm.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict regasm: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\regasm.exe /deny Everyone:RX`; Use AppLocker for assemblies.

## AI Training Prompt
Train AI to detect regasm assembly execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.009: https://attack.mitre.org/techniques/T1218/009/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
