---
type: campaign
scenario_id: 242
tactic: Collection
technique: "T1119: Automated Collection"
technique_id: T1119
tags: [campaign, lotl, collection]
---

# Using fsutil to collect file system metadata.

## Threat Description
Using fsutil to collect file system metadata.

## Attack Command
```
fsutil fsinfo ntfsinfo C: > $(echo fs$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor fsutil: `wmic process where name='fsutil.exe' get commandline | findstr fsinfo`; Event ID 4663.

## Mitigation
Restrict fsutil: `icacls %windir%\System32\fsutil.exe /deny Everyone:RX`; Audit file system access: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect fsutil metadata collection and suggest file system auditing.

## References
- MITRE ATT&CK T1119: https://attack.mitre.org/techniques/T1119/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
