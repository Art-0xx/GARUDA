---
mitre_data:
  id: T1574.011
  linker_tags:
  - mitre/attack/linker/stealth/services_registry_permissions_weakness
  - mitre/attack/linker/execution/services_registry_permissions_weakness
  name: Services Registry Permissions Weakness
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Services Registry Permissions Weakness (`T1574.011`)

Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services. Flaws in the permissions for Registry keys related to services can allow adversaries to redirect the originally specified executable to one they control, launching their own code when a service starts. Windows stores local service configuration information in the Registry under <code>HKLM\SYSTEM\CurrentControlSet\Services</code>. The information stored under a service's Registry keys can be manipulated to modify a service's execution parameters through tools such as the service controller, sc.exe,  [PowerShell](https://attack.mitre.org/techniques/T1059/001), or [Reg](https://attack.mitre.org/software/S0075). Access to Registry keys is controlled through access control lists and user permissions. [^fn7][^fn5]

If the permissions for users and groups are not properly set and allow access to the Registry keys for a service, adversaries may change the service's binPath/ImagePath to point to a different executable under their control. When the service starts or is restarted, the adversary-controlled program will execute, allowing the adversary to establish persistence and/or privilege escalation to the account context the service is set to execute under (local/domain account, SYSTEM, LocalService, or NetworkService).

Adversaries may also alter other Registry keys in the service’s Registry tree. For example, the <code>FailureCommand</code> key may be changed so that the service is executed in an elevated context anytime the service fails or is intentionally corrupted.[^fn4][^fn1]

The <code>Performance</code> key contains the name of a driver service's performance DLL and the names of several exported functions in the DLL.[^fn8] If the <code>Performance</code> key is not already present and if an adversary-controlled user has the <code>Create Subkey</code> permission, adversaries may create the <code>Performance</code> key in the service’s Registry tree to point to a malicious DLL.[^fn2]

Adversaries may also add the <code>Parameters</code> key, which can reference malicious drivers file paths. This technique has been identified to be a method of abuse by configuring DLL file paths within the <code>Parameters</code> key of a given services registry configuration. By placing and configuring the <code>Parameters</code> key to reference a malicious DLL, adversaries can ensure that their code is loaded persistently whenever the associated service or library is invoked.

For example, the registry path[^fn6] <code>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WinSock2\Parameters</code>[^fn3][^fn9] contains the <code>AutodiaDLL</code> value, which specifies the DLL to be loaded for autodial funcitionality. An adversary could set the <code>AutodiaDLL</code> to point to a hijacked or malicious DLL:

<code>"AutodialDLL"="c:\temp\foo.dll"</code>

This ensures persistence, as it causes the DLL (in this case, foo.dll) to be loaded each time the Winsock 2 library is invoked.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.011](https://attack.mitre.org/techniques/T1574/011)

[^fn1]: [@r0wdy_. (2017, November 30). Service Recovery Parameters. Retrieved September 12, 2024.](https://x.com/r0wdy_/status/936365549553991680)
[^fn2]: [Clément Labro. (2020, November 12). Windows RpcEptMapper Service Insecure Registry Permissions EoP. Retrieved August 25, 2021.](https://itm4n.github.io/windows-registry-rpceptmapper-eop/)
[^fn3]: [hexacorn. (2015, January 13). Beyond good ol’ Run key, Part 24. Retrieved September 25, 2025.](https://www.hexacorn.com/blog/2015/01/13/beyond-good-ol-run-key-part-24/)
[^fn4]: [Hull, D.. (2014, May 3). Kansa: Service related collectors and analysis. Retrieved October 10, 2019.](https://trustedsignal.blogspot.com/2014/05/kansa-service-related-collectors-and.html)
[^fn5]: [Lawrence Abrams. (2004, September 10). How Malware hides and is installed as a Service. Retrieved August 30, 2021.](https://www.bleepingcomputer.com/tutorials/how-malware-hides-as-a-service/)
[^fn6]: [MDSec. (n.d.). Autodial(DLL)ing Your Way. Retrieved September 25, 2025.](https://www.mdsec.co.uk/2022/10/autodialdlling-your-way/)
[^fn7]: [Microsoft. (2018, May 31). Registry Key Security and Access Rights. Retrieved March 16, 2017.](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry-key-security-and-access-rights?redirectedfrom=MSDN)
[^fn8]: [Microsoft. (2021, August 5). HKLM\SYSTEM\CurrentControlSet\Services Registry Tree. Retrieved August 25, 2021.](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/hklm-system-currentcontrolset-services-registry-tree)
[^fn9]: [Threat Research Team. (2022, March 22). Operation Dragon Castling: APT group targeting betting companies. Retrieved September 25, 2025.](https://www.gendigital.com/blog/insights/research/operation-dragon-castling-apt-group-targeting-betting-companies)