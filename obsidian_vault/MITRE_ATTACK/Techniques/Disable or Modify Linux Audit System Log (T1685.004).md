---
mitre_data:
  id: T1685.004
  linker_tags:
  - mitre/attack/linker/defense_impairment/disable_or_modify_linux_audit_system_log
  name: Disable or Modify Linux Audit System Log
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Disable or Modify Linux Audit System Log (`T1685.004`)

Adversaries may disable or modify the Linux Audit system to hide malicious activity and avoid detection. Linux admins use the Linux Audit system to track security-relevant information on a system. The Linux Audit system operates at the kernel-level and maintains event logs on application and system activity such as process, network, file, and login events based on pre-configured rules. 

Often referred to as `auditd`, this is the name of the daemon used to write events to disk and is governed by the parameters set in the `audit.conf` configuration file. Two primary ways to configure the log generation rules are through the command line `auditctl` utility and the file `/etc/audit/audit.rules`, containing a sequence of `auditctl` commands loaded at boot time.[^fn1][^fn3]

With root privileges, adversaries may be able to ensure their activity is not logged through disabling the Audit system service, editing the configuration/rule files, or by hooking the Audit system library functions. Using the command line, adversaries can disable the Audit system service through killing processes associated with `auditd` daemon or use `systemctl` to stop the Audit service. Adversaries can also hook Audit system functions to disable logging or modify the rules contained in the `/etc/audit/audit.rules` or `audit.conf` files to ignore malicious activity.[^fn2]


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685.004](https://attack.mitre.org/techniques/T1685/004)

[^fn1]: [IzySec. (2022, January 26). Linux auditd for Threat Detection. Retrieved September 29, 2023.](https://izyknows.medium.com/linux-auditd-for-threat-detection-d06c8b941505)
[^fn2]: [M.Léveillé, M.. (2014, February 21). An In-depth Analysis of Linux/Ebury. Retrieved April 19, 2019.](https://www.welivesecurity.com/2014/02/21/an-in-depth-analysis-of-linuxebury/)
[^fn3]: [Red Hat. (n.d.). Retrieved April 15, 2026.](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/6/html/security_guide/chap-system_auditing)