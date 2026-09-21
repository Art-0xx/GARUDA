---
mitre_data:
  id: T1569.003
  linker_tags:
  - mitre/attack/linker/execution/systemctl
  name: Systemctl
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Systemctl (`T1569.003`)

Adversaries may abuse systemctl to execute commands or programs. Systemctl is the primary interface for systemd, the Linux init system and service manager. Typically invoked from a shell, Systemctl can also be integrated into scripts or applications.   

Adversaries may use systemctl to execute commands or programs as [Systemd Service](https://attack.mitre.org/techniques/T1543/002)s. Common subcommands include: `systemctl start`, `systemctl stop`, `systemctl enable`, `systemctl disable`, and `systemctl status`.[^fn1]


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/System Services (T1569)|System Services]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1569.003](https://attack.mitre.org/techniques/T1569/003)

[^fn1]: [Damon Garn. (2022, May 17). How to use systemctl to manage Linux services. Retrieved March 18, 2025.](https://www.redhat.com/en/blog/linux-systemctl-manage-services)