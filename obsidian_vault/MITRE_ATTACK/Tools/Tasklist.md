---
tags:
  - mitre/attack/tool
---

# Tasklist (`S0057`)

The [Tasklist](https://attack.mitre.org/software/S0057) utility displays a list of applications and services with their Process IDs (PID) for all tasks running on either a local or a remote computer. It is packaged with Windows operating systems and can be executed from the command-line interface. [^fn1]



# Techniques Used

## Process Discovery

[Tasklist](https://attack.mitre.org/software/S0057) can be used to discover processes running on a system.[\[Microsoft Tasklist\]](https://technet.microsoft.com/en-us/library/bb491010.aspx)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## System Service Discovery

[Tasklist](https://attack.mitre.org/software/S0057) can be used to discover services running on a system.[\[Microsoft Tasklist\]](https://technet.microsoft.com/en-us/library/bb491010.aspx)

- *Technique:* [[../Techniques/System Service Discovery (T1007)|System Service Discovery]]

## Security Software Discovery

[Tasklist](https://attack.mitre.org/software/S0057) can be used to enumerate security software currently running on a system by process name of known products.[\[Microsoft Tasklist\]](https://technet.microsoft.com/en-us/library/bb491010.aspx)

- *Technique:* [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]


# External References(s)

- [S0057](https://attack.mitre.org/software/S0057)

[^fn1]: [Microsoft. (n.d.). Tasklist. Retrieved December 23, 2015.](https://technet.microsoft.com/en-us/library/bb491010.aspx)