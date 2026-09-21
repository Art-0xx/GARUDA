---
mitre_data:
  id: T1560.002
  linker_tags:
  - mitre/attack/linker/collection/archive_via_library
  name: Archive via Library
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Archive via Library (`T1560.002`)

An adversary may compress or encrypt data that is collected prior to exfiltration using 3rd party libraries. Many libraries exist that can archive data, including [Python](https://attack.mitre.org/techniques/T1059/006) rarfile [^fn3], libzip [^fn1], and zlib [^fn2]. Most libraries include functionality to encrypt and/or compress data.

Some archival libraries are preinstalled on systems, such as bzip2 on macOS and Linux, and zip on Windows. Note that the libraries are different from the utilities. The libraries can be linked against when compiling, while the utilities require spawning a subshell, or a similar execution mechanism.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Archive Collected Data (T1560)|Archive Collected Data]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1560.002](https://attack.mitre.org/techniques/T1560/002)
- [Wikipedia. (2016, March 31). List of file signatures. Retrieved April 22, 2016.](https://en.wikipedia.org/wiki/List_of_file_signatures)

[^fn1]: [D. Baron, T. Klausner. (2020). libzip. Retrieved February 20, 2020.](https://libzip.org/)
[^fn2]: [madler. (2017). zlib. Retrieved February 20, 2020.](https://github.com/madler/zlib)
[^fn3]: [mkz. (2020). rarfile 3.1. Retrieved February 20, 2020.](https://pypi.org/project/rarfile/)