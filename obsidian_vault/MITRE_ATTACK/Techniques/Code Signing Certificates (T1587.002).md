---
mitre_data:
  id: T1587.002
  linker_tags:
  - mitre/attack/linker/resource_development/code_signing_certificates
  name: Code Signing Certificates
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Code Signing Certificates (`T1587.002`)

Adversaries may create self-signed code signing certificates that can be used during targeting. Code signing is the process of digitally signing executables and scripts to confirm the software author and guarantee that the code has not been altered or corrupted. Code signing provides a level of authenticity for a program from the developer and a guarantee that the program has not been tampered with.[^fn1] Users and/or security tools may trust a signed piece of code more than an unsigned piece of code even if they don't know who issued the certificate or who the author is.

Prior to [Code Signing](https://attack.mitre.org/techniques/T1553/002), adversaries may develop self-signed code signing certificates for use in operations.


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Develop Capabilities (T1587)|Develop Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1587.002](https://attack.mitre.org/techniques/T1587/002)

[^fn1]: [Wikipedia. (2015, November 10). Code Signing. Retrieved March 31, 2016.](https://en.wikipedia.org/wiki/Code_signing)