---
mitre_data:
  id: T1552.006
  linker_tags:
  - mitre/attack/linker/credential_access/group_policy_preferences
  name: Group Policy Preferences
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Group Policy Preferences (`T1552.006`)

Adversaries may attempt to find unsecured credentials in Group Policy Preferences (GPP). GPP are tools that allow administrators to create domain policies with embedded credentials. These policies allow administrators to set local accounts.[^fn2]

These group policies are stored in SYSVOL on a domain controller. This means that any domain user can view the SYSVOL share and decrypt the password (using the AES key that has been made public).[^fn3]

The following tools and scripts can be used to gather and decrypt the password file from Group Policy Preference XML files:

* Metasploit’s post exploitation module: <code>post/windows/gather/credentials/gpp</code>
* Get-GPPPassword[^fn1]
* gpprefdecrypt.py

On the SYSVOL share, adversaries may use the following command to enumerate potential GPP XML files: <code>dir /s * .xml</code>



# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.006](https://attack.mitre.org/techniques/T1552/006)
- [Sean Metcalf. (2015, December 28). Finding Passwords in SYSVOL & Exploiting Group Policy Preferences. Retrieved February 17, 2020.](https://adsecurity.org/?p=2288)

[^fn1]: [Campbell, C. (2012, May 24). GPP Password Retrieval with PowerShell. Retrieved April 11, 2018.](https://obscuresecurity.blogspot.co.uk/2012/05/gpp-password-retrieval-with-powershell.html)
[^fn2]: [Microsoft. (2016, August 31). Group Policy Preferences. Retrieved March 9, 2020.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/dn581922(v%3Dws.11))
[^fn3]: [Microsoft. (n.d.). 2.2.1.1.4 Password Encryption. Retrieved April 11, 2018.](https://msdn.microsoft.com/library/cc422924.aspx)