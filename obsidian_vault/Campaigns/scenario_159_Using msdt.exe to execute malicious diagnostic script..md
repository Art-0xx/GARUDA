---
type: campaign
scenario_id: 159
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using msdt.exe to execute malicious diagnostic script.

## Threat Description
Using msdt.exe to execute malicious diagnostic script.

## Attack Command
```
msdt /af /skip /path C:\$(echo diag$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).xml) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor msdt: `wmic process where name='msdt.exe' get commandline | findstr xml`; Event ID 4688.

## Mitigation
Restrict msdt: `icacls %windir%\System32\msdt.exe /deny Everyone:RX`; Disable diagnostics: `sc config diagtrack start= disabled`.

## AI Training Prompt
Train AI to detect msdt diagnostic abuse and suggest service restrictions.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
