---
mitre_data:
  id: T1555.004
  linker_tags:
  - mitre/attack/linker/credential_access/windows_credential_manager
  name: Windows Credential Manager
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Windows Credential Manager (`T1555.004`)

Adversaries may acquire credentials from the Windows Credential Manager. The Credential Manager stores credentials for signing into websites, applications, and/or devices that request authentication through NTLM or Kerberos in Credential Lockers (previously known as Windows Vaults).[^fn4][^fn3]

The Windows Credential Manager separates website credentials from application or network credentials in two lockers. As part of [Credentials from Web Browsers](https://attack.mitre.org/techniques/T1555/003), Internet Explorer and Microsoft Edge website credentials are managed by the Credential Manager and are stored in the Web Credentials locker. Application and network credentials are stored in the Windows Credentials locker.

Credential Lockers store credentials in encrypted `.vcrd` files, located under `%Systemdrive%\Users\\[Username]\AppData\Local\Microsoft\\[Vault/Credentials]\`. The encryption key can be found in a file named <code>Policy.vpol</code>, typically located in the same folder as the credentials.[^fn6][^fn1]

Adversaries may list credentials managed by the Windows Credential Manager through several mechanisms. <code>vaultcmd.exe</code> is a native Windows executable that can be used to enumerate credentials stored in the Credential Locker through a command-line interface. Adversaries may also gather credentials by directly reading files located inside of the Credential Lockers. Windows APIs, such as <code>CredEnumerateA</code>, may also be absued to list credentials managed by the Credential Manager.[^fn5][^fn2]

Adversaries may also obtain credentials from credential backups. Credential backups and restorations may be performed by running <code>rundll32.exe keymgr.dll KRShowKeyMgr</code> then selecting the “Back up...” button on the “Stored User Names and Passwords” GUI.

Password recovery tools may also obtain plain text passwords from the Credential Manager.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/LaZagne|LaZagne]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1555.004](https://attack.mitre.org/techniques/T1555/004)

[^fn1]: [Arntz, P. (2016, March 30). The Windows Vault . Retrieved November 23, 2020.](https://blog.malwarebytes.com/101/2016/01/the-windows-vaults/)
[^fn2]: [Delpy, B. (2017, December 12). howto ~ credential manager saved credentials. Retrieved November 23, 2020.](https://github.com/gentilkiwi/mimikatz/wiki/howto-~-credential-manager-saved-credentials)
[^fn3]: [Microsoft. (2013, October 23). Credential Locker Overview. Retrieved November 24, 2020.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-8.1-and-8/jj554668(v=ws.11)?redirectedfrom=MSDN)
[^fn4]: [Microsoft. (2016, August 31). Cached and Stored Credentials Technical Overview. Retrieved November 24, 2020.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh994565(v=ws.11)#credential-manager-store)
[^fn5]: [Microsoft. (2018, December 5). CredEnumarateA function (wincred.h). Retrieved November 24, 2020.](https://docs.microsoft.com/en-us/windows/win32/api/wincred/nf-wincred-credenumeratea)
[^fn6]: [Passcape. (n.d.). Windows Password Recovery - Vault Explorer and Decoder. Retrieved November 24, 2020.](https://www.passcape.com/windows_password_recovery_vault_explorer)