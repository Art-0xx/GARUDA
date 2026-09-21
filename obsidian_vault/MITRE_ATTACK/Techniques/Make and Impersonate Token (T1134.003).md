---
mitre_data:
  id: T1134.003
  linker_tags:
  - mitre/attack/linker/stealth/make_and_impersonate_token
  - mitre/attack/linker/privilege_escalation/make_and_impersonate_token
  name: Make and Impersonate Token
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Make and Impersonate Token (`T1134.003`)

Adversaries may make new tokens and impersonate users to escalate privileges and bypass access controls. For example, if an adversary has a username and password but the user is not logged onto the system the adversary can then create a logon session for the user using the `LogonUser` function.[^fn1] The function will return a copy of the new session's access token and the adversary can use `SetThreadToken` to assign the token to a thread.

This behavior is distinct from [Token Impersonation/Theft](https://attack.mitre.org/techniques/T1134/001) in that this refers to creating a new user token instead of stealing or duplicating an existing one.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1134.003](https://attack.mitre.org/techniques/T1134/003)

[^fn1]: [Microsoft. (2023, March 10). LogonUserW function (winbase.h). Retrieved January 8, 2024.](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-logonuserw)