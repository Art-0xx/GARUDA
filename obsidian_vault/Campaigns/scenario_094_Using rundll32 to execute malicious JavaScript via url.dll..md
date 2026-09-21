---
type: campaign
scenario_id: 94
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 to execute malicious JavaScript via url.dll.

## Threat Description
Using rundll32 to execute malicious JavaScript via url.dll.

## Attack Command
```
rundll32 url.dll,OpenURL "javascript:evil($(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))"
```

## Detection Logic
Monitor rundll32 JavaScript: `wmic process where name='rundll32.exe' get commandline | findstr javascript`; YARA rule: `rule Rundll32JS { strings: $a = /rundll32.*javascript/ nocase; condition: $a }`

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Disable JavaScript execution: AppLocker.

## AI Training Prompt
Train AI to detect rundll32 JavaScript execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
