---
mitre_data:
  id: T1134
  linker_tags:
  - mitre/attack/linker/stealth/access_token_manipulation
  - mitre/attack/linker/privilege_escalation/access_token_manipulation
  name: Access Token Manipulation
  related_tactics:
  - stealth
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Access Token Manipulation (`T1134`)

Adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. Windows uses access tokens to determine the ownership of a running process. A user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. When this occurs, the process also takes on the security context associated with the new token.

An adversary can use built-in Windows API functions to copy access tokens from existing processes; this is known as token stealing. These token can then be applied to an existing process (i.e. [Token Impersonation/Theft](https://attack.mitre.org/techniques/T1134/001)) or used to spawn a new process (i.e. [Create Process with Token](https://attack.mitre.org/techniques/T1134/002)). An adversary must already be in a privileged user context (i.e. administrator) to steal a token. However, adversaries commonly use token stealing to elevate their security context from the administrator level to the SYSTEM level. An adversary can then use a token to authenticate to a remote system as the account for that token if the account has appropriate permissions on the remote system.[^fn1]

Any standard user can use the <code>runas</code> command, and the Windows API functions, to create impersonation tokens; it does not require access to an administrator account. There are also other mechanisms, such as Active Directory fields, that can be used to modify access tokens.


# Platform(s)

- Windows

# Sub-Technique(s)

- [[../Techniques/Create Process with Token (T1134.002)|Create Process with Token]]
- [[../Techniques/Token Impersonation_Theft (T1134.001)|Token Impersonation/Theft]]
- [[../Techniques/Make and Impersonate Token (T1134.003)|Make and Impersonate Token]]
- [[../Techniques/Parent PID Spoofing (T1134.004)|Parent PID Spoofing]]
- [[../Techniques/SID-History Injection (T1134.005)|SID-History Injection]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1134](https://attack.mitre.org/techniques/T1134)

[^fn1]: [netbiosX. (2017, April 3). Token Manipulation. Retrieved April 21, 2017.](https://pentestlab.blog/2017/04/03/token-manipulation/)