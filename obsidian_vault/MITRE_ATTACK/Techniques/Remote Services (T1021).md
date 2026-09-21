---
mitre_data:
  id: T1021
  linker_tags:
  - mitre/attack/linker/lateral_movement/remote_services
  name: Remote Services
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Remote Services (`T1021`)

Adversaries may use [Valid Accounts](https://attack.mitre.org/techniques/T1078) to log into a service that accepts remote connections, such as telnet, SSH, and VNC. The adversary may then perform actions as the logged-on user.

In an enterprise environment, servers and workstations can be organized into domains. Domains provide centralized identity management, allowing users to login using one set of credentials across the entire network. If an adversary is able to obtain a set of valid domain credentials, they could login to many different machines using remote access protocols such as secure shell (SSH) or remote desktop protocol (RDP).[^fn8][^fn6] They could also login to accessible SaaS or IaaS services, such as those that federate their identities to the domain, or management platforms for internal virtualization environments such as VMware vCenter. 

Legitimate applications (such as [Software Deployment Tools](https://attack.mitre.org/techniques/T1072) and other administrative programs) may utilize [Remote Services](https://attack.mitre.org/techniques/T1021) to access remote hosts. For example, Apple Remote Desktop (ARD) on macOS is native software used for remote management. ARD leverages a blend of protocols, including [VNC](https://attack.mitre.org/techniques/T1021/005) to send the screen and control buffers and [SSH](https://attack.mitre.org/techniques/T1021/004) for secure file transfer.[^fn2][^fn3][^fn1] Adversaries can abuse applications such as ARD to gain remote code execution and perform lateral movement. In versions of macOS prior to 10.14, an adversary can escalate an SSH session to an ARD session which enables an adversary to accept TCC (Transparency, Consent, and Control) prompts without user interaction and gain access to data.[^fn5][^fn4][^fn3]


# Platform(s)

- Linux
- macOS
- Windows
- IaaS
- ESXi

# Sub-Technique(s)

- [[../Techniques/VNC (T1021.005)|VNC]]
- [[../Techniques/SSH (T1021.004)|SSH]]
- [[../Techniques/Direct Cloud VM Connections (T1021.008)|Direct Cloud VM Connections]]
- [[../Techniques/SMB_Windows Admin Shares (T1021.002)|SMB/Windows Admin Shares]]
- [[../Techniques/Windows Remote Management (T1021.006)|Windows Remote Management]]
- [[../Techniques/Distributed Component Object Model (T1021.003)|Distributed Component Object Model]]
- [[../Techniques/Cloud Services (T1021.007)|Cloud Services]]
- [[../Techniques/Remote Desktop Protocol (T1021.001)|Remote Desktop Protocol]]

# Tool(s)

- [[../Tools/Brute Ratel C4|Brute Ratel C4]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021](https://attack.mitre.org/techniques/T1021)
- [Sarah Edwards. (2020, April 30). Analysis of Apple Unified Logs: Quarantine Edition [Entry 6] – Working From Home? Remote Logins. Retrieved August 19, 2021.](https://sarah-edwards-xzkc.squarespace.com/blog/2020/4/30/analysis-of-apple-unified-logs-quarantine-edition-entry-6-working-from-home-remote-logins)

[^fn1]: [Apple. (n.d.). Apple Remote Desktop Administrator Guide Version 3.3. Retrieved October 5, 2021.](https://images.apple.com/remotedesktop/pdf/ARD_Admin_Guide_v3.3.pdf)
[^fn2]: [Apple. (n.d.). Use MDM to enable Remote Management in macOS. Retrieved September 23, 2021.](https://support.apple.com/en-us/HT209161)
[^fn3]: [Apple. (n.d.). Use the kickstart command-line utility in Apple Remote Desktop. Retrieved September 23, 2021.](https://support.apple.com/en-us/HT201710)
[^fn4]: [Dan Borges. (2019, July 21). MacOS Red Teaming 206: ARD (Apple Remote Desktop Protocol). Retrieved September 10, 2021.](http://lockboxx.blogspot.com/2019/07/macos-red-teaming-206-ard-apple-remote.html)
[^fn5]: [Jake Nicastro, Willi Ballenthin. (2019, October 9). Living off the Orchard: Leveraging Apple Remote Desktop for Good and Evil. Retrieved August 16, 2021.](https://www.fireeye.com/blog/threat-research/2019/10/leveraging-apple-remote-desktop-for-good-and-evil.html)
[^fn6]: [Microsoft. (n.d.). Remote Desktop Services. Retrieved June 1, 2016.](https://technet.microsoft.com/en-us/windowsserver/ee236407.aspx)
[^fn8]: [SSH.COM. (n.d.). SSH (Secure Shell). Retrieved March 23, 2020.](https://www.ssh.com/ssh)