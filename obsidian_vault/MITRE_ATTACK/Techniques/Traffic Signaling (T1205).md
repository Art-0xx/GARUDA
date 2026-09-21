---
mitre_data:
  id: T1205
  linker_tags:
  - mitre/attack/linker/stealth/traffic_signaling
  - mitre/attack/linker/persistence/traffic_signaling
  - mitre/attack/linker/command_and_control/traffic_signaling
  name: Traffic Signaling
  related_tactics:
  - stealth
  - persistence
  - command_and_control
tags:
- mitre/attack/technique
---



# Traffic Signaling (`T1205`)

Adversaries may use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control. Traffic signaling involves the use of a magic value or sequence that must be sent to a system to trigger a special response, such as opening a closed port or executing a malicious task. This may take the form of sending a series of packets with certain characteristics before a port will be opened that the adversary can use for command and control. Usually this series of packets consists of attempted connections to a predefined sequence of closed ports (i.e. [Port Knocking](https://attack.mitre.org/techniques/T1205/001)), but can involve unusual flags, specific strings, or other unique characteristics. After the sequence is completed, opening a port may be accomplished by the host-based firewall, but could also be implemented by custom software.

Adversaries may also communicate with an already open port, but the service listening on that port will only respond to commands or trigger other malicious functionality if passed the appropriate magic value(s).

The observation of the signal packets to trigger the communication can be conducted through different methods. One means, originally implemented by Cd00r [^fn5], is to use the libpcap libraries to sniff for the packets in question. Another method leverages raw sockets, which enables the malware to use ports that are already open for use by other programs.

On network devices, adversaries may use crafted packets to enable [Network Device Authentication](https://attack.mitre.org/techniques/T1556/004) for standard services offered by the device such as telnet.  Such signaling may also be used to open a closed service port such as telnet, or to trigger module modification of malware implants on the device, adding, removing, or changing malicious capabilities.  Adversaries may use crafted packets to attempt to connect to one or more (open or closed) ports, but may also attempt to connect to a router interface, broadcast, and network address IP on the same port in order to achieve their goals and objectives.[^fn4][^fn3][^fn6]  To enable this traffic signaling on embedded devices, adversaries must first achieve and leverage [Patch System Image](https://attack.mitre.org/techniques/T1601/001) due to the monolithic nature of the architecture.

Adversaries may also use the Wake-on-LAN feature to turn on powered off systems. Wake-on-LAN is a hardware feature that allows a powered down system to be powered on, or woken up, by sending a magic packet to it. Once the system is powered on, it may become a target for lateral movement.[^fn1][^fn2]


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Socket Filters (T1205.002)|Socket Filters]]
- [[../Techniques/Port Knocking (T1205.001)|Port Knocking]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1205](https://attack.mitre.org/techniques/T1205)

[^fn1]: [Abrams, L. (2021, January 14). Ryuk Ransomware Uses Wake-on-Lan To Encrypt Offline Devices. Retrieved February 11, 2021.](https://www.bleepingcomputer.com/news/security/ryuk-ransomware-uses-wake-on-lan-to-encrypt-offline-devices/)
[^fn2]: [AMD. (1995, November 1). Magic Packet Technical White Paper. Retrieved February 17, 2021.](https://www.amd.com/system/files/TechDocs/20213.pdf)
[^fn3]: [Bill Hau, Tony Lee, Josh Homan. (2015, September 15). SYNful Knock - A Cisco router implant - Part I. Retrieved November 17, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/synful-knock-acis/)
[^fn4]: [Graham Holmes. (2015, October 8). Evolution of attacks on Cisco IOS devices. Retrieved October 19, 2020.](https://blogs.cisco.com/security/evolution-of-attacks-on-cisco-ios-devices)
[^fn5]: [Hartrell, Greg. (2002, August). Get a handle on cd00r: The invisible backdoor. Retrieved October 13, 2018.](https://www.giac.org/paper/gcih/342/handle-cd00r-invisible-backdoor/103631)
[^fn6]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)