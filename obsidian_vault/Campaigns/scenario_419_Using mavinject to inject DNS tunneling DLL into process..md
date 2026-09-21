---
type: campaign
scenario_id: 419
tactic: Defense Evasion
technique: "T1218.013: Mavinject"
technique_id: T1218.013
tags: [campaign, lotl, defense_evasion]
---

# Using mavinject to inject DNS tunneling DLL into process.

## Threat Description
Using mavinject to inject DNS tunneling DLL into process.

## Attack Command
```
mavinject $(tasklist | findstr notepad | awk '{print $2}') /INJECTRUNNING "C:\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor mavinject: `wmic process where name='mavinject.exe' get commandline | findstr dll`; YARA rule: `rule MavinjectDnsTunnel { strings: $a = /mavinject.*dll/ nocase; condition: $a }`.

## Mitigation
Restrict mavinject: `icacls %windir%\System32\mavinject.exe /deny Everyone:RX`; Block DLL injection: `netsh advfirewall firewall add rule name='Block mavinject' dir=out program='%windir%\System32\mavinject.exe' action=block`.

## AI Training Prompt
Train AI to detect mavinject-based DNS tunneling DLL injection by analyzing DLL paths, mavinject command-line arguments, and DNS query patterns; suggest DLL injection restrictions.

## References
- MITRE ATT&CK T1218.013: https://attack.mitre.org/techniques/T1218/013/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
