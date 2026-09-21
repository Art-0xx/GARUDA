---
type: campaign
scenario_id: 275
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta.exe to execute malicious JavaScript locally.

## Threat Description
Using mshta.exe to execute malicious JavaScript locally.

## Attack Command
```
mshta javascript:Execute("new ActiveXObject('WScript.Shell').Run('powershell -c ''I$(echo malicious | base64 -w0)''');close()")
```

## Detection Logic
Monitor mshta JavaScript: `wmic process where name='mshta.exe' get commandline | findstr javascript`; YARA rule: `rule MshtaLocalJS { strings: $a = /mshta.*javascript/ nocase; condition: $a }`.

## Mitigation
Restrict mshta: `icacls %windir%\System32\mshta.exe /deny Everyone:RX`; Block JavaScript execution: AppLocker.

## AI Training Prompt
Train AI to detect mshta JavaScript execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
