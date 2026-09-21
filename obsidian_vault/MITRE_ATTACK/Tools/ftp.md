---
tags:
  - mitre/attack/tool
---

# ftp (`S0095`)

[ftp](https://attack.mitre.org/software/S0095) is a utility commonly available with operating systems to transfer information over the File Transfer Protocol (FTP). Adversaries can use it to transfer other tools onto a system or to exfiltrate data.[^fn1][^fn2]



# Platform(s)

- Linux
- Windows
- macOS

# Techniques Used

## Lateral Tool Transfer

[ftp](https://attack.mitre.org/software/S0095) may be abused by adversaries to transfer tools or files between systems within a compromised environment.[\[Microsoft FTP\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftp)[\[Linux FTP\]](https://linux.die.net/man/1/ftp)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]

## Exfiltration Over Unencrypted Non-C2 Protocol

[ftp](https://attack.mitre.org/software/S0095) may be used to exfiltrate data separate from the main command and control protocol.[\[Microsoft FTP\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftp)[\[Linux FTP\]](https://linux.die.net/man/1/ftp)

- *Technique:* [[../Techniques/Exfiltration Over Unencrypted Non-C2 Protocol (T1048.003)|Exfiltration Over Unencrypted Non-C2 Protocol]]

## Ingress Tool Transfer

[ftp](https://attack.mitre.org/software/S0095) may be abused by adversaries to transfer tools or files from an external system into a compromised environment.[\[Microsoft FTP\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftp)[\[Linux FTP\]](https://linux.die.net/man/1/ftp)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]


# External References(s)

- [S0095](https://attack.mitre.org/software/S0095)

[^fn1]: [Microsoft. (2021, July 21). ftp. Retrieved February 25, 2022.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftp)
[^fn2]: [N/A. (n.d.). ftp(1) - Linux man page. Retrieved February 25, 2022.](https://linux.die.net/man/1/ftp)