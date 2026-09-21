---
tags:
  - mitre/attack/tool
---

# Reg (`S0075`)

[Reg](https://attack.mitre.org/software/S0075) is a Windows utility used to interact with the Windows Registry. It can be used at the command-line interface to query, add, modify, and remove information. [^fn1]

Utilities such as [Reg](https://attack.mitre.org/software/S0075) are known to be used by persistent threats. [^fn2]



# Platform(s)

- Windows

# Techniques Used

## Credentials in Registry

[Reg](https://attack.mitre.org/software/S0075) may be used to find credentials in the Windows Registry.[\[Pentestlab Stored Credentials\]](https://pentestlab.blog/2017/04/19/stored-credentials/)

- *Technique:* [[../Techniques/Credentials in Registry (T1552.002)|Credentials in Registry]]

## Query Registry

[Reg](https://attack.mitre.org/software/S0075) may be used to gather details from the Windows Registry of a local or remote system at the command-line interface.[\[Microsoft Reg\]](https://technet.microsoft.com/en-us/library/cc732643.aspx)

- *Technique:* [[../Techniques/Query Registry (T1012)|Query Registry]]

## Modify Registry

[Reg](https://attack.mitre.org/software/S0075) may be used to interact with and modify the Windows Registry of a local or remote system at the command-line interface.[\[Microsoft Reg\]](https://technet.microsoft.com/en-us/library/cc732643.aspx)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]


# External References(s)

- [S0075](https://attack.mitre.org/software/S0075)

[^fn1]: [Microsoft. (2012, April 17). Reg. Retrieved May 1, 2015.](https://technet.microsoft.com/en-us/library/cc732643.aspx)
[^fn2]: [Tomonaga, S. (2016, January 26). Windows Commands Abused by Attackers. Retrieved February 2, 2016.](https://blogs.jpcert.or.jp/en/2016/01/windows-commands-abused-by-attackers.html)