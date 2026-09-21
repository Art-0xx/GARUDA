---
mitre_data:
  id: T1685.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/disable_or_modify_cloud_log
  name: Disable or Modify Cloud Log
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Disable or Modify Cloud Log (`T1685.002`)

An adversary may disable or modify cloud logging capabilities and integrations to limit what data is collected on their activities and avoid detection. Cloud environments allow for collection and analysis of audit and application logs that provide insight into what activities a user does within the environment. If an adversary has sufficient permissions, they can disable or modify logging to avoid detection of their activities. 

For example, in AWS an adversary may disable CloudWatch/CloudTrail integrations prior to conducting further malicious activity. They may alternatively tamper with logging functionality, for example, by removing any associated SNS topics, disabling multi-region logging, or disabling settings that validate and/or encrypt log files.[^fn1][^fn3] In Office 365, an adversary may disable logging on mail collection activities for specific users by using the Set-MailboxAuditBypassAssociation cmdlet, by disabling M365 Advanced Auditing for the user, or by downgrading the user’s license from an Enterprise E5 to an Enterprise E3 license.[^fn2]


# Platform(s)

- IaaS
- SaaS
- Identity Provider
- Office Suite

# Parent Technique(s)

- [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685.002](https://attack.mitre.org/techniques/T1685/002)

[^fn1]: [AWS. (n.d.). update-trail. Retrieved April 15, 2026.](https://docs.aws.amazon.com/cli/latest/reference/cloudtrail/update-trail.html)
[^fn2]: [Kelly Sheridan. (2021, August 5). Retrieved April 15, 2026.](https://www.darkreading.com/threat-intelligence/incident-responders-explore-microsoft-365-attacks-in-the-wild)
[^fn3]: [Rhino Security Labs. (2021, April 29). Pacu Detection Disruption Module. Retrieved August 4, 2023.](https://github.com/RhinoSecurityLabs/pacu/blob/master/pacu/modules/detection__disruption/main.py)