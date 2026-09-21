---
mitre_data:
  id: T1556.009
  linker_tags:
  - mitre/attack/linker/defense_impairment/conditional_access_policies
  - mitre/attack/linker/persistence/conditional_access_policies
  - mitre/attack/linker/credential_access/conditional_access_policies
  name: Conditional Access Policies
  related_tactics:
  - defense_impairment
  - persistence
  - credential_access
tags:
- mitre/attack/technique
---



# Conditional Access Policies (`T1556.009`)

Adversaries may disable or modify conditional access policies to enable persistent access to compromised accounts. Conditional access policies are additional verifications used by identity providers and identity and access management systems to determine whether a user should be granted access to a resource.

For example, in Entra ID, Okta, and JumpCloud, users can be denied access to applications based on their IP address, device enrollment status, and use of multi-factor authentication.[^fn4][^fn3][^fn5] In some cases, identity providers may also support the use of risk-based metrics to deny sign-ins based on a variety of indicators. In AWS and GCP, IAM policies can contain `condition` attributes that verify arbitrary constraints such as the source IP, the date the request was made, and the nature of the resources or regions being requested.[^fn1][^fn2] These measures help to prevent compromised credentials from resulting in unauthorized access to data or resources, as well as limit user permissions to only those required. 

By modifying conditional access policies, such as adding additional trusted IP ranges, removing [Multi-Factor Authentication](https://attack.mitre.org/techniques/T1556/006) requirements, or allowing additional [Unused/Unsupported Cloud Regions](https://attack.mitre.org/techniques/T1535), adversaries may be able to ensure persistent access to accounts and circumvent defensive measures.


# Platform(s)

- IaaS
- Identity Provider

# Parent Technique(s)

- [[../Techniques/Modify Authentication Process (T1556)|Modify Authentication Process]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1556.009](https://attack.mitre.org/techniques/T1556/009)

[^fn1]: [AWS. (n.d.). IAM JSON policy elements: Condition. Retrieved January 2, 2024.](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html)
[^fn2]: [Google Cloud. (n.d.). Overview of IAM Conditions. Retrieved January 2, 2024.](https://cloud.google.com/iam/docs/conditions-overview)
[^fn3]: [JumpCloud. (n.d.). Get Started: Conditional Access Policies. Retrieved January 2, 2024.](https://jumpcloud.com/support/get-started-conditional-access-policies)
[^fn4]: [Microsoft. (2023, November 15). What is Conditional Access?. Retrieved January 2, 2024.](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview)
[^fn5]: [Okta. (2023, November 30). Conditional Access Based on Device Security Posture. Retrieved January 2, 2024.](https://support.okta.com/help/s/article/Conditional-access-based-on-device-security-posture?language=en_US)