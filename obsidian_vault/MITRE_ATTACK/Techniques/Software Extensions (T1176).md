---
mitre_data:
  id: T1176
  linker_tags:
  - mitre/attack/linker/persistence/software_extensions
  name: Software Extensions
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Software Extensions (`T1176`)

Adversaries may abuse software extensions to establish persistent access to victim systems. Software extensions are modular components that enhance or customize the functionality of software applications, including web browsers, Integrated Development Environments (IDEs), and other platforms.[^fn3][^fn1] Extensions are typically installed via official marketplaces, app stores, or manually loaded by users, and they often inherit the permissions and access levels of the host application. 

  
Malicious extensions can be introduced through various methods, including social engineering, compromised marketplaces, or direct installation by users or by adversaries who have already gained access to a system. Malicious extensions can be named similarly or identically to benign extensions in marketplaces. Security mechanisms in extension marketplaces may be insufficient to detect malicious components, allowing adversaries to bypass automated scanners or exploit trust established during the installation process. Adversaries may also abuse benign extensions to achieve their objectives, such as using legitimate functionality to tunnel data or bypass security controls. 

The modular nature of extensions and their integration with host applications make them an attractive target for adversaries seeking to exploit trusted software ecosystems. Detection can be challenging due to the inherent trust placed in extensions during installation and their ability to blend into normal application workflows. 


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Browser Extensions (T1176.001)|Browser Extensions]]
- [[../Techniques/IDE Extensions (T1176.002)|IDE Extensions]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1176](https://attack.mitre.org/techniques/T1176)
- [Chris Ross. (2019, February 8). No Place Like Chrome. Retrieved April 27, 2021.](https://www.xorrior.com/No-Place-Like-Chrome/)

[^fn1]: [Abramovsky, O. (2023, May 16). VSCode Security: Malicious Extensions Detected- More Than 45,000 Downloads- PII Exposed, and Backdoors Enabled. Retrieved March 30, 2025.](https://blog.checkpoint.com/securing-the-cloud/malicious-vscode-extensions-with-more-than-45k-downloads-steal-pii-and-enable-backdoors/)
[^fn3]: [Kjaer, M. (2016, July 18). Malware in the browser: how you might get hacked by a Chrome extension. Retrieved September 12, 2024.](https://web.archive.org/web/20240608001937/https://kjaer.io/extension-malware/)