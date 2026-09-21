---
mitre_data:
  id: T1098.005
  linker_tags:
  - mitre/attack/linker/persistence/device_registration
  - mitre/attack/linker/privilege_escalation/device_registration
  name: Device Registration
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Device Registration (`T1098.005`)

Adversaries may register a device to an adversary-controlled account. Devices may be registered in a multifactor authentication (MFA) system, which handles authentication to the network, or in a device management system, which handles device access and compliance.

MFA systems, such as Duo or Okta, allow users to associate devices with their accounts in order to complete MFA requirements. An adversary that compromises a user’s credentials may enroll a new device in order to bypass initial MFA requirements and gain persistent access to a network.[^fn2][^fn7] In some cases, the MFA self-enrollment process may require only a username and password to enroll the account's first device or to enroll a device to an inactive account. [^fn3]

Similarly, an adversary with existing access to a network may register a device or a virtual machine to Entra ID and/or its device management system, Microsoft Intune, in order to access sensitive data or resources while bypassing conditional access policies.[^fn6][^fn4][^fn9][^fn1]

Devices registered in Entra ID may be able to conduct [Internal Spearphishing](https://attack.mitre.org/techniques/T1534) campaigns via intra-organizational emails, which are less likely to be treated as suspicious by the email client.[^fn8] Additionally, an adversary may be able to perform a [Service Exhaustion Flood](https://attack.mitre.org/techniques/T1499/002) on an Entra ID tenant by registering a large number of devices.[^fn5]


# Platform(s)

- Windows
- Identity Provider

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.005](https://attack.mitre.org/techniques/T1098/005)

[^fn1]: [Ben Nahorney and Jennifer Maynard. (2025, April 10). Observing Atlas Lion (part one): Why take control when you can enroll?. Retrieved May 22, 2025.](https://expel.com/blog/observing-atlas-lion-part-one/)
[^fn2]: [Cybersecurity and Infrastructure Security Agency. (2022, March 15). Russian State-Sponsored Cyber Actors Gain Network Access by Exploiting Default Multifactor Authentication Protocols and “PrintNightmare” Vulnerability. Retrieved March 16, 2022.](https://www.cisa.gov/uscert/ncas/alerts/aa22-074a)
[^fn3]: [Douglas Bienstock. (2022, August 18). You Can’t Audit Me: APT29 Continues Targeting Microsoft 365. Retrieved February 23, 2023.](https://www.mandiant.com/resources/blog/apt29-continues-targeting-microsoft)
[^fn4]: [Dr. Nestori Syynimaa. (2020, September 6). Bypassing conditional access by faking device compliance. Retrieved March 4, 2022.](https://o365blog.com/post/mdm)
[^fn5]: [Dr. Nestori Syynimaa. (2021, January 31). BPRT unleashed: Joining multiple devices to Azure AD and Intune. Retrieved March 4, 2022.](https://o365blog.com/post/bprt/)
[^fn6]: [Dr. Nestori Syynimaa. (2021, March 3). Deep-dive to Azure AD device join. Retrieved March 9, 2022.](https://o365blog.com/post/devices/)
[^fn7]: [Kelly Jackson Higgins. (2021, January 7). FireEye's Mandia: 'Severity-Zero Alert' Led to Discovery of SolarWinds Attack. Retrieved April 18, 2022.](https://www.darkreading.com/threat-intelligence/fireeye-s-mandia-severity-zero-alert-led-to-discovery-of-solarwinds-attack)
[^fn8]: [Microsoft 365 Defender Threat Intelligence Team. (2022, January 26). Evolved phishing: Device registration trick adds to phishers’ toolbox for victims without MFA. Retrieved March 4, 2022.](https://www.microsoft.com/security/blog/2022/01/26/evolved-phishing-device-registration-trick-adds-to-phishers-toolbox-for-victims-without-mfa)
[^fn9]: [Microsoft. (2022, March 22). DEV-0537 criminal actor targeting organizations for data exfiltration and destruction. Retrieved March 23, 2022.](https://www.microsoft.com/security/blog/2022/03/22/dev-0537-criminal-actor-targeting-organizations-for-data-exfiltration-and-destruction/)