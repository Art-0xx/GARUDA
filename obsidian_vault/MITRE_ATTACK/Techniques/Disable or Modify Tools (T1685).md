---
mitre_data:
  id: T1685
  linker_tags:
  - mitre/attack/linker/defense_impairment/disable_or_modify_tools
  name: Disable or Modify Tools
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Disable or Modify Tools (`T1685`)

Adversaries may disable, degrade, or tamper with security tools or applications (e.g., endpoint detection and response (EDR) tools, intrusion detection systems (IDS), antivirus, logging agents, sensors, etc.) to impair or reduce visibility of defensive capabilities. This may include stopping specific services, killing processes, modifying or deleting tool configuration files and Registry keys, or preventing tools from updating. This may also include impairing defenses more broadly by disrupting preventative, detection, and response mechanisms across host, network, and cloud environments.[^fn4] 

In addition to directly targeting tools, adversaries may block or manipulate indicators and telemetry used for detection. This includes maliciously disabling or redirecting sensors such as Event Tracing for Windows (ETW), modifying event log configurations (e.g., redirecting Security logs), or interfering with logging pipelines and forwarding mechanisms (e.g., SIEM ingestion).[^fn2][^fn3]

More advanced techniques include leveraging legitimate drivers or debugging mechanisms to render tools non-functional, bypassing anti-tampering protections, and targeting specific defenses such as Sysmon or cloud monitoring agents. Adversaries may also disrupt broader defensive operations, including update mechanisms, logging infrastructure (e.g., syslog), or event aggregation, further degrading an organization’s ability to detect and respond to malicious activity.[^fn1]


# Platform(s)

- Containers
- ESXi
- IaaS
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Modify or Spoof Tool UI (T1685.003)|Modify or Spoof Tool UI]]
- [[../Techniques/Disable or Modify Windows Event Log (T1685.001)|Disable or Modify Windows Event Log]]
- [[../Techniques/Disable or Modify Linux Audit System Log (T1685.004)|Disable or Modify Linux Audit System Log]]
- [[../Techniques/Disable or Modify Cloud Log (T1685.002)|Disable or Modify Cloud Log]]
- [[../Techniques/Clear Linux or Mac System Logs (T1685.006)|Clear Linux or Mac System Logs]]
- [[../Techniques/Clear Windows Event Logs (T1685.005)|Clear Windows Event Logs]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/DCRAT|DCRAT]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685](https://attack.mitre.org/techniques/T1685)

[^fn1]: [Cocomazzi, Antonio. (2024, July 17). FIN7 Reboot | Cybercrime Gang Enhances Ops with New EDR Bypasses and Automated Attacks. Retrieved September 24, 2025.](https://www.sentinelone.com/labs/fin7-reboot-cybercrime-gang-enhances-ops-with-new-edr-bypasses-and-automated-attacks/)
[^fn2]: [Microsoft. (2009, May 17). Backdoor:Win32/Lamin.A. Retrieved September 6, 2018.](https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?name=Backdoor:Win32/Lamin.A)
[^fn3]: [Palantir. (2018, December 24). Tampering with Windows Event Tracing: Background, Offense, and Defense. Retrieved April 15, 2026.](https://blog.palantir.com/tampering-with-windows-event-tracing-background-offense-and-defense-4be7ac62ac63)
[^fn4]: [Shaked, O. (2020, January 20). Anatomy of a Targeted Ransomware Attack. Retrieved June 18, 2022.](https://cdn.logic-control.com/docs/scadafence/Anatomy-Of-A-Targeted-Ransomware-Attack-WP.pdf)