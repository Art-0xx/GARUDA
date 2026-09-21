---
mitre_data:
  id: T1027.016
  linker_tags:
  - mitre/attack/linker/stealth/junk_code_insertion
  name: Junk Code Insertion
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Junk Code Insertion (`T1027.016`)

Adversaries may use junk code / dead code to obfuscate a malware’s functionality. Junk code is code that either does not execute, or if it does execute, does not change the functionality of the code. Junk code makes analysis more difficult and time-consuming, as the analyst steps through non-functional code instead of analyzing the main code. It also may hinder detections that rely on static code analysis due to the use of benign functionality, especially when combined with [Compression](https://attack.mitre.org/techniques/T1027/015) or [Software Packing](https://attack.mitre.org/techniques/T1027/002).[^fn1][^fn2]

No-Operation (NOP) instructions are an example of dead code commonly used in x86 assembly language. They are commonly used as the 0x90 opcode. When NOPs are added to malware, the disassembler may show the NOP instructions, leading to the analyst needing to step through them.[^fn1]

The use of junk / dead code insertion is distinct from [Binary Padding](https://attack.mitre.org/techniques/T1027/001) because the purpose is to obfuscate the functionality of the code, rather than simply to change the malware’s signature.   


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.016](https://attack.mitre.org/techniques/T1027/016)

[^fn1]: [ReasonLabs. (n.d.). What is Dead code insertion?. Retrieved March 4, 2025.](https://cyberpedia.reasonlabs.com/EN/dead%20code%20insertion.html)
[^fn2]: [What is Junk Code?. (n.d.). ReasonLabs. Retrieved April 4, 2025.](https://cyberpedia.reasonlabs.com/EN/junk%20code.html)