---
mitre_data:
  id: T1548.006
  linker_tags:
  - mitre/attack/linker/privilege_escalation/tcc_manipulation
  name: TCC Manipulation
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# TCC Manipulation (`T1548.006`)

Adversaries can manipulate or abuse the Transparency, Consent, & Control (TCC) service or database to grant malicious executables elevated permissions. TCC is a Privacy & Security macOS control mechanism used to determine if the running process has permission to access the data or services protected by TCC, such as screen sharing, camera, microphone, or Full Disk Access (FDA).

When an application requests to access data or a service protected by TCC, the TCC daemon (`tccd`) checks the TCC database, located at `/Library/Application Support/com.apple.TCC/TCC.db` (and `~/` equivalent), and an overwrites file (if connected to an MDM) for existing permissions. If permissions do not exist, then the user is prompted to grant permission. Once permissions are granted, the database stores the application's permissions and will not prompt the user again unless reset. For example, when a web browser requests permissions to the user's webcam, once granted the web browser may not explicitly prompt the user again.[^fn1]

Adversaries may access restricted data or services protected by TCC through abusing applications previously granted permissions through [Process Injection](https://attack.mitre.org/techniques/T1055) or executing a malicious binary using another application. For example, adversaries can use Finder, a macOS native app with FDA permissions, to execute a malicious [AppleScript](https://attack.mitre.org/techniques/T1059/002). When executing under the Finder App, the malicious [AppleScript](https://attack.mitre.org/techniques/T1059/002) inherits access to all files on the system without requiring a user prompt. When System Integrity Protection (SIP) is disabled, TCC protections are also disabled. For a system without SIP enabled, adversaries can manipulate the TCC database to add permissions to their malicious executable through loading an adversary controlled TCC database using environment variables and [Launchctl](https://attack.mitre.org/techniques/T1569/001).[^fn3][^fn2]




# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Abuse Elevation Control Mechanism (T1548)|Abuse Elevation Control Mechanism]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1548.006](https://attack.mitre.org/techniques/T1548/006)

[^fn1]: [Marc-Etienne M.Léveillé. (2022, July 19). I see what you did there: A look at the CloudMensis macOS spyware. Retrieved March 21, 2024.](https://www.welivesecurity.com/2022/07/19/i-see-what-you-did-there-look-cloudmensis-macos-spyware/)
[^fn2]: [Marina Liang. (2024, April 23). Return of the mac(OS): Transparency, Consent, and Control (TCC) Database Manipulation. Retrieved March 28, 2024.](https://web.archive.org/web/20240411112413/https://interpressecurity.com/resources/return-of-the-macos-tcc/)
[^fn3]: [Phil Stokes. (2021, July 1). Bypassing macOS TCC User Privacy Protections By Accident and Design. Retrieved March 21, 2024.](https://www.sentinelone.com/labs/bypassing-macos-tcc-user-privacy-protections-by-accident-and-design/)