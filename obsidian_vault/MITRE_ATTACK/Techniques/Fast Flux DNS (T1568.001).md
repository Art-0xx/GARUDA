---
mitre_data:
  id: T1568.001
  linker_tags:
  - mitre/attack/linker/command_and_control/fast_flux_dns
  name: Fast Flux DNS
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Fast Flux DNS (`T1568.001`)

Adversaries may use Fast Flux DNS to hide a command and control channel behind an array of rapidly changing IP addresses linked to a single domain resolution. This technique uses a fully qualified domain name, with multiple IP addresses assigned to it which are swapped with high frequency, using a combination of round robin IP addressing and short Time-To-Live (TTL) for a DNS resource record.[^fn1][^fn2][^fn3]

The simplest, "single-flux" method, involves registering and de-registering an addresses as part of the DNS A (address) record list for a single DNS name. These registrations have a five-minute average lifespan, resulting in a constant shuffle of IP address resolution.[^fn3]

In contrast, the "double-flux" method registers and de-registers an address as part of the DNS Name Server record list for the DNS zone, providing additional resilience for the connection. With double-flux additional hosts can act as a proxy to the C2 host, further insulating the true source of the C2 channel.


# Platform(s)

- Linux
- macOS
- Windows
- ESXi

# Parent Technique(s)

- [[../Techniques/Dynamic Resolution (T1568)|Dynamic Resolution]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1568.001](https://attack.mitre.org/techniques/T1568/001)

[^fn1]: [Mehta, L. (2014, December 17). Fast Flux Networks Working and Detection, Part 1. Retrieved March 6, 2017.](https://resources.infosecinstitute.com/fast-flux-networks-working-detection-part-1/#gref)
[^fn2]: [Mehta, L. (2014, December 23). Fast Flux Networks Working and Detection, Part 2. Retrieved March 6, 2017.](https://resources.infosecinstitute.com/fast-flux-networks-working-detection-part-2/#gref)
[^fn3]: [Albors, Josep. (2017, January 12). Fast Flux networks: What are they and how do they work?. Retrieved March 11, 2020.](https://www.welivesecurity.com/2017/01/12/fast-flux-networks-work/)