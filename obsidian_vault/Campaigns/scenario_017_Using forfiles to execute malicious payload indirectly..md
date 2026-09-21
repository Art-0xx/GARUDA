---
type: campaign
scenario_id: 17
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using forfiles to execute malicious payload indirectly.

## Threat Description
Using forfiles to execute malicious payload indirectly.

## Attack Command
```
forfiles /p c:\windows /s /m *.exe /c "cmd /c powershell -c I$(echo payload | base64 -w0)"
```

## Detection Logic
Monitor forfiles: `wmic process where name='forfiles.exe' get commandline`; YARA rule: `rule ForfilesExec { strings: $a = /forfiles.*powershell/ nocase; condition: $a }`

## Mitigation
Restrict forfiles: `icacls %windir%\System32\forfiles.exe /deny Everyone:RX`; Monitor command execution: Event ID 4688.

## AI Training Prompt
Train AI to detect forfiles-based execution and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
