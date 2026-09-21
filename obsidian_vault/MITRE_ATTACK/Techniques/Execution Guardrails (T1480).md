---
mitre_data:
  id: T1480
  linker_tags:
  - mitre/attack/linker/stealth/execution_guardrails
  name: Execution Guardrails
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Execution Guardrails (`T1480`)

Adversaries may use execution guardrails to constrain execution or actions based on adversary supplied and environment specific conditions that are expected to be present on the target. Guardrails ensure that a payload only executes against an intended target and reduces collateral damage from an adversary’s campaign.[^fn3] Values an adversary can provide about a target system or environment to use as guardrails may include specific network share names, attached physical devices, files, joined Active Directory (AD) domains, and local/external IP addresses.[^fn1]

Guardrails can be used to prevent exposure of capabilities in environments that are not intended to be compromised or operated within. This use of guardrails is distinct from typical [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497). While use of [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497) may involve checking for known sandbox values and continuing with execution only if there is no match, the use of guardrails will involve checking for an expected target-specific value and only continuing with execution if there is such a match.

Adversaries may identify and block certain user-agents to evade defenses and narrow the scope of their attack to victims and platforms on which it will be most effective. A user-agent self-identifies data such as a user's software application, operating system, vendor, and version. Adversaries may check user-agents for operating system identification and then only serve malware for the exploitable software while ignoring all other operating systems.[^fn2]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Mutual Exclusion (T1480.002)|Mutual Exclusion]]
- [[../Techniques/Environmental Keying (T1480.001)|Environmental Keying]]

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1480](https://attack.mitre.org/techniques/T1480)

[^fn1]: [McWhirt, M., Carr, N., Bienstock, D. (2019, December 4). Breaking the Rules: A Tough Outlook for Home Page Attacks (CVE-2017-11774). Retrieved June 23, 2020.](https://www.fireeye.com/blog/threat-research/2019/12/breaking-the-rules-tough-outlook-for-home-page-attacks.html)
[^fn2]: [Pham Duy Phuc, John Fokker J.E., Alejandro Houspanossian and Mathanraj Thangaraju. (2023, March 7). Qakbot Evolves to OneNote Malware Distribution. Retrieved June 7, 2024.](https://www.trellix.com/blogs/research/qakbot-evolves-to-onenote-malware-distribution/)
[^fn3]: [Shoorbajee, Z. (2018, June 1). Playing nice? FireEye CEO says U.S. malware is more restrained than adversaries'. Retrieved January 17, 2019.](https://www.cyberscoop.com/kevin-mandia-fireeye-u-s-malware-nice/)