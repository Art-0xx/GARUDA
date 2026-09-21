---
mitre_data:
  id: T1528
  linker_tags:
  - mitre/attack/linker/credential_access/steal_application_access_token
  name: Steal Application Access Token
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Steal Application Access Token (`T1528`)

Adversaries can steal application access tokens as a means of acquiring credentials to access remote systems and resources.

Application access tokens are used to make authorized API requests on behalf of a user or service and are commonly used as a way to access resources in cloud and container-based applications and software-as-a-service (SaaS).[^fn4]  Adversaries who steal account API tokens in cloud and containerized environments may be able to access data and perform actions with the permissions of these accounts, which can lead to privilege escalation and further compromise of the environment.

For example, in Kubernetes environments, processes running inside a container may communicate with the Kubernetes API server using service account tokens. If a container is compromised, an adversary may be able to steal the container’s token and thereby gain access to Kubernetes API commands.[^fn7]  

Similarly, instances within continuous-development / continuous-integration (CI/CD) pipelines will often use API tokens to authenticate to other services for testing and deployment.[^fn5] If these pipelines are compromised, adversaries may be able to steal these tokens and leverage their privileges. 

In Azure, an adversary who compromises a resource with an attached Managed Identity, such as an Azure VM, can request short-lived tokens through the Azure Instance Metadata Service (IMDS). These tokens can then facilitate unauthorized actions or further access to other Azure services, bypassing typical credential-based authentication.[^fn8][^fn2]

Token theft can also occur through social engineering, in which case user action may be required to grant access. OAuth is one commonly implemented framework that issues tokens to users for access to systems. An application desiring access to cloud-based services or protected APIs can gain entry using OAuth 2.0 through a variety of authorization protocols. An example commonly-used sequence is Microsoft's Authorization Code Grant flow.[^fn12][^fn11] An OAuth access token enables a third-party application to interact with resources containing user data in the ways requested by the application without obtaining user credentials. 
 
Adversaries can leverage OAuth authorization by constructing a malicious application designed to be granted access to resources with the target user's OAuth token.[^fn1][^fn6] The adversary will need to complete registration of their application with the authorization server, for example Microsoft Identity Platform using Azure Portal, the Visual Studio IDE, the command-line interface, PowerShell, or REST API calls.[^fn10] Then, they can send a [Spearphishing Link](https://attack.mitre.org/techniques/T1566/002) to the target user to entice them to grant access to the application. Once the OAuth access token is granted, the application can gain potentially long-term access to features of the user account through [Application Access Token](https://attack.mitre.org/techniques/T1550/001).[^fn9]

Application access tokens may function within a limited lifetime, limiting how long an adversary can utilize the stolen token. However, in some cases, adversaries can also steal application refresh tokens[^fn3], allowing them to obtain new access tokens without prompting the user.  


# Platform(s)

- Containers
- IaaS
- Identity Provider
- Office Suite
- SaaS

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/TruffleHog|TruffleHog]]
- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1528](https://attack.mitre.org/techniques/T1528)

[^fn1]: [Amnesty International. (2019, August 16). Evolving Phishing Attacks Targeting Journalists and Human Rights Defenders from the Middle-East and North Africa. Retrieved October 8, 2019.](https://www.amnesty.org/en/latest/research/2019/08/evolving-phishing-attacks-targeting-journalists-and-human-rights-defenders-from-the-middle-east-and-north-africa/)
[^fn2]: [Andy Robbins. (2022, June 6). Managed Identity Attack Paths, Part 1: Automation Accounts. Retrieved March 18, 2025.](https://posts.specterops.io/managed-identity-attack-paths-part-1-automation-accounts-82667d17187a?gi=6a9daedade1c)
[^fn3]: [Auth0 Inc.. (n.d.). Understanding Refresh Tokens. Retrieved November 17, 2024.](https://auth0.com/learn/refresh-tokens)
[^fn4]: [Auth0. (n.d.). Why You Should Always Use Access Tokens to Secure APIs. Retrieved September 12, 2019.](https://auth0.com/blog/why-should-use-accesstokens-to-secure-an-api/)
[^fn5]: [Daniel Krivelevich and Omer Gil. (n.d.). Top 10 CI/CD Security Risks. Retrieved November 17, 2024.](https://web.archive.org/web/20220316130828/https://www.cidersecurity.io/top-10-cicd-security-risks/)
[^fn6]: [Hacquebord, F.. (2017, April 25). Pawn Storm Abuses Open Authentication in Advanced Social Engineering Attacks. Retrieved October 4, 2019.](https://blog.trendmicro.com/trendlabs-security-intelligence/pawn-storm-abuses-open-authentication-advanced-social-engineering-attacks)
[^fn7]: [Kubernetes. (2022, February 26). Configure Service Accounts for Pods. Retrieved April 1, 2022.](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)
[^fn8]: [Microsoft Entra. (2025, February 27). How to use managed identities for Azure resources on an Azure VM to acquire an access token. Retrieved March 18, 2025.](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/how-to-use-vm-token)
[^fn9]: [Microsoft. (2019, August 29). Microsoft identity platform access tokens. Retrieved September 12, 2019.](https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens)
[^fn10]: [Microsoft. (2019, May 8). Quickstart: Register an application with the Microsoft identity platform. Retrieved September 12, 2019.](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
[^fn11]: [Microsoft. (n.d.). Microsoft identity platform and OAuth 2.0 authorization code flow. Retrieved September 12, 2019.](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
[^fn12]: [Microsoft. (n.d.). Retrieved September 12, 2019.](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols)