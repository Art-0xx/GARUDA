---
mitre_data:
  id: T1556.003
  linker_tags:
  - mitre/attack/linker/defense_impairment/pluggable_authentication_modules
  - mitre/attack/linker/persistence/pluggable_authentication_modules
  - mitre/attack/linker/credential_access/pluggable_authentication_modules
  name: Pluggable Authentication Modules
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Pluggable Authentication Modules (`T1556.003`)

Adversaries may modify pluggable authentication modules (PAM) to access user credentials or enable otherwise unwarranted access to accounts. PAM is a modular system of configuration files, libraries, and executable files which guide authentication for many services. The most common authentication module is <code>pam_unix.so</code>, which retrieves, sets, and verifies account authentication information in <code>/etc/passwd</code> and <code>/etc/shadow</code>.[^fn1][^fn2][^fn4]

Adversaries may modify components of the PAM system to create backdoors. PAM components, such as <code>pam_unix.so</code>, can be patched to accept arbitrary adversary supplied values as legitimate credentials.[^fn5]

Malicious modifications to the PAM system may also be abused to steal credentials. Adversaries may infect PAM resources with code to harvest user credentials, since the values exchanged with PAM components may be plain-text since PAM does not store passwords.[^fn3][^fn1]


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.003](https://attack.mitre.org/techniques/T1556/003)

[^fn1]: [Apple. (2011, May 11). PAM - Pluggable Authentication Modules. Retrieved June 25, 2020.](https://opensource.apple.com/source/dovecot/dovecot-239/dovecot/doc/wiki/PasswordDatabase.PAM.txt)
[^fn2]: [die.net. (n.d.). pam_unix(8) - Linux man page. Retrieved June 25, 2020.](https://linux.die.net/man/8/pam_unix)
[^fn3]: [Fernández, J. M. (2018, June 27). Exfiltrating credentials via PAM backdoors & DNS requests. Retrieved November 17, 2024.](https://web.archive.org/web/20240303094335/https://x-c3ll.github.io/posts/PAM-backdoor-DNS/)
[^fn4]: [Red Hat. (n.d.). CHAPTER 2. USING PLUGGABLE AUTHENTICATION MODULES (PAM). Retrieved June 25, 2020.](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/managing_smart_cards/pluggable_authentication_modules)
[^fn5]: [zephrax. (2018, August 3). linux-pam-backdoor. Retrieved June 25, 2020.](https://github.com/zephrax/linux-pam-backdoor)