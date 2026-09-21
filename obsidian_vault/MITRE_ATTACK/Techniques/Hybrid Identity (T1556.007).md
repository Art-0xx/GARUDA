---
mitre_data:
  id: T1556.007
  linker_tags:
  - mitre/attack/linker/defense_impairment/hybrid_identity
  - mitre/attack/linker/persistence/hybrid_identity
  - mitre/attack/linker/credential_access/hybrid_identity
  name: Hybrid Identity
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Hybrid Identity (`T1556.007`)

Adversaries may patch, modify, or otherwise backdoor cloud authentication processes that are tied to on-premises user identities in order to bypass typical authentication mechanisms, access credentials, and enable persistent access to accounts.  

Many organizations maintain hybrid user and device identities that are shared between on-premises and cloud-based environments. These can be maintained in a number of ways. For example, Microsoft Entra ID includes three options for synchronizing identities between Active Directory and Entra ID[^fn4]:

* Password Hash Synchronization (PHS), in which a privileged on-premises account synchronizes user password hashes between Active Directory and Entra ID, allowing authentication to Entra ID to take place entirely in the cloud 
* Pass Through Authentication (PTA), in which Entra ID authentication attempts are forwarded to an on-premises PTA agent, which validates the credentials against Active Directory 
* Active Directory Federation Services (AD FS), in which a trust relationship is established between Active Directory and Entra ID 

AD FS can also be used with other SaaS and cloud platforms such as AWS and GCP, which will hand off the authentication process to AD FS and receive a token containing the hybrid users’ identity and privileges. 

By modifying authentication processes tied to hybrid identities, an adversary may be able to establish persistent privileged access to cloud resources. For example, adversaries who compromise an on-premises server running a PTA agent may inject a malicious DLL into the `AzureADConnectAuthenticationAgentService` process that authorizes all attempts to authenticate to Entra ID, as well as records user credentials.[^fn1][^fn2] In environments using AD FS, an adversary may edit the `Microsoft.IdentityServer.Servicehost` configuration file to load a malicious DLL that generates authentication tokens for any user with any set of claims, thereby bypassing multi-factor authentication and defined AD FS policies.[^fn3]

In some cases, adversaries may be able to modify the hybrid identity authentication process from the cloud. For example, adversaries who compromise a Global Administrator account in an Entra ID tenant may be able to register a new PTA agent via the web console, similarly allowing them to harvest credentials and log into the Entra ID environment as any user.[^fn5]


# Platform(s)

- IaaS
- Identity Provider
- Office Suite
- SaaS
- Windows

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.007](https://attack.mitre.org/techniques/T1556/007)

[^fn1]: [Adam Chester. (2019, February 18). Azure AD Connect for Red Teamers. Retrieved September 28, 2022.](https://blog.xpnsec.com/azuread-connect-for-redteam/)
[^fn2]: [Dr. Nestori Syynimaa. (2020, July 13). Unnoticed sidekick: Getting access to cloud as an on-prem admin. Retrieved September 28, 2022.](https://o365blog.com/post/on-prem_admin/)
[^fn3]: [Microsoft Threat Intelligence Center, Microsoft Detection and Response Team, Microsoft 365 Defender Research Team . (2022, August 24). MagicWeb: NOBELIUM’s post-compromise trick to authenticate as anyone. Retrieved September 28, 2022.](https://www.microsoft.com/security/blog/2022/08/24/magicweb-nobeliums-post-compromise-trick-to-authenticate-as-anyone/)
[^fn4]: [Microsoft. (2022, August 26). Choose the right authentication method for your Azure Active Directory hybrid identity solution. Retrieved September 28, 2022.](https://learn.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn)
[^fn5]: [Mike Burns. (2020, September 30). Detecting Microsoft 365 and Azure Active Directory Backdoors. Retrieved September 28, 2022.](https://www.mandiant.com/resources/detecting-microsoft-365-azure-active-directory-backdoors)