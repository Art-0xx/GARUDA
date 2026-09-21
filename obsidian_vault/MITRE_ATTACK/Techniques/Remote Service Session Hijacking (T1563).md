---
mitre_data:
  id: T1563
  linker_tags:
  - mitre/attack/linker/lateral_movement/remote_service_session_hijacking
  name: Remote Service Session Hijacking
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Remote Service Session Hijacking (`T1563`)

Adversaries may take control of preexisting sessions with remote services to move laterally in an environment. Users may use valid credentials to log into a service specifically designed to accept remote connections, such as telnet, SSH, and RDP. When a user logs into a service, a session will be established that will allow them to maintain a continuous interaction with that service.

Adversaries may commandeer these sessions to carry out actions on remote systems. [Remote Service Session Hijacking](https://attack.mitre.org/techniques/T1563) differs from use of [Remote Services](https://attack.mitre.org/techniques/T1021) because it hijacks an existing session rather than creating a new session using [Valid Accounts](https://attack.mitre.org/techniques/T1078).[^fn1][^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/SSH Hijacking (T1563.001)|SSH Hijacking]]
- [[../Techniques/RDP Hijacking (T1563.002)|RDP Hijacking]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1563](https://attack.mitre.org/techniques/T1563)

[^fn1]: [Beaumont, K. (2017, March 19). RDP hijacking — how to hijack RDS and RemoteApp sessions transparently to move through an organisation. Retrieved December 11, 2017.](https://medium.com/@networksecurity/rdp-hijacking-how-to-hijack-rds-and-remoteapp-sessions-transparently-to-move-through-an-da2a1e73a5f6)
[^fn2]: [Hodgson, M. (2019, May 8). Post-mortem and remediations for Apr 11 security incident. Retrieved November 17, 2024.](https://matrix.org/blog/2019/05/08/post-mortem-and-remediations-for-apr-11-security-incident/)