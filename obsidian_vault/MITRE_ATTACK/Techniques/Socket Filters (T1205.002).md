---
mitre_data:
  id: T1205.002
  linker_tags:
  - mitre/attack/linker/stealth/socket_filters
  - mitre/attack/linker/persistence/socket_filters
  - mitre/attack/linker/command_and_control/socket_filters
  name: Socket Filters
  related_tactics:
  - stealth
  - persistence
  - command_and_control
tags:
- mitre/attack/technique
---



# Socket Filters (`T1205.002`)

Adversaries may attach filters to a network socket to monitor then activate backdoors used for persistence or command and control. With elevated permissions, adversaries can use features such as the `libpcap` library to open sockets and install filters to allow or disallow certain types of data to come through the socket. The filter may apply to all traffic passing through the specified network interface (or every interface if not specified). When the network interface receives a packet matching the filter criteria, additional actions can be triggered on the host, such as activation of a reverse shell.

To establish a connection, an adversary sends a crafted packet to the targeted host that matches the installed filter criteria.[^fn3] Adversaries have used these socket filters to trigger the installation of implants, conduct ping backs, and to invoke command shells. Communication with these socket filters may also be used in conjunction with [Protocol Tunneling](https://attack.mitre.org/techniques/T1572).[^fn1][^fn2]

Filters can be installed on any Unix-like platform with `libpcap` installed or on Windows hosts using `Winpcap`.  Adversaries may use either `libpcap` with `pcap_setfilter` or the standard library function `setsockopt` with `SO_ATTACH_FILTER` options. Since the socket connection is not active until the packet is received, this behavior may be difficult to detect due to the lack of activity on a host, low CPU overhead, and limited visibility into raw socket usage.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Traffic Signaling (T1205)|Traffic Signaling]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1205.002](https://attack.mitre.org/techniques/T1205/002)

[^fn1]: [ExaTrack. (2022, May 11). Tricephalic Hellkeeper: a tale of a passive backdoor. Retrieved October 18, 2022.](https://exatrack.com/public/Tricephalic_Hellkeeper.pdf)
[^fn2]: [Leonardo. (2020, May 29). MALWARE TECHNICAL INSIGHT TURLA “Penquin_x64”. Retrieved March 11, 2021.](https://www.leonardo.com/documents/20142/10868623/Malware+Technical+Insight+_Turla+%E2%80%9CPenquin_x64%E2%80%9D.pdf)
[^fn3]: [Luis Martin Garcia. (2008, February 1). Hakin9 Issue 2/2008 Vol 3 No.2 VoIP Abuse: Storming SIP Security. Retrieved October 18, 2022.](http://recursos.aldabaknocking.com/libpcapHakin9LuisMartinGarcia.pdf)