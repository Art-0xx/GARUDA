---
mitre_data:
  id: T1574.008
  linker_tags:
  - mitre/attack/linker/stealth/path_interception_by_search_order_hijacking
  - mitre/attack/linker/execution/path_interception_by_search_order_hijacking
  name: Path Interception by Search Order Hijacking
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Path Interception by Search Order Hijacking (`T1574.008`)

Adversaries may execute their own malicious payloads by hijacking the search order used to load other programs. Because some programs do not call other programs using the full path, adversaries may place their own file in the directory where the calling program is located, causing the operating system to launch their malicious software at the request of the calling program.

Search order hijacking occurs when an adversary abuses the order in which Windows searches for programs that are not given a path. Unlike [DLL](https://attack.mitre.org/techniques/T1574/001) search order hijacking, the search order differs depending on the method that is used to execute the program. [^fn2] [^fn4] [^fn3] However, it is common for Windows to search in the directory of the initiating program before searching through the Windows system directory. An adversary who finds a program vulnerable to search order hijacking (i.e., a program that does not specify the path to an executable) may take advantage of this vulnerability by creating a program named after the improperly specified program and placing it within the initiating program's directory.

For example, "example.exe" runs "cmd.exe" with the command-line argument <code>net user</code>. An adversary may place a program called "net.exe" within the same directory as example.exe, "net.exe" will be run instead of the Windows system utility net. In addition, if an adversary places a program called "net.com" in the same directory as "net.exe", then <code>cmd.exe /C net user</code> will execute "net.com" instead of "net.exe" due to the order of executable extensions defined under PATHEXT. [^fn1]

Search order hijacking is also a common practice for hijacking DLL loads and is covered in [DLL](https://attack.mitre.org/techniques/T1574/001).


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tool(s)

- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.008](https://attack.mitre.org/techniques/T1574/008)

[^fn1]: [Microsoft. (2011, October 24). Environment Property. Retrieved July 27, 2016.](https://docs.microsoft.com/en-us/previous-versions//fd7hxfdd(v=vs.85)?redirectedfrom=MSDN)
[^fn2]: [Microsoft. (n.d.). CreateProcess function. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa)
[^fn3]: [Microsoft. (n.d.). WinExec function. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-winexec)
[^fn4]: [Tim Hill. (2014, February 2). The Windows NT Command Shell. Retrieved December 5, 2014.](https://docs.microsoft.com/en-us/previous-versions//cc723564(v=technet.10)?redirectedfrom=MSDN#XSLTsection127121120120)