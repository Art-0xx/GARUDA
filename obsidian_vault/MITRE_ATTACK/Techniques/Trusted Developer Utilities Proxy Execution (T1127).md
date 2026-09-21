---
mitre_data:
  id: T1127
  linker_tags:
  - mitre/attack/linker/stealth/trusted_developer_utilities_proxy_execution
  - mitre/attack/linker/execution/trusted_developer_utilities_proxy_execution
  name: Trusted Developer Utilities Proxy Execution
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Trusted Developer Utilities Proxy Execution (`T1127`)

Adversaries may take advantage of trusted developer utilities to proxy execution of malicious payloads. There are many utilities used for software development related tasks that can be used to execute code in various forms to assist in development, debugging, and reverse engineering.[^fn6][^fn5][^fn1][^fn3] These utilities may often be signed with legitimate certificates that allow them to execute on a system and proxy execution of malicious code through a trusted process that effectively bypasses application control solutions.

Smart App Control is a feature of Windows that blocks applications it considers potentially malicious from running by verifying unsigned applications against a known safe list from a Microsoft cloud service before executing them.[^fn4] However, adversaries may leverage "reputation hijacking" to abuse an operating system’s trust of safe, signed applications that support the execution of arbitrary code. By leveraging [Trusted Developer Utilities Proxy Execution](https://attack.mitre.org/techniques/T1127) to run their malicious code, adversaries may bypass Smart App Control protections.[^fn2]


# Platform(s)

- Windows

# Sub-Technique(s)

- [[../Techniques/JamPlus (T1127.003)|JamPlus]]
- [[../Techniques/MSBuild (T1127.001)|MSBuild]]
- [[../Techniques/ClickOnce (T1127.002)|ClickOnce]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1127](https://attack.mitre.org/techniques/T1127)

[^fn1]: [Graeber, M. (2016, August 15). Bypassing Application Whitelisting by using WinDbg/CDB as a Shellcode Runner. Retrieved November 17, 2024.](https://web.archive.org/web/20160816135945/http://www.exploit-monday.com/2016/08/windbg-cdb-shellcode-runner.html)
[^fn2]: [Joe Desimone. (2024, August 5). Dismantling Smart App Control. Retrieved March 21, 2025.](https://www.elastic.co/security-labs/dismantling-smart-app-control)
[^fn3]: [LOLBAS. (n.d.). Tracker.exe. Retrieved July 31, 2019.](https://lolbas-project.github.io/lolbas/OtherMSBinaries/Tracker/)
[^fn4]: [Microsoft. (n.d.). Smart App Control Frequently Asked Questions. Retrieved April 4, 2025.](https://support.microsoft.com/en-us/windows/smart-app-control-frequently-asked-questions-285ea03d-fa88-4d56-882e-6698afdb7003)
[^fn5]: [Nelson, M. (2016, November 21). Bypassing Application Whitelisting By Using rcsi.exe. Retrieved May 26, 2017.](https://enigma0x3.net/2016/11/21/bypassing-application-whitelisting-by-using-rcsi-exe/)
[^fn6]: [Nelson, M. (2017, November 17). Bypassing Application Whitelisting By Using dnx.exe. Retrieved May 25, 2017.](https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/)