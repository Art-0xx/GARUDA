---
tags:
  - mitre/attack/tool
---

# QuasarRAT (`S0262`)

[QuasarRAT](https://attack.mitre.org/software/S0262) is an open-source, remote access tool that has been publicly available on GitHub since at least 2014. [QuasarRAT](https://attack.mitre.org/software/S0262) is developed in the C# language.[^fn5][^fn6]



# Platform(s)

- Windows

# Techniques Used

## Remote Desktop Protocol

[QuasarRAT](https://attack.mitre.org/software/S0262) has a module for performing remote desktop access.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Remote Desktop Protocol (T1021.001)|Remote Desktop Protocol]]

## Keylogging

[QuasarRAT](https://attack.mitre.org/software/S0262) has a built-in keylogger.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)[\[Kaspersky BlindEagle AUG 2024\]](https://securelist.com/blindeagle-apt/113414/)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Symmetric Cryptography

[QuasarRAT](https://attack.mitre.org/software/S0262) uses AES with a hardcoded pre-shared key to encrypt network communication.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Symmetric Cryptography (T1573.001)|Symmetric Cryptography]]

## Credentials from Web Browsers

[QuasarRAT](https://attack.mitre.org/software/S0262) can obtain passwords from common web browsers.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)[\[Kaspersky BlindEagle AUG 2024\]](https://securelist.com/blindeagle-apt/113414/)


- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## Registry Run Keys / Startup Folder

If the [QuasarRAT](https://attack.mitre.org/software/S0262) client process does not have administrator privileges it will add a registry key to `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` for persistence.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A) 

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]

## Hidden Window

[QuasarRAT](https://attack.mitre.org/software/S0262) can hide process windows and make web requests invisible to the compromised user. Requests marked as invisible have been sent with user-agent string `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A` though [QuasarRAT](https://attack.mitre.org/software/S0262) can only be run on Windows systems.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]

## System Information Discovery

[QuasarRAT](https://attack.mitre.org/software/S0262) can gather system information from the victim’s machine including the OS type.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Ingress Tool Transfer

[QuasarRAT](https://attack.mitre.org/software/S0262) can download files to the victim’s machine and execute them.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## System Location Discovery

[QuasarRAT](https://attack.mitre.org/software/S0262) can determine the country a victim host is located in.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/System Location Discovery (T1614)|System Location Discovery]]

## Modify Registry

[QuasarRAT](https://attack.mitre.org/software/S0262) has a command to edit the Registry on the victim’s machine.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## Hidden Files and Directories


[QuasarRAT](https://attack.mitre.org/software/S0262) has the ability to set file attributes to "hidden" to hide files from the compromised user's view in Windows File Explorer.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Hidden Files and Directories (T1564.001)|Hidden Files and Directories]]

## System Owner/User Discovery

[QuasarRAT](https://attack.mitre.org/software/S0262) can enumerate the username and account type.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Bypass User Account Control


[QuasarRAT](https://attack.mitre.org/software/S0262) can generate a UAC pop-up Window to prompt the target user to run a command as the administrator.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## Data from Local System

[QuasarRAT](https://attack.mitre.org/software/S0262) can retrieve files from compromised client machines.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Non-Application Layer Protocol

[QuasarRAT](https://attack.mitre.org/software/S0262) can use TCP for C2 communication.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Non-Application Layer Protocol (T1095)|Non-Application Layer Protocol]]

## System Network Configuration Discovery

[QuasarRAT](https://attack.mitre.org/software/S0262) has the ability to enumerate the Wide Area Network (WAN) IP through requests to ip-api[.]com, freegeoip[.]net, or api[.]ipify[.]org observed with user-agent string `Mozilla/5.0 (Windows NT 6.3; rv:48.0) Gecko/20100101 Firefox/48.0`.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Credentials from Password Stores

[QuasarRAT](https://attack.mitre.org/software/S0262) can obtain passwords from common FTP clients.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

## Credentials In Files

[QuasarRAT](https://attack.mitre.org/software/S0262) can obtain passwords from FTP clients.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Windows Command Shell

[QuasarRAT](https://attack.mitre.org/software/S0262) can launch a remote shell to execute commands on the victim’s machine.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Proxy

[QuasarRAT](https://attack.mitre.org/software/S0262) can communicate over a reverse proxy using SOCKS5.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Non-Standard Port

[QuasarRAT](https://attack.mitre.org/software/S0262) can use port 4782 on the compromised host for TCP callbacks.[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Non-Standard Port (T1571)|Non-Standard Port]]

## Code Signing

A [QuasarRAT](https://attack.mitre.org/software/S0262) .dll file is digitally signed by a certificate from AirVPN.[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Code Signing (T1553.002)|Code Signing]]

## Application Window Discovery

[APT-C-36](https://attack.mitre.org/groups/G0099) used a customized version of [QuasarRAT](https://attack.mitre.org/software/S0262) to monitor browser windows for strings relating to specific Colombian financial institutions.[\[Kaspersky BlindEagle AUG 2024\]](https://securelist.com/blindeagle-apt/113414/)


- *Technique:* [[../Techniques/Application Window Discovery (T1010)|Application Window Discovery]]

## Scheduled Task

[QuasarRAT](https://attack.mitre.org/software/S0262) contains a .NET wrapper DLL for creating and managing scheduled tasks for maintaining persistence upon reboot.[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)[\[CISA AR18-352A Quasar RAT December 2018\]](https://www.cisa.gov/uscert/ncas/analysis-reports/AR18-352A)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]

## Video Capture

[QuasarRAT](https://attack.mitre.org/software/S0262) can perform webcam viewing.[\[GitHub QuasarRAT\]](https://github.com/quasar/QuasarRAT)[\[Volexity Patchwork June 2018\]](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]


# External References(s)

- [S0262](https://attack.mitre.org/software/S0262)
- [GREAT. (2021, March 30). APT10: sophisticated multi-layered loader Ecipekac discovered in A41APT campaign. Retrieved June 17, 2021.](https://securelist.com/apt10-sophisticated-multi-layered-loader-ecipekac-discovered-in-a41apt-campaign/101519/)
- [Lunghi, D., et al. (2017, December). Untangling the Patchwork Cyberespionage Group. Retrieved July 10, 2018.](https://documents.trendmicro.com/assets/tech-brief-untangling-the-patchwork-cyberespionage-group.pdf)

[^fn5]: [MaxXor. (n.d.). QuasarRAT. Retrieved July 10, 2018.](https://github.com/quasar/QuasarRAT)
[^fn6]: [Meltzer, M, et al. (2018, June 07). Patchwork APT Group Targets US Think Tanks. Retrieved July 16, 2018.](https://www.volexity.com/blog/2018/06/07/patchwork-apt-group-targets-us-think-tanks/)