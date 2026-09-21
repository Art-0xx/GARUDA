---
mitre_data:
  id: T1547.013
  linker_tags:
  - mitre/attack/linker/persistence/xdg_autostart_entries
  - mitre/attack/linker/privilege_escalation/xdg_autostart_entries
  name: XDG Autostart Entries
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# XDG Autostart Entries (`T1547.013`)

Adversaries may add or modify XDG Autostart Entries to execute malicious programs or commands when a user’s desktop environment is loaded at login. XDG Autostart entries are available for any XDG-compliant Linux system. XDG Autostart entries use Desktop Entry files (`.desktop`) to configure the user’s desktop environment upon user login. These configuration files determine what applications launch upon user login, define associated applications to open specific file types, and define applications used to open removable media.[^fn1][^fn2]

Adversaries may abuse this feature to establish persistence by adding a path to a malicious binary or command to the `Exec` directive in the `.desktop` configuration file. When the user’s desktop environment is loaded at user login, the `.desktop` files located in the XDG Autostart directories are automatically executed. System-wide Autostart entries are located in the `/etc/xdg/autostart` directory while the user entries are located in the `~/.config/autostart` directory.

Adversaries may combine this technique with [Masquerading](https://attack.mitre.org/techniques/T1036) to blend malicious Autostart entries with legitimate programs.[^fn3]


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tool(s)

- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.013](https://attack.mitre.org/techniques/T1547/013)

[^fn1]: [Free Desktop. (2006, February 13). Desktop Application Autostart Specification. Retrieved September 12, 2019.](https://specifications.freedesktop.org/autostart-spec/autostart-spec-latest.html)
[^fn2]: [Free Desktop. (2017, December 24). Recognized Desktop Entry Keys. Retrieved November 17, 2024.](https://specifications.freedesktop.org/desktop-entry-spec/latest/recognized-keys.html)
[^fn3]: [TONY LAMBERT. (2022, June 7). Trapping the Netwire RAT on Linux. Retrieved September 28, 2023.](https://redcanary.com/blog/netwire-remote-access-trojan-on-linux/)