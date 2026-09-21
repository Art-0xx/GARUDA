---
mitre_data:
  id: T1559.002
  linker_tags:
  - mitre/attack/linker/execution/dynamic_data_exchange
  name: Dynamic Data Exchange
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Dynamic Data Exchange (`T1559.002`)

Adversaries may use Windows Dynamic Data Exchange (DDE) to execute arbitrary commands. DDE is a client-server protocol for one-time and/or continuous inter-process communication (IPC) between applications. Once a link is established, applications can autonomously exchange transactions consisting of strings, warm data links (notifications when a data item changes), hot data links (duplications of changes to a data item), and requests for command execution.

Object Linking and Embedding (OLE), or the ability to link data between documents, was originally implemented through DDE. Despite being superseded by [Component Object Model](https://attack.mitre.org/techniques/T1559/001), DDE may be enabled in Windows 10 and most of Microsoft Office 2016 via Registry keys.[^fn3][^fn7][^fn8]

Microsoft Office documents can be poisoned with DDE commands, directly or through embedded files, and used to deliver execution via [Phishing](https://attack.mitre.org/techniques/T1566) campaigns or hosted Web content, avoiding the use of Visual Basic for Applications (VBA) macros.[^fn4][^fn6][^fn9][^fn11] Similarly, adversaries may infect payloads to execute applications and/or commands on a victim device by way of embedding DDE formulas within a CSV file intended to be opened through a Windows spreadsheet program.[^fn1][^fn2]

DDE could also be leveraged by an adversary operating on a compromised machine who does not have direct access to a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059). DDE execution can be invoked remotely via [Remote Services](https://attack.mitre.org/techniques/T1021) such as [Distributed Component Object Model](https://attack.mitre.org/techniques/T1021/003) (DCOM).[^fn5]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Inter-Process Communication (T1559)|Inter-Process Communication]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1559.002](https://attack.mitre.org/techniques/T1559/002)
- [NVISO Labs. (2017, October 11). Detecting DDE in MS Office documents. Retrieved November 21, 2017.](https://blog.nviso.be/2017/10/11/detecting-dde-in-ms-office-documents/)

[^fn1]: [ Albinowax Timo Goosen. (n.d.). CSV Injection. Retrieved February 7, 2022.](https://owasp.org/www-community/attacks/CSV_Injection)
[^fn2]: [ Ishaq Mohammed . (2021, January 10). Everything about CSV Injection and CSV Excel Macro Injection. Retrieved February 7, 2022.](https://blog.securelayer7.net/how-to-perform-csv-excel-macro-injection/)
[^fn3]: [Cimpanu, C. (2017, December 15). Microsoft Disables DDE Feature in Word to Prevent Further Malware Attacks. Retrieved December 19, 2017.](https://www.bleepingcomputer.com/news/microsoft/microsoft-disables-dde-feature-in-word-to-prevent-further-malware-attacks/)
[^fn4]: [El-Sherei, S. (2016, May 20). PowerShell, C-Sharp and DDE The Power Within. Retrieved November 22, 2017.](https://sensepost.com/blog/2016/powershell-c-sharp-and-dde-the-power-within/)
[^fn5]: [Hamilton, C. (2019, June 4). Hunting COM Objects. Retrieved June 10, 2019.](https://www.fireeye.com/blog/threat-research/2019/06/hunting-com-objects.html)
[^fn6]: [Kettle, J. (2014, August 29). Comma Separated Vulnerabilities. Retrieved November 22, 2017.](https://www.contextis.com/blog/comma-separated-vulnerabilities)
[^fn7]: [Microsoft. (2017, December 12). ADV170021 - Microsoft Office Defense in Depth Update. Retrieved February 3, 2018.](https://portal.msrc.microsoft.com/security-guidance/advisory/ADV170021)
[^fn8]: [Microsoft. (2017, November 8). Microsoft Security Advisory 4053440 - Securely opening Microsoft Office documents that contain Dynamic Data Exchange (DDE) fields. Retrieved November 21, 2017.](https://technet.microsoft.com/library/security/4053440)
[^fn9]: [Nelson, M. (2018, January 29). Reviving DDE: Using OneNote and Excel for Code Execution. Retrieved February 3, 2018.](https://posts.specterops.io/reviving-dde-using-onenote-and-excel-for-code-execution-d7226864caee)
[^fn11]: [Stalmans, E., El-Sherei, S. (2017, October 9). Macro-less Code Exec in MSWord. Retrieved November 21, 2017.](https://sensepost.com/blog/2017/macro-less-code-exec-in-msword/)