---
mitre_data:
  id: T1070.006
  linker_tags:
  - mitre/attack/linker/stealth/timestomp
  name: Timestomp
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Timestomp (`T1070.006`)

Adversaries may modify file time attributes to hide new files or changes to existing files. Timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder and blend malicious files with legitimate files.

In Windows systems, both the `$STANDARD_INFORMATION` (`$SI`) and `$FILE_NAME` (`$FN`) attributes record times in a Master File Table (MFT) file.[^fn4] `$SI` (dates/time stamps) is displayed to the end user, including in the File System view, while `$FN` is dealt with by the kernel.[^fn5]

Modifying the `$SI` attribute is the most common method of timestomping because it can be modified at the user level using API calls. `$FN` timestomping, however, typically requires interacting with the system kernel or moving or renaming a file.[^fn4]

Adversaries modify timestamps on files so that they do not appear conspicuous to forensic investigators or file analysis tools. In order to evade detections that rely on identifying discrepancies between the `$SI` and `$FN` attributes, adversaries may also engage in “double timestomping” by modifying times on both attributes simultaneously.[^fn6]

In Linux systems and on ESXi servers, threat actors may attempt to perform timestomping using commands such as `touch -a -m -t <timestamp> <filename>` (which sets access and modification times to a specific value) or `touch -r <filename> <filename>` (which sets access and modification times to match those of another file).[^fn3][^fn1]

Timestomping may be used along with file name [Masquerading](https://attack.mitre.org/techniques/T1036) to hide malware and tools.[^fn2]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1070.006](https://attack.mitre.org/techniques/T1070/006)

[^fn1]: [Asher Langton. (2022, December 9). A Custom Python Backdoor for VMWare ESXi Servers. Retrieved March 26, 2025.](https://blogs.juniper.net/en-us/threat-research/a-custom-python-backdoor-for-vmware-esxi-servers)
[^fn2]: [Carvey, H. (2013, July 23). HowTo: Determine/Detect the use of Anti-Forensics Techniques. Retrieved June 3, 2016.](http://windowsir.blogspot.com/2013/07/howto-determinedetect-use-of-anti.html)
[^fn3]: [inversecos. (2022, August 4). Detecting Linux Anti-Forensics: Timestomping. Retrieved March 26, 2025.](https://www.inversecos.com/2022/08/detecting-linux-anti-forensics.html)
[^fn4]: [Lina Lau. (2022, April 28). Defence Evasion Technique: Timestomping Detection – NTFS Forensics. Retrieved September 30, 2024.](https://www.inversecos.com/2022/04/defence-evasion-technique-timestomping.html)
[^fn5]: [Magnet Forensics. (2020, August 24). Expose Evidence of Timestomping with the NTFS Timestamp Mismatch Artifact. Retrieved June 20, 2024.](https://www.magnetforensics.com/blog/expose-evidence-of-timestomping-with-the-ntfs-timestamp-mismatch-artifact-in-magnet-axiom-4-4/)
[^fn6]: [Matthew Dunwoody. (2022, April 28). I have seen double-timestomping ITW, including by APT29. Stay sharp out there.. Retrieved June 20, 2024.](https://x.com/matthewdunwoody/status/1519846657646604289)