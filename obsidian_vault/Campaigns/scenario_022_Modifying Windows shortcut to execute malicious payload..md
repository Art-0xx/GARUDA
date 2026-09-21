---
type: campaign
scenario_id: 22
tactic: Persistence
technique: "T1547.009: Shortcut Modification"
technique_id: T1547.009
tags: [campaign, lotl, persistence]
---

# Modifying Windows shortcut to execute malicious payload.

## Threat Description
Modifying Windows shortcut to execute malicious payload.

## Attack Command
```
copy %appdata%\Microsoft\Windows\Start Menu\Programs\Startup\$(echo shortcut$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).lnk) /v TargetPath /t REG_SZ /d "powershell -c 'I$(echo payload | base64 -w0)'"
```

## Detection Logic
Monitor shortcut changes: `dir %appdata%\Microsoft\Windows\Start Menu\Programs\Startup /a`; Event ID 4657.

## Mitigation
Restrict shortcut writes: `icacls %appdata%\Microsoft\Windows\Start Menu\Programs\Startup /deny Everyone:WX`; Enable file auditing.

## AI Training Prompt
Train AI to detect shortcut modifications and suggest access controls.

## References
- MITRE ATT&CK T1547.009: https://attack.mitre.org/techniques/T1547/009/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
