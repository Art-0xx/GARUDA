---
mitre_data:
  id: T1546.002
  linker_tags:
  - mitre/attack/linker/privilege_escalation/screensaver
  - mitre/attack/linker/persistence/screensaver
  name: Screensaver
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Screensaver (`T1546.002`)

Adversaries may establish persistence by executing malicious content triggered by user inactivity. Screensavers are programs that execute after a configurable time of user inactivity and consist of Portable Executable (PE) files with a .scr file extension.[^fn2] The Windows screensaver application scrnsave.scr is located in <code>C:\Windows\System32\</code>, and <code>C:\Windows\sysWOW64\</code>  on 64-bit Windows systems, along with screensavers included with base Windows installations.

The following screensaver settings are stored in the Registry (<code>HKCU\Control Panel\Desktop\</code>) and could be manipulated to achieve persistence:

* <code>SCRNSAVE.exe</code> - set to malicious PE path
* <code>ScreenSaveActive</code> - set to '1' to enable the screensaver
* <code>ScreenSaverIsSecure</code> - set to '0' to not require a password to unlock
* <code>ScreenSaveTimeout</code> - sets user inactivity timeout before screensaver is executed

Adversaries can use screensaver settings to maintain persistence by setting the screensaver to run malware after a certain timeframe of user inactivity.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.002](https://attack.mitre.org/techniques/T1546/002)

[^fn1]: [ESET. (2017, August). Gazing at Gazer: Turla’s new second stage backdoor. Retrieved September 14, 2017.](https://www.welivesecurity.com/wp-content/uploads/2017/08/eset-gazer.pdf)
[^fn2]: [Wikipedia. (2017, November 22). Screensaver. Retrieved December 5, 2017.](https://en.wikipedia.org/wiki/Screensaver)