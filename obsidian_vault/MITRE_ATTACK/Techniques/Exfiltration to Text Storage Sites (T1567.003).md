---
mitre_data:
  id: T1567.003
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_to_text_storage_sites
  name: Exfiltration to Text Storage Sites
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration to Text Storage Sites (`T1567.003`)

Adversaries may exfiltrate data to text storage sites instead of their primary command and control channel. Text storage sites, such as <code>pastebin[.]com</code>, are commonly used by developers to share code and other information.  

Text storage sites are often used to host malicious code for C2 communication (e.g., [Stage Capabilities](https://attack.mitre.org/techniques/T1608)), but adversaries may also use these sites to exfiltrate collected data. Furthermore, paid features and encryption options may allow adversaries to conceal and store data more securely.[^fn1]

**Note:** This is distinct from [Exfiltration to Code Repository](https://attack.mitre.org/techniques/T1567/001), which highlight access to code repositories via APIs.


# Platform(s)

- Linux
- macOS
- Windows
- ESXi

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Web Service (T1567)|Exfiltration Over Web Service]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1567.003](https://attack.mitre.org/techniques/T1567/003)

[^fn1]: [Ciarniello, A. (2019, September 24). What is Pastebin and Why Do Hackers Love It?. Retrieved April 11, 2023.](https://web.archive.org/web/20201107203304/https://www.echosec.net/blog/what-is-pastebin-and-why-do-hackers-love-it)