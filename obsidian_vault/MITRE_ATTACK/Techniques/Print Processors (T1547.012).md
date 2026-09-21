---
mitre_data:
  id: T1547.012
  linker_tags:
  - mitre/attack/linker/persistence/print_processors
  - mitre/attack/linker/privilege_escalation/print_processors
  name: Print Processors
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Print Processors (`T1547.012`)

Adversaries may abuse print processors to run malicious DLLs during system boot for persistence and/or privilege escalation. Print processors are DLLs that are loaded by the print spooler service, `spoolsv.exe`, during boot.[^fn2]

Adversaries may abuse the print spooler service by adding print processors that load malicious DLLs at startup. A print processor can be installed through the <code>AddPrintProcessor</code> API call with an account that has <code>SeLoadDriverPrivilege</code> enabled. Alternatively, a print processor can be registered to the print spooler service by adding the <code>HKLM\SYSTEM\\[CurrentControlSet or ControlSet001]\Control\Print\Environments\\[Windows architecture: e.g., Windows x64]\Print Processors\\[user defined]\Driver</code> Registry key that points to the DLL.

For the malicious print processor to be correctly installed, the payload must be located in the dedicated system print-processor directory, that can be found with the <code>GetPrintProcessorDirectory</code> API call, or referenced via a relative path from this directory.[^fn1] After the print processors are installed, the print spooler service, which starts during boot, must be restarted in order for them to run.[^fn3]

The print spooler service runs under SYSTEM level permissions, therefore print processors installed by an adversary may run under elevated privileges.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.012](https://attack.mitre.org/techniques/T1547/012)

[^fn1]: [Microsoft. (2018, May 31). AddPrintProcessor function. Retrieved October 5, 2020.](https://docs.microsoft.com/en-us/windows/win32/printdocs/addprintprocessor)
[^fn2]: [Microsoft. (2023, June 26). Introduction to print processors. Retrieved September 27, 2023.](https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors)
[^fn3]: [Tartare, M. et al. (2020, May 21). No “Game over” for the Winnti Group. Retrieved August 24, 2020.](https://www.welivesecurity.com/2020/05/21/no-game-over-winnti-group/)