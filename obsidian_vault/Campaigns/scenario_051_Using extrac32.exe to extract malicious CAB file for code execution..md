---
type: campaign
scenario_id: 51
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using extrac32.exe to extract malicious CAB file for code execution.

## Threat Description
Using extrac32.exe to extract malicious CAB file for code execution.

## Attack Command
```
extrac32 $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cab) /Y
```

## Detection Logic
Monitor extrac32: `wmic process where name='extrac32.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict extrac32: `icacls %windir%\System32\extrac32.exe /deny Everyone:RX`; Monitor CAB file extraction.

## AI Training Prompt
Train AI to detect extrac32 CAB extraction and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
