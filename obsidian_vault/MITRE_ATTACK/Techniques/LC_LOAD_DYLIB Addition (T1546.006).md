---
mitre_data:
  id: T1546.006
  linker_tags:
  - mitre/attack/linker/privilege_escalation/lc_load_dylib_addition
  - mitre/attack/linker/persistence/lc_load_dylib_addition
  name: LC_LOAD_DYLIB Addition
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# LC_LOAD_DYLIB Addition (`T1546.006`)

Adversaries may establish persistence by executing malicious content triggered by the execution of tainted binaries. Mach-O binaries have a series of headers that are used to perform certain operations when a binary is loaded. The LC_LOAD_DYLIB header in a Mach-O binary tells macOS and OS X which dynamic libraries (dylibs) to load during execution time. These can be added ad-hoc to the compiled binary as long as adjustments are made to the rest of the fields and dependencies.[^fn2] There are tools available to perform these changes.

Adversaries may modify Mach-O binary headers to load and execute malicious dylibs every time the binary is executed. Although any changes will invalidate digital signatures on binaries because the binary is being modified, this can be remediated by simply removing the LC_CODE_SIGNATURE command from the binary so that the signature isn’t checked at load time.[^fn1]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.006](https://attack.mitre.org/techniques/T1546/006)

[^fn1]: [Patrick Wardle. (2015). Malware Persistence on OS X Yosemite. Retrieved July 10, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)
[^fn2]: [Patrick Wardle. (2015). Writing Bad @$$ Malware for OS X. Retrieved July 10, 2017.](https://www.blackhat.com/docs/us-15/materials/us-15-Wardle-Writing-Bad-A-Malware-For-OS-X.pdf)