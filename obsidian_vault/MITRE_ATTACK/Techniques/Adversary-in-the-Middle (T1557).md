---
mitre_data:
  id: T1557
  linker_tags:
  - mitre/attack/linker/credential_access/adversary-in-the-middle
  - mitre/attack/linker/collection/adversary-in-the-middle
  name: Adversary-in-the-Middle
  related_tactics:
  - credential_access
  - collection
tags:
- mitre/attack/technique
---



# Adversary-in-the-Middle (`T1557`)

Adversaries may attempt to position themselves between two or more networked devices using an adversary-in-the-middle (AiTM) technique to support follow-on behaviors such as [Network Sniffing](https://attack.mitre.org/techniques/T1040), [Transmitted Data Manipulation](https://attack.mitre.org/techniques/T1565/002), or replay attacks ([Exploitation for Credential Access](https://attack.mitre.org/techniques/T1212)). By abusing features of common networking protocols that can determine the flow of network traffic (e.g. ARP, DNS, LLMNR, etc.), adversaries may force a device to communicate through an adversary controlled system so they can collect information or perform additional actions.[^fn7]

For example, adversaries may manipulate victim DNS settings to enable other malicious activities such as preventing/redirecting users from accessing legitimate sites and/or pushing additional malware.[^fn9][^fn1][^fn4] Adversaries may also manipulate DNS and leverage their position in order to intercept user credentials, including access tokens ([Steal Application Access Token](https://attack.mitre.org/techniques/T1528)) and session cookies ([Steal Web Session Cookie](https://attack.mitre.org/techniques/T1539)).[^fn2][^fn5] [Downgrade Attack](https://attack.mitre.org/techniques/T1689)s can also be used to establish an AiTM position, such as by negotiating a less secure, deprecated, or weaker version of communication protocol (SSL/TLS) or encryption algorithm.[^fn6][^fn3][^fn8]

Adversaries may also leverage the AiTM position to attempt to monitor and/or modify traffic, such as in [Transmitted Data Manipulation](https://attack.mitre.org/techniques/T1565/002). Adversaries can setup a position similar to AiTM to prevent traffic from flowing to the appropriate destination, potentially to impair defenses and/or in support of a [Network Denial of Service](https://attack.mitre.org/techniques/T1498).


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Evil Twin (T1557.004)|Evil Twin]]
- [[../Techniques/DHCP Spoofing (T1557.003)|DHCP Spoofing]]
- [[../Techniques/Name Resolution Poisoning and SMB Relay (T1557.001)|Name Resolution Poisoning and SMB Relay]]
- [[../Techniques/ARP Cache Poisoning (T1557.002)|ARP Cache Poisoning]]

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]
- [[../Tools/evilginx2|evilginx2]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]
- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1557](https://attack.mitre.org/techniques/T1557)

[^fn1]: [Abendan, O. (2012, June 14). How DNS Changer Trojans Direct Users to Threats. Retrieved October 28, 2021.](https://www.trendmicro.com/vinfo/us/threat-encyclopedia/web-attack/125/how-dns-changer-trojans-direct-users-to-threats)
[^fn2]: [Adair, S., Lancaster, T., Volexity Threat Research. (2022, June 15). DriftingCloud: Zero-Day Sophos Firewall Exploitation and an Insidious Breach. Retrieved July 1, 2022.](https://www.volexity.com/blog/2022/06/15/driftingcloud-zero-day-sophos-firewall-exploitation-and-an-insidious-breach/)
[^fn3]: [Alashwali, E. S., Rasmussen, K. (2019, January 26). What's in a Downgrade? A Taxonomy of Downgrade Attacks in the TLS Protocol and Application Protocols Using TLS. Retrieved December 7, 2021.](https://arxiv.org/abs/1809.05681)
[^fn4]: [Kuzmenko, A.. (2021, March 10). Ad blocker with miner included. Retrieved October 28, 2021.](https://securelist.com/ad-blocker-with-miner-included/101105/)
[^fn5]: [Microsoft Incident Response. (2022, November 16). Token tactics: How to prevent, detect, and respond to cloud token theft. Retrieved December 26, 2023.](https://www.microsoft.com/en-us/security/blog/2022/11/16/token-tactics-how-to-prevent-detect-and-respond-to-cloud-token-theft/)
[^fn6]: [praetorian Editorial Team. (2014, August 19). Man-in-the-Middle TLS Protocol Downgrade Attack. Retrieved December 8, 2021.](https://www.praetorian.com/blog/man-in-the-middle-tls-ssl-protocol-downgrade-attack/)
[^fn7]: [Rapid7. (n.d.). Man-in-the-Middle (MITM) Attacks. Retrieved March 2, 2020.](https://www.rapid7.com/fundamentals/man-in-the-middle-attacks/)
[^fn8]: [Team Cinnamon. (2017, February 3). Downgrade Attacks. Retrieved December 9, 2021.](https://tlseminar.github.io/downgrade-attacks/)
[^fn9]: [Tu, L. Ma, Y. Ye, G. (2020, October 1). Ttint: An IoT Remote Access Trojan spread through 2 0-day vulnerabilities. Retrieved October 28, 2021.](https://blog.netlab.360.com/ttint-an-iot-remote-control-trojan-spread-through-2-0-day-vulnerabilities/)