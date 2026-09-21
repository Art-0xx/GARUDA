---
mitre_data:
  id: T1552.005
  linker_tags:
  - mitre/attack/linker/credential_access/cloud_instance_metadata_api
  name: Cloud Instance Metadata API
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Cloud Instance Metadata API (`T1552.005`)

Adversaries may attempt to access the Cloud Instance Metadata API to collect credentials and other sensitive data.

Most cloud service providers support a Cloud Instance Metadata API which is a service provided to running virtual instances that allows applications to access information about the running virtual instance. Available information generally includes name, security group, and additional metadata including sensitive data such as credentials and UserData scripts that may contain additional secrets. The Instance Metadata API is provided as a convenience to assist in managing applications and is accessible by anyone who can access the instance.[^fn1] A cloud metadata API has been used in at least one high profile compromise.[^fn3]

If adversaries have a presence on the running virtual instance, they may query the Instance Metadata API directly to identify credentials that grant access to additional resources. Additionally, adversaries may exploit a Server-Side Request Forgery (SSRF) vulnerability in a public facing web proxy that allows them to gain access to the sensitive information via a request to the Instance Metadata API.[^fn2]

The de facto standard across cloud service providers is to host the Instance Metadata API at <code>http[:]//169.254.169.254</code>.



# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tool(s)

- [[../Tools/TruffleHog|TruffleHog]]
- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.005](https://attack.mitre.org/techniques/T1552/005)

[^fn1]: [AWS. (n.d.). Instance Metadata and User Data. Retrieved July 18, 2019.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)
[^fn2]: [Higashi, Michael. (2018, May 15). Instance Metadata API: A Modern Day Trojan Horse. Retrieved July 16, 2019.](https://redlock.io/blog/instance-metadata-api-a-modern-day-trojan-horse)
[^fn3]: [Krebs, B.. (2019, August 19). What We Can Learn from the Capital One Hack. Retrieved March 25, 2020.](https://krebsonsecurity.com/2019/08/what-we-can-learn-from-the-capital-one-hack/)