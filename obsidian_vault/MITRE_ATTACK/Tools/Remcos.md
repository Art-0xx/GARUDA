---
tags:
  - mitre/attack/tool
---

# Remcos (`S0332`)

[Remcos](https://attack.mitre.org/software/S0332) is a closed-source tool that is marketed as a remote control and surveillance software by a company called Breaking Security. [Remcos](https://attack.mitre.org/software/S0332) has been observed being used in malware campaigns.[^fn4][^fn3]



# Platform(s)

- Windows

# Techniques Used

## Internal Defacement

[Remcos](https://attack.mitre.org/software/S0332) has the ability to modify the desktop wallpaper.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Internal Defacement (T1491.001)|Internal Defacement]]

## Registry Run Keys / Startup Folder

[Remcos](https://attack.mitre.org/software/S0332) can add itself to the Registry key <code>HKCU\Software\Microsoft\Windows\CurrentVersion\Run</code> for persistence.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## System Information Discovery

[Remcos](https://attack.mitre.org/software/S0332) can collect the OS version and process architecture of compromised hosts.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Clipboard Data

[Remcos](https://attack.mitre.org/software/S0332) steals and modifies data from the clipboard.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Clipboard Data (T1115)|Clipboard Data]]

## Process Injection

[Remcos](https://attack.mitre.org/software/S0332) has a command to hide itself by injecting into another process.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Spearphishing Attachment

[Remcos](https://attack.mitre.org/software/S0332) has been spread through emails containing malicious documents.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Spearphishing Attachment (T1566.001)|Spearphishing Attachment]]

## Python

[Remcos](https://attack.mitre.org/software/S0332) uses Python scripts.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)

- *Technique:* [[../Techniques/Python (T1059.006)|Python]]

## Proxy

[Remcos](https://attack.mitre.org/software/S0332) uses the infected hosts as SOCKS5 proxies to allow for tunneling and proxying.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Modify Registry

[Remcos](https://attack.mitre.org/software/S0332) has full control of the Registry, including the ability to modify it.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## Asymmetric Cryptography

[Remcos](https://attack.mitre.org/software/S0332) can use TLS to encrypt C2 communication.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Asymmetric Cryptography (T1573.002)|Asymmetric Cryptography]]

## Obfuscated Files or Information

[Remcos](https://attack.mitre.org/software/S0332) uses RC4 and base64 to obfuscate data, including Registry entries and file paths.[\[Talos Remcos Aug 2018\]](https://blog.talosintelligence.com/2018/08/picking-apart-remcos.html) [Remcos](https://attack.mitre.org/software/S0332) can also employ control flow flattening to hinder analysis.[\[Check Point Blind Eagle MAR 2025\]](https://research.checkpoint.com/2025/blind-eagle-and-justice-for-all/)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## Windows Service

[Remcos](https://attack.mitre.org/software/S0332) can terminate, suspend, and resume a process by PID.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Windows Service (T1543.003)|Windows Service]]

## System Checks

[Remcos](https://attack.mitre.org/software/S0332) searches for Sandboxie and VMware on the system.[\[Talos Remcos Aug 2018\]](https://blog.talosintelligence.com/2018/08/picking-apart-remcos.html)

- *Technique:* [[../Techniques/System Checks (T1497.001)|System Checks]]

## Windows Command Shell

[Remcos](https://attack.mitre.org/software/S0332) can launch a remote command line to execute commands on the victim’s machine.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Encrypted/Encoded File

[Remcos](https://attack.mitre.org/software/S0332) can use string encryption to hinder analysis.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]

## Bypass User Account Control

[Remcos](https://attack.mitre.org/software/S0332) has a command for UAC bypassing.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Screen Capture

[Remcos](https://attack.mitre.org/software/S0332) takes automated screenshots of the infected machine.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Archive via Utility

[Remcos](https://attack.mitre.org/software/S0332) can zip files and folders for upload.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Archive via Utility (T1560.001)|Archive via Utility]]

## Indicator Removal

[Remcos](https://attack.mitre.org/software/S0332) can clean saved cookies and logins from the web browser.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

## Hidden Window

[Remcos](https://attack.mitre.org/software/S0332) can set `ProcessWindowStyle.Hidden` to hide windows.[\[Check Point Blind Eagle MAR 2025\]](https://research.checkpoint.com/2025/blind-eagle-and-justice-for-all/)


- *Technique:* [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]

## Ingress Tool Transfer

[Remcos](https://attack.mitre.org/software/S0332) can upload and download files to and from the victim’s machine.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Visual Basic

[Remcos](https://attack.mitre.org/software/S0332) can execute VBS remotely.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Visual Basic (T1059.005)|Visual Basic]]

## Malicious File

[Remcos](https://attack.mitre.org/software/S0332) has been executed by luring victims into opening malicious email attachments including Excel files.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)


- *Technique:* [[../Techniques/Malicious File (T1204.002)|Malicious File]]

## Dynamic Resolution

[Remcos](https://attack.mitre.org/software/S0332) has used dynamic DNS domains in C2 communications.[\[Check Point Blind Eagle MAR 2025\]](https://research.checkpoint.com/2025/blind-eagle-and-justice-for-all/)

- *Technique:* [[../Techniques/Dynamic Resolution (T1568)|Dynamic Resolution]]

## Keylogging

[Remcos](https://attack.mitre.org/software/S0332) has a command for keylogging.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)[\[Talos Remcos Aug 2018\]](https://blog.talosintelligence.com/2018/08/picking-apart-remcos.html)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Video Capture

[Remcos](https://attack.mitre.org/software/S0332) can access a system’s webcam and take pictures.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]

## Query Registry

[Remcos](https://attack.mitre.org/software/S0332) can obtain Registry data from targeted systems.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Query Registry (T1012)|Query Registry]]

## Hide Artifacts

[Remcos](https://attack.mitre.org/software/S0332) can modify file attributes to hide the file.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

## File and Directory Discovery

[Remcos](https://attack.mitre.org/software/S0332) can search for files on the infected machine.[\[Riskiq Remcos Jan 2018\]](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Audio Capture

[Remcos](https://attack.mitre.org/software/S0332) can capture data from the system’s microphone.[\[Fortinet Remcos Feb 2017\]](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Audio Capture (T1123)|Audio Capture]]

## File Deletion

[Remcos](https://attack.mitre.org/software/S0332) can delete files and folders from victim machines.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/File Deletion (T1070.004)|File Deletion]]

## Process Discovery

[Remcos](https://attack.mitre.org/software/S0332) can discover running processes on compromised machines.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)


- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## System Location Discovery

[Remcos](https://attack.mitre.org/software/S0332) can identify the location of targeted devices.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/System Location Discovery (T1614)|System Location Discovery]]

## Application Window Discovery

[Remcos](https://attack.mitre.org/software/S0332) can list all windows on victim systems.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/Application Window Discovery (T1010)|Application Window Discovery]]

## System Shutdown/Reboot

[Remcos](https://attack.mitre.org/software/S0332) can shutdown and restart remote devices.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/System Shutdown_Reboot (T1529)|System Shutdown/Reboot]]

## System Owner/User Discovery

[Remcos](https://attack.mitre.org/software/S0332) can enumerate the username on targeted hosts.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## JavaScript

[Remcos](https://attack.mitre.org/software/S0332) has the ability to execute JavaScript remotely.[\[Fortinet Remcos Campaign NOV 2024\]](https://www.fortinet.com/blog/threat-research/new-campaign-uses-remcos-rat-to-exploit-victims)

- *Technique:* [[../Techniques/JavaScript (T1059.007)|JavaScript]]

## Standard Encoding

[Remcos](https://attack.mitre.org/software/S0332) can serialize collected data with Protobuf.[\[Check Point Blind Eagle MAR 2025\]](https://research.checkpoint.com/2025/blind-eagle-and-justice-for-all/)

- *Technique:* [[../Techniques/Standard Encoding (T1132.001)|Standard Encoding]]


# External References(s)

- [S0332](https://attack.mitre.org/software/S0332)
- [Bacurio, F., Salvio, J. (2017, February 14). REMCOS: A New RAT In The Wild. Retrieved November 6, 2018.](https://www.fortinet.com/blog/threat-research/remcos-a-new-rat-in-the-wild-2.html)

[^fn3]: [Brumaghin, E., Unterbrink, H. (2018, August 22). Picking Apart Remcos Botnet-In-A-Box. Retrieved November 6, 2018.](https://blog.talosintelligence.com/2018/08/picking-apart-remcos.html)
[^fn4]: [Klijnsma, Y. (2018, January 23). Espionage Campaign Leverages Spear Phishing, RATs Against Turkish Defense Contractors. Retrieved November 6, 2018.](https://web.archive.org/web/20180124082756/https://www.riskiq.com/blog/labs/spear-phishing-turkish-defense-contractors/)