---
type: campaign
scenario_id: 45
tactic: Credential Access
technique: "T1552.004: Private Keys"
technique_id: T1552.004
tags: [campaign, lotl, credential_access]
---

# Stealing private keys using certutil from certificate store.

## Threat Description
Stealing private keys using certutil from certificate store.

## Attack Command
```
certutil -store my | findstr PrivateKey > $(echo keys$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor certutil: `wmic process where name='certutil.exe' get commandline | findstr store`; Event ID 4688.

## Mitigation
Restrict certutil: `icacls %windir%\System32\certutil.exe /deny Everyone:RX`; Enable certificate store auditing.

## AI Training Prompt
Train AI to detect certutil key extraction and suggest access controls.

## References
- MITRE ATT&CK T1552.004: https://attack.mitre.org/techniques/T1552/004/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
