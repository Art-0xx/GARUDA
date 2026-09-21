---
tags:
  - mitre/attack/tool
---

# AsyncRAT (`S1087`)

[AsyncRAT](https://attack.mitre.org/software/S1087) is an open-source remote access tool originally available through the NYANxCAT Github repository that has been used in malicious campaigns.[^fn2][^fn3][^fn1]



# Platform(s)

- Windows

# Techniques Used

## Debugger Evasion

[AsyncRAT](https://attack.mitre.org/software/S1087) can use the `CheckRemoteDebuggerPresent` function to detect the presence of a debugger.[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/Debugger Evasion (T1622)|Debugger Evasion]]

## Windows Command Shell

[AsyncRAT](https://attack.mitre.org/software/S1087) can be deployed via batch script.[\[ESET MirrorFace 2025\]](https://www.welivesecurity.com/en/eset-research/operation-akairyu-mirrorface-invites-europe-expo-2025-revives-anel-backdoor/)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Native API

[AsyncRAT](https://attack.mitre.org/software/S1087) has the ability to use OS APIs including `CheckRemoteDebuggerPresent`.[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## System Time Discovery

[AsyncRAT](https://attack.mitre.org/software/S1087) can check whether the current system hour and day of the week are within operating hours defined it its configuration.[\[ESET MirrorFace 2025\]](https://www.welivesecurity.com/en/eset-research/operation-akairyu-mirrorface-invites-europe-expo-2025-revives-anel-backdoor/)

- *Technique:* [[../Techniques/System Time Discovery (T1124)|System Time Discovery]]

## Domain Generation Algorithms

[AsyncRAT](https://attack.mitre.org/software/S1087) use a DGA to generate a C2 domains.[\[ESET MirrorFace 2025\]](https://www.welivesecurity.com/en/eset-research/operation-akairyu-mirrorface-invites-europe-expo-2025-revives-anel-backdoor/)

- *Technique:* [[../Techniques/Domain Generation Algorithms (T1568.002)|Domain Generation Algorithms]]

## Multi-hop Proxy

[AsyncRAT](https://attack.mitre.org/software/S1087) can proxy C2 through a [Tor](https://attack.mitre.org/software/S0183) client.[\[ESET MirrorFace 2025\]](https://www.welivesecurity.com/en/eset-research/operation-akairyu-mirrorface-invites-europe-expo-2025-revives-anel-backdoor/)

- *Technique:* [[../Techniques/Multi-hop Proxy (T1090.003)|Multi-hop Proxy]]

## Local Storage Discovery

[AsyncRAT](https://attack.mitre.org/software/S1087) can check the disk size through the values obtained with `DeviceInfo.`[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/Local Storage Discovery (T1680)|Local Storage Discovery]]

## System Owner/User Discovery

[AsyncRAT](https://attack.mitre.org/software/S1087) can check if the current user of a compromised system is an administrator. [\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Spearphishing Attachment

[AsyncRAT](https://attack.mitre.org/software/S1087) has been delivered via malicious email attachments.[\[Recorded Future TAG-144 AUG 2025\]](https://assets.recordedfuture.com/insikt-report-pdfs/2025/cta-2025-0826.pdf)

- *Technique:* [[../Techniques/Spearphishing Attachment (T1566.001)|Spearphishing Attachment]]

## Dynamic Resolution

[AsyncRAT](https://attack.mitre.org/software/S1087) can be configured to use dynamic DNS.[\[AsyncRAT GitHub\]](https://github.com/NYAN-x-CAT/AsyncRAT-C-Sharp/blob/master/README.md)

- *Technique:* [[../Techniques/Dynamic Resolution (T1568)|Dynamic Resolution]]

## Hidden Window


[AsyncRAT](https://attack.mitre.org/software/S1087) can hide the execution of scheduled tasks using `ProcessWindowStyle.Hidden`.[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]

## System Checks

[AsyncRAT](https://attack.mitre.org/software/S1087) can identify strings such as Virtual, vmware, or VirtualBox to detect virtualized environments.[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/System Checks (T1497.001)|System Checks]]

## Video Capture

[AsyncRAT](https://attack.mitre.org/software/S1087) can record screen content on targeted systems.[\[AsyncRAT GitHub\]](https://github.com/NYAN-x-CAT/AsyncRAT-C-Sharp/blob/master/README.md)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]

## Ingress Tool Transfer

[AsyncRAT](https://attack.mitre.org/software/S1087) has the ability to download files including over SFTP.[\[AsyncRAT GitHub\]](https://github.com/NYAN-x-CAT/AsyncRAT-C-Sharp/blob/master/README.md)[\[ESET MirrorFace 2025\]](https://www.welivesecurity.com/en/eset-research/operation-akairyu-mirrorface-invites-europe-expo-2025-revives-anel-backdoor/)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Malicious File

[AsyncRAT](https://attack.mitre.org/software/S1087) has been executed through victims opening malicious file attachments.[\[Recorded Future TAG-144 AUG 2025\]](https://assets.recordedfuture.com/insikt-report-pdfs/2025/cta-2025-0826.pdf)

- *Technique:* [[../Techniques/Malicious File (T1204.002)|Malicious File]]

## Process Discovery

[AsyncRAT](https://attack.mitre.org/software/S1087) can examine running processes to determine if a debugger is present.[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## System Network Configuration Discovery

[AsyncRAT](https://attack.mitre.org/software/S1087) can enumerate the NetBIOS name on targeted machines.[\[ESET MirrorFace 2025\]](https://www.welivesecurity.com/en/eset-research/operation-akairyu-mirrorface-invites-europe-expo-2025-revives-anel-backdoor/)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Screen Capture

[AsyncRAT](https://attack.mitre.org/software/S1087) has the ability to view the screen on compromised hosts.[\[AsyncRAT GitHub\]](https://github.com/NYAN-x-CAT/AsyncRAT-C-Sharp/blob/master/README.md)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Keylogging

[AsyncRAT](https://attack.mitre.org/software/S1087) can capture keystrokes on the victim’s machine.[\[AsyncRAT GitHub\]](https://github.com/NYAN-x-CAT/AsyncRAT-C-Sharp/blob/master/README.md)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Scheduled Task

[AsyncRAT](https://attack.mitre.org/software/S1087) can create a scheduled task to maintain persistence on system start-up.[\[Telefonica Snip3 December 2021\]](https://telefonicatech.com/blog/snip3-investigacion-malware)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]


# External References(s)

- [S1087](https://attack.mitre.org/software/S1087)

[^fn1]: [Jornet, A. (2021, December 23). Snip3, an investigation into malware. Retrieved September 19, 2023.](https://telefonicatech.com/blog/snip3-investigacion-malware)
[^fn2]: [Lorber, N. (2021, May 7). Revealing the Snip3 Crypter, a Highly Evasive RAT Loader. Retrieved September 13, 2023.](https://blog.morphisec.com/revealing-the-snip3-crypter-a-highly-evasive-rat-loader)
[^fn3]: [Ventura, V. (2021, September 16). Operation Layover: How we tracked an attack on the aviation industry to five years of compromise. Retrieved September 15, 2023.](https://blog.talosintelligence.com/operation-layover-how-we-tracked-attack/)