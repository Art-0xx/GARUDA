---
mitre_data:
  id: T1055.015
  linker_tags:
  - mitre/attack/linker/stealth/listplanting
  - mitre/attack/linker/privilege_escalation/listplanting
  name: ListPlanting
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# ListPlanting (`T1055.015`)

Adversaries may abuse list-view controls to inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges. ListPlanting is a method of executing arbitrary code in the address space of a separate live process.[^fn1] Code executed via ListPlanting may also evade detection from security products since the execution is masked under a legitimate process.

List-view controls are user interface windows used to display collections of items.[^fn3] Information about an application's list-view settings are stored within the process' memory in a <code>SysListView32</code> control.

ListPlanting (a form of message-passing "shatter attack") may be performed by copying code into the virtual address space of a process that uses a list-view control then using that code as a custom callback for sorting the listed items.[^fn4] Adversaries must first copy code into the target process’ memory space, which can be performed various ways including by directly obtaining a handle to the <code>SysListView32</code> child of the victim process window (via Windows API calls such as <code>FindWindow</code> and/or <code>EnumWindows</code>) or other [Process Injection](https://attack.mitre.org/techniques/T1055) methods.

Some variations of ListPlanting may allocate memory in the target process but then use window messages to copy the payload, to avoid the use of the highly monitored <code>WriteProcessMemory</code> function. For example, an adversary can use the <code>PostMessage</code> and/or <code>SendMessage</code> API functions to send <code>LVM_SETITEMPOSITION</code> and <code>LVM_GETITEMPOSITION</code> messages, effectively copying a payload 2 bytes at a time to the allocated memory.[^fn2] 

Finally, the payload is triggered by sending the <code>LVM_SORTITEMS</code> message to the <code>SysListView32</code> child of the process window, with the payload within the newly allocated buffer passed and executed as the <code>ListView_SortItems</code> callback.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Process Injection (T1055)|Process Injection]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1055.015](https://attack.mitre.org/techniques/T1055/015)

[^fn1]: [Hexacorn. (2019, April 25). Listplanting – yet another code injection trick. Retrieved August 14, 2024.](https://www.hexacorn.com/blog/2019/04/25/listplanting-yet-another-code-injection-trick/)
[^fn2]: [Hromcova, Z. and Cherpanov, A. (2020, June). INVISIMOLE: THE HIDDEN PART OF THE STORY. Retrieved July 16, 2020.](https://www.welivesecurity.com/wp-content/uploads/2020/06/ESET_InvisiMole.pdf)
[^fn3]: [Microsoft. (2021, May 25). About List-View Controls. Retrieved January 4, 2022.](https://docs.microsoft.com/windows/win32/controls/list-view-controls-overview)
[^fn4]: [odzhan. (2019, April 25). Windows Process Injection: WordWarping, Hyphentension, AutoCourgette, Streamception, Oleum, ListPlanting, Treepoline. Retrieved November 15, 2021.](https://modexp.wordpress.com/2019/04/25/seven-window-injection-methods/)