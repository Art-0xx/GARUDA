---
tags:
  - mitre/attack/tool
---

# Wevtutil (`S0645`)

[Wevtutil](https://attack.mitre.org/software/S0645) is a Windows command-line utility that enables administrators to retrieve information about event logs and publishers.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Disable or Modify Windows Event Log

[Wevtutil](https://attack.mitre.org/software/S0645) can be used to disable specific event logs on the system.[\[Wevtutil Microsoft Documentation\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil)

- *Technique:* [[../Techniques/Disable or Modify Windows Event Log (T1685.001)|Disable or Modify Windows Event Log]]

## Data from Local System

[Wevtutil](https://attack.mitre.org/software/S0645) can be used to export events from a specific log.[\[Wevtutil Microsoft Documentation\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil)[\[F-Secure Lazarus Cryptocurrency Aug 2020\]](https://web.archive.org/web/20200901113617/https://labs.f-secure.com/assets/BlogFiles/f-secureLABS-tlp-white-lazarus-threat-intel-report2.pdf)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Clear Windows Event Logs

[Wevtutil](https://attack.mitre.org/software/S0645) can be used to clear system and security event logs from the system.[\[Wevtutil Microsoft Documentation\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil)[\[Crowdstrike DNC June 2016\]](https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/)

- *Technique:* [[../Techniques/Clear Windows Event Logs (T1685.005)|Clear Windows Event Logs]]


# External References(s)

- [S0645](https://attack.mitre.org/software/S0645)

[^fn1]: [Microsoft. (n.d.). wevtutil. Retrieved September 14, 2021.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil)