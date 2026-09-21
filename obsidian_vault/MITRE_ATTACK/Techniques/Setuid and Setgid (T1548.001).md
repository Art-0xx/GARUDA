---
mitre_data:
  id: T1548.001
  linker_tags:
  - mitre/attack/linker/privilege_escalation/setuid_and_setgid
  name: Setuid and Setgid
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Setuid and Setgid (`T1548.001`)

An adversary may abuse configurations where an application has the setuid or setgid bits set in order to get code running in a different (and possibly more privileged) user’s context. On Linux or macOS, when the setuid or setgid bits are set for an application binary, the application will run with the privileges of the owning user or group respectively.[^fn3] Normally an application is run in the current user’s context, regardless of which user or group owns the application. However, there are instances where programs need to be executed in an elevated context to function properly, but the user running them may not have the specific required privileges.

Instead of creating an entry in the sudoers file, which must be done by root, any user can specify the setuid or setgid flag to be set for their own applications (i.e. [Linux and Mac Permissions](https://attack.mitre.org/techniques/T1222/002)). The <code>chmod</code> command can set these bits with bitmasking, <code>chmod 4777 [file]</code> or via shorthand naming, <code>chmod u+s [file]</code>. This will enable the setuid bit. To enable the setgid bit, <code>chmod 2775</code> and <code>chmod g+s</code> can be used.

Adversaries can use this mechanism on their own malware to make sure they're able to execute in elevated contexts in the future.[^fn2] This abuse is often part of a "shell escape" or other actions to bypass an execution environment with restricted permissions.

Alternatively, adversaries may choose to find and target vulnerable binaries with the setuid or setgid bits already enabled (i.e. [File and Directory Discovery](https://attack.mitre.org/techniques/T1083)). The setuid and setguid bits are indicated with an "s" instead of an "x" when viewing a file's attributes via <code>ls -l</code>. The <code>find</code> command can also be used to search for such files. For example, <code>find / -perm +4000 2>/dev/null</code> can be used to find files with setuid set and <code>find / -perm +2000 2>/dev/null</code> may be used for setgid. Binaries that have these bits set may then be abused by adversaries.[^fn1]


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Abuse Elevation Control Mechanism (T1548)|Abuse Elevation Control Mechanism]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1548.001](https://attack.mitre.org/techniques/T1548/001)

[^fn1]: [Emilio Pinna, Andrea Cardaci. (n.d.). GTFOBins. Retrieved January 28, 2022.](https://gtfobins.github.io/#+suid)
[^fn2]: [Marc-Etienne M.Leveille. (2016, July 6). New OSX/Keydnap malware is hungry for credentials. Retrieved July 3, 2017.](https://www.welivesecurity.com/2016/07/06/new-osxkeydnap-malware-hungry-credentials/)
[^fn3]: [Michael Kerrisk. (2017, September 15). Linux Programmer's Manual. Retrieved September 21, 2018.](http://man7.org/linux/man-pages/man2/setuid.2.html)