---
tags:
  - mitre/attack/tool
---

# Winexe (`S0191`)

[Winexe](https://attack.mitre.org/software/S0191) is a lightweight, open source tool similar to [PsExec](https://attack.mitre.org/software/S0029) designed to allow system administrators to execute commands on remote servers. [^fn2] [Winexe](https://attack.mitre.org/software/S0191) is unique in that it is a GNU/Linux based client. [^fn1]



# Techniques Used

## Service Execution

[Winexe](https://attack.mitre.org/software/S0191) installs a service on the remote system, executes the command, then uninstalls the service.[\[Secpod Winexe June 2017\]](https://web.archive.org/web/20211019012628/https://www.secpod.com/blog/winexe/)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]


# External References(s)

- [S0191](https://attack.mitre.org/software/S0191)

[^fn1]: [Guarnieri, C. (2015, June 19). Digital Attack on German Parliament: Investigative Report on the Hack of the Left Party Infrastructure in Bundestag. Retrieved January 22, 2018.](https://netzpolitik.org/2015/digital-attack-on-german-parliament-investigative-report-on-the-hack-of-the-left-party-infrastructure-in-bundestag/)
[^fn2]: [Skalkotos, N. (2013, September 20). WinExe. Retrieved January 22, 2018.](https://github.com/skalkoto/winexe/)