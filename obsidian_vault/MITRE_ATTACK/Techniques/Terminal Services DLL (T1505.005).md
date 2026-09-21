---
mitre_data:
  id: T1505.005
  linker_tags:
  - mitre/attack/linker/persistence/terminal_services_dll
  name: Terminal Services DLL
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Terminal Services DLL (`T1505.005`)

Adversaries may abuse components of Terminal Services to enable persistent access to systems. Microsoft Terminal Services, renamed to Remote Desktop Services in some Windows Server OSs as of 2022, enable remote terminal connections to hosts. Terminal Services allows servers to transmit a full, interactive, graphical user interface to clients via RDP.[^fn3]

[Windows Service](https://attack.mitre.org/techniques/T1543/003)s that are run as a "generic" process (ex: <code>svchost.exe</code>) load the service's DLL file, the location of which is stored in a Registry entry named <code>ServiceDll</code>.[^fn2] The <code>termsrv.dll</code> file, typically stored in `%SystemRoot%\System32\`, is the default <code>ServiceDll</code> value for Terminal Services in `HKLM\System\CurrentControlSet\services\TermService\Parameters\`.

Adversaries may modify and/or replace the Terminal Services DLL to enable persistent access to victimized hosts.[^fn1] Modifications to this DLL could be done to execute arbitrary payloads (while also potentially preserving normal <code>termsrv.dll</code> functionality) as well as to simply enable abusable features of Terminal Services. For example, an adversary may enable features such as concurrent [Remote Desktop Protocol](https://attack.mitre.org/techniques/T1021/001) sessions by either patching the <code>termsrv.dll</code> file or modifying the <code>ServiceDll</code> value to point to a DLL that provides increased RDP functionality.[^fn5][^fn4] On a non-server Windows OS this increased functionality may also enable an adversary to avoid Terminal Services prompts that warn/log out users of a system when a new RDP session is created.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Server Software Component (T1505)|Server Software Component]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1505.005](https://attack.mitre.org/techniques/T1505/005)

[^fn1]: [James. (2019, July 14). @James_inthe_box. Retrieved September 12, 2024.](https://x.com/james_inthe_box/status/1150495335812177920)
[^fn2]: [Microsoft. (2018, February 17). Windows System Services Fundamentals. Retrieved March 28, 2022.](https://social.technet.microsoft.com/wiki/contents/articles/12229.windows-system-services-fundamentals.aspx)
[^fn3]: [Microsoft. (2019, August 23). About Remote Desktop Services. Retrieved March 28, 2022.](https://docs.microsoft.com/windows/win32/termserv/about-terminal-services)
[^fn4]: [Stas'M Corp. (2014, October 22). RDP Wrapper Library by Stas'M. Retrieved March 28, 2022.](https://github.com/stascorp/rdpwrap)
[^fn5]: [Windows OS Hub. (2021, November 10). How to Allow Multiple RDP Sessions in Windows 10 and 11?. Retrieved March 28, 2022.](http://woshub.com/how-to-allow-multiple-rdp-sessions-in-windows-10/)