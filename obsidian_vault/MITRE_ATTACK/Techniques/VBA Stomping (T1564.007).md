---
mitre_data:
  id: T1564.007
  linker_tags:
  - mitre/attack/linker/stealth/vba_stomping
  name: VBA Stomping
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# VBA Stomping (`T1564.007`)

Adversaries may hide malicious Visual Basic for Applications (VBA) payloads embedded within MS Office documents by replacing the VBA source code with benign data.[^fn2]

MS Office documents with embedded VBA content store source code inside of module streams. Each module stream has a <code>PerformanceCache</code> that stores a separate compiled version of the VBA source code known as p-code. The p-code is executed when the MS Office version specified in the <code>_VBA_PROJECT</code> stream (which contains the version-dependent description of the VBA project) matches the version of the host MS Office application.[^fn3][^fn4]

An adversary may hide malicious VBA code by overwriting the VBA source code location with zero’s, benign code, or random bytes while leaving the previously compiled malicious p-code. Tools that scan for malicious VBA source code may be bypassed as the unwanted code is hidden in the compiled p-code. If the VBA source code is removed, some tools might even think that there are no macros present. If there is a version match between the <code>_VBA_PROJECT</code> stream and host MS Office application, the p-code will be executed, otherwise the benign VBA source code will be decompressed and recompiled to p-code, thus removing malicious p-code and potentially bypassing dynamic analysis.[^fn5][^fn2][^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.007](https://attack.mitre.org/techniques/T1564/007)

[^fn1]: [Bontchev, V. (2019, July 30). pcodedmp.py - A VBA p-code disassembler. Retrieved September 17, 2020.](https://github.com/bontchev/pcodedmp)
[^fn2]: [Cole, R., Moore, A., Stark, G., Stancill, B. (2020, February 5). STOMP 2 DIS: Brilliance in the (Visual) Basics. Retrieved September 17, 2020.](https://www.fireeye.com/blog/threat-research/2020/01/stomp-2-dis-brilliance-in-the-visual-basics.html)
[^fn3]: [Hegt, S. (2019, May 5). Evil Clippy: MS Office maldoc assistant. Retrieved September 17, 2020.](https://outflank.nl/blog/2019/05/05/evil-clippy-ms-office-maldoc-assistant/)
[^fn4]: [Microsoft. (2020, February 19). 2.3.4.1 _VBA_PROJECT Stream: Version Dependent Project Information. Retrieved September 18, 2020.](https://docs.microsoft.com/en-us/openspecs/office_file_formats/ms-ovba/ef7087ac-3974-4452-aab2-7dba2214d239)
[^fn5]: [Sayre, K., Ogden, H., Roberts, C. (2018, October 10). VBA Stomping — Advanced Maldoc Techniques. Retrieved September 17, 2020.](https://medium.com/walmartglobaltech/vba-stomping-advanced-maldoc-techniques-612c484ab278)