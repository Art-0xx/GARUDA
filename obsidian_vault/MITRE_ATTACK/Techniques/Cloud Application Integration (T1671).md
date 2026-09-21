---
mitre_data:
  id: T1671
  linker_tags:
  - mitre/attack/linker/persistence/cloud_application_integration
  name: Cloud Application Integration
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Cloud Application Integration (`T1671`)

Adversaries may achieve persistence by leveraging OAuth application integrations in a software-as-a-service environment. Adversaries may create a custom application, add a legitimate application into the environment, or even co-opt an existing integration to achieve malicious ends.[^fn2][^fn6]

OAuth is an open standard that allows users to authorize applications to access their information on their behalf. In a SaaS environment such as Microsoft 365 or Google Workspace, users may integrate applications to improve their workflow and achieve tasks.  

Leveraging application integrations may allow adversaries to persist in an environment – for example, by granting consent to an application from a high-privileged adversary-controlled account in order to maintain access to its data, even in the event of losing access to the account.[^fn1][^fn4][^fn7] In some cases, integrations may remain valid even after the original consenting user account is disabled.[^fn3] Application integrations may also allow adversaries to bypass multi-factor authentication requirements through the use of [Application Access Token](https://attack.mitre.org/techniques/T1550/001)s. Finally, they may enable persistent [Automated Exfiltration](https://attack.mitre.org/techniques/T1020) over time.[^fn8]

Creating or adding a new application may require the adversary to create a dedicated [Cloud Account](https://attack.mitre.org/techniques/T1136/003) for the application and assign it [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003) – for example, in Microsoft 365 environments, an application can only access resources via an associated service principal.[^fn5]  


# Platform(s)

- Office Suite
- SaaS

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1671](https://attack.mitre.org/techniques/T1671)

[^fn1]: [Lior Sonntag. (2024, February 8). Midnight Blizzard attack on Microsoft corporate environment: a detailed analysis, detections and recommendations. Retrieved March 20, 2025.](https://www.wiz.io/blog/midnight-blizzard-microsoft-breach-analysis-and-best-practices)
[^fn2]: [Luke Jennings. (2022, November 29). Maintaining persistent access in a SaaS-first world. Retrieved March 20, 2025.](https://pushsecurity.com/blog/maintaining-persistent-access-in-a-saas-first-world/)
[^fn3]: [Luke Jennings. (2023, October 24). Slack Attack: A phisher's guide to persistence and lateral movement. Retrieved March 20, 2025.](https://pushsecurity.com/blog/phishing-slack-persistence/)
[^fn4]: [Microsoft Threat Intelligence. (2022, September 22). Malicious OAuth applications abuse cloud email services to spread spam. Retrieved March 20, 2025.](https://www.microsoft.com/en-us/security/blog/2022/09/22/malicious-OAuth-applications-used-to-compromise-email-servers-and-spread-spam/)
[^fn5]: [Microsoft. (2023, December 15). Application and service principal objects in Microsoft Entra ID. Retrieved February 28, 2024.](https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals?tabs=browser)
[^fn6]: [Push Security. (n.d.). Evil twin integrations. Retrieved March 20, 2025.](https://github.com/pushsecurity/saas-attacks/blob/main/techniques/evil_twin_integrations/description.md)
[^fn7]: [Sharon Martin. (2024, November 5). Legitimate Apps as Traitorware for Persistent Microsoft 365 Compromise. Retrieved March 20, 2025.](https://www.huntress.com/blog/legitimate-apps-as-traitorware-for-persistent-microsoft-365-compromise)
[^fn8]: [syne0. (2023, July 10). Malicious Azure Application PERFECTDATA SOFTWARE and Microsoft 365 Business Email Compromise. Retrieved March 20, 2025.](https://cybercorner.tech/malicious-azure-application-perfectdata-software-and-office365-business-email-compromise/)