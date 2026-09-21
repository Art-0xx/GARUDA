---
mitre_data:
  id: T1574.007
  linker_tags:
  - mitre/attack/linker/stealth/path_interception_by_path_environment_variable
  - mitre/attack/linker/execution/path_interception_by_path_environment_variable
  name: Path Interception by PATH Environment Variable
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Path Interception by PATH Environment Variable (`T1574.007`)

Adversaries may execute their own malicious payloads by hijacking environment variables used to load libraries. The PATH environment variable contains a list of directories (User and System) that the OS searches sequentially through in search of the binary that was called from a script or the command line. 

Adversaries can place a malicious program in an earlier entry in the list of directories stored in the PATH environment variable, resulting in the operating system executing the malicious binary rather than the legitimate binary when it searches sequentially through that PATH listing.

For example, on Windows if an adversary places a malicious program named "net.exe" in `C:\example path`, which by default precedes `C:\Windows\system32\net.exe` in the PATH environment variable, when "net" is executed from the command-line the `C:\example path` will be called instead of the system's legitimate executable at `C:\Windows\system32\net.exe`. Some methods of executing a program rely on the PATH environment variable to determine the locations that are searched when the path for the program is not given, such as executing programs from a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059).[^fn2]

Adversaries may also directly modify the $PATH variable specifying the directories to be searched.  An adversary can modify the `$PATH` variable to point to a directory they have write access. When a program using the $PATH variable is called, the OS searches the specified directory and executes the malicious binary. On macOS, this can also be performed through modifying the $HOME variable. These variables can be modified using the command-line, launchctl, [Unix Shell Configuration Modification](https://attack.mitre.org/techniques/T1546/004), or modifying the `/etc/paths.d` folder contents.[^fn3][^fn4][^fn1]


# Platform(s)

- Linux
- macOS
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

- [T1574.007](https://attack.mitre.org/techniques/T1574/007)

[^fn1]: [Elastic Security 7.17. (2022, February 1). Modification of Environment Variable via Launchctl. Retrieved September 28, 2023.](https://www.elastic.co/guide/en/security/7.17/prebuilt-rule-7-16-4-modification-of-environment-variable-via-launchctl.html)
[^fn2]: [ExpressVPN Security Team. (2021, November 16). Cybersecurity lessons: A PATH vulnerability in Windows. Retrieved September 28, 2023.](https://www.expressvpn.com/blog/cybersecurity-lessons-a-path-vulnerability-in-windows/)
[^fn3]: [Nischay Hegde and Siddartha Malladi. (2023, July 12). PoC Exploit: Fake Proof of Concept with Backdoor Malware. Retrieved September 28, 2023.](https://www.uptycs.com/blog/new-poc-exploit-backdoor-malware)
[^fn4]: [Vivek Gite. (2023, August 22). MacOS – Set / Change $PATH Variable Command. Retrieved September 28, 2023.](https://www.cyberciti.biz/faq/appleosx-bash-unix-change-set-path-environment-variable/)