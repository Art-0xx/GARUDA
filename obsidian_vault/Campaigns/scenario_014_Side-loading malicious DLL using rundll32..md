---
type: campaign
scenario_id: 14
tactic: Persistence
technique: "T1574.002: DLL Side-Loading"
technique_id: T1574.002
tags: [campaign, lotl, persistence]
---

# Side-loading malicious DLL using rundll32.

## Threat Description
Side-loading malicious DLL using rundll32.

## Attack Command
```
rundll32 $(echo legit$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll),EvilFunction
```

## Detection Logic
Monitor rundll32: `wmic process where name='rundll32.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Use signed DLLs only: AppLocker.

## AI Training Prompt
Train AI to detect DLL side-loading and suggest AppLocker policies.

## References
- MITRE ATT&CK T1574.002: https://attack.mitre.org/techniques/T1574/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
