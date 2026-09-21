---
mitre_data:
  id: T1110.002
  linker_tags:
  - mitre/attack/linker/credential_access/password_cracking
  name: Password Cracking
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Password Cracking (`T1110.002`)

Adversaries may use password cracking to attempt to recover usable credentials, such as plaintext passwords, when credential material such as password hashes are obtained. [OS Credential Dumping](https://attack.mitre.org/techniques/T1003) can be used to obtain password hashes, this may only get an adversary so far when [Pass the Hash](https://attack.mitre.org/techniques/T1550/002) is not an option. Further,  adversaries may leverage [Data from Configuration Repository](https://attack.mitre.org/techniques/T1602) in order to obtain hashed credentials for network devices.[^fn1] 

Techniques to systematically guess the passwords used to compute hashes are available, or the adversary may use a pre-computed rainbow table to crack hashes. Cracking hashes is usually done on adversary-controlled systems outside of the target network.[^fn2] The resulting plaintext password resulting from a successfully cracked hash may be used to log into systems, resources, and services in which the account has access.


# Platform(s)

- Identity Provider
- Linux
- macOS
- Network Devices
- Office Suite
- Windows

# Parent Technique(s)

- [[../Techniques/Brute Force (T1110)|Brute Force]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1110.002](https://attack.mitre.org/techniques/T1110/002)

[^fn1]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)
[^fn2]: [Wikipedia. (n.d.). Password cracking. Retrieved December 23, 2015.](https://en.wikipedia.org/wiki/Password_cracking)