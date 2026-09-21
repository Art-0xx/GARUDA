---
tags:
  - mitre/attack/tool
---

# ShimRatReporter (`S0445`)

[ShimRatReporter](https://attack.mitre.org/software/S0445) is a tool used by suspected Chinese adversary [Mofang](https://attack.mitre.org/groups/G0103) to automatically conduct initial discovery. The details from this discovery are used to customize follow-on payloads (such as [ShimRat](https://attack.mitre.org/software/S0444)) as well as set up faux infrastructure which mimics the adversary's targets. [ShimRatReporter](https://attack.mitre.org/software/S0445) has been used in campaigns targeting multiple countries and sectors including government, military, critical infrastructure, automobile, and weapons development.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Exfiltration Over C2 Channel

[ShimRatReporter](https://attack.mitre.org/software/S0445) sent generated reports to the C2 via HTTP POST requests.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## Ingress Tool Transfer

[ShimRatReporter](https://attack.mitre.org/software/S0445) had the ability to download additional payloads.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## System Network Connections Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) used the Windows function <code>GetExtendedUdpTable</code> to detect connected UDP endpoints.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Software Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) gathered a list of installed software on the infected host.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Software Discovery (T1518)|Software Discovery]]

## Account Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) listed all non-privileged and privileged accounts available on the machine.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Account Discovery (T1087)|Account Discovery]]

## Archive Collected Data

[ShimRatReporter](https://attack.mitre.org/software/S0445) used LZ compression to compress initial reconnaissance reports before sending to the C2.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)	

- *Technique:* [[../Techniques/Archive Collected Data (T1560)|Archive Collected Data]]

## Match Legitimate Resource Name or Location

[ShimRatReporter](https://attack.mitre.org/software/S0445) spoofed itself as <code>AlphaZawgyl_font.exe</code>, a specialized Unicode font.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Match Legitimate Resource Name or Location (T1036.005)|Match Legitimate Resource Name or Location]]

## System Network Configuration Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) gathered the local proxy, domain, IP, routing tables, mac address, gateway, DNS servers, and DHCP status information from an infected host.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Permission Groups Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) gathered the local privileges for the infected host.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Permission Groups Discovery (T1069)|Permission Groups Discovery]]

## System Information Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) gathered the operating system name and specific Windows version of an infected machine.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Automated Exfiltration

[ShimRatReporter](https://attack.mitre.org/software/S0445) sent collected system and network information compiled into a report to an adversary-controlled C2.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Automated Exfiltration (T1020)|Automated Exfiltration]]

## Web Protocols

[ShimRatReporter](https://attack.mitre.org/software/S0445) communicated over HTTP with preconfigured C2 servers.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Obfuscated Files or Information

[ShimRatReporter](https://attack.mitre.org/software/S0445) encrypted gathered information with a combination of shifting and XOR using a static key.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## Automated Collection

[ShimRatReporter](https://attack.mitre.org/software/S0445) gathered information automatically, without instruction from a C2, related to the user and host machine that is compiled into a report and sent to the operators.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]

## Native API

[ShimRatReporter](https://attack.mitre.org/software/S0445) used several Windows API functions to gather information from the infected system.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Process Discovery

[ShimRatReporter](https://attack.mitre.org/software/S0445) listed all running processes on the machine.[\[FOX-IT May 2016 Mofang\]](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]


# External References(s)

- [S0445](https://attack.mitre.org/software/S0445)

[^fn1]: [Yonathan Klijnsma. (2016, May 17). Mofang: A politically motivated information stealing adversary. Retrieved May 12, 2020.](https://foxitsecurity.files.wordpress.com/2016/06/fox-it_mofang_threatreport_tlp-white.pdf)