---
mitre_data:
  id: T1087.001
  linker_tags:
  - mitre/attack/linker/discovery/local_account
  name: Local Account
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Local Account (`T1087.001`)

Adversaries may attempt to get a listing of local system accounts. This information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.

Commands such as <code>net user</code> and <code>net localgroup</code> of the [Net](https://attack.mitre.org/software/S0039) utility and <code>id</code> and <code>groups</code> on macOS and Linux can list local users and groups.[^fn3][^fn1][^fn2] On Linux, local users can also be enumerated through the use of the <code>/etc/passwd</code> file. On macOS, the <code>dscl . list /Users</code> command can be used to enumerate local accounts. On ESXi servers, the `esxcli system account list` command can list local user accounts.[^fn4]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Account Discovery (T1087)|Account Discovery]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1087.001](https://attack.mitre.org/techniques/T1087/001)
- [Stepanic, D.. (2020, January 13). Embracing offensive tooling: Building detections against Koadic using EQL. Retrieved November 17, 2024.](https://www.elastic.co/security-labs/embracing-offensive-tooling-building-detections-against-koadic-using-eql)

[^fn1]: [MacKenzie, D. and Robbins, A. (n.d.). id(1) - Linux man page. Retrieved January 11, 2024.](https://linux.die.net/man/1/id)
[^fn2]: [MacKenzie, D. and Youngman, J. (n.d.). groups(1) - Linux man page. Retrieved January 11, 2024.](https://linux.die.net/man/1/groups)
[^fn3]: [Mandiant. (n.d.). APT1 Exposing One of China’s Cyber Espionage Units. Retrieved July 18, 2016.](https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf)
[^fn4]: [Michael Dawson. (2021, August 30). Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware. Retrieved March 26, 2025.](https://www.crowdstrike.com/en-us/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/)