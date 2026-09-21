---
tags: 
  - mitre/attack/data_component
---

# Network Connection Creation (`DC0082`)

The initial establishment of a network session, where a system or process initiates a connection to a local or remote endpoint. This typically involves capturing socket information (source/destination IP, ports, protocol) and tracking session metadata. Monitoring these events helps detect lateral movement, exfiltration, and command-and-control (C2) activities.

*Data Collection Measures:*

- Windows:
    - Event ID 5156 – Filtering Platform Connection - Logs network connections permitted by Windows Filtering Platform (WFP).
    - Sysmon Event ID 3 – Network Connection Initiated - Captures process, source/destination IP, ports, and parent process.
- Linux/macOS:
    - Netfilter (iptables), nftables logs - Tracks incoming and outgoing network connections.
    - AuditD (`connect` syscall) - Logs TCP, UDP, and ICMP connections.
    - Zeek (`conn.log`) - Captures protocol, duration, and bytes transferred.
- Cloud & Network Infrastructure:
    - AWS VPC Flow Logs / Azure NSG Flow Logs - Logs IP traffic at the network level in cloud environments.
    - Zeek (conn.log) or Suricata (network events) - Captures packet metadata for detection and correlation.
- Endpoint Detection & Response (EDR):
    - Detect anomalous network activity such as new C2 connections or data exfiltration attempts.





