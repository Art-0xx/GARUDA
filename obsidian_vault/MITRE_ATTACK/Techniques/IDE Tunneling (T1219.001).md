---
mitre_data:
  id: T1219.001
  linker_tags:
  - mitre/attack/linker/command_and_control/ide_tunneling
  name: IDE Tunneling
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# IDE Tunneling (`T1219.001`)

Adversaries may abuse Integrated Development Environment (IDE) software with remote development features to establish an interactive command and control channel on target systems within a network. IDE tunneling combines SSH, port forwarding, file sharing, and debugging into a single secure connection, letting developers work on remote systems as if they were local. Unlike SSH and port forwarding, IDE tunneling encapsulates an entire session and may use proprietary tunneling protocols alongside SSH, allowing adversaries to blend in with legitimate development workflows. Some IDEs, like Visual Studio Code, also provide CLI tools (e.g., `code tunnel`) that adversaries may use to programmatically establish tunnels and generate web-accessible URLs for remote access. These tunnels can be authenticated through accounts such as GitHub, enabling the adversary to control the compromised system via a legitimate developer portal.[^fn1][^fn2][^fn3]

Additionally, adversaries may use IDE tunneling for persistence. Some IDEs, such as Visual Studio Code and JetBrains, support automatic reconnection. Adversaries may configure the IDE to auto-launch at startup, re-establishing the tunnel upon execution. Compromised developer machines may also be exploited as jump hosts to move further into the network.

IDE tunneling tools may be built-in or installed as [IDE Extensions](https://attack.mitre.org/techniques/T1176/002).


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Remote Access Tools (T1219)|Remote Access Tools]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1219.001](https://attack.mitre.org/techniques/T1219/001)

[^fn1]: [Aleksandar Milenkoski, Luigi Martire. (2024, December 10). Operation Digital Eye | Chinese APT Compromises Critical Digital Infrastructure via Visual Studio Code Tunnels. Retrieved February 27, 2025.](https://www.sentinelone.com/labs/operation-digital-eye-chinese-apt-compromises-critical-digital-infrastructure-via-visual-studio-code-tunnels/)
[^fn2]: [Tom Fakterman. (2024, September 6). Chinese APT Abuses VSCode to Target Government in Asia. Retrieved March 24, 2025.](https://unit42.paloaltonetworks.com/stately-taurus-abuses-vscode-southeast-asian-espionage/)
[^fn3]: [Truvis Thornton. (2023, September 25). Visual Studio Code: embedded reverse shell and how to block, create Sentinel Detection, and add Environment Prevention. Retrieved March 24, 2025.](https://medium.com/@truvis.thornton/visual-studio-code-embedded-reverse-shell-and-how-to-block-create-sentinel-detection-and-add-e864ebafaf6d)