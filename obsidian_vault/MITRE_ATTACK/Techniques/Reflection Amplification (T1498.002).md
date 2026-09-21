---
mitre_data:
  id: T1498.002
  linker_tags:
  - mitre/attack/linker/impact/reflection_amplification
  name: Reflection Amplification
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Reflection Amplification (`T1498.002`)

Adversaries may attempt to cause a denial of service (DoS) by reflecting a high-volume of network traffic to a target. This type of Network DoS takes advantage of a third-party server intermediary that hosts and will respond to a given spoofed source IP address. This third-party server is commonly termed a reflector. An adversary accomplishes a reflection attack by sending packets to reflectors with the spoofed address of the victim. Similar to Direct Network Floods, more than one system may be used to conduct the attack, or a botnet may be used. Likewise, one or more reflectors may be used to focus traffic on the target.[^fn4] This Network DoS attack may also reduce the availability and functionality of the targeted system(s) and network.

Reflection attacks often take advantage of protocols with larger responses than requests in order to amplify their traffic, commonly known as a Reflection Amplification attack. Adversaries may be able to generate an increase in volume of attack traffic that is several orders of magnitude greater than the requests sent to the amplifiers. The extent of this increase will depending upon many variables, such as the protocol in question, the technique used, and the amplifying servers that actually produce the amplification in attack volume. Two prominent protocols that have enabled Reflection Amplification Floods are DNS[^fn2] and NTP[^fn3], though the use of several others in the wild have been documented.[^fn6]  In particular, the memcache protocol showed itself to be a powerful protocol, with amplification sizes up to 51,200 times the requesting packet.[^fn5]


# Platform(s)

- Windows
- IaaS
- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Network Denial of Service (T1498)|Network Denial of Service]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1498.002](https://attack.mitre.org/techniques/T1498/002)
- [Cisco. (n.d.). Detecting and Analyzing Network Threats With NetFlow. Retrieved April 25, 2019.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/netflow/configuration/15-mt/nf-15-mt-book/nf-detct-analy-thrts.pdf)

[^fn2]: [Cloudflare. (n.d.). What is a DNS amplification attack?. Retrieved April 23, 2019.](https://www.cloudflare.com/learning/ddos/dns-amplification-ddos-attack/)
[^fn3]: [Cloudflare. (n.d.). What is a NTP amplificaiton attack?. Retrieved April 23, 2019.](https://www.cloudflare.com/learning/ddos/ntp-amplification-ddos-attack/)
[^fn4]: [Marek Majkowsk, Cloudflare. (2017, May 24). Reflections on reflection (attacks). Retrieved April 23, 2019.](https://blog.cloudflare.com/reflections-on-reflections/)
[^fn5]: [Marek Majkowski of Cloudflare. (2018, February 27). Memcrashed - Major amplification attacks from UDP port 11211. Retrieved April 18, 2019.](https://blog.cloudflare.com/memcrashed-major-amplification-attacks-from-port-11211/)
[^fn6]: [Philippe Alcoy, Steinthor Bjarnason, Paul Bowen, C.F. Chui, Kirill Kasavchnko, and Gary Sockrider of Netscout Arbor. (2018, January). Insight into the Global Threat Landscape - Netscout Arbor's 13th Annual Worldwide Infrastructure Security Report. Retrieved April 22, 2019.](https://pages.arbornetworks.com/rs/082-KNA-087/images/13th_Worldwide_Infrastructure_Security_Report.pdf)