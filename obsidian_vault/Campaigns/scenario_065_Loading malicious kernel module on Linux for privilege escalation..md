---
type: campaign
scenario_id: 65
tactic: Privilege Escalation
technique: "T1547.006: Kernel Modules and Extensions"
technique_id: T1547.006
tags: [campaign, lotl, privilege_escalation]
---

# Loading malicious kernel module on Linux for privilege escalation.

## Threat Description
Loading malicious kernel module on Linux for privilege escalation.

## Attack Command
```
insmod $(echo /tmp/evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).ko)
```

## Detection Logic
Monitor kernel modules: `lsmod | grep evil`; Audit module loading: `auditctl -w /sbin/insmod -p x`.

## Mitigation
Restrict module loading: `echo 'kernel.modules_disabled=1' >> /etc/sysctl.conf`; Require signed modules: `modprobe --require-signatures`.

## AI Training Prompt
Train AI to detect kernel module loading and suggest module restrictions.

## References
- MITRE ATT&CK T1547.006: https://attack.mitre.org/techniques/T1547/006/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
