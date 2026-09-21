---
tags:
  - mitre/attack/tool
---

# AADInternals (`S0677`)

[AADInternals](https://attack.mitre.org/software/S0677) is a PowerShell-based framework for administering, enumerating, and exploiting Azure Active Directory. The tool is publicly available on GitHub.[^fn3][^fn2]



# Platform(s)

- Windows
- Office Suite
- Identity Provider

# Techniques Used

## Cloud Service Discovery

[AADInternals](https://attack.mitre.org/software/S0677) can enumerate information about a variety of cloud services, such as Office 365 and Sharepoint instances or OpenID Configurations.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Cloud Service Discovery (T1526)|Cloud Service Discovery]]

## Hybrid Identity

[AADInternals](https://attack.mitre.org/software/S0677) can inject a malicious DLL (`PTASpy`) into the `AzureADConnectAuthenticationAgentService` to backdoor Azure AD Pass-Through Authentication.[\[AADInternals Azure AD On-Prem to Cloud\]](https://o365blog.com/post/on-prem_admin/)

- *Technique:* [[../Techniques/Hybrid Identity (T1556.007)|Hybrid Identity]]

## Device Registration

[AADInternals](https://attack.mitre.org/software/S0677) can register a device to Azure AD.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Device Registration (T1098.005)|Device Registration]]

## Spearphishing Link

[AADInternals](https://attack.mitre.org/software/S0677) can send phishing emails containing malicious links designed to collect users’ credentials.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Spearphishing Link (T1598.003)|Spearphishing Link]]

## Credentials In Files

[AADInternals](https://attack.mitre.org/software/S0677) can gather unsecured credentials for Azure AD services, such as Azure AD Connect, from a local machine.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Trust Modification

[AADInternals](https://attack.mitre.org/software/S0677) can create a backdoor by converting a domain to a federated domain which will be able to authenticate any user across the tenant. [AADInternals](https://attack.mitre.org/software/S0677) can also modify DesktopSSO information.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)[\[Azure AD Federation Vulnerability\]](https://o365blog.com/post/federation-vulnerability/)

- *Technique:* [[../Techniques/Trust Modification (T1484.002)|Trust Modification]]

## Spearphishing Link

[AADInternals](https://attack.mitre.org/software/S0677) can send "consent phishing" emails containing malicious links designed to steal users’ access tokens.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Spearphishing Link (T1566.002)|Spearphishing Link]]

## Cloud Account

[AADInternals](https://attack.mitre.org/software/S0677) can create new Azure AD users.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Cloud Account (T1136.003)|Cloud Account]]

## SAML Tokens

[AADInternals](https://attack.mitre.org/software/S0677) can be used to create SAML tokens using the AD Federated Services token signing certificate.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/SAML Tokens (T1606.002)|SAML Tokens]]

## Domain Properties

[AADInternals](https://attack.mitre.org/software/S0677) can gather information about a tenant’s domains using public Microsoft APIs.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)[\[Azure AD Recon\]](https://o365blog.com/post/just-looking)

- *Technique:* [[../Techniques/Domain Properties (T1590.001)|Domain Properties]]

## Email Addresses

[AADInternals](https://attack.mitre.org/software/S0677) can check for the existence of user email addresses using public Microsoft APIs.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)[\[Azure AD Recon\]](https://o365blog.com/post/just-looking)

- *Technique:* [[../Techniques/Email Addresses (T1589.002)|Email Addresses]]

## Silver Ticket

[AADInternals](https://attack.mitre.org/software/S0677) can be used to forge Kerberos tickets using the password hash of the AZUREADSSOACC account.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Silver Ticket (T1558.002)|Silver Ticket]]

## Private Keys

[AADInternals](https://attack.mitre.org/software/S0677) can gather encryption keys from Azure AD services such as ADSync and Active Directory Federated Services servers.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Private Keys (T1552.004)|Private Keys]]

## Steal Application Access Token

[AADInternals](https://attack.mitre.org/software/S0677) can steal users’ access tokens via phishing emails containing malicious links.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Steal Application Access Token (T1528)|Steal Application Access Token]]

## Cloud Account

[AADInternals](https://attack.mitre.org/software/S0677) can enumerate Azure AD users.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Cloud Account (T1087.004)|Cloud Account]]

## LSA Secrets

[AADInternals](https://attack.mitre.org/software/S0677) can dump secrets from the Local Security Authority.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]

## Multi-Factor Authentication

The [AADInternals](https://attack.mitre.org/software/S0677) `Set-AADIntUserMFA` command can be used to disable MFA for a specified user.

- *Technique:* [[../Techniques/Multi-Factor Authentication (T1556.006)|Multi-Factor Authentication]]

## Cloud Administration Command

[AADInternals](https://attack.mitre.org/software/S0677) can execute commands on Azure virtual machines using the VM agent.[\[AADInternals Root Access to Azure VMs\]](https://aadinternals.com/post/azurevms/)

- *Technique:* [[../Techniques/Cloud Administration Command (T1651)|Cloud Administration Command]]

## Data from Cloud Storage

AADInternals can collect files from a user’s OneDrive.[\[AADInternals\]](https://o365blog.com/aadinternals/)

- *Technique:* [[../Techniques/Data from Cloud Storage (T1530)|Data from Cloud Storage]]

## PowerShell

[AADInternals](https://attack.mitre.org/software/S0677) is written and executed via PowerShell.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Modify Registry

[AADInternals](https://attack.mitre.org/software/S0677) can modify registry keys as part of setting a new pass-through authentication agent.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Modify Registry (T1112)|Modify Registry]]

## Exfiltration Over Alternative Protocol

[AADInternals](https://attack.mitre.org/software/S0677) can directly download cloud user data such as OneDrive files.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Exfiltration Over Alternative Protocol (T1048)|Exfiltration Over Alternative Protocol]]

## Cloud Groups

[AADInternals](https://attack.mitre.org/software/S0677) can enumerate Azure AD groups.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Cloud Groups (T1069.003)|Cloud Groups]]

## Steal or Forge Authentication Certificates

[AADInternals](https://attack.mitre.org/software/S0677) can create and export various authentication certificates, including those associated with Azure AD joined/registered devices.[\[AADInternals Documentation\]](https://o365blog.com/aadinternals)

- *Technique:* [[../Techniques/Steal or Forge Authentication Certificates (T1649)|Steal or Forge Authentication Certificates]]


# External References(s)

- [S0677](https://attack.mitre.org/software/S0677)
- [Dr. Nestori Syynimaa. (2018, October 25). AADInternals. Retrieved February 1, 2022.](https://o365blog.com/aadinternals/)

[^fn2]: [Dr. Nestori Syynimaa. (2018, October 25). AADInternals. Retrieved February 18, 2022.](https://o365blog.com/aadinternals)
[^fn3]: [Dr. Nestori Syynimaa. (2021, December 13). AADInternals. Retrieved February 1, 2022.](https://github.com/Gerenios/AADInternals)