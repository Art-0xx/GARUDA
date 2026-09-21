---
mitre_data:
  id: T1568.003
  linker_tags:
  - mitre/attack/linker/command_and_control/dns_calculation
  name: DNS Calculation
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# DNS Calculation (`T1568.003`)

Adversaries may perform calculations on addresses returned in DNS results to determine which port and IP address to use for command and control, rather than relying on a predetermined port number or the actual returned IP address. A IP and/or port number calculation can be used to bypass egress filtering on a C2 channel.[^fn1]

One implementation of [DNS Calculation](https://attack.mitre.org/techniques/T1568/003) is to take the first three octets of an IP address in a DNS response and use those values to calculate the port for command and control traffic.[^fn1][^fn2][^fn3]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Dynamic Resolution (T1568)|Dynamic Resolution]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1568.003](https://attack.mitre.org/techniques/T1568/003)

[^fn1]: [Meyers, A. (2013, March 29). Whois Numbered Panda. Retrieved January 14, 2016.](http://www.crowdstrike.com/blog/whois-numbered-panda/)
[^fn2]: [Moran, N., Oppenheim, M., Engle, S., & Wartell, R.. (2014, September 3). Darwin’s Favorite APT Group &#91;Blog&#93;. Retrieved November 12, 2014.](https://www.fireeye.com/blog/threat-research/2014/09/darwins-favorite-apt-group-2.html)
[^fn3]: [Rapid7. (2013, August 26). Upcoming G20 Summit Fuels Espionage Operations. Retrieved March 6, 2017.](https://blog.rapid7.com/2013/08/26/upcoming-g20-summit-fuels-espionage-operations/)