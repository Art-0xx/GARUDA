---
mitre_data:
  id: T1036.006
  linker_tags:
  - mitre/attack/linker/stealth/space_after_filename
  name: Space after Filename
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Space after Filename (`T1036.006`)

Adversaries can hide a program's true filetype by changing the extension of a file. With certain file types (specifically this does not work with .app extensions), appending a space to the end of a filename will change how the file is processed by the operating system.

For example, if there is a Mach-O executable file called <code>evil.bin</code>, when it is double clicked by a user, it will launch Terminal.app and execute. If this file is renamed to <code>evil.txt</code>, then when double clicked by a user, it will launch with the default text editing application (not executing the binary). However, if the file is renamed to <code>evil.txt </code> (note the space at the end), then when double clicked by a user, the true file type is determined by the OS and handled appropriately and the binary will be executed [^fn1].

Adversaries can use this feature to trick users into double clicking benign-looking files of any format and ultimately executing something malicious.


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.006](https://attack.mitre.org/techniques/T1036/006)

[^fn1]: [Dan Goodin. (2016, July 6). After hiatus, in-the-wild Mac backdoors are suddenly back. Retrieved July 8, 2017.](https://arstechnica.com/security/2016/07/after-hiatus-in-the-wild-mac-backdoors-are-suddenly-back/)