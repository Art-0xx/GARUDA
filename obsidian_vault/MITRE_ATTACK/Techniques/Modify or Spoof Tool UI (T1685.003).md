---
mitre_data:
  id: T1685.003
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_or_spoof_tool_ui
  name: Modify or Spoof Tool UI
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Modify or Spoof Tool UI (`T1685.003`)

Adversaries may spoof or manipulate security tool user interfaces (UIs) to falsely indicate tools are functioning normally and delay detection and response. 

Adversaries may present misleading or falsified security tool interfaces (UIs) that display normal or healthy status indicators, even when underlying security tools have been disabled, degraded, or otherwise tampered with. Security tools typically provide visibility into system health, alerting, and operational status; by misrepresenting this information, adversaries can undermine defender trust in these signals and obscure the true security posture of the system. 

This behavior is often used in conjunction with efforts to disable or modify tools, where adversaries first impair the functionality of defenses (e.g., EDR, logging agents) and then replace or mimic their interfaces to conceal the loss of visibility. By maintaining the appearance of normal operations, such as showing active protection, successful updates, or absence of threats, adversaries can delay investigation and response, enabling continued malicious activity. 

For example, adversaries may display a fake Windows Security interface or system tray icon indicating a “protected” or “healthy” state after disabling Windows Defender or related services.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685.003](https://attack.mitre.org/techniques/T1685/003)

[^fn1]: [Antonio Cocomazzi and Antonio Pirozzi. (2022, November 3). Black Basta Ransomware | Attacks Deploy Custom EDR Evasion Tools Tied to FIN7 Threat Actor. Retrieved March 14, 2023.](https://www.sentinelone.com/labs/black-basta-ransomware-attacks-deploy-custom-edr-evasion-tools-tied-to-fin7-threat-actor/)