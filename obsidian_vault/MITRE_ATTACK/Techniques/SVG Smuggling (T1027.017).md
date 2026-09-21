---
mitre_data:
  id: T1027.017
  linker_tags:
  - mitre/attack/linker/stealth/svg_smuggling
  name: SVG Smuggling
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# SVG Smuggling (`T1027.017`)

Adversaries may smuggle data and files past content filters by hiding malicious payloads inside of seemingly benign SVG files.[^fn2] SVGs, or Scalable Vector Graphics, are vector-based image files constructed using XML. As such, they can legitimately include `<script>` tags that enable adversaries to include malicious JavaScript payloads. However, SVGs may appear less suspicious to users than other types of executable files, as they are often treated as image files. 

SVG smuggling can take a number of forms. For example, threat actors may include content that: 

* Assembles malicious payloads[^fn1]
* Downloads malicious payloads[^fn4]
* Redirects users to malicious websites[^fn3]
* Displays interactive content to users, such as fake login forms and download buttons.[^fn3]

SVG Smuggling may be used in conjunction with [HTML Smuggling](https://attack.mitre.org/techniques/T1027/006) where an SVG with a malicious payload is included inside an HTML file.[^fn1] SVGs may also be included in other types of documents, such as PDFs.  


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.017](https://attack.mitre.org/techniques/T1027/017)

[^fn1]: [Adam Katz and Jaeson Schultz. (2022, December 13). HTML smugglers turn to SVG images. Retrieved March 25, 2025.](https://blog.talosintelligence.com/html-smugglers-turn-to-svg-images/)
[^fn2]: [Bernard Bautista and Kevin Adriano. (2025, April 10). Pixel-Perfect Trap: The Surge of SVG-Borne Phishing Attacks. Retrieved April 14, 2025.](https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/pixel-perfect-trap-the-surge-of-svg-borne-phishing-attacks/)
[^fn3]: [Lawrence Abrams. (2024, November 17). Phishing emails increasingly use SVG attachments to evade detection. Retrieved March 25, 2025.](https://www.bleepingcomputer.com/news/security/phishing-emails-increasingly-use-svg-attachments-to-evade-detection/)
[^fn4]: [Max Gannon. (2024, March 13). SVG Files Abused in Emerging Campaigns. Retrieved March 25, 2025.](https://cofense.com/blog/svg-files-abused-in-emerging-campaigns/)