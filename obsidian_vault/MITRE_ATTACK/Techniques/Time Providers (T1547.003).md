---
mitre_data:
  id: T1547.003
  linker_tags:
  - mitre/attack/linker/persistence/time_providers
  - mitre/attack/linker/privilege_escalation/time_providers
  name: Time Providers
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Time Providers (`T1547.003`)

Adversaries may abuse time providers to execute DLLs when the system boots. The Windows Time service (W32Time) enables time synchronization across and within domains.[^fn3] W32Time time providers are responsible for retrieving time stamps from hardware/network resources and outputting these values to other network clients.[^fn4]

Time providers are implemented as dynamic-link libraries (DLLs) that are registered in the subkeys of `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W32Time\TimeProviders\`.[^fn4] The time provider manager, directed by the service control manager, loads and starts time providers listed and enabled under this key at system startup and/or whenever parameters are changed.[^fn4]

Adversaries may abuse this architecture to establish persistence, specifically by creating a new arbitrarily named subkey  pointing to a malicious DLL in the `DllName` value. Administrator privileges are required for time provider registration, though execution will run in context of the Local Service account.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.003](https://attack.mitre.org/techniques/T1547/003)
- [Mathers, B. (2017, May 31). Windows Time Service Tools and Settings. Retrieved March 26, 2018.](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings)
- [Russinovich, M. (2016, January 4). Autoruns for Windows v13.51. Retrieved June 6, 2016.](https://technet.microsoft.com/en-us/sysinternals/bb963902)

[^fn1]: [Lundgren, S. (2017, October 28). w32time. Retrieved March 26, 2018.](https://github.com/scottlundgren/w32time)
[^fn3]: [Microsoft. (2018, February 1). Windows Time Service (W32Time). Retrieved March 26, 2018.](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-top)
[^fn4]: [Microsoft. (n.d.). Time Provider. Retrieved March 26, 2018.](https://msdn.microsoft.com/library/windows/desktop/ms725475.aspx)