---
mitre_data:
  id: T1497
  linker_tags:
  - mitre/attack/linker/stealth/virtualization_sandbox_evasion
  - mitre/attack/linker/discovery/virtualization_sandbox_evasion
  name: Virtualization/Sandbox Evasion
  related_tactics:
  - stealth
  - discovery
tags:
- mitre/attack/technique
---



# Virtualization/Sandbox Evasion (`T1497`)

Adversaries may employ various means to detect and avoid virtualization and analysis environments. This may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (VME) or sandbox. If the adversary detects a VME, they may alter their malware to disengage from the victim or conceal the core functions of the implant. They may also search for VME artifacts before dropping secondary or additional payloads. Adversaries may use the information learned from [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497) during automated discovery to shape follow-on behaviors.[^fn2]

Adversaries may use several methods to accomplish [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497) such as checking for security monitoring tools (e.g., Sysinternals, Wireshark, etc.) or other system artifacts associated with analysis or virtualization. Adversaries may also check for legitimate user activity to help determine if it is in an analysis environment. Additional methods include use of sleep timers or loops within malware code to avoid operating within a temporary sandbox.[^fn1]




# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/System Checks (T1497.001)|System Checks]]
- [[../Techniques/Time Based Checks (T1497.003)|Time Based Checks]]
- [[../Techniques/User Activity Based Checks (T1497.002)|User Activity Based Checks]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1497](https://attack.mitre.org/techniques/T1497)

[^fn1]: [Falcone, R., Wartell, R.. (2015, July 27). UPS: Observations on CVE-2015-3113, Prior Zero-Days and the Pirpi Payload. Retrieved April 23, 2019.](https://unit42.paloaltonetworks.com/ups-observations-on-cve-2015-3113-prior-zero-days-and-the-pirpi-payload/)
[^fn2]: [Torello, A. & Guibernau, F. (n.d.). Environment Awareness. Retrieved September 13, 2024.](https://drive.google.com/file/d/1t0jn3xr4ff2fR30oQAUn_RsWSnMpOAQc/edit)