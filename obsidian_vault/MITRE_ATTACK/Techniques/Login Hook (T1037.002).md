---
mitre_data:
  id: T1037.002
  linker_tags:
  - mitre/attack/linker/persistence/login_hook
  - mitre/attack/linker/privilege_escalation/login_hook
  name: Login Hook
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Login Hook (`T1037.002`)

Adversaries may use a Login Hook to establish persistence executed upon user logon. A login hook is a plist file that points to a specific script to execute with root privileges upon user logon. The plist file is located in the <code>/Library/Preferences/com.apple.loginwindow.plist</code> file and can be modified using the <code>defaults</code> command-line utility. This behavior is the same for logout hooks where a script can be executed upon user logout. All hooks require administrator permissions to modify or create hooks.[^fn1][^fn2] 

Adversaries can add or insert a path to a malicious script in the <code>com.apple.loginwindow.plist</code> file, using the <code>LoginHook</code> or <code>LogoutHook</code> key-value pair. The malicious script is executed upon the next user login. If a login hook already exists, adversaries can add additional commands to an existing login hook. There can be only one login and logout hook on a system at a time.[^fn4][^fn3]

**Note:** Login hooks were deprecated in 10.11 version of macOS in favor of [Launch Daemon](https://attack.mitre.org/techniques/T1543/004) and [Launch Agent](https://attack.mitre.org/techniques/T1543/001) 


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Boot or Logon Initialization Scripts (T1037)|Boot or Logon Initialization Scripts]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1037.002](https://attack.mitre.org/techniques/T1037/002)

[^fn1]: [Apple. (2016, September 13). Customizing Login and Logout. Retrieved April 1, 2022.](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CustomLogin.html)
[^fn2]: [Apple. (n.d.). LoginWindowScripts. Retrieved April 1, 2022.](https://developer.apple.com/documentation/devicemanagement/loginwindowscripts)
[^fn3]: [Patrick Wardle. (n.d.). Chapter 0x2: Persistence. Retrieved April 13, 2022.](https://taomm.org/PDFs/vol1/CH%200x02%20Persistence.pdf)
[^fn4]: [Stokes, P. (2019, July 17). How Malware Persists on macOS. Retrieved March 27, 2020.](https://www.sentinelone.com/blog/how-malware-persists-on-macos/)