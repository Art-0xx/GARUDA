---
mitre_data:
  id: T1027.014
  linker_tags:
  - mitre/attack/linker/stealth/polymorphic_code
  name: Polymorphic Code
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Polymorphic Code (`T1027.014`)

Adversaries may utilize polymorphic code (also known as metamorphic or mutating code) to evade detection. Polymorphic code is a type of software capable of changing its runtime footprint during code execution.[^fn1] With each execution of the software, the code is mutated into a different version of itself that achieves the same purpose or objective as the original. This functionality enables the malware to evade traditional signature-based defenses, such as antivirus and antimalware tools.[^fn2] 
Other obfuscation techniques can be used in conjunction with polymorphic code to accomplish the intended effects, including using mutation engines to conduct actions such as [Software Packing](https://attack.mitre.org/techniques/T1027/002), [Command Obfuscation](https://attack.mitre.org/techniques/T1027/010), or [Encrypted/Encoded File](https://attack.mitre.org/techniques/T1027/013).[^fn4][^fn3]



# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.014](https://attack.mitre.org/techniques/T1027/014)

[^fn1]: [Blackberry. (n.d.). What is Polymorphic Malware?. Retrieved September 27, 2024.](https://www.blackberry.com/us/en/solutions/endpoint-security/ransomware-protection/polymorphic-malware)
[^fn2]: [SentinelOne. (2023, March 18). What is Polymorphic Malware? Examples and Challenges. Retrieved September 27, 2024.](https://www.sentinelone.com/cybersecurity-101/threat-intelligence/what-is-polymorphic-malware)
[^fn3]: [Shellseekercyber. (2024, January 7). Explainer: Packed Malware. Retrieved September 27, 2024.](https://medium.com/@shellseekerscyber/explainer-packed-malware-16f09cc75035)
[^fn4]: [Sherwin Akshay. (2024, May 28). Techniques for concealing malware and hindering analysis: Packing up and unpacking stuff. Retrieved September 27, 2024.](https://www.linkedin.com/pulse/techniques-concealing-malware-hindering-analysis-packing-akshay-unijc)