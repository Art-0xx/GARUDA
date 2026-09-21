---
mitre_data:
  id: T1056.003
  linker_tags:
  - mitre/attack/linker/collection/web_portal_capture
  - mitre/attack/linker/credential_access/web_portal_capture
  name: Web Portal Capture
  related_tactics:
  - collection
  - credential_access
tags:
- mitre/attack/technique
---



# Web Portal Capture (`T1056.003`)

Adversaries may install code on externally facing portals, such as a VPN login page, to capture and transmit credentials of users who attempt to log into the service. For example, a compromised login page may log provided user credentials before logging the user in to the service.

This variation on input capture may be conducted post-compromise using legitimate administrative access as a backup measure to maintain network access through [External Remote Services](https://attack.mitre.org/techniques/T1133) and [Valid Accounts](https://attack.mitre.org/techniques/T1078) or as part of the initial compromise by exploitation of the externally facing web service.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Input Capture (T1056)|Input Capture]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1056.003](https://attack.mitre.org/techniques/T1056/003)

[^fn1]: [Adair, S. (2015, October 7). Virtual Private Keylogging: Cisco Web VPNs Leveraged for Access and Persistence. Retrieved March 20, 2017.](https://www.volexity.com/blog/2015/10/07/virtual-private-keylogging-cisco-web-vpns-leveraged-for-access-and-persistence/)