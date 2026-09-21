---
mitre_data:
  id: T1124
  linker_tags:
  - mitre/attack/linker/discovery/system_time_discovery
  name: System Time Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Time Discovery (`T1124`)

An adversary may gather the system time and/or time zone settings from a local or remote system. The system time is set and stored by services, such as the Windows Time Service on Windows or <code>systemsetup</code> on macOS.[^fn9][^fn8][^fn1] These time settings may also be synchronized between systems and services in an enterprise network, typically accomplished with a network time server within a domain.[^fn5][^fn2]

System time information may be gathered in a number of ways, such as with [Net](https://attack.mitre.org/software/S0039) on Windows by performing <code>net time \\hostname</code> to gather the system time on a remote system. The victim's time zone may also be inferred from the current system time or gathered by using <code>w32tm /tz</code>.[^fn8] In addition, adversaries can discover device uptime through functions such as <code>GetTickCount()</code> to determine how long it has been since the system booted up.[^fn12]

On network devices, [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as `show clock detail` can be used to see the current time configuration.[^fn4] On ESXi servers, `esxcli system clock get` can be used for the same purpose.

In addition, system calls – such as <code>time()</code> – have been used to collect the current time on Linux devices.[^fn3] On macOS systems, adversaries may use commands such as <code>systemsetup -gettimezone</code> or <code>timeIntervalSinceNow</code> to gather current time zone information or current date and time.[^fn11][^fn6]

This information could be useful for performing other techniques, such as executing a file with a [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053)[^fn10], or to discover locality information based on time zone to assist in victim targeting (i.e. [System Location Discovery](https://attack.mitre.org/techniques/T1614)). Adversaries may also use knowledge of system time as part of a time bomb, or delaying execution until a specified date/time.[^fn7]


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/AsyncRAT|AsyncRAT]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1124](https://attack.mitre.org/techniques/T1124)

[^fn1]: [Apple Support. (n.d.). About systemsetup in Remote Desktop. Retrieved March 27, 2024.](https://support.apple.com/en-gb/guide/remote-desktop/apd95406b8d/mac)
[^fn2]: [ArchLinux. (2024, February 1). System Time. Retrieved March 27, 2024.](https://wiki.archlinux.org/title/System_time)
[^fn3]: [Check Point Research. (2024, March 8). MAGNET GOBLIN TARGETS PUBLICLY FACING SERVERS USING 1-DAY VULNERABILITIES. Retrieved March 27, 2024.](https://research.checkpoint.com/2024/magnet-goblin-targets-publicly-facing-servers-using-1-day-vulnerabilities/)
[^fn4]: [Cisco. (2023, March 6). show clock detail - Cisco IOS Security Command Reference: Commands S to Z . Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/s1/sec-s1-cr-book/sec-cr-s2.html#wp1896741674)
[^fn5]: [Cone, Matt. (2021, January 14). Synchronize your Mac's Clock with a Time Server. Retrieved March 27, 2024.](https://www.macinstruct.com/tutorials/synchronize-your-macs-clock-with-a-time-server/)
[^fn6]: [M.Léveillé, M., Cherepanov, A.. (2022, January 25). Watering hole deploys new macOS malware, DazzleSpy, in Asia. Retrieved May 6, 2022.](https://www.welivesecurity.com/2022/01/25/watering-hole-deploys-new-macos-malware-dazzlespy-asia/)
[^fn7]: [Malicious History. (2020, September 17). Time Bombs: Malware With Delayed Execution. Retrieved April 22, 2021.](https://any.run/cybersecurity-blog/time-bombs-malware-with-delayed-execution/)
[^fn8]: [Mathers, B. (2016, September 30). Windows Time Service Tools and Settings. Retrieved November 25, 2016.](https://technet.microsoft.com/windows-server-docs/identity/ad-ds/get-started/windows-time-service/windows-time-service-tools-and-settings)
[^fn9]: [Microsoft. (n.d.). System Time. Retrieved November 25, 2016.](https://msdn.microsoft.com/ms724961.aspx)
[^fn10]: [Rivner, U., Schwartz, E. (2012). They’re Inside… Now What?. Retrieved November 25, 2016.](https://www.rsaconference.com/writable/presentations/file_upload/ht-209_rivner_schwartz.pdf)
[^fn11]: [YUCEEL, Huseyin Can. Picus Labs. (2022, June 9). The System Information Discovery Technique Explained - MITRE ATT&CK T1082. Retrieved March 27, 2024.](https://www.picussecurity.com/resource/the-system-information-discovery-technique-explained-mitre-attack-t1082)
[^fn12]: [YUCEEL, Huseyin Can. Picus Labs. (2022, June 9). Virtualization/Sandbox Evasion - How Attackers Avoid Malware Analysis. Retrieved December 26, 2023.](https://www.picussecurity.com/resource/virtualization/sandbox-evasion-how-attackers-avoid-malware-analysis)