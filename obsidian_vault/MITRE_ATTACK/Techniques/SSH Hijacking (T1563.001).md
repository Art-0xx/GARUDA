---
mitre_data:
  id: T1563.001
  linker_tags:
  - mitre/attack/linker/lateral_movement/ssh_hijacking
  name: SSH Hijacking
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# SSH Hijacking (`T1563.001`)

Adversaries may hijack a legitimate user's SSH session to move laterally within an environment. Secure Shell (SSH) is a standard means of remote access on Linux and macOS systems. It allows a user to connect to another system via an encrypted tunnel, commonly authenticating through a password, certificate or the use of an asymmetric encryption key pair.

In order to move laterally from a compromised host, adversaries may take advantage of trust relationships established with other systems via public key authentication in active SSH sessions by hijacking an existing connection to another system. This may occur through compromising the SSH agent itself or by having access to the agent's socket. If an adversary is able to obtain root access, then hijacking SSH sessions is likely trivial.[^fn3][^fn1][^fn2][^fn4]

[SSH Hijacking](https://attack.mitre.org/techniques/T1563/001) differs from use of [SSH](https://attack.mitre.org/techniques/T1021/004) because it hijacks an existing SSH session rather than creating a new session using [Valid Accounts](https://attack.mitre.org/techniques/T1078).


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Remote Service Session Hijacking (T1563)|Remote Service Session Hijacking]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1563.001](https://attack.mitre.org/techniques/T1563/001)

[^fn1]: [Adam Boileau. (2005, August 5). Trust Transience:  Post Intrusion SSH Hijacking. Retrieved December 19, 2017.](https://www.blackhat.com/presentations/bh-usa-05/bh-us-05-boileau.pdf)
[^fn2]: [Beuchler, B. (2012, September 28). SSH Agent Hijacking. Retrieved November 17, 2024.](https://web.archive.org/web/20210311184303/https://www.clockwork.com/news/2012/09/28/602/ssh_agent_hijacking/)
[^fn3]: [Duarte, H., Morrison, B. (2012). (Mis)trusting and (ab)using ssh. Retrieved January 8, 2018.](https://www.slideshare.net/morisson/mistrusting-and-abusing-ssh-13526219)
[^fn4]: [Hodgson, M. (2019, May 8). Post-mortem and remediations for Apr 11 security incident. Retrieved November 17, 2024.](https://matrix.org/blog/2019/05/08/post-mortem-and-remediations-for-apr-11-security-incident/)