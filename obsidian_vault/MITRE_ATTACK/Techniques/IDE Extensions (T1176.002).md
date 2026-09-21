---
mitre_data:
  id: T1176.002
  linker_tags:
  - mitre/attack/linker/persistence/ide_extensions
  name: IDE Extensions
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# IDE Extensions (`T1176.002`)

Adversaries may abuse an integrated development environment (IDE) extension to establish persistent access to victim systems.[^fn3] IDEs such as Visual Studio Code, IntelliJ IDEA, and Eclipse support extensions - software components that add features like code linting, auto-completion, task automation, or integration with tools like Git and Docker. A malicious extension can be installed through an extension marketplace (i.e., [Compromise Software Dependencies and Development Tools](https://attack.mitre.org/techniques/T1195/001)) or side-loaded directly into the IDE.[^fn1][^fn2]   

In addition to installing malicious extensions, adversaries may also leverage benign ones. For example, adversaries may establish persistent SSH tunnels via the use of the VSCode Remote SSH extension (i.e., [IDE Tunneling](https://attack.mitre.org/techniques/T1219/001)).  

Trust is typically established through the installation process; once installed, the malicious extension is run every time that the IDE is launched. The extension can then be used to execute arbitrary code, establish a backdoor, mine cryptocurrency, or exfiltrate data.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Software Extensions (T1176)|Software Extensions]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1176.002](https://attack.mitre.org/techniques/T1176/002)

[^fn1]: [Abramovsky, O. (2023, May 16). VSCode Security: Malicious Extensions Detected- More Than 45,000 Downloads- PII Exposed, and Backdoors Enabled. Retrieved March 30, 2025.](https://blog.checkpoint.com/securing-the-cloud/malicious-vscode-extensions-with-more-than-45k-downloads-steal-pii-and-enable-backdoors/)
[^fn2]: [Lakshmanan, R. (2023, January 9). Hackers Can Abuse Visual Studio Marketplace to Target Developers with Malicious Extensions. Retrieved March 30, 2025.](https://thehackernews.com/2023/01/hackers-distributing-malicious-visual.html)
[^fn3]: [Mnemonic. (n.d.). Advisory: Misuse of Visual Studio Code for traffic tunnelling. Retrieved March 30, 2025.](https://www.mnemonic.io/resources/blog/misuse-of-visual-studio-code-for-traffic-tunnelling/)
[^fn4]: [Yuval Ronen. (2025, April 4). Mining in Plain Sight: The VS Code Extension Cryptojacking Campaign. Retrieved April 8, 2025.](https://blog.extensiontotal.com/mining-in-plain-sight-the-vs-code-extension-cryptojacking-campaign-19ca12904b59)