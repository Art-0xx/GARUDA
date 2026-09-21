---
mitre_data:
  id: T1007
  linker_tags:
  - mitre/attack/linker/discovery/system_service_discovery
  name: System Service Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Service Discovery (`T1007`)

Adversaries may try to gather information about registered local system services. Adversaries may obtain information about services using tools as well as OS utility commands such as <code>sc query</code>, <code>tasklist /svc</code>, <code>systemctl --type=service</code>, and <code>net start</code>. Adversaries may also gather information about schedule tasks via commands such as `schtasks` on Windows or `crontab -l` on Linux and macOS.[^fn2][^fn3][^fn4][^fn1]

Adversaries may use the information from [System Service Discovery](https://attack.mitre.org/techniques/T1007) during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Tasklist|Tasklist]]
- [[../Tools/PoshC2|PoshC2]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1007](https://attack.mitre.org/techniques/T1007)

[^fn1]: [Gal Singer. (2020, April 3). Threat Alert: Kinsing Malware Attacks Targeting Container Environments. Retrieved May 22, 2025.](https://www.aquasec.com/blog/threat-alert-kinsing-malware-container-vulnerability/)
[^fn2]: [Jia Yu Chan, Salim Bitam, Daniel Stepanic, and Seth Goodwin. (2024, December 12). Under the SADBRIDGE with GOSAR: QUASAR Gets a Golang Rewrite. Retrieved May 22, 2025.](https://www.elastic.co/security-labs/under-the-sadbridge-with-gosar)
[^fn3]: [Phil Stokes. (2021, February 16). 20 Common Tools & Techniques Used by macOS Threat Actors & Malware. Retrieved May 22, 2025.](https://www.sentinelone.com/labs/20-common-tools-techniques-used-by-macos-threat-actors-malware/)
[^fn4]: [Splunk Threat Research Team , Teoderick Contreras. (2024, July 15). Breaking Down Linux.Gomir: Understanding this Backdoor’s TTPs. Retrieved May 22, 2025.](https://www.splunk.com/en_us/blog/security/breaking-down-linux-gomir-understanding-this-backdoors-ttps.html)