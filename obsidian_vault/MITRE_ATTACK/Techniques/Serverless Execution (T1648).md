---
mitre_data:
  id: T1648
  linker_tags:
  - mitre/attack/linker/execution/serverless_execution
  name: Serverless Execution
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Serverless Execution (`T1648`)

Adversaries may abuse serverless computing, integration, and automation services to execute arbitrary code in cloud environments. Many cloud providers offer a variety of serverless resources, including compute engines, application integration services, and web servers. 

Adversaries may abuse these resources in various ways as a means of executing arbitrary commands. For example, adversaries may use serverless functions to execute malicious code, such as crypto-mining malware (i.e. [Resource Hijacking](https://attack.mitre.org/techniques/T1496)).[^fn6] Adversaries may also create functions that enable further compromise of the cloud environment. For example, an adversary may use the `IAM:PassRole` permission in AWS or the `iam.serviceAccounts.actAs` permission in Google Cloud to add [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003) to a serverless cloud function, which may then be able to perform actions the original user cannot.[^fn7][^fn8]

Serverless functions can also be invoked in response to cloud events (i.e. [Event Triggered Execution](https://attack.mitre.org/techniques/T1546)), potentially enabling persistent execution over time. For example, in AWS environments, an adversary may create a Lambda function that automatically adds [Additional Cloud Credentials](https://attack.mitre.org/techniques/T1098/001) to a user and a corresponding CloudWatch events rule that invokes that function whenever a new user is created.[^fn2] This is also possible in many cloud-based office application suites. For example, in Microsoft 365 environments, an adversary may create a Power Automate workflow that forwards all emails a user receives or creates anonymous sharing links whenever a user is granted access to a document in SharePoint.[^fn3][^fn1] In Google Workspace environments, they may instead create an Apps Script that exfiltrates a user's data when they open a file.[^fn4][^fn5]


# Platform(s)

- SaaS
- IaaS
- Office Suite

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1648](https://attack.mitre.org/techniques/T1648)

[^fn1]: [Berk Veral. (2020, March 9). Real-life cybercrime stories from DART, the Microsoft Detection and Response Team. Retrieved May 27, 2022.](https://www.microsoft.com/security/blog/2020/03/09/real-life-cybercrime-stories-dart-microsoft-detection-and-response-team)
[^fn2]: [Daniel Grzelak. (2016, July 9). Backdooring an AWS account. Retrieved May 27, 2022.](https://medium.com/daniel-grzelak/backdooring-an-aws-account-da007d36f8f9)
[^fn3]: [Eric Saraga. (2022, February 2). Using Power Automate for Covert Data Exfiltration in Microsoft 365. Retrieved May 27, 2022.](https://www.varonis.com/blog/power-automate-data-exfiltration)
[^fn4]: [HackTricks Cloud. (n.d.). GWS - App Scripts. Retrieved July 1, 2024.](https://cloud.hacktricks.xyz/pentesting-cloud/workspace-security/gws-google-platforms-phishing/gws-app-scripts)
[^fn5]: [L'Hutereau Arnaud. (n.d.). Google Workspace Malicious App Script analysis. Retrieved October 2, 2024.](https://www.own.security/ressources/blog/google-workspace-malicious-app-script-analysis)
[^fn6]: [Matt Muir. (2022, April 6). Cado Discovers Denonia: The First Malware Specifically Targeting Lambda. Retrieved May 27, 2022.](https://www.cadosecurity.com/cado-discovers-denonia-the-first-malware-specifically-targeting-lambda/)
[^fn7]: [Rhino Security Labs. (n.d.). AWS IAM Privilege Escalation – Methods and Mitigation. Retrieved May 27, 2022.](https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/)
[^fn8]: [Spencer Gietzen. (n.d.). Privilege Escalation in Google Cloud Platform – Part 1 (IAM). Retrieved May 27, 2022.](https://rhinosecuritylabs.com/gcp/privilege-escalation-google-cloud-platform-part-1/)