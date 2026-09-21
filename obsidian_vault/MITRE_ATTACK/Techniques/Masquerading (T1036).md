---
mitre_data:
  id: T1036
  linker_tags:
  - mitre/attack/linker/stealth/masquerading
  name: Masquerading
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Masquerading (`T1036`)

Adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. Masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. This may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.

Renaming abusable system utilities to evade security monitoring is also a form of [Masquerading](https://attack.mitre.org/techniques/T1036).[^fn1]


# Platform(s)

- Containers
- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Double File Extension (T1036.007)|Double File Extension]]
- [[../Techniques/Match Legitimate Resource Name or Location (T1036.005)|Match Legitimate Resource Name or Location]]
- [[../Techniques/Masquerade File Type (T1036.008)|Masquerade File Type]]
- [[../Techniques/Break Process Trees (T1036.009)|Break Process Trees]]
- [[../Techniques/Overwrite Process Arguments (T1036.011)|Overwrite Process Arguments]]
- [[../Techniques/Right-to-Left Override (T1036.002)|Right-to-Left Override]]
- [[../Techniques/Masquerade Task or Service (T1036.004)|Masquerade Task or Service]]
- [[../Techniques/Browser Fingerprint (T1036.012)|Browser Fingerprint]]
- [[../Techniques/Invalid Code Signature (T1036.001)|Invalid Code Signature]]
- [[../Techniques/Rename Legitimate Utilities (T1036.003)|Rename Legitimate Utilities]]
- [[../Techniques/Masquerade Account Name (T1036.010)|Masquerade Account Name]]
- [[../Techniques/Space after Filename (T1036.006)|Space after Filename]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036](https://attack.mitre.org/techniques/T1036)

[^fn1]: [LOLBAS. (n.d.). Living Off The Land Binaries and Scripts (and also Libraries). Retrieved February 10, 2020.](https://lolbas-project.github.io/)