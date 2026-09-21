---
tags:
  - mitre/attack/tool
---

# CSPY Downloader (`S0527`)

[CSPY Downloader](https://attack.mitre.org/software/S0527) is a tool designed to evade analysis and download additional payloads used by [Kimsuky](https://attack.mitre.org/groups/G0094).[^fn1]



# Platform(s)

- Windows

# Techniques Used

## File Deletion

[CSPY Downloader](https://attack.mitre.org/software/S0527) has the ability to self delete.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/File Deletion (T1070.004)|File Deletion]]

## Modify Registry

[CSPY Downloader](https://attack.mitre.org/software/S0527) can write to the Registry under the <code>%windir%</code> variable to execute tasks.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## Scheduled Task

[CSPY Downloader](https://attack.mitre.org/software/S0527) can use the schtasks utility to bypass UAC.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Scheduled Task (T1053.005)|Scheduled Task]]

## Code Signing

[CSPY Downloader](https://attack.mitre.org/software/S0527) has come signed with revoked certificates.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Code Signing (T1553.002)|Code Signing]]

## Ingress Tool Transfer

[CSPY Downloader](https://attack.mitre.org/software/S0527) can download additional tools to a compromised host.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Masquerade Task or Service

[CSPY Downloader](https://attack.mitre.org/software/S0527) has attempted to appear as a legitimate Windows service with a fake description claiming it is used to support packed applications.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Masquerade Task or Service (T1036.004)|Masquerade Task or Service]]

## Web Protocols

[CSPY Downloader](https://attack.mitre.org/software/S0527) can use GET requests to download additional payloads from C2.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Malicious File

[CSPY Downloader](https://attack.mitre.org/software/S0527) has been delivered via malicious documents with embedded macros.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Malicious File (T1204.002)|Malicious File]]

## Bypass User Account Control

[CSPY Downloader](https://attack.mitre.org/software/S0527) can bypass UAC using the SilentCleanup task to execute the binary with elevated privileges.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Bypass User Account Control (T1548.002)|Bypass User Account Control]]

## System Checks

[CSPY Downloader](https://attack.mitre.org/software/S0527) can search loaded modules, PEB structure, file paths, Registry keys, and memory to determine if it is being debugged or running in a virtual environment.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/System Checks (T1497.001)|System Checks]]

## Software Packing

[CSPY Downloader](https://attack.mitre.org/software/S0527) has been packed with UPX.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Software Packing (T1027.002)|Software Packing]]

## Indicator Removal

[CSPY Downloader](https://attack.mitre.org/software/S0527) has the ability to remove values it writes to the Registry.[\[Cybereason Kimsuky November 2020\]](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)

- *Technique:* [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]


# External References(s)

- [S0527](https://attack.mitre.org/software/S0527)

[^fn1]: [Dahan, A. et al. (2020, November 2). Back to the Future: Inside the Kimsuky KGH Spyware Suite. Retrieved November 6, 2020.](https://www.cybereason.com/blog/back-to-the-future-inside-the-kimsuky-kgh-spyware-suite)