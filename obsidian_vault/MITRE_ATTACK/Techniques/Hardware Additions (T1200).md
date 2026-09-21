---
mitre_data:
  id: T1200
  linker_tags:
  - mitre/attack/linker/initial_access/hardware_additions
  name: Hardware Additions
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Hardware Additions (`T1200`)

Adversaries may physically introduce computer accessories, networking hardware, or other computing devices into a system or network that can be used as a vector to gain access. Rather than just connecting and distributing payloads via removable storage (i.e. [Replication Through Removable Media](https://attack.mitre.org/techniques/T1091)), more robust hardware additions can be used to introduce new functionalities and/or features into a system that can then be abused.

While public references of usage by threat actors are scarce, many red teams/penetration testers leverage hardware additions for initial access. Commercial and open source products can be leveraged with capabilities such as passive network tapping, network traffic modification (i.e. [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557)), keystroke injection, kernel memory reading via DMA, addition of new wireless access points to an existing network, and others.[^fn1][^fn2][^fn4][^fn3]


# Platform(s)

- Windows
- Linux
- macOS

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1200](https://attack.mitre.org/techniques/T1200)

[^fn1]: [Michael Ossmann. (2011, February 17). Throwing Star LAN Tap. Retrieved March 30, 2018.](https://ossmann.blogspot.com/2011/02/throwing-star-lan-tap.html)
[^fn2]: [Nick Aleks. (2015, November 7). Weapons of a Pentester - Understanding the virtual & physical tools used by white/black hat hackers. Retrieved March 30, 2018.](https://www.youtube.com/watch?v=lDvf4ScWbcQ)
[^fn3]: [Robert McMillan. (2012, March 3). The Pwn Plug is a little white box that can hack your network. Retrieved March 30, 2018.](https://arstechnica.com/information-technology/2012/03/the-pwn-plug-is-a-little-white-box-that-can-hack-your-network/)
[^fn4]: [Ulf Frisk. (2016, August 5). Direct Memory Attack the Kernel. Retrieved March 30, 2018.](https://www.youtube.com/watch?v=fXthwl6ShOg)