---
mitre_data:
  id: T1564.014
  linker_tags:
  - mitre/attack/linker/stealth/extended_attributes
  name: Extended Attributes
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Extended Attributes (`T1564.014`)

Adversaries may abuse extended attributes (xattrs) on macOS and Linux to hide their malicious data in order to evade detection. Extended attributes are key-value pairs of file and directory metadata used by both macOS and Linux. They are not visible through standard tools like `Finder`,  `ls`, or `cat` and require utilities such as `xattr` (macOS) or `getfattr` (Linux) for inspection. Operating systems and applications use xattrs for tagging, integrity checks, and access control. On Linux, xattrs are organized into namespaces such as `user.` (user permissions), `trusted.` (root permissions), `security.`, and `system.`, each with specific permissions. On macOS, xattrs are flat strings without namespace prefixes, commonly prefixed with `com.apple.*` (e.g., `com.apple.quarantine`, `com.apple.metadata:_kMDItemUserTags`) and used by system features like Gatekeeper and Spotlight.[^fn1]

An adversary may leverage xattrs by embedding a second-stage payload into the extended attribute of a legitimate file. On macOS, a payload can be embedded into a custom attribute using the `xattr` command. A separate loader can retrieve the attribute with `xattr -p`, decode the content, and execute it using a scripting interpreter. On Linux, an adversary may use `setfattr` to write a payload into the `user.` namespace of a legitimate file. A loader script can later extract the payload with `getfattr --only-values`, decode it, and execute it using bash or another interpreter. In both cases, because the primary file content remains unchanged, security tools and integrity checks that do not inspect extended attributes will observe the original file hash, allowing the malicious payload to evade detection.[^fn2]


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.014](https://attack.mitre.org/techniques/T1564/014)

[^fn1]: [Irem Kuyucu. (2024, August 6). Establishing persistence using extended  attributes on Linux. Retrieved March 27, 2025.](https://kernal.eu/posts/linux-xattr-persistence/)
[^fn2]: [Sharmine Low. (2024, November 13). Stealthy Attributes of Lazarus APT Group: Evading Detection with Extended Attributes. Retrieved March 27, 2025.](https://www.group-ib.com/blog/stealthy-attributes-of-apt-lazarus/)