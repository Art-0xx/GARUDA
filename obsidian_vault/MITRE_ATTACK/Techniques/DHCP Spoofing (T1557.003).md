---
mitre_data:
  id: T1557.003
  linker_tags:
  - mitre/attack/linker/credential_access/dhcp_spoofing
  - mitre/attack/linker/collection/dhcp_spoofing
  name: DHCP Spoofing
  related_tactics:
  - credential_access
  - collection
tags:
- mitre/attack/technique
---



# DHCP Spoofing (`T1557.003`)

Adversaries may redirect network traffic to adversary-owned systems by spoofing Dynamic Host Configuration Protocol (DHCP) traffic and acting as a malicious DHCP server on the victim network. By achieving the adversary-in-the-middle (AiTM) position, adversaries may collect network communications, including passed credentials, especially those sent over insecure, unencrypted protocols. This may also enable follow-on behaviors such as [Network Sniffing](https://attack.mitre.org/techniques/T1040) or [Transmitted Data Manipulation](https://attack.mitre.org/techniques/T1565/002).

DHCP is based on a client-server model and has two functionalities: a protocol for providing network configuration settings from a DHCP server to a client and a mechanism for allocating network addresses to clients.[^fn1] The typical server-client interaction is as follows: 

1. The client broadcasts a `DISCOVER` message.

2. The server responds with an `OFFER` message, which includes an available network address. 

3. The client broadcasts a `REQUEST` message, which includes the network address offered. 

4. The server acknowledges with an `ACK` message and the client receives the network configuration parameters.

Adversaries may spoof as a rogue DHCP server on the victim network, from which legitimate hosts may receive malicious network configurations. For example, malware can act as a DHCP server and provide adversary-owned DNS servers to the victimized computers.[^fn2][^fn6] Through the malicious network configurations, an adversary may achieve the AiTM position, route client traffic through adversary-controlled systems, and collect information from the client network.

DHCPv6 clients can receive network configuration information without being assigned an IP address by sending a <code>INFORMATION-REQUEST (code 11)</code> message to the <code>All_DHCP_Relay_Agents_and_Servers</code> multicast address.[^fn3] Adversaries may use their rogue DHCP server to respond to this request message with malicious network configurations.

Rather than establishing an AiTM position, adversaries may also abuse DHCP spoofing to perform a DHCP exhaustion attack (i.e, [Service Exhaustion Flood](https://attack.mitre.org/techniques/T1499/002)) by generating many broadcast DISCOVER messages to exhaust a network’s DHCP allocation pool. 


# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/Adversary-in-the-Middle (T1557)|Adversary-in-the-Middle]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]
- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1557.003](https://attack.mitre.org/techniques/T1557/003)
- [Microsoft. (2006, August 31).  DHCP Server Operational Events. Retrieved March 7, 2022.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn800668(v=ws.11))
- [Shoemaker, E. (2015, December 31). Solution: Monitor DHCP Scopes and Detect Man-in-the-Middle Attacks with PRTG and PowerShell. Retrieved September 12, 2024.](https://web.archive.org/web/20231202025258/https://lockstepgroup.com/blog/monitor-dhcp-scopes-and-detect-man-in-the-middle-attacks/)

[^fn1]: [Droms, R. (1997, March). Dynamic Host Configuration Protocol. Retrieved March 9, 2022.](https://datatracker.ietf.org/doc/html/rfc2131)
[^fn2]: [Irwin, Ullrich, J. (2009, March 16). new rogue-DHCP server malware. Retrieved January 14, 2022.](https://isc.sans.edu/forums/diary/new+rogueDHCP+server+malware/6025/)
[^fn3]: [J. Bound, et al. (2003, July). Dynamic Host Configuration Protocol for IPv6 (DHCPv6). Retrieved June 27, 2022.](https://datatracker.ietf.org/doc/html/rfc3315)
[^fn6]: [Symantec. (2009, March 22). W32.Tidserv.G. Retrieved January 14, 2022.](https://web.archive.org/web/20150923175837/http://www.symantec.com/security_response/writeup.jsp?docid=2009-032211-2952-99&tabid=2)