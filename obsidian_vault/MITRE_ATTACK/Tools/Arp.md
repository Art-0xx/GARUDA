---
tags:
  - mitre/attack/tool
---

# Arp (`S0099`)

[Arp](https://attack.mitre.org/software/S0099) displays and modifies information about a system's Address Resolution Protocol (ARP) cache. [^fn1]



# Platform(s)

- Linux
- Windows
- macOS

# Techniques Used

## Remote System Discovery

[Arp](https://attack.mitre.org/software/S0099) can be used to display a host's ARP cache, which may include address resolutions for remote systems.[\[TechNet Arp\]](https://technet.microsoft.com/en-us/library/bb490864.aspx)[\[Palo Alto ARP\]](https://docs.paloaltonetworks.com/cortex/cortex-xdr/cortex-xdr-analytics-alert-reference/cortex-xdr-analytics-alert-reference/uncommon-arp-cache-listing-via-arp-exe.html)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## System Network Configuration Discovery

[Arp](https://attack.mitre.org/software/S0099) can be used to display ARP configuration information on the host.[\[TechNet Arp\]](https://technet.microsoft.com/en-us/library/bb490864.aspx)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]


# External References(s)

- [S0099](https://attack.mitre.org/software/S0099)

[^fn1]: [Microsoft. (n.d.). Arp. Retrieved April 17, 2016.](https://technet.microsoft.com/en-us/library/bb490864.aspx)