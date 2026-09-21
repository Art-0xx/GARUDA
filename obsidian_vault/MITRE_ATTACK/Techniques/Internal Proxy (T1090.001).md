---
mitre_data:
  id: T1090.001
  linker_tags:
  - mitre/attack/linker/command_and_control/internal_proxy
  name: Internal Proxy
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Internal Proxy (`T1090.001`)

Adversaries may use an internal proxy to direct command and control traffic between two or more systems in a compromised environment. Many tools exist that enable traffic redirection through proxies or port redirection, including [HTRAN](https://attack.mitre.org/software/S0040), ZXProxy, and ZXPortMap. [^fn2] Adversaries use internal proxies to manage command and control communications inside a compromised environment, to reduce the number of simultaneous outbound network connections, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between infected systems to avoid suspicion. Internal proxy connections may use common peer-to-peer (p2p) networking protocols, such as SMB, to better blend in with the environment.

By using a compromised internal system as a proxy, adversaries may conceal the true destination of C2 traffic while reducing the need for numerous connections to external systems.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Proxy (T1090)|Proxy]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]
- [[../Tools/Mythic|Mythic]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1090.001](https://attack.mitre.org/techniques/T1090/001)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Wilhoit, K. (2013, March 4). In-Depth Look: APT Attack Tools of the Trade. Retrieved December 2, 2015.](http://blog.trendmicro.com/trendlabs-security-intelligence/in-depth-look-apt-attack-tools-of-the-trade/)