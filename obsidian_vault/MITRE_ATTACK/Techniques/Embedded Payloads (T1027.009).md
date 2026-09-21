---
mitre_data:
  id: T1027.009
  linker_tags:
  - mitre/attack/linker/stealth/embedded_payloads
  name: Embedded Payloads
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Embedded Payloads (`T1027.009`)

Adversaries may embed payloads within other files to conceal malicious content from defenses. Otherwise seemingly benign files (such as scripts and executables) may be abused to carry and obfuscate malicious payloads and content. In some cases, embedded payloads may also enable adversaries to [Subvert Trust Controls](https://attack.mitre.org/techniques/T1553) by not impacting execution controls such as digital signatures and notarization tickets.[^fn7] 

Adversaries may embed payloads in various file formats to hide payloads.[^fn5] This is similar to [Steganography](https://attack.mitre.org/techniques/T1027/003), though does not involve weaving malicious content into specific bytes and patterns related to legitimate digital media formats.[^fn1] 

For example, adversaries have been observed embedding payloads within or as an overlay of an otherwise benign binary.[^fn4] Adversaries have also been observed nesting payloads (such as executables and run-only scripts) inside a file of the same format.[^fn6] 

Embedded content may also be used as [Process Injection](https://attack.mitre.org/techniques/T1055) payloads used to infect benign system processes.[^fn3] These embedded then injected payloads may be used as part of the modules of malware designed to provide specific features such as encrypting C2 communications in support of an orchestrator module. For example, an embedded module may be injected into default browsers, allowing adversaries to then communicate via the network.[^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tool(s)

- [[../Tools/Invoke-PSImage|Invoke-PSImage]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.009](https://attack.mitre.org/techniques/T1027/009)

[^fn1]: [Barrett Adams . (n.d.). Invoke-PSImage . Retrieved September 30, 2022.](https://github.com/peewpw/Invoke-PSImage)
[^fn2]: [CISA. (2020, October 29). Malware Analysis Report (AR20-303A) MAR-10310246-2.v1 – PowerShell Script: ComRAT. Retrieved September 30, 2022.](https://www.cisa.gov/uscert/ncas/analysis-reports/ar20-303a)
[^fn3]: [Karen Victor. (2020, May 18). Reflective Loading Runs Netwalker Fileless Ransomware. Retrieved September 30, 2022.](https://www.trendmicro.com/en_us/research/20/e/netwalker-fileless-ransomware-injected-via-reflective-loading.html)
[^fn4]: [KONSTANTIN ZYKOV. (2019, September 23). Hello! My name is Dtrack. Retrieved September 30, 2022.](https://securelist.com/my-name-is-dtrack/93338/)
[^fn5]: [Microsoft. (2021, April 6). 2.5 ExtraData. Retrieved September 30, 2022.](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-shllink/c41e062d-f764-4f13-bd4f-ea812ab9a4d1)
[^fn6]: [Phil Stokes. (2021, January 11). FADE DEAD | Adventures in Reversing Malicious Run-Only AppleScripts. Retrieved September 29, 2022.](https://www.sentinelone.com/labs/fade-dead-adventures-in-reversing-malicious-run-only-applescripts/)
[^fn7]: [Phil Stokes. (2021, January 11). FADE DEAD | Adventures in Reversing Malicious Run-Only AppleScripts. Retrieved September 30, 2022.](https://www.sentinelone.com/labs/fade-dead-adventures-in-reversing-malicious-run-only-applescripts/)