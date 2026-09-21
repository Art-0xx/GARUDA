---
mitre_data:
  id: T1070
  linker_tags:
  - mitre/attack/linker/stealth/indicator_removal
  name: Indicator Removal
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Indicator Removal (`T1070`)

Adversaries may selectively delete or modify artifacts generated to reduce indications of their presence and blend in with legitimate activity. Rather than broadly removing evidence, adversaries may target specific artifacts that appear anomalous or are likely to draw scrutiny, while leaving sufficient data intact to maintain the appearance of normal system behavior.

Artifacts such as command histories, log entries, or file metadata may be altered in ways that align with expected user or system activity. Location, format, and type of artifact (such as command or login history) are often platform-specific, allowing adversaries to tailor modifications that minimize suspicion.

These actions may not prevent detection entirely but can delay recognition of malicious activity or reduce the fidelity of alerts by making events appear benign or consistent with routine operations. Additionally, selectively removed or modified artifacts may still be recoverable through deeper forensic analysis, though their absence or alteration can complicate timeline reconstruction and attribution.


# Platform(s)

- Containers
- ESXi
- Linux
- macOS
- Network Devices
- Office Suite
- Windows

# Sub-Technique(s)

- [[../Techniques/Clear Network Connection History and Configurations (T1070.007)|Clear Network Connection History and Configurations]]
- [[../Techniques/Clear Command History (T1070.003)|Clear Command History]]
- [[../Techniques/Clear Mailbox Data (T1070.008)|Clear Mailbox Data]]
- [[../Techniques/Timestomp (T1070.006)|Timestomp]]
- [[../Techniques/Network Share Connection Removal (T1070.005)|Network Share Connection Removal]]
- [[../Techniques/Relocate Malware (T1070.010)|Relocate Malware]]
- [[../Techniques/Clear Persistence (T1070.009)|Clear Persistence]]
- [[../Techniques/File Deletion (T1070.004)|File Deletion]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Donut|Donut]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1070](https://attack.mitre.org/techniques/T1070)
