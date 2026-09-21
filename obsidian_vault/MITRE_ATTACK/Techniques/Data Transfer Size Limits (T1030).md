---
mitre_data:
  id: T1030
  linker_tags:
  - mitre/attack/linker/exfiltration/data_transfer_size_limits
  name: Data Transfer Size Limits
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Data Transfer Size Limits (`T1030`)

An adversary may exfiltrate data in fixed size chunks instead of whole files or limit packet sizes below certain thresholds. This approach may be used to avoid triggering network data transfer threshold alerts.


# Platform(s)

- Linux
- macOS
- Windows
- ESXi

# Tool(s)

- [[../Tools/Rclone|Rclone]]
- [[../Tools/Mythic|Mythic]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1030](https://attack.mitre.org/techniques/T1030)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
