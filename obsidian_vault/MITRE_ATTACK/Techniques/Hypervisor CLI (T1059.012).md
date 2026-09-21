---
mitre_data:
  id: T1059.012
  linker_tags:
  - mitre/attack/linker/execution/hypervisor_cli
  name: Hypervisor CLI
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Hypervisor CLI (`T1059.012`)

Adversaries may abuse hypervisor command line interpreters (CLIs) to execute malicious commands. Hypervisor CLIs typically enable a wide variety of functionality for managing both the hypervisor itself and the guest virtual machines it hosts. 

For example, on ESXi systems, tools such as `esxcli` and `vim-cmd` allow administrators to configure firewall rules and log forwarding on the hypervisor, list virtual machines, start and stop virtual machines, and more.[^fn1][^fn3][^fn2] Adversaries may be able to leverage these tools in order to support further actions, such as [File and Directory Discovery](https://attack.mitre.org/techniques/T1083) or [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486).


# Platform(s)

- ESXi

# Parent Technique(s)

- [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1059.012](https://attack.mitre.org/techniques/T1059/012)

[^fn1]: [Broadcom. (n.d.). ESXCLI Reference. Retrieved March 27, 2025.](https://developer.broadcom.com/xapis/esxcli-command-reference/latest/)
[^fn2]: [Janantha Marasinghe. (n.d.). Living Off The Land ESXi. Retrieved April 14, 2025.](https://lolesxi-project.github.io/LOLESXi/)
[^fn3]: [Michael Dawson. (2021, August 30). Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware. Retrieved March 26, 2025.](https://www.crowdstrike.com/en-us/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/)