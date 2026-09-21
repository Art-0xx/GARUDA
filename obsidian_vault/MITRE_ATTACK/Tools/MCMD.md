---
tags:
  - mitre/attack/tool
---

# MCMD (`S0500`)

[MCMD](https://attack.mitre.org/software/S0500) is a remote access tool that provides remote command shell capability used by [Dragonfly](https://attack.mitre.org/groups/G0035).[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Clear Persistence

[MCMD](https://attack.mitre.org/software/S0500) has the ability to remove set Registry Keys, including those used for persistence.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Clear Persistence (T1070.009)|Clear Persistence]]

## Windows Command Shell

[MCMD](https://attack.mitre.org/software/S0500) can launch a console process (cmd.exe) with redirected standard input and output.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Hidden Window

[MCMD](https://attack.mitre.org/software/S0500) can modify processes to prevent them from being visible on the desktop.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]

## Web Protocols

[MCMD](https://attack.mitre.org/software/S0500) can use HTTPS in communication with C2 web servers.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Match Legitimate Resource Name or Location

[MCMD](https://attack.mitre.org/software/S0500) has been named Readme.txt to appear legitimate.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Match Legitimate Resource Name or Location (T1036.005)|Match Legitimate Resource Name or Location]]

## Obfuscated Files or Information

[MCMD](https://attack.mitre.org/software/S0500) can Base64 encode output strings prior to sending to C2.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## Scheduled Task

[MCMD](https://attack.mitre.org/software/S0500) can use scheduled tasks for persistence.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]

## Data from Local System

[MCMD](https://attack.mitre.org/software/S0500) has the ability to upload files from an infected device.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Ingress Tool Transfer

[MCMD](https://attack.mitre.org/software/S0500) can upload additional files to a compromised host.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Registry Run Keys / Startup Folder

[MCMD](https://attack.mitre.org/software/S0500) can use Registry Run Keys for persistence.[\[Secureworks MCMD July 2019\]](https://www.secureworks.com/research/mcmd-malware-analysis)

- *Technique:* [[../Techniques/Registry Run Keys _ Startup Folder (T1547.001)|Registry Run Keys / Startup Folder]]


# External References(s)

- [S0500](https://attack.mitre.org/software/S0500)

[^fn1]: [Secureworks. (2019, July 24). MCMD Malware Analysis. Retrieved August 13, 2020.](https://www.secureworks.com/research/mcmd-malware-analysis)