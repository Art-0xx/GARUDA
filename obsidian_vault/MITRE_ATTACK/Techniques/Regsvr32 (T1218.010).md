---
mitre_data:
  id: T1218.010
  linker_tags:
  - mitre/attack/linker/stealth/regsvr32
  name: Regsvr32
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Regsvr32 (`T1218.010`)

Adversaries may abuse Regsvr32.exe to proxy execution of malicious code. Regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (DLLs), on Windows systems. The Regsvr32.exe binary may also be signed by Microsoft. [^fn3]

Malicious usage of Regsvr32.exe may avoid triggering security tools that may not monitor execution of, and modules loaded by, the regsvr32.exe process because of allowlists or false positives from Windows using regsvr32.exe for normal operations. Regsvr32.exe can also be used to specifically bypass application control using functionality to load COM scriptlets to execute DLLs under user permissions. Since Regsvr32.exe is network and proxy aware, the scripts can be loaded by passing a uniform resource locator (URL) to file on an external Web server as an argument during invocation. This method makes no changes to the Registry as the COM object is not actually registered, only executed. [^fn2] This variation of the technique is often referred to as a "Squiblydoo" and has been used in campaigns targeting governments. [^fn4] [^fn1]

Regsvr32.exe can also be leveraged to register a COM Object used to establish persistence via [Component Object Model Hijacking](https://attack.mitre.org/techniques/T1546/015). [^fn4]


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

- [T1218.010](https://attack.mitre.org/techniques/T1218/010)

[^fn1]: [Anubhav, A., Kizhakkinan, D. (2017, February 22). Spear Phishing Techniques Used in Attacks Targeting the Mongolian Government. Retrieved February 24, 2017.](https://www.fireeye.com/blog/threat-research/2017/02/spear_phishing_techn.html)
[^fn2]: [LOLBAS. (n.d.). Regsvr32.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Regsvr32/)
[^fn3]: [Microsoft. (2015, August 14). How to use the Regsvr32 tool and troubleshoot Regsvr32 error messages. Retrieved June 22, 2016.](https://support.microsoft.com/en-us/kb/249873)
[^fn4]: [Nolen, R. et al.. (2016, April 28). Threat Advisory: “Squiblydoo” Continues Trend of Attackers Using Native OS Tools to “Live off the Land”. Retrieved April 9, 2018.](https://www.carbonblack.com/2016/04/28/threat-advisory-squiblydoo-continues-trend-of-attackers-using-native-os-tools-to-live-off-the-land/)