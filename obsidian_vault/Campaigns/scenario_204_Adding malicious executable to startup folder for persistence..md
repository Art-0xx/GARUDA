---
type: campaign
scenario_id: 204
tactic: Persistence
technique: "T1547.001: Registry Run Keys / Startup Folder"
technique_id: T1547.001
tags: [campaign, lotl, persistence]
---

# Adding malicious executable to startup folder for persistence.

## Threat Description
Adding malicious executable to startup folder for persistence.

## Attack Command
```
copy $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\$(echo startup$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor startup folder: `dir "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup" | findstr exe`; Event ID 4657.

## Mitigation
Restrict startup folder writes: `icacls "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup" /deny Everyone:WX`; Audit file changes: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect startup folder tampering and suggest file protections.

## References
- MITRE ATT&CK T1547.001: https://attack.mitre.org/techniques/T1547/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
