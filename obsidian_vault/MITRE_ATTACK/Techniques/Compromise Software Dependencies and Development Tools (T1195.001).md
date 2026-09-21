---
mitre_data:
  id: T1195.001
  linker_tags:
  - mitre/attack/linker/initial_access/compromise_software_dependencies_and_development_tools
  name: Compromise Software Dependencies and Development Tools
  related_tactics:
  - initial_access
tags:
- mitre/attack/technique
---



# Compromise Software Dependencies and Development Tools (`T1195.001`)

Adversaries may manipulate software dependencies and development tools prior to receipt by a final consumer for the purpose of data or system compromise. Applications often depend on external software to function properly. Popular open source projects that are used as dependencies in many applications, such as pip and NPM packages, may be targeted as a means to add malicious code to users of the dependency.[^fn9][^fn8][^fn4] This may also include abandoned packages, which in some cases could be re-registered by threat actors after being removed by adversaries.[^fn7] Adversaries may also employ "typosquatting" or name-confusion by choosing names similar to existing popular libraries or packages in order to deceive a user.[^fn3][^fn2][^fn10]

Additionally, CI/CD pipeline components, such as GitHub Actions, may be targeted in order to gain access to the building, testing, and deployment cycles of an application.[^fn5] By adding malicious code into a GitHub action, a threat actor may be able to collect runtime credentials (e.g., via [Proc Filesystem](https://attack.mitre.org/techniques/T1003/007)) or insert further malicious components into the build pipelines for a second-order supply chain compromise.[^fn6] As GitHub Actions are often dependent on other GitHub Actions, threat actors may be able to infect a large number of repositories via the compromise of a single Action.[^fn1]

Targeting may be specific to a desired victim set or may be distributed to a broad set of consumers but only move on to additional tactics on specific victims. 


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Supply Chain Compromise (T1195)|Supply Chain Compromise]]

# Tactic(s)

- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1195.001](https://attack.mitre.org/techniques/T1195/001)

[^fn1]: [Asi Greenholts. (2023, September 14). The GitHub Actions Worm: Compromising GitHub Repositories Through the Actions Dependency Tree. Retrieved May 22, 2025.](https://www.paloaltonetworks.com/blog/cloud-security/github-actions-worm-dependencies/)
[^fn2]: [Darren Meyer. (2025, May 28). PyPI Supply Chain Attack Uncovered: Colorama and Colorizr Name Confusion. Retrieved September 24, 2025.](https://checkmarx.com/zero-post/python-pypi-supply-chain-attack-colorama/)
[^fn3]: [Deeba Ahmed. (2025, June 2). Backdoors in Python and NPM Packages Target Windows and Linux. Retrieved September 24, 2025.](https://hackread.com/backdoors-python-npm-packages-windows-linux/)
[^fn4]: [MANDVI. (2025, April 22). Malicious npm and PyPI Packages Disguised as Dev Tools to Steal Credentials. Retrieved September 24, 2025.](https://cyberpress.org/malicious-npm-and-pypi-packages-disguised-as-dev-tools)
[^fn5]: [Omer Gilm Aviad Hahami, Asi Greenholts, and Yaron Avital. (2025, March 20). GitHub Actions Supply Chain Attack: A Targeted Attack on Coinbase Expanded to the Widespread tj-actions/changed-files Incident: Threat Assessment . Retrieved May 22, 2025.](https://unit42.paloaltonetworks.com/github-actions-supply-chain-attack)
[^fn6]: [OWASP. (n.d.). CICD-SEC-4: Poisoned Pipeline Execution (PPE). Retrieved May 22, 2025.](https://owasp.org/www-project-top-10-ci-cd-security-risks/CICD-SEC-04-Poisoned-Pipeline-Execution)
[^fn7]: [Ravie Lakshmanan. (2024, September 4). Researchers Find Over 22,000 Removed PyPI Packages at Risk of Revival Hijack. Retrieved May 22, 2025.](https://thehackernews.com/2024/09/hackers-hijack-22000-removed-pypi.html)
[^fn8]: [Silviu Stahie. (2021, November 8). Popular NPM Repositories Compromised in Man-in-the-Middle Attack. Retrieved May 22, 2025.](https://www.bitdefender.com/en-gb/blog/hotforsecurity/popular-npm-repositories-compromised-in-man-in-the-middle-attack)
[^fn9]: [Trendmicro. (2018, November 29). Hacker Infects Node.js Package to Steal from Bitcoin Wallets. Retrieved April 10, 2019.](https://www.trendmicro.com/vinfo/dk/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets)
[^fn10]: [Yehuda Gelb. (2024, April 10). New Technique to Trick Developers Detected in an Open Source Supply Chain Attack. Retrieved June 18, 2024.](https://checkmarx.com/blog/new-technique-to-trick-developers-detected-in-an-open-source-supply-chain-attack/)