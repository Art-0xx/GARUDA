---
mitre_data:
  id: T1070.007
  linker_tags:
  - mitre/attack/linker/stealth/clear_network_connection_history_and_configurations
  name: Clear Network Connection History and Configurations
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Clear Network Connection History and Configurations (`T1070.007`)

Adversaries may clear or remove evidence of malicious network connections in order to clean up traces of their operations. Configuration settings as well as various artifacts that highlight connection history may be created on a system and/or in application logs from behaviors that require network connections, such as [Remote Services](https://attack.mitre.org/techniques/T1021) or [External Remote Services](https://attack.mitre.org/techniques/T1133). Defenders may use these artifacts to monitor or otherwise analyze network connections created by adversaries.

Network connection history may be stored in various locations. For example, RDP connection history may be stored in Windows Registry values under [^fn2]:

* <code>HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default</code>
* <code>HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Servers</code>

Windows may also store information about recent RDP connections in files such as <code>C:\Users\\%username%\Documents\Default.rdp</code> and `C:\Users\%username%\AppData\Local\Microsoft\Terminal
Server Client\Cache\`.[^fn3] Similarly, macOS and Linux hosts may store information highlighting connection history in system logs (such as those stored in `/Library/Logs` and/or `/var/log/`).[^fn4][^fn1][^fn5]

Malicious network connections may also require changes to third-party applications or network configuration settings, such as [Disable or Modify System Firewall](https://attack.mitre.org/techniques/T1686) or tampering to enable [Proxy](https://attack.mitre.org/techniques/T1090). Adversaries may delete or modify this data to conceal indicators and/or impede defensive analysis.


# Platform(s)

- Linux
- macOS
- Windows
- Network Devices

# Parent Technique(s)

- [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1070.007](https://attack.mitre.org/techniques/T1070/007)

[^fn1]: [freedesktop.org. (n.d.). systemd-journald.service. Retrieved June 15, 2022.](https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html)
[^fn2]: [Microsoft. (2021, September 24). How to remove entries from the Remote Desktop Connection Computer box. Retrieved June 15, 2022.](https://docs.microsoft.com/troubleshoot/windows-server/remote/remove-entries-from-remote-desktop-connection-computer)
[^fn3]: [Moran, B. (2020, November 18). Putting Together the RDPieces. Retrieved October 17, 2022.](https://www.osdfcon.org/presentations/2020/Brian-Moran_Putting-Together-the-RDPieces.pdf)
[^fn4]: [rjben. (2012, May 30). How do you find the culprit when unauthorized access to a computer is a problem?. Retrieved August 3, 2022.](https://discussions.apple.com/thread/3991574)
[^fn5]: [Sarah Edwards. (2020, April 30). Analysis of Apple Unified Logs: Quarantine Edition [Entry 6] – Working From Home? Remote Logins. Retrieved August 19, 2021.](https://sarah-edwards-xzkc.squarespace.com/blog/2020/4/30/analysis-of-apple-unified-logs-quarantine-edition-entry-6-working-from-home-remote-logins)