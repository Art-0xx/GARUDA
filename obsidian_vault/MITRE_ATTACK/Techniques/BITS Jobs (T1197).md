---
mitre_data:
  id: T1197
  linker_tags:
  - mitre/attack/linker/stealth/bits_jobs
  - mitre/attack/linker/persistence/bits_jobs
  - mitre/attack/linker/execution/bits_jobs
  name: BITS Jobs
  related_tactics:
  - stealth
  - persistence
  - execution
tags:
- mitre/attack/technique
---



# BITS Jobs (`T1197`)

Adversaries may abuse BITS jobs to persistently execute code and perform various background tasks. Windows Background Intelligent Transfer Service (BITS) is a low-bandwidth, asynchronous file transfer mechanism exposed through [Component Object Model](https://attack.mitre.org/techniques/T1559/001) (COM).[^fn6][^fn4] BITS is commonly used by updaters, messengers, and other applications preferred to operate in the background (using available idle bandwidth) without interrupting other networked applications. File transfer tasks are implemented as BITS jobs, which contain a queue of one or more file operations.

The interface to create and manage BITS jobs is accessible through [PowerShell](https://attack.mitre.org/techniques/T1059/001) and the [BITSAdmin](https://attack.mitre.org/software/S0190) tool.[^fn4][^fn5]

Adversaries may abuse BITS to download (e.g. [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105)), execute, and even clean up after running malicious code (e.g. [Indicator Removal](https://attack.mitre.org/techniques/T1070)). BITS tasks are self-contained in the BITS job database, without new files or registry modifications, and often permitted by host firewalls.[^fn1][^fn7][^fn2] BITS enabled execution may also enable persistence by creating long-standing jobs (the default maximum lifetime is 90 days and extendable) or invoking an arbitrary program when a job completes or errors (including after system reboots).[^fn3][^fn1]

BITS upload functionalities can also be used to perform [Exfiltration Over Alternative Protocol](https://attack.mitre.org/techniques/T1048).[^fn1]


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/BITSAdmin|BITSAdmin]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1197](https://attack.mitre.org/techniques/T1197)

[^fn1]: [Counter Threat Unit Research Team. (2016, June 6). Malware Lingers with BITS. Retrieved January 12, 2018.](https://www.secureworks.com/blog/malware-lingers-with-bits)
[^fn2]: [Florio, E. (2007, May 9). Malware Update with Windows Update. Retrieved January 12, 2018.](https://www.symantec.com/connect/blogs/malware-update-windows-update)
[^fn3]: [Hayashi, K. (2017, November 28). UBoatRAT Navigates East Asia. Retrieved January 12, 2018.](https://researchcenter.paloaltonetworks.com/2017/11/unit42-uboatrat-navigates-east-asia/)
[^fn4]: [Microsoft. (n.d.). Background Intelligent Transfer Service. Retrieved January 12, 2018.](https://msdn.microsoft.com/library/windows/desktop/bb968799.aspx)
[^fn5]: [Microsoft. (n.d.). BITSAdmin Tool. Retrieved January 12, 2018.](https://msdn.microsoft.com/library/aa362813.aspx)
[^fn6]: [Microsoft. (n.d.). Component Object Model (COM). Retrieved November 22, 2017.](https://msdn.microsoft.com/library/windows/desktop/ms680573.aspx)
[^fn7]: [Mondok, M. (2007, May 11). Malware piggybacks on Windows’ Background Intelligent Transfer Service. Retrieved January 12, 2018.](https://arstechnica.com/information-technology/2007/05/malware-piggybacks-on-windows-background-intelligent-transfer-service/)