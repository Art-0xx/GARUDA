---
mitre_data:
  id: T1218.008
  linker_tags:
  - mitre/attack/linker/stealth/odbcconf
  name: Odbcconf
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Odbcconf (`T1218.008`)

Adversaries may abuse odbcconf.exe to proxy execution of malicious payloads. Odbcconf.exe is a Windows utility that allows you to configure Open Database Connectivity (ODBC) drivers and data source names.[^fn4] The Odbcconf.exe binary may be digitally signed by Microsoft.

Adversaries may abuse odbcconf.exe to bypass application control solutions that do not account for its potential abuse. Similar to [Regsvr32](https://attack.mitre.org/techniques/T1218/010), odbcconf.exe has a <code>REGSVR</code> flag that can be misused to execute DLLs (ex: <code>odbcconf.exe /S /A &lbrace;REGSVR "C:\Users\Public\file.dll"&rbrace;</code>). [^fn3][^fn1][^fn2] 



# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.008](https://attack.mitre.org/techniques/T1218/008)

[^fn1]: [Bermejo, L., Giagone, R., Wu, R., and Yarochkin, F. (2017, August 7). Backdoor-carrying Emails Set Sights on Russian-speaking Businesses. Retrieved March 7, 2019.](https://blog.trendmicro.com/trendlabs-security-intelligence/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses/)
[^fn2]: [Giagone, R., Bermejo, L., and Yarochkin, F. (2017, November 20). Cobalt Strikes Again: Spam Runs Use Macros and CVE-2017-8759 Exploit Against Russian Banks. Retrieved March 7, 2019.](https://blog.trendmicro.com/trendlabs-security-intelligence/cobalt-spam-runs-use-macros-cve-2017-8759-exploit/)
[^fn3]: [LOLBAS. (n.d.). Odbcconf.exe. Retrieved March 7, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/)
[^fn4]: [Microsoft. (2017, January 18). ODBCCONF.EXE. Retrieved March 7, 2019.](https://docs.microsoft.com/en-us/sql/odbc/odbcconf-exe?view=sql-server-2017)

# Vault Links

 - [[LOLBins/OSBinaries/Odbcconf.exe.md|LOLBins/OSBinaries/Odbcconf.exe]]