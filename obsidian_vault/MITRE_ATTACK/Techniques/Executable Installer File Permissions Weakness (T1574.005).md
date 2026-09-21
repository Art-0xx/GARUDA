---
mitre_data:
  id: T1574.005
  linker_tags:
  - mitre/attack/linker/stealth/executable_installer_file_permissions_weakness
  - mitre/attack/linker/execution/executable_installer_file_permissions_weakness
  name: Executable Installer File Permissions Weakness
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Executable Installer File Permissions Weakness (`T1574.005`)

Adversaries may execute their own malicious payloads by hijacking the binaries used by an installer. These processes may automatically execute specific binaries as part of their functionality or to perform other actions. If the permissions on the file system directory containing a target binary, or permissions on the binary itself, are improperly set, then the target binary may be overwritten with another binary using user-level permissions and executed by the original process. If the original process and thread are running under a higher permissions level, then the replaced binary will also execute under higher-level permissions, which could include SYSTEM.

Another variation of this technique can be performed by taking advantage of a weakness that is common in executable, self-extracting installers. During the installation process, it is common for installers to use a subdirectory within the <code>%TEMP%</code> directory to unpack binaries such as DLLs, EXEs, or other payloads. When installers create subdirectories and files they often do not set appropriate permissions to restrict write access, which allows for execution of untrusted code placed in the subdirectories or overwriting of binaries used in the installation process. This behavior is related to and may take advantage of [DLL](https://attack.mitre.org/techniques/T1574/001) search order hijacking.

Adversaries may use this technique to replace legitimate binaries with malicious ones as a means of executing code at a higher permissions level. Some installers may also require elevated privileges that will result in privilege escalation when executing adversary controlled code. This behavior is related to [Bypass User Account Control](https://attack.mitre.org/techniques/T1548/002). Several examples of this weakness in existing common installers have been reported to software vendors.[^fn1]  [^fn2] If the executing process is set to run at a specific time or during a certain event (e.g., system bootup) then this technique can also be used for persistence.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.005](https://attack.mitre.org/techniques/T1574/005)

[^fn1]: [Robert Kugler. (2012, November 20). Mozilla Foundation Security Advisory 2012-98. Retrieved March 10, 2017.](https://www.mozilla.org/en-US/security/advisories/mfsa2012-98/)
[^fn2]: [Stefan Kanthak. (2015, December 8). Executable installers are vulnerable^WEVIL (case 7): 7z*.exe allows remote code execution with escalation of privilege. Retrieved December 4, 2014.](https://seclists.org/fulldisclosure/2015/Dec/34)