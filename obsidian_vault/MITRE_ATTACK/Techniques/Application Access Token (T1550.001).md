---
mitre_data:
  id: T1550.001
  linker_tags:
  - mitre/attack/linker/lateral_movement/application_access_token
  name: Application Access Token
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Application Access Token (`T1550.001`)

Adversaries may use stolen application access tokens to bypass the typical authentication process and access restricted accounts, information, or services on remote systems. These tokens are typically stolen from users or services and used in lieu of login credentials.

Application access tokens are used to make authorized API requests on behalf of a user or service and are commonly used to access resources in cloud, container-based applications, and software-as-a-service (SaaS).[^fn2] 

OAuth is one commonly implemented framework that issues tokens to users for access to systems. These frameworks are used collaboratively to verify the user and determine what actions the user is allowed to perform. Once identity is established, the token allows actions to be authorized, without passing the actual credentials of the user. Therefore, compromise of the token can grant the adversary access to resources of other sites through a malicious application.[^fn6]

For example, with a cloud-based email service, once an OAuth access token is granted to a malicious application, it can potentially gain long-term access to features of the user account if a "refresh" token enabling background access is awarded.[^fn4] With an OAuth access token an adversary can use the user-granted REST API to perform functions such as email searching and contact enumeration.[^fn8]

Compromised access tokens may be used as an initial step in compromising other services. For example, if a token grants access to a victim’s primary email, the adversary may be able to extend access to all other services which the target subscribes by triggering forgotten password routines. In AWS and GCP environments, adversaries can trigger a request for a short-lived access token with the privileges of another user account.[^fn5][^fn3] The adversary can then use this token to request data or perform actions the original account could not. If permissions for this feature are misconfigured – for example, by allowing all users to request a token for a particular account - an adversary may be able to gain initial access to a Cloud Account or escalate their privileges.[^fn7]

Direct API access through a token negates the effectiveness of a second authentication factor and may be immune to intuitive countermeasures like changing passwords.  For example, in AWS environments, an adversary who compromises a user’s AWS API credentials may be able to use the `sts:GetFederationToken` API call to create a federated user session, which will have the same permissions as the original user but may persist even if the original user credentials are deactivated.[^fn1] Additionally, access abuse over an API channel can be difficult to detect even from the service provider end, as the access can still align well with a legitimate workflow.


# Platform(s)

- Containers
- IaaS
- Identity Provider
- Office Suite
- SaaS

# Parent Technique(s)

- [[../Techniques/Use Alternate Authentication Material (T1550)|Use Alternate Authentication Material]]

# Tool(s)

- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1550.001](https://attack.mitre.org/techniques/T1550/001)

[^fn1]: [ Vaishnav Murthy and Joel Eng. (2023, January 30). How Adversaries Can Persist with AWS User Federation. Retrieved March 10, 2023.](https://www.crowdstrike.com/blog/how-adversaries-persist-with-aws-user-federation/)
[^fn2]: [Auth0. (n.d.). Why You Should Always Use Access Tokens to Secure APIs. Retrieved September 12, 2019.](https://auth0.com/blog/why-should-use-accesstokens-to-secure-an-api/)
[^fn3]: [AWS. (n.d.). Requesting temporary security credentials. Retrieved April 1, 2022.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html)
[^fn4]: [Cai, S., Flores, J., de Guzman, C., et. al.. (2019, August 27). Microsoft identity platform access tokens. Retrieved October 4, 2019.](https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens)
[^fn5]: [Google Cloud. (2022, March 31). Creating short-lived service account credentials. Retrieved April 1, 2022.](https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials)
[^fn6]: [okta. (n.d.). What Happens If Your JWT Is Stolen?. Retrieved September 12, 2019.](https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen)
[^fn7]: [Spencer Gietzen. (2018, August 8). Assume the Worst: Enumerating AWS Roles through ‘AssumeRole’. Retrieved April 1, 2022.](https://rhinosecuritylabs.com/aws/assume-worst-aws-assume-role-enumeration)
[^fn8]: [Stalmans, E.. (2017, August 2). Phishing with OAuth and o365/Azure. Retrieved October 4, 2019.](https://staaldraad.github.io/2017/08/02/o356-phishing-with-oauth/)