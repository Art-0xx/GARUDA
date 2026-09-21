---
mitre_data:
  id: T1652
  linker_tags:
  - mitre/attack/linker/discovery/device_driver_discovery
  name: Device Driver Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Device Driver Discovery (`T1652`)

Adversaries may attempt to enumerate local device drivers on a victim host. Information about device drivers may highlight various insights that shape follow-on behaviors, such as the function/purpose of the host, present security tools (i.e. [Security Software Discovery](https://attack.mitre.org/techniques/T1518/001)) or other defenses (e.g., [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497)), as well as potential exploitable vulnerabilities (e.g., [Exploitation for Privilege Escalation](https://attack.mitre.org/techniques/T1068)).

Many OS utilities may provide information about local device drivers, such as `driverquery.exe` and the `EnumDeviceDrivers()` API function on Windows.[^fn4][^fn3] Information about device drivers (as well as associated services, i.e., [System Service Discovery](https://attack.mitre.org/techniques/T1007)) may also be available in the Registry.[^fn2]

On Linux/macOS, device drivers (in the form of kernel modules) may be visible within `/dev` or using utilities such as `lsmod` and `modinfo`.[^fn5][^fn1][^fn6]


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1652](https://attack.mitre.org/techniques/T1652)

[^fn1]: [Kerrisk, M. (2022, December 18). lsmod(8) — Linux manual page. Retrieved March 28, 2023.](https://man7.org/linux/man-pages/man8/lsmod.8.html)
[^fn2]: [Microsoft. (2021, December 14). Registry Trees for Devices and Drivers. Retrieved March 28, 2023.](https://learn.microsoft.com/windows-hardware/drivers/install/overview-of-registry-trees-and-keys)
[^fn3]: [Microsoft. (2021, October 12). EnumDeviceDrivers function (psapi.h). Retrieved March 28, 2023.](https://learn.microsoft.com/windows/win32/api/psapi/nf-psapi-enumdevicedrivers)
[^fn4]: [Microsoft. (n.d.). driverquery. Retrieved March 28, 2023.](https://learn.microsoft.com/windows-server/administration/windows-commands/driverquery)
[^fn5]: [Pomerantz, O., Salzman, P.. (2003, April 4). The Linux Kernel Module Programming Guide. Retrieved April 6, 2018.](https://www.tldp.org/LDP/lkmpg/2.4/lkmpg.pdf)
[^fn6]: [Russell, R. (n.d.). modinfo(8) - Linux man page. Retrieved March 28, 2023.](https://linux.die.net/man/8/modinfo)