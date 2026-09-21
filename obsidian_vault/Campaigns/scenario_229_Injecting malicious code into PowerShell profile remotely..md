---
type: campaign
scenario_id: 229
tactic: Persistence
technique: "T1546.013: PowerShell Profile"
technique_id: T1546.013
tags: [campaign, lotl, persistence]
---

# Injecting malicious code into PowerShell profile remotely.

## Threat Description
Injecting malicious code into PowerShell profile remotely.

## Attack Command
```
echo "I$(echo 'malicious' | base64 -w0)" >> http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$PROFILE.CurrentUserAllHosts
```

## Detection Logic
Monitor PowerShell profiles: `Get-Content $PROFILE.CurrentUserAllHosts | findstr http`; Event ID 4663.

## Mitigation
Restrict profile writes: `icacls $PROFILE.CurrentUserAllHosts /deny Everyone:WX`; Block profile downloads: `netsh advfirewall firewall add rule name='Block PowerShell Profile' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote PowerShell profile tampering and suggest firewall rules.

## References
- MITRE ATT&CK T1546.013: https://attack.mitre.org/techniques/T1546/013/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
