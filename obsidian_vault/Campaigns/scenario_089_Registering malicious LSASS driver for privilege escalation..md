---
type: campaign
scenario_id: 89
tactic: Privilege Escalation
technique: "T1547.008: LSASS Driver"
technique_id: T1547.008
tags: [campaign, lotl, privilege_escalation]
---

# Registering malicious LSASS driver for privilege escalation.

## Threat Description
Registering malicious LSASS driver for privilege escalation.

## Attack Command
```
sc create $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) binpath= "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sys)" type= kernel
```

## Detection Logic
Monitor LSASS driver: `sc query | findstr kernel`; Event ID 7045.

## Mitigation
Restrict driver creation: `icacls %windir%\System32\sc.exe /deny Everyone:RX`; Require signed drivers: `bcdedit /set testsigning off`.

## AI Training Prompt
Train AI to detect LSASS driver registrations and suggest driver signing.

## References
- MITRE ATT&CK T1547.008: https://attack.mitre.org/techniques/T1547/008/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
