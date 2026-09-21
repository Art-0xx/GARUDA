---
mitre_data:
  id: T1574.010
  linker_tags:
  - mitre/attack/linker/stealth/services_file_permissions_weakness
  - mitre/attack/linker/execution/services_file_permissions_weakness
  name: Services File Permissions Weakness
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Services File Permissions Weakness (`T1574.010`)

Adversaries may execute their own malicious payloads by hijacking the binaries used by services. Adversaries may use flaws in the permissions of Windows services to replace the binary that is executed upon service start. These service processes may automatically execute specific binaries as part of their functionality or to perform other actions. If the permissions on the file system directory containing a target binary, or permissions on the binary itself are improperly set, then the target binary may be overwritten with another binary using user-level permissions and executed by the original process. If the original process and thread are running under a higher permissions level, then the replaced binary will also execute under higher-level permissions, which could include SYSTEM.

Adversaries may use this technique to replace legitimate binaries with malicious ones as a means of executing code at a higher permissions level. If the executing process is set to run at a specific time or during a certain event (e.g., system bootup) then this technique can also be used for persistence.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.010](https://attack.mitre.org/techniques/T1574/010)
