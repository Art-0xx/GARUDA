---
mitre_data:
  id: T1090
  linker_tags:
  - mitre/attack/linker/command_and_control/proxy
  name: Proxy
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Proxy (`T1090`)

Adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. Many tools exist that enable traffic redirection through proxies or port redirection, including [HTRAN](https://attack.mitre.org/software/S0040), ZXProxy, and ZXPortMap. [^fn2] Adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. Adversaries may chain together multiple proxies to further disguise the source of malicious traffic.

Adversaries can also take advantage of routing schemes in Content Delivery Networks (CDNs) to proxy command and control traffic.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/External Proxy (T1090.002)|External Proxy]]
- [[../Techniques/Multi-hop Proxy (T1090.003)|Multi-hop Proxy]]
- [[../Techniques/Domain Fronting (T1090.004)|Domain Fronting]]
- [[../Techniques/Internal Proxy (T1090.001)|Internal Proxy]]

# Tool(s)

- [[../Tools/ngrok|ngrok]]
- [[../Tools/FRP|FRP]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/netsh|netsh]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/HTRAN|HTRAN]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1090](https://attack.mitre.org/techniques/T1090)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Wilhoit, K. (2013, March 4). In-Depth Look: APT Attack Tools of the Trade. Retrieved December 2, 2015.](http://blog.trendmicro.com/trendlabs-security-intelligence/in-depth-look-apt-attack-tools-of-the-trade/)