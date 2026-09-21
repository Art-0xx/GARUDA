---
mitre_data:
  id: T1036.004
  linker_tags:
  - mitre/attack/linker/stealth/masquerade_task_or_service
  name: Masquerade Task or Service
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Masquerade Task or Service (`T1036.004`)

Adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. Tasks/services executed by the Task Scheduler or systemd will typically be given a name and/or description.[^fn4][^fn3] Windows services will have a service name as well as a display name. Many benign tasks and services exist that have commonly associated names. Adversaries may give tasks or services names that are similar or identical to those of legitimate ones.

Tasks or services contain other fields, such as a description, that adversaries may attempt to make appear legitimate.[^fn2][^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tool(s)

- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/IronNetInjector|IronNetInjector]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.004](https://attack.mitre.org/techniques/T1036/004)

[^fn1]: [Doctor Web. (2014, November 21). Linux.BackDoor.Fysbis.1. Retrieved December 7, 2017.](https://vms.drweb.com/virus/?i=4276269)
[^fn2]: [Falcone, R.. (2016, November 30). Shamoon 2: Return of the Disttrack Wiper. Retrieved January 11, 2017.](http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/)
[^fn3]: [Freedesktop.org. (n.d.). systemd.service — Service unit configuration. Retrieved March 16, 2020.](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
[^fn4]: [Microsoft. (n.d.). Schtasks. Retrieved April 28, 2016.](https://technet.microsoft.com/en-us/library/bb490996.aspx)