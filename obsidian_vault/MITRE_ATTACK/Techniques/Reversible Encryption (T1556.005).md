---
mitre_data:
  id: T1556.005
  linker_tags:
  - mitre/attack/linker/defense_impairment/reversible_encryption
  - mitre/attack/linker/persistence/reversible_encryption
  - mitre/attack/linker/credential_access/reversible_encryption
  name: Reversible Encryption
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Reversible Encryption (`T1556.005`)

An adversary may abuse Active Directory authentication encryption properties to gain access to credentials on Windows systems. The <code>AllowReversiblePasswordEncryption</code> property specifies whether reversible password encryption for an account is enabled or disabled. By default this property is disabled (instead storing user credentials as the output of one-way hashing functions) and should not be enabled unless legacy or other software require it.[^fn2]

If the property is enabled and/or a user changes their password after it is enabled, an adversary may be able to obtain the plaintext of passwords created/changed after the property was enabled. To decrypt the passwords, an adversary needs four components:

1. Encrypted password (<code>G$RADIUSCHAP</code>) from the Active Directory user-structure <code>userParameters</code>
2. 16 byte randomly-generated value (<code>G$RADIUSCHAPKEY</code>) also from <code>userParameters</code>
3. Global LSA secret (<code>G$MSRADIUSCHAPKEY</code>)
4. Static key hardcoded in the Remote Access Subauthentication DLL (<code>RASSFM.DLL</code>)

With this information, an adversary may be able to reproduce the encryption key and subsequently decrypt the encrypted password value.[^fn3][^fn4]

An adversary may set this property at various scopes through Local Group Policy Editor, user properties, Fine-Grained Password Policy (FGPP), or via the ActiveDirectory [PowerShell](https://attack.mitre.org/techniques/T1059/001) module. For example, an adversary may implement and apply a FGPP to users or groups if the Domain Functional Level is set to "Windows Server 2008" or higher.[^fn1] In PowerShell, an adversary may make associated changes to user settings using commands similar to <code>Set-ADUser -AllowReversiblePasswordEncryption $true</code>.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.005](https://attack.mitre.org/techniques/T1556/005)

[^fn1]: [Metcalf, S. (2015, November 22). Dump Clear-Text Passwords for All Admins in the Domain Using Mimikatz DCSync. Retrieved November 15, 2021.](https://adsecurity.org/?p=2053)
[^fn2]: [Microsoft. (2021, October 28). Store passwords using reversible encryption. Retrieved January 3, 2022.](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/store-passwords-using-reversible-encryption)
[^fn3]: [Teusink, N. (2009, August 25). Passwords stored using reversible encryption: how it works (part 1). Retrieved November 17, 2021.](http://blog.teusink.net/2009/08/passwords-stored-using-reversible.html)
[^fn4]: [Teusink, N. (2009, August 26). Passwords stored using reversible encryption: how it works (part 2). Retrieved November 17, 2021.](http://blog.teusink.net/2009/08/passwords-stored-using-reversible_26.html)