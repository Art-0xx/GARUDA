---
tags:
  - mitre/attack/tool
---

# Sliver (`S0633`)

[Sliver](https://attack.mitre.org/software/S0633) is an open source, cross-platform, red team command and control (C2) framework written in Golang. [Sliver](https://attack.mitre.org/software/S0633) includes its own package manager, "armory," for staging and downloading additional tools and payloads to the primary C2 framework.[^fn2][^fn1]



# Platform(s)

- Windows
- Linux
- macOS

# Techniques Used

## Obfuscated Files or Information

[Sliver](https://attack.mitre.org/software/S0633) obfuscates configuration and other static files using native Go libraries such as `garble` and `gobfuscate` to inhibit configuration analysis and static detection.[\[Microsoft Sliver 2022\]](https://www.microsoft.com/en-us/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## Process Injection

[Sliver](https://attack.mitre.org/software/S0633) includes multiple methods to perform process injection to migrate the framework into other, potentially privileged processes on the victim machine.[\[Microsoft Sliver 2022\]](https://www.microsoft.com/en-us/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/)[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)[\[Bishop Fox Sliver Framework August 2019\]](https://labs.bishopfox.com/tech-blog/sliver)[\[GitHub Sliver C2\]](https://github.com/BishopFox/sliver/)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## File and Directory Discovery

[Sliver](https://attack.mitre.org/software/S0633) can enumerate files on a target system.[\[GitHub Sliver File System August 2021\]](https://github.com/BishopFox/sliver/tree/master/client/command/filesystem)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Compile After Delivery

[Sliver](https://attack.mitre.org/software/S0633) includes functionality to retrieve source code and compile locally prior to execution in victim environments.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/Compile After Delivery (T1027.004)|Compile After Delivery]]

## Access Token Manipulation

[Sliver](https://attack.mitre.org/software/S0633) has the ability to manipulate user tokens on targeted Windows systems.[\[Bishop Fox Sliver Framework August 2019\]](https://labs.bishopfox.com/tech-blog/sliver)[\[GitHub Sliver C2\]](https://github.com/BishopFox/sliver/)

- *Technique:* [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

## PowerShell

[Sliver](https://attack.mitre.org/software/S0633) has built-in functionality to launch a Powershell command prompt.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## DNS

[Sliver](https://attack.mitre.org/software/S0633) can support C2 communications over DNS.[\[Cybersecurity Advisory SVR TTP May 2021\]](https://www.ncsc.gov.uk/files/Advisory-further-TTPs-associated-with-SVR-cyber-actors.pdf)[\[Bishop Fox Sliver Framework August 2019\]](https://labs.bishopfox.com/tech-blog/sliver)[\[GitHub Sliver C2 DNS\]](https://github.com/BishopFox/sliver/wiki/DNS-C2)[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)[\[Microsoft Sliver 2022\]](https://www.microsoft.com/en-us/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/)

- *Technique:* [[../Techniques/DNS (T1071.004)|DNS]]

## Encrypted/Encoded File

[Sliver](https://attack.mitre.org/software/S0633) can encrypt strings at compile time.[\[Bishop Fox Sliver Framework August 2019\]](https://labs.bishopfox.com/tech-blog/sliver)[\[GitHub Sliver C2\]](https://github.com/BishopFox/sliver/)

- *Technique:* [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]

## Asymmetric Cryptography

[Sliver](https://attack.mitre.org/software/S0633) can use mutual TLS and RSA  cryptography to exchange a session key.[\[Cybersecurity Advisory SVR TTP May 2021\]](https://www.ncsc.gov.uk/files/Advisory-further-TTPs-associated-with-SVR-cyber-actors.pdf)[\[Bishop Fox Sliver Framework August 2019\]](https://labs.bishopfox.com/tech-blog/sliver)[\[GitHub Sliver Encryption\]](https://github.com/BishopFox/sliver/wiki/Transport-Encryption)[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)[\[Microsoft Sliver 2022\]](https://www.microsoft.com/en-us/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Internal Proxy

[Sliver](https://attack.mitre.org/software/S0633) has a built-in SOCKS5 proxying capability allowing for [Sliver](https://attack.mitre.org/software/S0633) clients to proxy network traffic through other clients within a victim network.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/Internal Proxy (T1090.001)|Internal Proxy]]

## System Network Configuration Discovery

[Sliver](https://attack.mitre.org/software/S0633) has the ability to gather network configuration information.[\[GitHub Sliver Ifconfig\]](https://github.com/BishopFox/sliver/blob/ea329226636ab8e470086a17f13aa8d330baad22/client/command/network/ifconfig.go)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Screen Capture

[Sliver](https://attack.mitre.org/software/S0633) can take screenshots of the victim’s active display.[\[GitHub Sliver Screen\]](https://github.com/BishopFox/sliver/blob/master/implant/sliver/screen/screenshot_windows.go)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Web Protocols

 [Sliver](https://attack.mitre.org/software/S0633) has the ability to support C2 communications over HTTP and HTTPS.[\[Cybersecurity Advisory SVR TTP May 2021\]](https://www.ncsc.gov.uk/files/Advisory-further-TTPs-associated-with-SVR-cyber-actors.pdf)[\[Bishop Fox Sliver Framework August 2019\]](https://labs.bishopfox.com/tech-blog/sliver)[\[GitHub Sliver C2\]](https://github.com/BishopFox/sliver/)[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)[\[Microsoft Sliver 2022\]](https://www.microsoft.com/en-us/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Ingress Tool Transfer

[Sliver](https://attack.mitre.org/software/S0633) can download additional content and files from the [Sliver](https://attack.mitre.org/software/S0633) server to the client residing on the victim machine using the <code>upload</code> command.[\[GitHub Sliver Upload\]](https://github.com/BishopFox/sliver/blob/ea329226636ab8e470086a17f13aa8d330baad22/client/command/filesystem/upload.go)[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Symmetric Cryptography

[Sliver](https://attack.mitre.org/software/S0633) can use AES-GCM-256 to encrypt a session key for C2 message exchange.[\[GitHub Sliver Encryption\]](https://github.com/BishopFox/sliver/wiki/Transport-Encryption)

- *Technique:* [[../Techniques/Symmetric Cryptography (T1573.001)|Symmetric Cryptography]]

## Application Layer Protocol

[Sliver](https://attack.mitre.org/software/S0633) can utilize the Wireguard VPN protocol for command and control.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/Application Layer Protocol (T1071)|Application Layer Protocol]]

## Golden Ticket

[Sliver](https://attack.mitre.org/software/S0633) incorporates the [Rubeus](https://attack.mitre.org/software/S1071) framework to allow for Kerberos ticket manipulation, specifically for forging Kerberos Golden Tickets.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/Golden Ticket (T1558.001)|Golden Ticket]]

## Exfiltration Over C2 Channel

[Sliver](https://attack.mitre.org/software/S0633) can exfiltrate files from the victim using the <code>download</code> command.[\[GitHub Sliver Download\]](https://github.com/BishopFox/sliver/blob/7489c69962b52b09ed377d73d142266564845297/client/command/filesystem/download.go)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## Bypass User Account Control

[Sliver](https://attack.mitre.org/software/S0633) can leverage multiple techniques to bypass User Account Control (UAC) on Windows systems.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Standard Encoding

[Sliver](https://attack.mitre.org/software/S0633) can use standard encoding techniques like gzip and hex to ASCII to encode the C2 communication payload.[\[GitHub Sliver HTTP\]](https://github.com/BishopFox/sliver/wiki/HTTP(S)-C2)

- *Technique:* [[../Techniques/Standard Encoding (T1132.001)|Standard Encoding]]

## LSASS Memory

[Sliver](https://attack.mitre.org/software/S0633) has a built-in `procdump` command allowing for retrieval of memory from processes such as `lsass.exe` for credential harvesting.[\[Cybereason Sliver Undated\]](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## System Network Connections Discovery

[Sliver](https://attack.mitre.org/software/S0633) can collect network connection information.[\[GitHub Sliver Netstat\]](https://github.com/BishopFox/sliver/tree/58a56a077f0813bb312f9fa4df7453b510c3a73b/implant/sliver/netstat)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Steganography

[Sliver](https://attack.mitre.org/software/S0633) can encode binary data into a .PNG file for C2 communication.[\[GitHub Sliver HTTP\]](https://github.com/BishopFox/sliver/wiki/HTTP(S)-C2)

- *Technique:* [[../Techniques/Steganography (T1001.002)|Steganography]]


# External References(s)

- [S0633](https://attack.mitre.org/software/S0633)

[^fn1]: [Cybereason Global SOC and Incident Response Team. (n.d.). Sliver C2 Leveraged by Many Threat Actors. Retrieved March 24, 2025.](https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors)
[^fn2]: [Kervella, R. (2019, August 4). Cross-platform General Purpose Implant Framework Written in Golang. Retrieved July 30, 2021.](https://labs.bishopfox.com/tech-blog/sliver)