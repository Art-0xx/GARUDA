---
mitre_data:
  id: T1552.003
  linker_tags:
  - mitre/attack/linker/credential_access/shell_history
  name: Shell History
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Shell History (`T1552.003`)

Adversaries may search the command history on compromised systems for insecurely stored credentials.

On Linux and macOS systems, shells such as Bash and Zsh keep track of the commands users type on the command-line with the "history" utility. Once a user logs out, the history is flushed to the user's history file. For each user, this file resides at the same location: for example, `~/.bash_history` or `~/.zsh_history`. Typically, these files keeps track of the user's last 1000 commands.

On Windows, PowerShell has both a command history that is wiped after the session ends, and one that contains commands used in all sessions and is persistent. The default location for persistent history can be found in `%userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt`, but command history can also be accessed with `Get-History`. Command Prompt (CMD) on Windows does not have persistent history.[^fn3][^fn2]

Users often type usernames and passwords on the command-line as parameters to programs, which then get saved to this file when they log out. Adversaries can abuse this by looking through the file for potential credentials.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.003](https://attack.mitre.org/techniques/T1552/003)

[^fn1]: [Alex Rymdeko-Harvey, Steve Borosh. (2016, May 14). External to DA, the OS X Way. Retrieved September 12, 2024.](https://www.slideshare.net/slideshow/external-to-da-the-os-x-way/62021418)
[^fn2]: [Michael Koczwara. (2021, March 14). Windows privilege escalation via PowerShell History. Retrieved June 13, 2025.](https://michaelkoczwara.medium.com/windows-privilege-escalation-dbb908cce8d4)
[^fn3]: [Microsoft. (2024, January 19). about_History. Retrieved June 13, 2025.](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_history?view=powershell-7.5)