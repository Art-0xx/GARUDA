---
tags:
  - mitre/attack/tool
---

# Mythic (`S0699`)

[Mythic](https://attack.mitre.org/software/S0699) is an open source, cross-platform post-exploitation/command and control platform. [Mythic](https://attack.mitre.org/software/S0699) is designed to "plug-n-play" with various agents and communication channels.[^fn2][^fn3][^fn4] Deployed [Mythic](https://attack.mitre.org/software/S0699) C2 servers have been observed as part of potentially malicious infrastructure.[^fn1]



# Platform(s)

- Windows
- Linux
- macOS

# Techniques Used

## External Proxy

[Mythic](https://attack.mitre.org/software/S0699) can leverage a modified SOCKS5 proxy to tunnel egress C2 traffic.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)

- *Technique:* [[../Techniques/External Proxy (T1090.002)|External Proxy]]

## File Transfer Protocols

[Mythic](https://attack.mitre.org/software/S0699) supports SMB-based peer-to-peer C2 profiles.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/File Transfer Protocols (T1071.002)|File Transfer Protocols]]

## Asymmetric Cryptography

[Mythic](https://attack.mitre.org/software/S0699) supports SSL encrypted C2.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## DNS

[Mythic](https://attack.mitre.org/software/S0699) supports DNS-based C2 profiles.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/DNS (T1071.004)|DNS]]

## Web Protocols

[Mythic](https://attack.mitre.org/software/S0699) supports HTTP-based C2 profiles.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Data Encoding

[Mythic](https://attack.mitre.org/software/S0699) provides various transform functions to encode and/or randomize C2 data.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Data Encoding (T1132)|Data Encoding]]

## Internal Proxy

[Mythic](https://attack.mitre.org/software/S0699) can leverage a peer-to-peer C2 profile between agents.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)		

- *Technique:* [[../Techniques/Internal Proxy (T1090.001)|Internal Proxy]]

## Non-Application Layer Protocol

[Mythic](https://attack.mitre.org/software/S0699) supports WebSocket and TCP-based C2 profiles.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Non-Application Layer Protocol (T1095)|Non-Application Layer Protocol]]

## Data Transfer Size Limits

[Mythic](https://attack.mitre.org/software/S0699) supports custom chunk sizes used to upload/download files.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Data Transfer Size Limits (T1030)|Data Transfer Size Limits]]

## Automated Collection

[Mythic](https://attack.mitre.org/software/S0699) supports scripting of file downloads from agents.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]

## Protocol Tunneling

[Mythic](https://attack.mitre.org/software/S0699) can use SOCKS proxies to tunnel traffic through another protocol.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)

- *Technique:* [[../Techniques/Protocol Tunneling (T1572)|Protocol Tunneling]]

## Domain Fronting

[Mythic](https://attack.mitre.org/software/S0699) supports domain fronting via custom request headers.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Domain Fronting (T1090.004)|Domain Fronting]]

## Fallback Channels

[Mythic](https://attack.mitre.org/software/S0699) can use a list of C2 URLs as fallback mechanisms in case one IP or domain gets blocked.[\[Mythc Documentation\]](https://docs.mythic-c2.net/)	

- *Technique:* [[../Techniques/Fallback Channels (T1008)|Fallback Channels]]


# External References(s)

- [S0699](https://attack.mitre.org/software/S0699)

[^fn1]: [Insikt Group. (2022, January 18). 2021 Adversary Infrastructure Report. Retrieved March 25, 2022.](https://go.recordedfuture.com/hubfs/reports/cta-2022-0118.pdf)
[^fn2]: [Thomas, C. (2018, July 4). Mythic. Retrieved March 25, 2022.](https://github.com/its-a-feature/Mythic)
[^fn3]: [Thomas, C. (2020, August 13). A Change of Mythic Proportions. Retrieved March 25, 2022.](https://posts.specterops.io/a-change-of-mythic-proportions-21debeb03617)
[^fn4]: [Thomas, C. (n.d.). Mythc Documentation. Retrieved March 25, 2022.](https://docs.mythic-c2.net/)