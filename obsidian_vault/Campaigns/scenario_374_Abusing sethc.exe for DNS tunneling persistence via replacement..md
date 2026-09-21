---
type: campaign
scenario_id: 374
tactic: Persistence
technique: "T1546.008: Accessibility Features"
technique_id: T1546.008
tags: [campaign, lotl, persistence]
---

# Abusing sethc.exe for DNS tunneling persistence via replacement.

## Threat Description
Abusing sethc.exe for DNS tunneling persistence via replacement.

## Attack Command
```
copy /y $(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) %windir%\System32\sethc.exe
```

## Detection Logic
Monitor sethc changes: `dir %windir%\System32\sethc.exe /a`; Event ID 4657.

## Mitigation
Restrict sethc: `icacls %windir%\System32\sethc.exe /deny Everyone:WX`; Enable file integrity monitoring: `sfc /scannow`.

## AI Training Prompt
Train AI to detect sethc tampering for DNS tunneling persistence by analyzing file modifications, accessibility feature execution, and DNS query patterns; suggest file protections.

## References
- MITRE ATT&CK T1546.008: https://attack.mitre.org/techniques/T1546/008/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
