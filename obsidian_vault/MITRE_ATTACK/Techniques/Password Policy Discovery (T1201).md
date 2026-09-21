---
mitre_data:
  id: T1201
  linker_tags:
  - mitre/attack/linker/discovery/password_policy_discovery
  name: Password Policy Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Password Policy Discovery (`T1201`)

Adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. Password policies are a way to enforce complex passwords that are difficult to guess or crack through [Brute Force](https://attack.mitre.org/techniques/T1110). This information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).

Password policies can be set and discovered on Windows, Linux, and macOS systems via various command shell utilities such as <code>net accounts (/domain)</code>, <code>Get-ADDefaultDomainPasswordPolicy</code>, <code>chage -l <username></code>, <code>cat /etc/pam.d/common-password</code>, and <code>pwpolicy getaccountpolicies</code> [^fn3] [^fn2]. Adversaries may also leverage a [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) on network devices to discover password policy information (e.g. <code>show aaa</code>, <code>show aaa common-criteria policy all</code>).[^fn4]

Password policies can be discovered in cloud environments using available APIs such as <code>GetAccountPasswordPolicy</code> in AWS [^fn1].


# Platform(s)

- Windows
- Linux
- macOS
- IaaS
- Network Devices
- Identity Provider
- SaaS
- Office Suite

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/CrackMapExec|CrackMapExec]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1201](https://attack.mitre.org/techniques/T1201)

[^fn1]: [Amazon Web Services. (n.d.). AWS API GetAccountPasswordPolicy. Retrieved June 8, 2021.](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html)
[^fn2]: [Holland, J. (2016, January 25). User password policies on non AD machines. Retrieved April 5, 2018.](https://www.jamf.com/jamf-nation/discussions/18574/user-password-policies-on-non-ad-machines)
[^fn3]: [Matutiae, M. (2014, August 6). How to display password policy information for a user (Ubuntu)?. Retrieved April 5, 2018.](https://superuser.com/questions/150675/how-to-display-password-policy-information-for-a-user-ubuntu)
[^fn4]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)