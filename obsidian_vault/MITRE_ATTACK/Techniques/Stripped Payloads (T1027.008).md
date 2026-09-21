---
mitre_data:
  id: T1027.008
  linker_tags:
  - mitre/attack/linker/stealth/stripped_payloads
  name: Stripped Payloads
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Stripped Payloads (`T1027.008`)

Adversaries may attempt to make a payload difficult to analyze by removing symbols, strings, and other human readable information. Scripts and executables may contain variables names and other strings that help developers document code functionality. Symbols are often created by an operating system’s `linker` when executable payloads are compiled. Reverse engineers use these symbols and strings to analyze code and to identify functionality in payloads.[^fn3][^fn1]

Adversaries may use stripped payloads in order to make malware analysis more difficult. For example, compilers and other tools may provide features to remove or obfuscate strings and symbols. Adversaries have also used stripped payload formats, such as run-only AppleScripts, a compiled and stripped version of [AppleScript](https://attack.mitre.org/techniques/T1059/002), to evade detection and analysis. The lack of human-readable information may directly hinder detection and analysis of payloads.[^fn2]


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.008](https://attack.mitre.org/techniques/T1027/008)

[^fn1]: [Ignacio Sanmillan. (2018, February 7). Executable and Linkable Format 101. Part 2: Symbols. Retrieved September 29, 2022.](https://www.intezer.com/blog/malware-analysis/executable-linkable-format-101-part-2-symbols/)
[^fn2]: [Phil Stokes. (2021, January 11). FADE DEAD | Adventures in Reversing Malicious Run-Only AppleScripts. Retrieved September 29, 2022.](https://www.sentinelone.com/labs/fade-dead-adventures-in-reversing-malicious-run-only-applescripts/)
[^fn3]: [STEPHEN ECKELS. (2022, February 28). Ready, Set, Go — Golang Internals and Symbol Recovery. Retrieved September 29, 2022.](https://www.mandiant.com/resources/blog/golang-internals-symbol-recovery)