---
type: campaign
scenario_id: 35
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using pnputil.exe to load malicious driver for code execution.

## Threat Description
Using pnputil.exe to load malicious driver for code execution.

## Attack Command
```
pnputil /add-driver $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).inf) /install
```

## Detection Logic
Monitor pnputil: `wmic process where name='pnputil.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict pnputil: `icacls %windir%\System32\pnputil.exe /deny Everyone:RX`; Require signed drivers: `bcdedit /set testsigning off`.

## AI Training Prompt
Train AI to detect pnputil driver loading and suggest driver signing enforcement.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
