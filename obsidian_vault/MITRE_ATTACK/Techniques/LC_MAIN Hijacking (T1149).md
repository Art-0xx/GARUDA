---
mitre_data:
  id: T1149
  linker_tags:
  - mitre/attack/linker/stealth/lc_main_hijacking
  name: LC_MAIN Hijacking
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# LC_MAIN Hijacking (`T1149`)

**This technique has been deprecated and should no longer be used.**

As of OS X 10.8, mach-O binaries introduced a new header called LC_MAIN that points to the binary’s entry point for execution. Previously, there were two headers to achieve this same effect: LC_THREAD and LC_UNIXTHREAD  [^fn1]. The entry point for a binary can be hijacked so that initial execution flows to a malicious addition (either another section or a code cave) and then goes back to the initial entry point so that the victim doesn’t know anything was different  [^fn2]. By modifying a binary in this way, application whitelisting can be bypassed because the file name or application path is still the same.


# Platform(s)

- macOS

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1149](https://attack.mitre.org/techniques/T1149)

[^fn1]: [Bit9 + Carbon Black Threat Research Team. (2015). 2015: The Most Prolific Year in History for OS X Malware. Retrieved July 8, 2017.](https://assets.documentcloud.org/documents/2459197/bit9-carbon-black-threat-research-report-2015.pdf)
[^fn2]: [Patrick Wardle. (2014, September). Methods of Malware Persistence on Mac OS X. Retrieved July 5, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)