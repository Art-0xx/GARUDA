---
mitre_data:
  id: T1003.008
  linker_tags:
  - mitre/attack/linker/credential_access/_etc_passwd_and_etc_shadow
  name: /etc/passwd and /etc/shadow
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# /etc/passwd and /etc/shadow (`T1003.008`)

Adversaries may attempt to dump the contents of <code>/etc/passwd</code> and <code>/etc/shadow</code> to enable offline password cracking. Most modern Linux operating systems use a combination of <code>/etc/passwd</code> and <code>/etc/shadow</code> to store user account information, including password hashes in <code>/etc/shadow</code>. By default, <code>/etc/shadow</code> is only readable by the root user.[^fn2]

Linux stores user information such as user ID, group ID, home directory path, and login shell in <code>/etc/passwd</code>. A "user" on the system may belong to a person or a service. All password hashes are stored in <code>/etc/shadow</code> - including entries for users with no passwords and users with locked or disabled accounts.[^fn2]

Adversaries may attempt to read or dump the <code>/etc/passwd</code> and <code>/etc/shadow</code> files on Linux systems via command line utilities such as the <code>cat</code> command.[^fn1] Additionally, the Linux utility <code>unshadow</code> can be used to combine the two files in a format suited for password cracking utilities such as John the Ripper - for example, via the command <code>/usr/bin/unshadow /etc/passwd /etc/shadow > /tmp/crack.password.db</code>[^fn3]. Since the user information stored in <code>/etc/passwd</code> are linked to the password hashes in <code>/etc/shadow</code>, an adversary would need to have access to both.


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/OS Credential Dumping (T1003)|OS Credential Dumping]]

# Tool(s)

- [[../Tools/LaZagne|LaZagne]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1003.008](https://attack.mitre.org/techniques/T1003/008)

[^fn1]: [Julian Tuin, Stefan Hostetler, Jon Grimm, Aaron Diaz, and Trevor Daher. (2024, November 22). Arctic Wolf Observes Threat Campaign Targeting Palo Alto Networks Firewall Devices. Retrieved January 8, 2025.](https://arcticwolf.com/resources/blog/arctic-wolf-observes-threat-campaign-targeting-palo-alto-networks-firewall-devices/)
[^fn2]: [The Linux Documentation Project. (n.d.). Linux Password and Shadow File Formats. Retrieved February 19, 2020.](https://www.tldp.org/LDP/lame/LAME/linux-admin-made-easy/shadow-file-formats.html)
[^fn3]: [Vivek Gite. (2014, September 17). Linux Password Cracking: Explain unshadow and john Commands (John the Ripper Tool). Retrieved February 19, 2020.](https://www.cyberciti.biz/faq/unix-linux-password-cracking-john-the-ripper/)