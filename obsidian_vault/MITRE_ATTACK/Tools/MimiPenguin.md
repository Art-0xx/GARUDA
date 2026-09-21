---
tags:
  - mitre/attack/tool
---

# MimiPenguin (`S0179`)

[MimiPenguin](https://attack.mitre.org/software/S0179) is a credential dumper, similar to [Mimikatz](https://attack.mitre.org/software/S0002), designed specifically for Linux platforms. [^fn1]



# Platform(s)

- Linux

# Techniques Used

## Proc Filesystem

[MimiPenguin](https://attack.mitre.org/software/S0179) can use the `<PID>/maps` and `<PID>/mem` file to search for regex patterns and dump the process memory.[\[MimiPenguin GitHub May 2017\]](https://github.com/huntergregal/mimipenguin)[\[Picus Labs Proc cump 2022\]](https://www.picussecurity.com/resource/the-mitre-attck-t1003-os-credential-dumping-technique-and-its-adversary-use)

- *Technique:* [[../Techniques/Proc Filesystem (T1003.007)|Proc Filesystem]]


# External References(s)

- [S0179](https://attack.mitre.org/software/S0179)

[^fn1]: [Gregal, H. (2017, May 12). MimiPenguin. Retrieved December 5, 2017.](https://github.com/huntergregal/mimipenguin)