---
type: campaign
scenario_id: 104
tactic: Persistence
technique: "T1547.009: Shortcut Modification"
technique_id: T1547.009
tags: [campaign, lotl, persistence]
---

# Modifying RDP shortcut to execute malicious payload.

## Threat Description
Modifying RDP shortcut to execute malicious payload.

## Attack Command
```
copy %appdata%\Microsoft\Windows\Start Menu\Programs\Accessories\Remote Desktop Connection.lnk %temp%\$(echo rdp$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).lnk) && reg add HKCU\Software\Microsoft\Terminal Server Client /v Default /t REG_SZ /d "powershell -c 'I$(echo malicious | base64 -w0)'"
```

## Detection Logic
Monitor shortcut changes: `dir %appdata%\Microsoft\Windows\Start Menu\Programs\Accessories\*.lnk /a`; Event ID 4657.

## Mitigation
Restrict shortcut writes: `icacls %appdata%\Microsoft\Windows\Start Menu\Programs /deny Everyone:WX`; Audit RDP configurations.

## AI Training Prompt
Train AI to detect RDP shortcut modifications and suggest access controls.

## References
- MITRE ATT&CK T1547.009: https://attack.mitre.org/techniques/T1547/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
