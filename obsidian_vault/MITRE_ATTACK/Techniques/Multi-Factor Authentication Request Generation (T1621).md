---
mitre_data:
  id: T1621
  linker_tags:
  - mitre/attack/linker/credential_access/multi-factor_authentication_request_generation
  name: Multi-Factor Authentication Request Generation
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Multi-Factor Authentication Request Generation (`T1621`)

Adversaries may attempt to bypass multi-factor authentication (MFA) mechanisms and gain access to accounts by generating MFA requests sent to users.

Adversaries in possession of credentials to [Valid Accounts](https://attack.mitre.org/techniques/T1078) may be unable to complete the login process if they lack access to the 2FA or MFA mechanisms required as an additional credential and security control. To circumvent this, adversaries may abuse the automatic generation of push notifications to MFA services such as Duo Push, Microsoft Authenticator, Okta, or similar services to have the user grant access to their account. If adversaries lack credentials to victim accounts, they may also abuse automatic push notification generation when this option is configured for self-service password reset (SSPR).[^fn4]

In some cases, adversaries may continuously repeat login attempts in order to bombard users with MFA push notifications, SMS messages, and phone calls, potentially resulting in the user finally accepting the authentication request in response to “MFA fatigue.”[^fn1][^fn2][^fn3]


# Platform(s)

- Windows
- Linux
- macOS
- IaaS
- SaaS
- Office Suite
- Identity Provider

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1621](https://attack.mitre.org/techniques/T1621)

[^fn1]: [Catalin Cimpanu. (2021, December 9). Russian hackers bypass 2FA by annoying victims with repeated push notifications. Retrieved March 31, 2022.](https://therecord.media/russian-hackers-bypass-2fa-by-annoying-victims-with-repeated-push-notifications/)
[^fn2]: [Jessica Haworth. (2022, February 16). MFA fatigue attacks: Users tricked into allowing device access due to overload of push notifications. Retrieved March 31, 2022.](https://portswigger.net/daily-swig/mfa-fatigue-attacks-users-tricked-into-allowing-device-access-due-to-overload-of-push-notifications)
[^fn3]: [Luke Jenkins, Sarah Hawley, Parnian Najafi, Doug Bienstock. (2021, December 6). Suspected Russian Activity Targeting Government and Business Entities Around the Globe. Retrieved April 15, 2022.](https://www.mandiant.com/resources/russian-targeting-gov-business)
[^fn4]: [Noah Corradin and Shuyang Wang. (2023, August 1). Behind The Breach: Self-Service Password Reset (SSPR) Abuse in Azure AD. Retrieved March 28, 2024.](https://www.obsidiansecurity.com/blog/behind-the-breach-self-service-password-reset-azure-ad/)