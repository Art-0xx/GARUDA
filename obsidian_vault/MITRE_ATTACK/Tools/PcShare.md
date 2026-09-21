---
tags:
  - mitre/attack/tool
---

# PcShare (`S1050`)

[PcShare](https://attack.mitre.org/software/S1050) is an open source remote access tool that has been modified and used by Chinese threat actors, most notably during the FunnyDream campaign since late 2018.[^fn2][^fn1]



# Platform(s)

- Windows

# Techniques Used

## Match Legitimate Resource Name or Location

[PcShare](https://attack.mitre.org/software/S1050) has been named `wuauclt.exe` to appear as the legitimate Windows Update AutoUpdate Client.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Match Legitimate Resource Name or Location (T1036.005)|Match Legitimate Resource Name or Location]]

## Web Protocols

[PcShare](https://attack.mitre.org/software/S1050) has used HTTP for C2 communication.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Process Discovery

[PcShare](https://attack.mitre.org/software/S1050) can obtain a list of running processes on a compromised host.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Screen Capture

[PcShare](https://attack.mitre.org/software/S1050) can take screen shots of a compromised machine.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## System Network Configuration Discovery

[PcShare](https://attack.mitre.org/software/S1050) can obtain the proxy settings of a compromised machine using `InternetQueryOptionA` and its IP address by running `nslookup myip.opendns.comresolver1.opendns.com\r\n`.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

## Compression

[PcShare](https://attack.mitre.org/software/S1050) has been compressed with LZW algorithm.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Compression (T1027.015)|Compression]]

## Windows Command Shell

[PcShare](https://attack.mitre.org/software/S1050) can execute `cmd` commands on a compromised host.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Encrypted/Encoded File

[PcShare](https://attack.mitre.org/software/S1050) has been encrypted with XOR using different 32-long Base16 strings.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Encrypted_Encoded File (T1027.013)|Encrypted/Encoded File]]

## Component Object Model Hijacking

[PcShare](https://attack.mitre.org/software/S1050) has created the `HKCU\\Software\\Classes\\CLSID\\{42aedc87-2188-41fd-b9a3-0c966feabec1}\\InprocServer32` Registry key for persistence.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Component Object Model Hijacking (T1546.015)|Component Object Model Hijacking]]

## Keylogging

[PcShare](https://attack.mitre.org/software/S1050) has the ability to capture keystrokes.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## Data from Local System

[PcShare](https://attack.mitre.org/software/S1050) can collect files and information from a compromised host.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Rundll32

[PcShare](https://attack.mitre.org/software/S1050) has used `rundll32.exe` for execution.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Rundll32 (T1218.011)|Rundll32]]

## Deobfuscate/Decode Files or Information

[PcShare](https://attack.mitre.org/software/S1050) has decrypted its strings by applying a XOR operation and a decompression using a custom implemented LZM algorithm.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Deobfuscate_Decode Files or Information (T1140)|Deobfuscate/Decode Files or Information]]

## Query Registry

[PcShare](https://attack.mitre.org/software/S1050) can search the registry files of a compromised host.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Query Registry (T1012)|Query Registry]]

## File Deletion

[PcShare](https://attack.mitre.org/software/S1050) has deleted its files and components from a compromised host.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/File Deletion (T1070.004)|File Deletion]]

## Exfiltration Over C2 Channel

[PcShare](https://attack.mitre.org/software/S1050) can upload files and information from a compromised host to its C2 servers.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## Invalid Code Signature

[PcShare](https://attack.mitre.org/software/S1050) has used an invalid certificate in attempt to appear legitimate.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Invalid Code Signature (T1036.001)|Invalid Code Signature]]

## Modify Registry

[PcShare](https://attack.mitre.org/software/S1050) can delete its persistence mechanisms from the registry.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## Native API

[PcShare](https://attack.mitre.org/software/S1050) has used a variety of Windows API functions.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Process Injection

The [PcShare](https://attack.mitre.org/software/S1050) payload has been injected into the `logagent.exe` and `rdpclip.exe` processes.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]

## Video Capture

[PcShare](https://attack.mitre.org/software/S1050) can capture camera video as part of its collection process.[\[Bitdefender FunnyDream Campaign November 2020\]](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]


# External References(s)

- [S1050](https://attack.mitre.org/software/S1050)

[^fn1]: [LiveMirror. (2014, September 17). PcShare. Retrieved October 11, 2022.](https://github.com/LiveMirror/pcshare)
[^fn2]: [Vrabie, V. (2020, November). Dissecting a Chinese APT Targeting South Eastern Asian Government Institutions. Retrieved September 19, 2022.](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)