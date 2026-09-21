---
type: campaign
scenario_id: 15
tactic: Credential Access
technique: "T1555: Credentials from Password Stores"
technique_id: T1555
tags: [campaign, lotl, credential_access]
---

# Extracting credentials from Windows Credential Manager using vaultcmd.

## Threat Description
Extracting credentials from Windows Credential Manager using vaultcmd.

## Attack Command
```
vaultcmd /listcreds:"Windows Credentials" /all $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor vaultcmd: `wmic process where name='vaultcmd.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict vaultcmd: `icacls %windir%\System32\vaultcmd.exe /deny Everyone:RX`; Enable credential guard: `DeviceGuard`.

## AI Training Prompt
Train AI to detect vaultcmd credential extraction and suggest access controls.

## References
- MITRE ATT&CK T1555: https://attack.mitre.org/techniques/T1555/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
