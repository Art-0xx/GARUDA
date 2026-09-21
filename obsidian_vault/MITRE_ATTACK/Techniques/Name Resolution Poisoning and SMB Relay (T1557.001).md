---
mitre_data:
  id: T1557.001
  linker_tags:
  - mitre/attack/linker/credential_access/name_resolution_poisoning_and_smb_relay
  - mitre/attack/linker/collection/name_resolution_poisoning_and_smb_relay
  name: Name Resolution Poisoning and SMB Relay
  related_tactics:
  - credential_access
  - collection
tags:
- mitre/attack/technique
---



# Name Resolution Poisoning and SMB Relay (`T1557.001`)

By responding to LLMNR/NBT-NS/mDNS network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system.[^fn4] This activity may be used to collect or relay authentication materials. 

Link-Local Multicast Name Resolution (LLMNR) and NetBIOS Name Service (NBT-NS) are Microsoft Windows components that serve as alternate methods of host identification. LLMNR is based upon the Domain Name System (DNS) format and allows hosts on the same local link to perform name resolution for other hosts. NBT-NS identifies systems on a local network by their NetBIOS name.[^fn9][^fn5]

Multicast Domain Name System(mDNS) is a zero-configuration service used to resolve hostnames to IP addresses with “.local” as a top-level domain. MDNS is based upon Domain Name System (DNS) format and allows hosts on the same network segment to perform name resolution for other hosts, using multicast.[^fn7]

Adversaries can spoof an authoritative source for name resolution on a victim network by responding to LLMNR (UDP 5355)/NBT-NS (UDP 137)/mDNS (UDP 5353) traffic as if they know the identity of the requested host, effectively poisoning the service so that the victims will communicate with the adversary controlled system. If the requested host belongs to a resource that requires identification/authentication, the username and NTLMv2 hash will then be sent to the adversary controlled system. The adversary can then collect the hash information sent over the wire through tools that monitor the ports for traffic or through [Network Sniffing](https://attack.mitre.org/techniques/T1040) and crack the hashes offline through [Brute Force](https://attack.mitre.org/techniques/T1110) to obtain the plaintext passwords.

In some cases where an adversary has access to a system that is in the authentication path between systems or when automated scans that use credentials attempt to authenticate to an adversary controlled system, the NTLMv1/v2 hashes can be intercepted and relayed to access and execute code against a target system. The relay step can happen in conjunction with poisoning but may also be independent of it.[^fn8][^fn3] Additionally, adversaries may encapsulate the NTLMv1/v2 hashes into various other protocols, such as LDAP, MSSQL and HTTP, to expand and use multiple services with the valid NTLM response. 

Several tools may be used to poison name services within local networks such as NBNSpoof, Metasploit, and [Responder](https://attack.mitre.org/software/S0174).[^fn6][^fn1][^fn2]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Adversary-in-the-Middle (T1557)|Adversary-in-the-Middle]]

# Tool(s)

- [[../Tools/Impacket|Impacket]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Responder|Responder]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]
- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1557.001](https://attack.mitre.org/techniques/T1557/001)

[^fn1]: [Francois, R. (n.d.). LLMNR Spoofer. Retrieved November 17, 2017.](https://www.rapid7.com/db/modules/auxiliary/spoof/llmnr/llmnr_response)
[^fn2]: [Gaffie, L. (2016, August 25). Responder. Retrieved November 17, 2017.](https://github.com/SpiderLabs/Responder)
[^fn3]: [Kuehn, E. (2018, April 11). Ever Run a Relay? Why SMB Relays Should Be On Your Mind. Retrieved February 7, 2019.](https://blog.secureideas.com/2018/04/ever-run-a-relay-why-smb-relays-should-be-on-your-mind.html)
[^fn4]: [Lucas Silva, Leandro Froes. (2022, April 18). An Investigation of the BlackCat Ransomware via Trend Micro Vision One. Retrieved February 2, 2026.](https://www.trendmicro.com/en_us/research/22/d/an-investigation-of-the-blackcat-ransomware.html)
[^fn5]: [Microsoft. (n.d.). NetBIOS Name Resolution. Retrieved November 17, 2017.](https://technet.microsoft.com/library/cc958811.aspx)
[^fn6]: [Nomex. (2014, February 7). NBNSpoof. Retrieved November 17, 2017.](https://github.com/nomex/nbnspoof)
[^fn7]: [S. Cheshire, M. Krochmal. (2013, February). Multicast DNS. Retrieved February 2, 2026.](https://datatracker.ietf.org/doc/html/rfc6762)
[^fn8]: [Salvati, M. (2017, June 2). Practical guide to NTLM Relaying in 2017 (A.K.A getting a foothold in under 5 minutes). Retrieved February 7, 2019.](https://byt3bl33d3r.github.io/practical-guide-to-ntlm-relaying-in-2017-aka-getting-a-foothold-in-under-5-minutes.html)
[^fn9]: [Wikipedia. (2016, July 7). Link-Local Multicast Name Resolution. Retrieved November 17, 2017.](https://en.wikipedia.org/wiki/Link-Local_Multicast_Name_Resolution)