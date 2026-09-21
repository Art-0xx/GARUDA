---
mitre_data:
  id: T1606
  linker_tags:
  - mitre/attack/linker/credential_access/forge_web_credentials
  name: Forge Web Credentials
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Forge Web Credentials (`T1606`)

Adversaries may forge credential materials that can be used to gain access to web applications or Internet services. Web applications and services (hosted in cloud SaaS environments or on-premise servers) often use session cookies, tokens, or other materials to authenticate and authorize user access.

Adversaries may generate these credential materials in order to gain access to web resources. This differs from [Steal Web Session Cookie](https://attack.mitre.org/techniques/T1539), [Steal Application Access Token](https://attack.mitre.org/techniques/T1528), and other similar behaviors in that the credentials are new and forged by the adversary, rather than stolen or intercepted from legitimate users.

The generation of web credentials often requires secret values, such as passwords, [Private Keys](https://attack.mitre.org/techniques/T1552/004), or other cryptographic seed values.[^fn3] Adversaries may also forge tokens by taking advantage of features such as the `AssumeRole` and `GetFederationToken` APIs in AWS, which allow users to request temporary security credentials (i.e., [Temporary Elevated Cloud Access](https://attack.mitre.org/techniques/T1548/005)), or the `zmprov gdpak` command in Zimbra, which generates a pre-authentication key that can be used to generate tokens for any user in the domain.[^fn1][^fn6]

Once forged, adversaries may use these web credentials to access resources (ex: [Use Alternate Authentication Material](https://attack.mitre.org/techniques/T1550)), which may bypass multi-factor and other authentication protection mechanisms.[^fn5][^fn2][^fn4]  


# Platform(s)

- SaaS
- Windows
- macOS
- Linux
- IaaS
- Office Suite
- Identity Provider

# Sub-Technique(s)

- [[../Techniques/SAML Tokens (T1606.002)|SAML Tokens]]
- [[../Techniques/Web Cookies (T1606.001)|Web Cookies]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1606](https://attack.mitre.org/techniques/T1606)

[^fn1]: [AWS. (n.d.). Requesting temporary security credentials. Retrieved April 1, 2022.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html)
[^fn2]: [Chen, Y., Hu, W., Xu, Z., et. al. (2019, January 31). Mac Malware Steals Cryptocurrency Exchanges’ Cookies. Retrieved October 14, 2019.](https://unit42.paloaltonetworks.com/mac-malware-steals-cryptocurrency-exchanges-cookies/)
[^fn3]: [Damian Hickey. (2017, January 28). AWS-ADFS-Credential-Generator. Retrieved September 27, 2024.](https://github.com/pvanbuijtene/aws-adfs-credential-generator)
[^fn4]: [MSRC. (2020, December 13). Customer Guidance on Recent Nation-State Cyber Attacks. Retrieved December 17, 2020.](https://msrc-blog.microsoft.com/2020/12/13/customer-guidance-on-recent-nation-state-cyber-attacks/)
[^fn5]: [Rehberger, J. (2018, December). Pivot to the Cloud using Pass the Cookie. Retrieved April 5, 2019.](https://wunderwuzzi23.github.io/blog/passthecookie.html)
[^fn6]: [Zimbra. (2023, March 16). Preauth. Retrieved May 31, 2023.](https://wiki.zimbra.com/wiki/Preauth)