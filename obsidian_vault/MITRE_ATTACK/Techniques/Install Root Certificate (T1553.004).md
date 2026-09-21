---
mitre_data:
  id: T1553.004
  linker_tags:
  - mitre/attack/linker/defense_impairment/install_root_certificate
  name: Install Root Certificate
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Install Root Certificate (`T1553.004`)

Adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers. Root certificates are used in public key cryptography to identify a root certificate authority (CA). When a root certificate is installed, the system or application will trust certificates in the root's chain of trust that have been signed by the root certificate.[^fn5] Certificates are commonly used for establishing secure TLS/SSL communications within a web browser. When a user attempts to browse a website that presents a certificate that is not trusted an error message will be displayed to warn the user of the security risk. Depending on the security settings, the browser may not allow the user to establish a connection to the website.

Installation of a root certificate on a compromised system would give an adversary a way to degrade the security of that system. Adversaries have used this technique to avoid security warnings prompting users when compromised systems connect over HTTPS to adversary controlled web servers that spoof legitimate websites in order to collect login credentials.[^fn1]

Atypical root certificates have also been pre-installed on systems by the manufacturer or in the software supply chain and were used in conjunction with malware/adware to provide [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557) capability for intercepting information transmitted over secure TLS/SSL communications.[^fn3]

Root certificates (and their associated chains) can also be cloned and reinstalled. Cloned certificate chains will carry many of the same metadata characteristics of the source and can be used to sign malicious code that may then bypass signature validation tools (ex: Sysinternals, antivirus, etc.) used to block execution and/or uncover artifacts of Persistence.[^fn2]

In macOS, the Ay MaMi malware uses <code>/usr/bin/security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /path/to/malicious/cert</code> to install a malicious certificate as a trusted root certificate into the system keychain.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Subvert Trust Controls (T1553)|Subvert Trust Controls]]

# Tool(s)

- [[../Tools/certutil|certutil]]
- [[../Tools/evilginx2|evilginx2]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1553.004](https://attack.mitre.org/techniques/T1553/004)

[^fn1]: [botconf eu. (2014, December 31). David Sancho - Finding Holes in Banking 2FA: Operation Emmental. Retrieved January 4, 2024.](https://www.youtube.com/watch?v=gchKFumYHWc)
[^fn2]: [Graeber, M. (2017, December 22). Code Signing Certificate Cloning Attacks and Defenses. Retrieved April 3, 2018.](https://posts.specterops.io/code-signing-certificate-cloning-attacks-and-defenses-6f98657fc6ec)
[^fn3]: [Onuma. (2015, February 24). Superfish: Adware Preinstalled on Lenovo Laptops. Retrieved February 20, 2017.](https://www.kaspersky.com/blog/lenovo-pc-with-adware-superfish-preinstalled/7712/)
[^fn4]: [Patrick Wardle. (2018, January 11). Ay MaMi. Retrieved March 19, 2018.](https://objective-see.com/blog/blog_0x26.html)
[^fn5]: [Wikipedia. (2016, December 6). Root certificate. Retrieved February 20, 2017.](https://en.wikipedia.org/wiki/Root_certificate)