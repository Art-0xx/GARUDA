---
mitre_data:
  id: T1055.013
  linker_tags:
  - "mitre/attack/linker/stealth/process_doppelg\xE4nging"
  - "mitre/attack/linker/privilege_escalation/process_doppelg\xE4nging"
  name: "Process Doppelg\xE4nging"
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Process Doppelgänging (`T1055.013`)

Adversaries may inject malicious code into process via process doppelgänging in order to evade process-based defenses as well as possibly elevate privileges. Process doppelgänging is a method of executing arbitrary code in the address space of a separate live process. 

Windows Transactional NTFS (TxF) was introduced in Vista as a method to perform safe file operations. [^fn3] To ensure data integrity, TxF enables only one transacted handle to write to a file at a given time. Until the write handle transaction is terminated, all other handles are isolated from the writer and may only read the committed version of the file that existed at the time the handle was opened. [^fn2] To avoid corruption, TxF performs an automatic rollback if the system or application fails during a write transaction. [^fn4]

Although deprecated, the TxF application programming interface (API) is still enabled as of Windows 10. [^fn1]

Adversaries may abuse TxF to a perform a file-less variation of [Process Injection](https://attack.mitre.org/techniques/T1055). Similar to [Process Hollowing](https://attack.mitre.org/techniques/T1055/012), process doppelgänging involves replacing the memory of a legitimate process, enabling the veiled execution of malicious code that may evade defenses and detection. Process doppelgänging's use of TxF also avoids the use of highly-monitored API functions such as <code>NtUnmapViewOfSection</code>, <code>VirtualProtectEx</code>, and <code>SetThreadContext</code>. [^fn1]

Process Doppelgänging is implemented in 4 steps [^fn1]:

* Transact – Create a TxF transaction using a legitimate executable then overwrite the file with malicious code. These changes will be isolated and only visible within the context of the transaction.
* Load – Create a shared section of memory and load the malicious executable.
* Rollback – Undo changes to original executable, effectively removing malicious code from the file system.
* Animate – Create a process from the tainted section of memory and initiate execution.

This behavior will likely not result in elevated privileges since the injected process was spawned from (and thus inherits the security context) of the injecting process. However, execution via process doppelgänging may evade detection from security products since the execution is masked under a legitimate process. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.013](https://attack.mitre.org/techniques/T1055/013)

[^fn1]: [Liberman, T. & Kogan, E. (2017, December 7). Lost in Transaction: Process Doppelgänging. Retrieved December 20, 2017.](https://www.blackhat.com/docs/eu-17/materials/eu-17-Liberman-Lost-In-Transaction-Process-Doppelganging.pdf)
[^fn2]: [Microsoft. (n.d.). Basic TxF Concepts. Retrieved December 20, 2017.](https://msdn.microsoft.com/library/windows/desktop/dd979526.aspx)
[^fn3]: [Microsoft. (n.d.). Transactional NTFS (TxF). Retrieved December 20, 2017.](https://msdn.microsoft.com/library/windows/desktop/bb968806.aspx)
[^fn4]: [Microsoft. (n.d.). When to Use Transactional NTFS. Retrieved December 20, 2017.](https://msdn.microsoft.com/library/windows/desktop/aa365738.aspx)