---
mitre_data:
  id: T1204.005
  linker_tags:
  - mitre/attack/linker/execution/malicious_library
  name: Malicious Library
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Malicious Library (`T1204.005`)

Adversaries may rely on a user installing a malicious library to facilitate execution. Threat actors may [Upload Malware](https://attack.mitre.org/techniques/T1608/001) to package managers such as NPM and PyPi, as well as to public code repositories such as GitHub. User may install libraries without realizing they are malicious, thus bypassing techniques that specifically achieve Initial Access. This can lead to the execution of malicious code, such as code that establishes persistence, steals data, or mines cryptocurrency.[^fn1][^fn2]

In some cases, threat actors may compromise and backdoor existing popular libraries (i.e., [Compromise Software Dependencies and Development Tools](https://attack.mitre.org/techniques/T1195/001)). Alternatively, they may create entirely new packages and leverage behaviors such as typosquatting to encourage users to install them.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/User Execution (T1204)|User Execution]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1204.005](https://attack.mitre.org/techniques/T1204/005)

[^fn1]: [ Sebastian Obregoso  and Christophe Tafani-Dereeper. (2024, May 23). Malicious PyPI packages targeting highly specific MacOS machines. Retrieved May 22, 2025.](https://securitylabs.datadoghq.com/articles/malicious-pypi-package-targeting-highly-specific-macos-machines/)
[^fn2]: [Jin Lee and Jenna Wang. (2023, October 2). Malicious Packages Hidden in NPM. Retrieved May 22, 2025.](https://www.fortinet.com/blog/threat-research/malicious-packages-hiddin-in-npm)