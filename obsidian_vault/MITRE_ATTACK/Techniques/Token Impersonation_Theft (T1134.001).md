---
mitre_data:
  id: T1134.001
  linker_tags:
  - mitre/attack/linker/stealth/token_impersonation_theft
  - mitre/attack/linker/privilege_escalation/token_impersonation_theft
  name: Token Impersonation/Theft
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Token Impersonation/Theft (`T1134.001`)

Adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. For example, an adversary can duplicate an existing token using `DuplicateToken` or `DuplicateTokenEx`.[^fn1] The token can then be used with `ImpersonateLoggedOnUser` to allow the calling thread to impersonate a logged on user's security context, or with `SetThreadToken` to assign the impersonated token to a thread.

An adversary may perform [Token Impersonation/Theft](https://attack.mitre.org/techniques/T1134/001) when they have a specific, existing process they want to assign the duplicated token to. For example, this may be useful for when the target user has a non-network logon session on the system.

When an adversary would instead use a duplicated token to create a new process rather than attaching to an existing process, they can additionally [Create Process with Token](https://attack.mitre.org/techniques/T1134/002) using `CreateProcessWithTokenW` or `CreateProcessAsUserW`. [Token Impersonation/Theft](https://attack.mitre.org/techniques/T1134/001) is also distinct from [Make and Impersonate Token](https://attack.mitre.org/techniques/T1134/003) in that it refers to duplicating an existing token, rather than creating a new one.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1134.001](https://attack.mitre.org/techniques/T1134/001)

[^fn1]: [Microsoft. (2021, October 12). DuplicateToken function (securitybaseapi.h). Retrieved January 8, 2024.](https://learn.microsoft.com/en-us/windows/win32/api/securitybaseapi/nf-securitybaseapi-duplicatetoken)