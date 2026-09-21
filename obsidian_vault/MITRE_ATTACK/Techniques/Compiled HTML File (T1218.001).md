---
mitre_data:
  id: T1218.001
  linker_tags:
  - mitre/attack/linker/stealth/compiled_html_file
  name: Compiled HTML File
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Compiled HTML File (`T1218.001`)

Adversaries may abuse Compiled HTML files (.chm) to conceal malicious code. CHM files are commonly distributed as part of the Microsoft HTML Help system. CHM files are compressed compilations of various content such as HTML documents, images, and scripting/web related programming languages such VBA, JScript, Java, and ActiveX. [^fn2] CHM content is displayed using underlying components of the Internet Explorer browser [^fn4] loaded by the HTML Help executable program (hh.exe). [^fn3]

A custom CHM file containing embedded payloads could be delivered to a victim then triggered by [User Execution](https://attack.mitre.org/techniques/T1204). CHM execution may also bypass application application control on older and/or unpatched systems that do not account for execution of binaries through hh.exe. [^fn5] [^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.001](https://attack.mitre.org/techniques/T1218/001)

[^fn1]: [Microsoft. (2017, August 8). CVE-2017-8625 - Internet Explorer Security Feature Bypass Vulnerability. Retrieved October 3, 2018.](https://web.archive.org/web/20250419140549/https://msrc.microsoft.com/update-guide/en-US/advisory/CVE-2017-8625)
[^fn2]: [Microsoft. (2018, May 30). Microsoft HTML Help 1.4. Retrieved October 3, 2018.](https://docs.microsoft.com/previous-versions/windows/desktop/htmlhelp/microsoft-html-help-1-4-sdk)
[^fn3]: [Microsoft. (n.d.). About the HTML Help Executable Program. Retrieved October 3, 2018.](https://msdn.microsoft.com/windows/desktop/ms524405)
[^fn4]: [Microsoft. (n.d.). HTML Help ActiveX Control Overview. Retrieved October 3, 2018.](https://msdn.microsoft.com/windows/desktop/ms644670)
[^fn5]: [Moe, O. (2017, August 13). Bypassing Device guard UMCI using CHM – CVE-2017-8625. Retrieved October 3, 2018.](https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/)