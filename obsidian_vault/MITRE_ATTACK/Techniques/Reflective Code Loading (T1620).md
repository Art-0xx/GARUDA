---
mitre_data:
  id: T1620
  linker_tags:
  - mitre/attack/linker/stealth/reflective_code_loading
  name: Reflective Code Loading
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Reflective Code Loading (`T1620`)

Adversaries may reflectively load code into a process in order to conceal the execution of malicious payloads. Reflective loading involves allocating then executing payloads directly within the memory of the process, vice creating a thread or process backed by a file path on disk (e.g., [Shared Modules](https://attack.mitre.org/techniques/T1129)).

Reflectively loaded payloads may be compiled binaries, anonymous files (only present in RAM), or just snubs of fileless executable code (ex: position-independent shellcode).[^fn8][^fn2][^fn7][^fn1][^fn3] For example, the `Assembly.Load()` method executed by [PowerShell](https://attack.mitre.org/techniques/T1059/001) may be abused to load raw code into the running process.[^fn5]

Reflective code injection is very similar to [Process Injection](https://attack.mitre.org/techniques/T1055) except that the “injection” loads code into the processes’ own memory instead of that of a separate process. Reflective loading may evade process-based detections since the execution of the arbitrary code may be masked within a legitimate or otherwise benign process. Reflectively loading payloads directly into memory may also avoid creating files or other artifacts on disk, while also enabling malware to keep these payloads encrypted (or otherwise obfuscated) until execution.[^fn7][^fn1][^fn6][^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1620](https://attack.mitre.org/techniques/T1620)

[^fn1]: [0x00pico. (2017, September 25). Super-Stealthy Droppers. Retrieved October 4, 2021.](https://0x00sec.org/t/super-stealthy-droppers/3715)
[^fn2]: [Bunce, D. (2019, October 31). Building A Custom Tool For Shellcode Analysis. Retrieved October 4, 2021.](https://www.sentinelone.com/blog/building-a-custom-tool-for-shellcode-analysis/)
[^fn3]: [Kirk, N. (2018, June 18). Bring Your Own Land (BYOL) – A Novel Red Teaming Technique. Retrieved October 4, 2021.](https://www.mandiant.com/resources/bring-your-own-land-novel-red-teaming-technique)
[^fn4]: [Landry, J. (2016, April 21). Teaching an old RAT new tricks. Retrieved October 4, 2021.](https://www.sentinelone.com/blog/teaching-an-old-rat-new-tricks/)
[^fn5]: [Microsoft. (n.d.). Assembly.Load Method. Retrieved February 9, 2024.](https://learn.microsoft.com/dotnet/api/system.reflection.assembly.load)
[^fn6]: [Sanmillan, I. (2019, November 18). ACBackdoor: Analysis of a New Multiplatform Backdoor. Retrieved October 4, 2021.](https://intezer.com/acbackdoor-analysis-of-a-new-multiplatform-backdoor/)
[^fn7]: [Stuart. (2018, March 31). In-Memory-Only ELF Execution (Without tmpfs). Retrieved October 4, 2021.](https://magisterquis.github.io/2018/03/31/in-memory-only-elf-execution.html)
[^fn8]: [The Wover. (2019, May 9). Donut - Injecting .NET Assemblies as Shellcode. Retrieved October 4, 2021.](https://thewover.github.io/Introducing-Donut/)