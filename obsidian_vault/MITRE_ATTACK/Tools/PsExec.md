---
tags:
  - mitre/attack/tool
---

# PsExec (`S0029`)

[PsExec](https://attack.mitre.org/software/S0029) is a free Microsoft tool that can be used to execute a program on another computer. It is used by IT administrators and attackers.[^fn2][^fn1]



# Platform(s)

- Windows

# Techniques Used

## SMB/Windows Admin Shares

[PsExec](https://attack.mitre.org/software/S0029), a tool that has been used by adversaries, writes programs to the <code>ADMIN$</code> network share to execute commands on remote systems.[\[PsExec Russinovich\]](http://windowsitpro.com/systems-management/psexec)

- *Technique:* [[../Techniques/SMB_Windows Admin Shares (T1021.002)|SMB/Windows Admin Shares]]

## Windows Service

[PsExec](https://attack.mitre.org/software/S0029) can leverage Windows services to escalate privileges from administrator to SYSTEM with the <code>-s</code> argument.[\[Russinovich Sysinternals\]](https://technet.microsoft.com/en-us/sysinternals/bb897553.aspx)

- *Technique:* [[../Techniques/Windows Service (T1543.003)|Windows Service]]

## Lateral Tool Transfer

[PsExec](https://attack.mitre.org/software/S0029) can be used to download or upload a file over a network share.[\[PsExec Russinovich\]](http://windowsitpro.com/systems-management/psexec)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]

## Service Execution

Microsoft Sysinternals [PsExec](https://attack.mitre.org/software/S0029) is a popular administration tool that can be used to execute binaries on remote systems using a temporary Windows service.[\[Russinovich Sysinternals\]](https://technet.microsoft.com/en-us/sysinternals/bb897553.aspx)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Domain Account

[PsExec](https://attack.mitre.org/software/S0029) has the ability to remotely create accounts on target systems.[\[NCC Group Fivehands June 2021\]](https://research.nccgroup.com/2021/06/15/handy-guide-to-a-new-fivehands-ransomware-variant/)

- *Technique:* [[../Techniques/Domain Account (T1136.002)|Domain Account]]


# External References(s)

- [S0029](https://attack.mitre.org/software/S0029)

[^fn1]: [Pilkington, M. (2012, December 17). Protecting Privileged Domain Accounts: PsExec Deep-Dive. Retrieved August 17, 2016.](https://www.sans.org/blog/protecting-privileged-domain-accounts-psexec-deep-dive/)
[^fn2]: [Russinovich, M. (2014, May 2). Windows Sysinternals PsExec v2.11. Retrieved May 13, 2015.](https://technet.microsoft.com/en-us/sysinternals/bb897553.aspx)