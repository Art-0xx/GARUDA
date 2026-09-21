---
mitre_data:
  id: T1546.017
  linker_tags:
  - mitre/attack/linker/persistence/udev_rules
  - mitre/attack/linker/privilege_escalation/udev_rules
  name: Udev Rules
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Udev Rules (`T1546.017`)

Adversaries may maintain persistence through executing malicious content triggered using udev rules. Udev is the Linux kernel device manager that dynamically manages device nodes, handles access to pseudo-device files in the `/dev` directory, and responds to hardware events, such as when external devices like hard drives or keyboards are plugged in or removed. Udev uses rule files with `match keys` to specify the conditions a hardware event must meet and `action keys` to define the actions that should follow. Root permissions are required to create, modify, or delete rule files located in `/etc/udev/rules.d/`, `/run/udev/rules.d/`, `/usr/lib/udev/rules.d/`, `/usr/local/lib/udev/rules.d/`, and `/lib/udev/rules.d/`. Rule priority is determined by both directory and by the digit prefix in the rule filename.[^fn1][^fn2]

Adversaries may abuse the udev subsystem by adding or modifying rules in udev rule files to execute malicious content. For example, an adversary may configure a rule to execute their binary each time the pseudo-device file, such as `/dev/random`, is accessed by an application. Although udev is limited to running short tasks and is restricted by systemd-udevd's sandbox (blocking network and filesystem access), attackers may use scripting commands under the action key `RUN+=` to detach and run the malicious content’s process in the background to bypass these controls.[^fn3]


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1546.017](https://attack.mitre.org/techniques/T1546/017)

[^fn1]: [Eder P. Ignacio. (2024, February 21). Leveraging Linux udev for persistence. Retrieved September 26, 2024.](https://ch4ik0.github.io/en/posts/leveraging-Linux-udev-for-persistence/)
[^fn2]: [Ruben Groenewoud. (2024, August 29). Linux Detection Engineering -  A Sequel on Persistence Mechanisms. Retrieved October 16, 2024.](https://www.elastic.co/security-labs/sequel-on-persistence-mechanisms)
[^fn3]: [Zachary Reichert. (2024, August 19). Unveiling "sedexp": A Stealthy Linux Malware Exploiting udev Rules. Retrieved September 26, 2024.](https://www.aon.com/en/insights/cyber-labs/unveiling-sedexp)