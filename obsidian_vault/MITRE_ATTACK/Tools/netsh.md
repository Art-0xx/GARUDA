---
tags:
  - mitre/attack/tool
---

# netsh (`S0108`)

[netsh](https://attack.mitre.org/software/S0108) is a scripting utility used to interact with networking components on local or remote systems. [^fn1]



# Platform(s)

- Windows

# Techniques Used

## Disable or Modify System Firewall

[netsh](https://attack.mitre.org/software/S0108) can be used to disable local firewall settings.[\[TechNet Netsh\]](https://technet.microsoft.com/library/bb490939.aspx)[\[TechNet Netsh Firewall\]](https://technet.microsoft.com/en-us/library/cc771046(v=ws.10).aspx)

- *Technique:* [[../Techniques/Disable or Modify System Firewall (T1686)|Disable or Modify System Firewall]]

## Netsh Helper DLL

[netsh](https://attack.mitre.org/software/S0108) can be used as a persistence proxy technique to execute a helper DLL when netsh.exe is executed.[\[Demaske Netsh Persistence\]](https://htmlpreview.github.io/?https://github.com/MatthewDemaske/blogbackup/blob/master/netshell.html)

- *Technique:* [[../Techniques/Netsh Helper DLL (T1546.007)|Netsh Helper DLL]]

## Proxy

[netsh](https://attack.mitre.org/software/S0108) can be used to set up a proxy tunnel to allow remote host access to an infected host.[\[Securelist fileless attacks Feb 2017\]](https://securelist.com/fileless-attacks-against-enterprise-networks/77403/)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Security Software Discovery

[netsh](https://attack.mitre.org/software/S0108) can be used to discover system firewall settings.[\[TechNet Netsh\]](https://technet.microsoft.com/library/bb490939.aspx)[\[TechNet Netsh Firewall\]](https://technet.microsoft.com/en-us/library/cc771046(v=ws.10).aspx)

- *Technique:* [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]


# External References(s)

- [S0108](https://attack.mitre.org/software/S0108)

[^fn1]: [Microsoft. (n.d.). Using Netsh. Retrieved February 13, 2017.](https://technet.microsoft.com/library/bb490939.aspx)