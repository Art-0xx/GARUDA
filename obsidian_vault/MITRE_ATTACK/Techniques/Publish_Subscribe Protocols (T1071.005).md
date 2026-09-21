---
mitre_data:
  id: T1071.005
  linker_tags:
  - mitre/attack/linker/command_and_control/publish_subscribe_protocols
  name: Publish/Subscribe Protocols
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Publish/Subscribe Protocols (`T1071.005`)

Adversaries may communicate using publish/subscribe (pub/sub) application layer protocols to avoid detection/network filtering by blending in with existing traffic. Commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server. 

Protocols such as <code>MQTT</code>, <code>XMPP</code>, <code>AMQP</code>, and <code>STOMP</code> use a publish/subscribe design, with message distribution managed by a centralized broker.[^fn1][^fn2] Publishers categorize their messages by topics, while subscribers receive messages according to their subscribed topics.[^fn1] An adversary may abuse publish/subscribe protocols to communicate with systems under their control from behind a message broker while also mimicking normal, expected traffic.


# Platform(s)

- macOS
- Linux
- Windows
- Network Devices

# Parent Technique(s)

- [[../Techniques/Application Layer Protocol (T1071)|Application Layer Protocol]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1071.005](https://attack.mitre.org/techniques/T1071/005)

[^fn1]: [Hammond, Charlotte. Villadsen, Ole. Metrick, Kat.. (2023, November 21). Stealthy WailingCrab Malware misuses MQTT Messaging Protocol. Retrieved August 28, 2024.](https://securityintelligence.com/x-force/wailingcrab-malware-misues-mqtt-messaging-protocol/)
[^fn2]: [Mandiant. (n.d.). Appendix C (Digital) - The Malware Arsenal. Retrieved July 18, 2016.](https://www.mandiant.com/sites/default/files/2021-09/mandiant-apt1-report.pdf)