---
mitre_data:
  id: T1134.002
  linker_tags:
  - mitre/attack/linker/stealth/create_process_with_token
  - mitre/attack/linker/privilege_escalation/create_process_with_token
  name: Create Process with Token
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Create Process with Token (`T1134.002`)

Adversaries may create a new process with an existing token to escalate privileges and bypass access controls. Processes can be created with the token and resulting security context of another user using features such as <code>CreateProcessWithTokenW</code> and <code>runas</code>.[^fn1]

Creating processes with a token not associated with the current user may require the credentials of the target user, specific privileges to impersonate that user, or access to the token to be used. For example, the token could be duplicated via [Token Impersonation/Theft](https://attack.mitre.org/techniques/T1134/001) or created via [Make and Impersonate Token](https://attack.mitre.org/techniques/T1134/003) before being used to create a process.

While this technique is distinct from [Token Impersonation/Theft](https://attack.mitre.org/techniques/T1134/001), the techniques can be used in conjunction where a token is duplicated and then used to create a new process.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Access Token Manipulation (T1134)|Access Token Manipulation]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1134.002](https://attack.mitre.org/techniques/T1134/002)

[^fn1]: [Microsoft. (2016, August 31). Runas. Retrieved October 1, 2021.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc771525(v=ws.11))