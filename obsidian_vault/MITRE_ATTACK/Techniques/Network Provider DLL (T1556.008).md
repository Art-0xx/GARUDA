---
mitre_data:
  id: T1556.008
  linker_tags:
  - mitre/attack/linker/defense_impairment/network_provider_dll
  - mitre/attack/linker/persistence/network_provider_dll
  - mitre/attack/linker/credential_access/network_provider_dll
  name: Network Provider DLL
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Network Provider DLL (`T1556.008`)

Adversaries may register malicious network provider dynamic link libraries (DLLs) to capture cleartext user credentials during the authentication process. Network provider DLLs allow Windows to interface with specific network protocols and can also support add-on credential management functions.[^fn4] During the logon process, Winlogon (the interactive logon module) sends credentials to the local `mpnotify.exe` process via RPC. The `mpnotify.exe` process then shares the credentials in cleartext with registered credential managers when notifying that a logon event is happening.[^fn1][^fn2][^fn5] 

Adversaries can configure a malicious network provider DLL to receive credentials from `mpnotify.exe`.[^fn3] Once installed as a credential manager (via the Registry), a malicious DLL can receive and save credentials each time a user logs onto a Windows workstation or domain via the `NPLogonNotify()` function.[^fn5]

Adversaries may target planting malicious network provider DLLs on systems known to have increased logon activity and/or administrator logon activity, such as servers and domain controllers.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.008](https://attack.mitre.org/techniques/T1556/008)

[^fn1]: [ Dray Agha. (2022, August 16). Cleartext Shenanigans: Gifting User Passwords to Adversaries With NPPSPY. Retrieved March 30, 2023.](https://www.huntress.com/blog/cleartext-shenanigans-gifting-user-passwords-to-adversaries-with-nppspy)
[^fn2]: [Grzegorz Tworek. (2021, December 14). How winlogon.exe shares the cleartext password with custom DLLs. Retrieved March 30, 2023.](https://www.youtube.com/watch?v=ggY3srD9dYs)
[^fn3]: [Grzegorz Tworek. (2021, December 15). NPPSpy. Retrieved March 30, 2023.](https://github.com/gtworek/PSBits/tree/master/PasswordStealing/NPPSpy)
[^fn4]: [Microsoft. (2021, January 7). Network Provider API. Retrieved March 30, 2023.](https://learn.microsoft.com/en-us/windows/win32/secauthn/network-provider-api)
[^fn5]: [Microsoft. (2021, October 21). NPLogonNotify function (npapi.h). Retrieved March 30, 2023.](https://learn.microsoft.com/en-us/windows/win32/api/npapi/nf-npapi-nplogonnotify)