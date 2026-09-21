---
type: campaign
scenario_id: 145
tactic: Credential Access
technique: "T1003.008: /etc/passwd and /etc/shadow"
technique_id: T1003.008
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from /etc/shadow using cat.

## Threat Description
Extracting credentials from /etc/shadow using cat.

## Attack Command
```
cat /etc/shadow | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo creds$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor shadow access: `ps aux | grep cat | grep shadow`; Audit file access: `auditctl -w /etc/shadow -p r`.

## Mitigation
Restrict shadow access: `chmod 600 /etc/shadow`; Enable file auditing: `auditctl -w /etc/shadow -p wa`.

## AI Training Prompt
Train AI to detect shadow file access and suggest file protections.

## References
- MITRE ATT&CK T1003.008: https://attack.mitre.org/techniques/T1003/008/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
