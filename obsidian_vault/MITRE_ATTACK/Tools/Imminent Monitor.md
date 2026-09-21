---
tags:
  - mitre/attack/tool
---

# Imminent Monitor (`S0434`)

[Imminent Monitor](https://attack.mitre.org/software/S0434) was a commodity remote access tool (RAT) offered for sale from 2012 until 2019, when an operation was conducted to take down the Imminent Monitor infrastructure. Various cracked versions and variations of this RAT are still in circulation.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Native API

[Imminent Monitor](https://attack.mitre.org/software/S0434) has leveraged CreateProcessW() call to execute the debugger.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Credentials from Web Browsers

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a PasswordRecoveryPacket module for recovering browser passwords.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## Deobfuscate/Decode Files or Information

[Imminent Monitor](https://attack.mitre.org/software/S0434) has decoded malware components that are then dropped to the system.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Deobfuscate_Decode Files or Information (T1140)|Deobfuscate/Decode Files or Information]]

## Keylogging

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a keylogging module.[\[Imminent Unit42 Dec2019\]](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)

- *Technique:* [[../Techniques/Keylogging (T1056.001)|Keylogging]]

## File Deletion

[Imminent Monitor](https://attack.mitre.org/software/S0434) has deleted files related to its dynamic debugger feature.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/File Deletion (T1070.004)|File Deletion]]

## Remote Desktop Protocol

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a module for performing remote desktop access.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Remote Desktop Protocol (T1021.001)|Remote Desktop Protocol]]

## Process Discovery

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a "Process Watcher" feature to monitor processes in case the client ever crashes or gets closed.[\[Imminent Unit42 Dec2019\]](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Command and Scripting Interpreter

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a CommandPromptPacket and ScriptPacket module(s) for creating a remote shell and executing scripts.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Command and Scripting Interpreter (T1059)|Command and Scripting Interpreter]]

## Video Capture

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a remote webcam monitoring capability.[\[Imminent Unit42 Dec2019\]](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]

## Disable or Modify Tools

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a feature to disable Windows Task Manager.[\[Imminent Unit42 Dec2019\]](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)	

- *Technique:* [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

## Hidden Files and Directories

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a dynamic debugging feature to set the file attribute to hidden.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Hidden Files and Directories (T1564.001)|Hidden Files and Directories]]

## Compute Hijacking

[Imminent Monitor](https://attack.mitre.org/software/S0434) has the capability to run a cryptocurrency miner on the victim machine.[\[Imminent Unit42 Dec2019\]](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)

- *Technique:* [[../Techniques/Compute Hijacking (T1496.001)|Compute Hijacking]]

## Exfiltration Over C2 Channel

[Imminent Monitor](https://attack.mitre.org/software/S0434) has uploaded a file containing debugger logs, network information and system information to the C2.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Exfiltration Over C2 Channel (T1041)|Exfiltration Over C2 Channel]]

## Audio Capture

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a remote microphone monitoring capability.[\[Imminent Unit42 Dec2019\]](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Audio Capture (T1123)|Audio Capture]]

## Obfuscated Files or Information

[Imminent Monitor](https://attack.mitre.org/software/S0434) has encrypted the spearphish attachments to avoid detection from email gateways; the debugger also encrypts information before sending to the C2.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## File and Directory Discovery

[Imminent Monitor](https://attack.mitre.org/software/S0434) has a dynamic debugging feature to check whether it is located in the %TEMP% directory, otherwise it copies itself there.[\[QiAnXin APT-C-36 Feb2019\]](https://web.archive.org/web/20190625182633if_/https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]


# External References(s)

- [S0434](https://attack.mitre.org/software/S0434)

[^fn1]: [Unit 42. (2019, December 2). Imminent Monitor – a RAT Down Under. Retrieved May 5, 2020.](https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/)