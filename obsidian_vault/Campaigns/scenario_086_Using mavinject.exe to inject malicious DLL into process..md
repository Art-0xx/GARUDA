---
type: campaign
scenario_id: 86
tactic: Defense Evasion
technique: "T1218.013: Mavinject"
technique_id: T1218.013
tags: [campaign, lotl, defense_evasion]
---

# Using mavinject.exe to inject malicious DLL into process.

## Threat Description
Using mavinject.exe to inject malicious DLL into process.

## Attack Command
```
mavinject $(tasklist | findstr /i notepad | awk '{print $2}') /INJECTRUNNING $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor mavinject: `wmic process where name='mavinject.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict mavinject: `icacls %windir%\System32\mavinject.exe /deny Everyone:RX`; Monitor process injections: Sysmon Event ID 10.

## AI Training Prompt
Train AI to detect mavinject DLL injection and suggest access controls.

## References
- MITRE ATT&CK T1218.013: https://attack.mitre.org/techniques/T1218/013/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
