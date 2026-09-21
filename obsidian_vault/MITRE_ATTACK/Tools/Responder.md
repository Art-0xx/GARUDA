---
tags:
  - mitre/attack/tool
---

# Responder (`S0174`)

Responder is an open source tool used for LLMNR, NBT-NS and MDNS poisoning, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication. [^fn1]



# Techniques Used

## Network Sniffing

[Responder](https://attack.mitre.org/software/S0174) captures hashes and credentials that are sent to the system after the name services have been poisoned.[\[GitHub Responder\]](https://github.com/SpiderLabs/Responder)

- *Technique:* [[../Techniques/Network Sniffing (T1040)|Network Sniffing]]

## Name Resolution Poisoning and SMB Relay

[Responder](https://attack.mitre.org/software/S0174) is used to poison name services to gather hashes and credentials from systems within a local network.[\[GitHub Responder\]](https://github.com/SpiderLabs/Responder)

- *Technique:* [[../Techniques/Name Resolution Poisoning and SMB Relay (T1557.001)|Name Resolution Poisoning and SMB Relay]]


# External References(s)

- [S0174](https://attack.mitre.org/software/S0174)

[^fn1]: [Gaffie, L. (2016, August 25). Responder. Retrieved November 17, 2017.](https://github.com/SpiderLabs/Responder)