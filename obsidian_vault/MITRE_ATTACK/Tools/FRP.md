---
tags:
  - mitre/attack/tool
---

# FRP (`S1144`)

[FRP](https://attack.mitre.org/software/S1144), which stands for Fast Reverse Proxy, is an openly available tool that is capable of exposing a server located behind a firewall or Network Address Translation (NAT) to the Internet. [FRP](https://attack.mitre.org/software/S1144) can support multiple protocols including TCP, UDP, and HTTP(S) and has been abused by threat actors to proxy command and control communications.[^fn2][^fn4][^fn3][^fn1]



# Platform(s)

- Linux
- macOS
- Windows

# Techniques Used

## Non-Application Layer Protocol

[FRP](https://attack.mitre.org/software/S1144) can communicate over TCP, TCP stream multiplexing, KERN Communications Protocol (KCP), QUIC, and UDP.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Non-Application Layer Protocol (T1095)|Non-Application Layer Protocol]]

## JavaScript

[FRP](https://attack.mitre.org/software/S1144) can support the use of a JSON configuration file.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/JavaScript (T1059.007)|JavaScript]]

## Proxy

[FRP](https://attack.mitre.org/software/S1144) can proxy communications through a server in public IP space to local servers located behind a NAT or firewall.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Protocol Tunneling

[FRP](https://attack.mitre.org/software/S1144) can tunnel SSH and Unix Domain Socket communications over TCP between external nodes and exposed resources behind firewalls or NAT.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Protocol Tunneling (T1572)|Protocol Tunneling]]

## Asymmetric Cryptography

[FRP](https://attack.mitre.org/software/S1144) can be configured to only accept TLS connections.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Network Service Discovery

As part of load balancing [FRP](https://attack.mitre.org/software/S1144) can set `healthCheck.type = "tcp"` or `healthCheck.type = "http"` to check service status on specific hosts with TCPing or an HTTP request.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## System Network Connections Discovery

[FRP](https://attack.mitre.org/software/S1144) can use a dashboard and U/I to display the status of connections from the FRP client and server.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Multi-hop Proxy

The [FRP](https://attack.mitre.org/software/S1144) client can be configured to connect to the server through a proxy.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Multi-hop Proxy (T1090.003)|Multi-hop Proxy]]

## Symmetric Cryptography

[FRP](https://attack.mitre.org/software/S1144) can use STCP (Secret TCP) with a preshared key to encrypt services exposed to public networks.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Symmetric Cryptography (T1573.001)|Symmetric Cryptography]]

## Web Protocols

[FRP](https://attack.mitre.org/software/S1144) has the ability to use HTTP and HTTPS to enable the forwarding of requests for internal services via domain name.[\[FRP GitHub\]](https://github.com/fatedier/frp)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]


# External References(s)

- [S1144](https://attack.mitre.org/software/S1144)

[^fn1]: [DFIR Report. (2021, November 15). Exchange Exploit Leads to Domain Wide Ransomware. Retrieved January 5, 2023.](https://thedfirreport.com/2021/11/15/exchange-exploit-leads-to-domain-wide-ransomware/)
[^fn2]: [fatedier. (n.d.). What is frp?. Retrieved July 10, 2024.](https://github.com/fatedier/frp)
[^fn3]: [Lambert, T. (2020, May 7). Introducing Blue Mockingbird. Retrieved May 26, 2020.](https://redcanary.com/blog/blue-mockingbird-cryptominer/)
[^fn4]: [NSA et al. (2023, May 24). People's Republic of China State-Sponsored Cyber Actor Living off the Land to Evade Detection. Retrieved July 27, 2023.](https://media.defense.gov/2023/May/24/2003229517/-1/-1/0/CSA_Living_off_the_Land.PDF)