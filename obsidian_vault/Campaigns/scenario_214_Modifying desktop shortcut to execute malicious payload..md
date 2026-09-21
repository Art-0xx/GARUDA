---
type: campaign
scenario_id: 214
tactic: Persistence
technique: "T1547.009: Shortcut Modification"
technique_id: T1547.009
tags: [campaign, lotl, persistence]
---

# Modifying desktop shortcut to execute malicious payload.

## Threat Description
Modifying desktop shortcut to execute malicious payload.

## Attack Command
```
copy %userprofile%\Desktop\*.lnk %temp%\$(echo lnk$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).lnk) && reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders /v Desktop /t REG_SZ /d "powershell -c 'I$(echo malicious | base64 -w0)'"
```

## Detection Logic
Monitor shortcut changes: `dir %userprofile%\Desktop\*.lnk /a`; Event ID 4657.

## Mitigation
Restrict shortcut writes: `icacls %userprofile%\Desktop /deny Everyone:WX`; Audit shortcut modifications: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect desktop shortcut tampering and suggest file protections.

## References
- MITRE ATT&CK T1547.009: https://attack.mitre.org/techniques/T1547/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
