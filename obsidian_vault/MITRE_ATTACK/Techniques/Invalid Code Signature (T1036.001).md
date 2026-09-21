---
mitre_data:
  id: T1036.001
  linker_tags:
  - mitre/attack/linker/stealth/invalid_code_signature
  name: Invalid Code Signature
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Invalid Code Signature (`T1036.001`)

Adversaries may attempt to mimic features of valid code signatures to increase the chance of deceiving a user, analyst, or tool. Code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with. Adversaries can copy the metadata and signature information from a signed program, then use it as a template for an unsigned program. Files with invalid code signatures will fail digital signature validation checks, but they may appear more legitimate to users and security tools may improperly handle these files.[^fn1]

Unlike [Code Signing](https://attack.mitre.org/techniques/T1553/002), this activity will not result in a valid signature.


# Platform(s)

- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tool(s)

- [[../Tools/PcShare|PcShare]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.001](https://attack.mitre.org/techniques/T1036/001)

[^fn1]: [Vest, J. (2017, October 9). Borrowing Microsoft MetaData and Signatures to Hide Binary Payloads. Retrieved September 10, 2019.](https://threatexpress.com/blogs/2017/metatwin-borrowing-microsoft-metadata-and-digital-signatures-to-hide-binaries/)