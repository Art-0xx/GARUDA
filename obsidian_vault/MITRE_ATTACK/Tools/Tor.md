---
tags:
  - mitre/attack/tool
---

# Tor (`S0183`)

[Tor](https://attack.mitre.org/software/S0183) is a software suite and network that provides increased anonymity on the Internet. It creates a multi-hop proxy network and utilizes multilayer encryption to protect both the message and routing information. [Tor](https://attack.mitre.org/software/S0183) utilizes "Onion Routing," in which messages are encrypted with multiple layers of encryption; at each step in the proxy network, the topmost layer is decrypted and the contents forwarded on to the next node until it reaches its destination. [^fn2]



# Platform(s)

- Linux
- Windows
- macOS

# Techniques Used

## Asymmetric Cryptography

[Tor](https://attack.mitre.org/software/S0183) encapsulates traffic in multiple layers of encryption, using TLS by default.[\[Dingledine Tor The Second-Generation Onion Router\]](http://www.dtic.mil/dtic/tr/fulltext/u2/a465464.pdf)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Multi-hop Proxy

Traffic traversing the [Tor](https://attack.mitre.org/software/S0183) network will be forwarded to multiple nodes before exiting the [Tor](https://attack.mitre.org/software/S0183) network and continuing on to its intended destination.[\[Dingledine Tor The Second-Generation Onion Router\]](http://www.dtic.mil/dtic/tr/fulltext/u2/a465464.pdf)

- *Technique:* [[../Techniques/Multi-hop Proxy (T1090.003)|Multi-hop Proxy]]


# External References(s)

- [S0183](https://attack.mitre.org/software/S0183)

[^fn2]: [Roger Dingledine, Nick Mathewson and Paul Syverson. (2004). Tor: The Second-Generation Onion Router. Retrieved December 21, 2017.](http://www.dtic.mil/dtic/tr/fulltext/u2/a465464.pdf)