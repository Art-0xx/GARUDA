---
tags:
  - mitre/attack/tool
---

# cmd (`S0106`)

[cmd](https://attack.mitre.org/software/S0106) is the Windows command-line interpreter that can be used to interact with systems and execute other processes and utilities. [^fn1]

Cmd.exe contains native functionality to perform many operations to interact with the system, including listing files in a directory (e.g., <code>dir</code> [^fn4]), deleting files (e.g., <code>del</code> [^fn3]), and copying files (e.g., <code>copy</code> [^fn2]).



# Platform(s)

- Windows

# Techniques Used

## File and Directory Discovery

[cmd](https://attack.mitre.org/software/S0106) can be used to find files and directories with native functionality such as <code>dir</code> commands.[\[TechNet Dir\]](https://technet.microsoft.com/en-us/library/cc755121.aspx)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Ingress Tool Transfer

[cmd](https://attack.mitre.org/software/S0106) can be used to copy files to/from a remotely connected external system.[\[TechNet Copy\]](https://technet.microsoft.com/en-us/library/bb490886.aspx)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## System Information Discovery

[cmd](https://attack.mitre.org/software/S0106) can be used to find information about the operating system.[\[TechNet Dir\]](https://technet.microsoft.com/en-us/library/cc755121.aspx)

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## File Deletion

[cmd](https://attack.mitre.org/software/S0106) can be used to delete files from the file system.[\[TechNet Del\]](https://technet.microsoft.com/en-us/library/cc771049.aspx)

- *Technique:* [[../Techniques/File Deletion (T1070.004)|File Deletion]]

## Windows Command Shell

[cmd](https://attack.mitre.org/software/S0106) is used to execute programs and other actions at the command-line interface.[\[TechNet Cmd\]](https://technet.microsoft.com/en-us/library/bb490880.aspx)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Lateral Tool Transfer

[cmd](https://attack.mitre.org/software/S0106) can be used to copy files to/from a remotely connected internal system.[\[TechNet Copy\]](https://technet.microsoft.com/en-us/library/bb490886.aspx)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]


# External References(s)

- [S0106](https://attack.mitre.org/software/S0106)

[^fn1]: [Microsoft. (n.d.). Cmd. Retrieved April 18, 2016.](https://technet.microsoft.com/en-us/library/bb490880.aspx)
[^fn2]: [Microsoft. (n.d.). Copy. Retrieved April 26, 2016.](https://technet.microsoft.com/en-us/library/bb490886.aspx)
[^fn3]: [Microsoft. (n.d.). Del. Retrieved April 22, 2016.](https://technet.microsoft.com/en-us/library/cc771049.aspx)
[^fn4]: [Microsoft. (n.d.). Dir. Retrieved April 18, 2016.](https://technet.microsoft.com/en-us/library/cc755121.aspx)