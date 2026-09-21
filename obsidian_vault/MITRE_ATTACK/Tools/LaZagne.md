---
tags:
  - mitre/attack/tool
---

# LaZagne (`S0349`)

[LaZagne](https://attack.mitre.org/software/S0349) is a post-exploitation, open-source tool used to recover stored passwords on a system. It has modules for Windows, Linux, and OSX, but is mainly focused on Windows systems. [LaZagne](https://attack.mitre.org/software/S0349) is publicly available on GitHub.[^fn2]



# Platform(s)

- Linux
- macOS
- Windows

# Techniques Used

## Credentials In Files

[LaZagne](https://attack.mitre.org/software/S0349) can obtain credentials from chats, databases, mail, and WiFi.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Windows Credential Manager

[LaZagne](https://attack.mitre.org/software/S0349) can obtain credentials from Vault files.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)	

- *Technique:* [[../Techniques/Windows Credential Manager (T1555.004)|Windows Credential Manager]]

## LSA Secrets

[LaZagne](https://attack.mitre.org/software/S0349) can perform credential dumping from LSA secrets to obtain account and password information.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]

## /etc/passwd and /etc/shadow

[LaZagne](https://attack.mitre.org/software/S0349) can obtain credential information from /etc/shadow using the shadow.py module.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/_etc_passwd and _etc_shadow (T1003.008)|/etc/passwd and /etc/shadow]]

## Credentials from Web Browsers

[LaZagne](https://attack.mitre.org/software/S0349) can obtain credentials from web browsers such as Google Chrome, Internet Explorer, and Firefox.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## LSASS Memory

[LaZagne](https://attack.mitre.org/software/S0349) can perform credential dumping from memory to obtain account and password information.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Cached Domain Credentials

[LaZagne](https://attack.mitre.org/software/S0349) can perform credential dumping from MSCache to obtain account and password information.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/Cached Domain Credentials (T1003.005)|Cached Domain Credentials]]

## Credentials from Password Stores

[LaZagne](https://attack.mitre.org/software/S0349) can obtain credentials from databases, mail, and WiFi across multiple platforms.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)

- *Technique:* [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

## Keychain

[LaZagne](https://attack.mitre.org/software/S0349) can obtain credentials from macOS Keychains.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)	

- *Technique:* [[../Techniques/Keychain (T1555.001)|Keychain]]

## Proc Filesystem

[LaZagne](https://attack.mitre.org/software/S0349) can use the `<PID>/maps` and `<PID>/mem` files to identify regex patterns to dump cleartext passwords from the browser's process memory.[\[GitHub LaZagne Dec 2018\]](https://github.com/AlessandroZ/LaZagne)[\[Picus Labs Proc cump 2022\]](https://www.picussecurity.com/resource/the-mitre-attck-t1003-os-credential-dumping-technique-and-its-adversary-use)

- *Technique:* [[../Techniques/Proc Filesystem (T1003.007)|Proc Filesystem]]


# External References(s)

- [S0349](https://attack.mitre.org/software/S0349)
- [Zanni, A. (n.d.). The LaZagne Project !!!. Retrieved December 14, 2018.](https://github.com/AlessandroZ/LaZagne)

[^fn2]: [Zanni, A. (n.d.). The LaZagne Project !!!. Retrieved December 14, 2018.](https://github.com/AlessandroZ/LaZagne)