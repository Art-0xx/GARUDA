---
mitre_data:
  id: T1555.002
  linker_tags:
  - mitre/attack/linker/credential_access/securityd_memory
  name: Securityd Memory
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Securityd Memory (`T1555.002`)

An adversary with root access may gather credentials by reading `securityd`’s memory. `securityd` is a service/daemon responsible for implementing security protocols such as encryption and authorization.[^fn2] A privileged adversary may be able to scan through `securityd`'s memory to find the correct sequence of keys to decrypt the user’s logon keychain. This may provide the adversary with various plaintext passwords, such as those for users, WiFi, mail, browsers, certificates, secure notes, etc.[^fn3][^fn4]

In OS X prior to El Capitan, users with root access can read plaintext keychain passwords of logged-in users because Apple’s keychain implementation allows these credentials to be cached so that users are not repeatedly prompted for passwords.[^fn3][^fn1] Apple’s `securityd` utility takes the user’s logon password, encrypts it with PBKDF2, and stores this master key in memory. Apple also uses a set of keys and algorithms to encrypt the user’s password, but once the master key is found, an adversary need only iterate over the other values to unlock the final password.[^fn3]


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1555.002](https://attack.mitre.org/techniques/T1555/002)

[^fn1]: [Alex Rymdeko-Harvey, Steve Borosh. (2016, May 14). External to DA, the OS X Way. Retrieved September 12, 2024.](https://www.slideshare.net/slideshow/external-to-da-the-os-x-way/62021418)
[^fn2]: [Apple. (n.d.). Security Server and Security Agent. Retrieved March 29, 2024.](https://developer.apple.com/library/archive/documentation/Security/Conceptual/Security_Overview/Architecture/Architecture.html)
[^fn3]: [Juuso Salonen. (2012, September 5). Breaking into the OS X keychain. Retrieved November 17, 2024.](https://web.archive.org/web/20130106164109/https://juusosalonen.com/post/30923743427/breaking-into-the-os-x-keychain)
[^fn4]: [Marc-Etienne M.Leveille. (2016, July 6). New OSX/Keydnap malware is hungry for credentials. Retrieved July 3, 2017.](https://www.welivesecurity.com/2016/07/06/new-osxkeydnap-malware-hungry-credentials/)