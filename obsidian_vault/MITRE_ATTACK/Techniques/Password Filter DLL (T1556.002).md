---
mitre_data:
  id: T1556.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/password_filter_dll
  - mitre/attack/linker/persistence/password_filter_dll
  - mitre/attack/linker/credential_access/password_filter_dll
  name: Password Filter DLL
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Password Filter DLL (`T1556.002`)

Adversaries may register malicious password filter dynamic link libraries (DLLs) into the authentication process to acquire user credentials as they are validated. 

Windows password filters are password policy enforcement mechanisms for both domain and local accounts. Filters are implemented as DLLs containing a method to validate potential passwords against password policies. Filter DLLs can be positioned on local computers for local accounts and/or domain controllers for domain accounts. Before registering new passwords in the Security Accounts Manager (SAM), the Local Security Authority (LSA) requests validation from each registered filter. Any potential changes cannot take effect until every registered filter acknowledges validation. 

Adversaries can register malicious password filters to harvest credentials from local computers and/or entire domains. To perform proper validation, filters must receive plain-text credentials from the LSA. A malicious password filter would receive these plain-text credentials every time a password request is made.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.002](https://attack.mitre.org/techniques/T1556/002)

[^fn1]: [Fuller, R. (2013, September 11). Stealing passwords every time they change. Retrieved November 21, 2017.](http://carnal0wnage.attackresearch.com/2013/09/stealing-passwords-every-time-they.html)