---
mitre_data:
  id: T1036.003
  linker_tags:
  - mitre/attack/linker/stealth/rename_legitimate_utilities
  name: Rename Legitimate Utilities
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Rename Legitimate Utilities (`T1036.003`)

Adversaries may rename legitimate / system utilities to try to evade security mechanisms concerning the usage of those utilities. Security monitoring and control mechanisms may be in place for legitimate utilities adversaries are capable of abusing, including both built-in binaries and tools such as PSExec, AutoHotKey, and IronPython.[^fn3][^fn4][^fn6][^fn5] It may be possible to bypass those security mechanisms by renaming the utility prior to utilization (ex: rename <code>rundll32.exe</code>).[^fn1] An alternative case occurs when a legitimate utility is copied or moved to a different directory and renamed to avoid detections based on these utilities executing from non-standard paths.[^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.003](https://attack.mitre.org/techniques/T1036/003)

[^fn1]: [Ewing, P. (2016, October 31). How to Hunt: The Masquerade Ball. Retrieved October 31, 2016.](https://www.elastic.co/blog/how-hunt-masquerade-ball)
[^fn2]: [F-Secure Labs. (2015, April 22). CozyDuke: Malware Analysis. Retrieved December 10, 2015.](https://www.f-secure.com/documents/996508/1030745/CozyDuke)
[^fn3]: [LOLBAS. (n.d.). Living Off The Land Binaries and Scripts (and also Libraries). Retrieved February 10, 2020.](https://lolbas-project.github.io/)
[^fn4]: [Matthew Brennan. (2024, July 5). Snakes on a Domain: An Analysis of a Python Malware Loader. Retrieved April 3, 2025.](https://www.huntress.com/blog/snakes-on-a-domain-an-analysis-of-a-python-malware-loader)
[^fn5]: [Splunk. (2025, February 24). Detection: Detect Renamed PSExec. Retrieved April 3, 2025.](https://research.splunk.com/endpoint/683e6196-b8e8-11eb-9a79-acde48001122/)
[^fn6]: [The DFIR Report. (2023, February 6). Collect, Exfiltrate, Sleep, Repeat. Retrieved April 3, 2025.](https://thedfirreport.com/2023/02/06/collect-exfiltrate-sleep-repeat/)