---
tags:
  - mitre/attack/tool
---

# Pacu (`S1091`)

Pacu is an open-source AWS exploitation framework. The tool is written in Python and publicly available on GitHub.[^fn1]



# Platform(s)

- IaaS

# Techniques Used

## Serverless Execution

[Pacu](https://attack.mitre.org/software/S1091) can create malicious Lambda functions.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Serverless Execution (T1648)|Serverless Execution]]

## Disable or Modify Cloud Log

[Pacu](https://attack.mitre.org/software/S1091) can disable or otherwise restrict various AWS logging services, such as AWS CloudTrail and VPC flow logs.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Disable or Modify Cloud Log (T1685.002)|Disable or Modify Cloud Log]]

## Cloud Storage Object Discovery

[Pacu](https://attack.mitre.org/software/S1091) can enumerate AWS storage services, such as S3 buckets and Elastic Block Store volumes.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Storage Object Discovery (T1619)|Cloud Storage Object Discovery]]

## System Network Connections Discovery

Once inside a Virtual Private Cloud, [Pacu](https://attack.mitre.org/software/S1091) can attempt to identify DirectConnect, VPN, or VPC Peering.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/System Network Connections Discovery (T1049)|System Network Connections Discovery]]

## Log Enumeration

[Pacu](https://attack.mitre.org/software/S1091) can collect CloudTrail event histories and CloudWatch logs.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Log Enumeration (T1654)|Log Enumeration]]

## Cloud Service Discovery

[Pacu](https://attack.mitre.org/software/S1091) can enumerate AWS services, such as CloudTrail and CloudWatch.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Service Discovery (T1526)|Cloud Service Discovery]]

## Unsecured Credentials

[Pacu](https://attack.mitre.org/software/S1091) can search for sensitive data: for example, in Code Build environment variables, EC2 user data, and Cloud Formation templates.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

## Cloud Firewall

[Pacu](https://attack.mitre.org/software/S1091) can allowlist IP addresses in AWS GuardDuty.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Firewall (T1686.001)|Cloud Firewall]]

## Additional Cloud Credentials

[Pacu](https://attack.mitre.org/software/S1091) can generate SSH and API keys for AWS infrastructure and additional API keys for other IAM users.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Additional Cloud Credentials (T1098.001)|Additional Cloud Credentials]]

## Cloud Secrets Management Stores

[Pacu](https://attack.mitre.org/software/S1091) can retrieve secrets from the AWS Secrets Manager via the enum_secrets module.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Secrets Management Stores (T1555.006)|Cloud Secrets Management Stores]]

## Cloud Infrastructure Discovery

[Pacu](https://attack.mitre.org/software/S1091) can enumerate AWS infrastructure, such as EC2 instances.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Infrastructure Discovery (T1580)|Cloud Infrastructure Discovery]]

## Cloud API

[Pacu](https://attack.mitre.org/software/S1091) leverages the AWS CLI for its operations.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud API (T1059.009)|Cloud API]]

## Data from Cloud Storage

[Pacu](https://attack.mitre.org/software/S1091) can enumerate and download files stored in AWS storage services, such as S3 buckets.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Data from Cloud Storage (T1530)|Data from Cloud Storage]]

## Cloud Accounts

[Pacu](https://attack.mitre.org/software/S1091) leverages valid cloud accounts to perform most of its operations.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Accounts (T1078.004)|Cloud Accounts]]

## Automated Collection

[Pacu](https://attack.mitre.org/software/S1091) can automatically collect data, such as CloudFormation templates, EC2 user data, AWS Inspector reports, and IAM credential reports.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Automated Collection (T1119)|Automated Collection]]

## Security Software Discovery

[Pacu](https://attack.mitre.org/software/S1091) can enumerate AWS security services, including WAF rules and GuardDuty detectors.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]

## Create Snapshot

[Pacu](https://attack.mitre.org/software/S1091) can create snapshots of EBS volumes and RDS instances.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Create Snapshot (T1578.001)|Create Snapshot]]

## Cloud Account

[Pacu](https://attack.mitre.org/software/S1091) can enumerate IAM users, roles, and groups. [\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Account (T1087.004)|Cloud Account]]

## Cloud Administration Command

[Pacu](https://attack.mitre.org/software/S1091) can run commands on EC2 instances using AWS Systems Manager Run Command.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Administration Command (T1651)|Cloud Administration Command]]

## Cloud Groups

[Pacu](https://attack.mitre.org/software/S1091) can enumerate IAM permissions.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Cloud Groups (T1069.003)|Cloud Groups]]

## Event Triggered Execution

[Pacu](https://attack.mitre.org/software/S1091) can set up S3 bucket notifications to trigger a malicious Lambda function when a CloudFormation template is uploaded to the bucket. It can also create Lambda functions that trigger upon the creation of users, roles, and groups.[\[GitHub Pacu\]](https://github.com/RhinoSecurityLabs/pacu)

- *Technique:* [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]


# External References(s)

- [S1091](https://attack.mitre.org/software/S1091)

[^fn1]: [Rhino Security Labs. (2019, August 22). Pacu. Retrieved October 17, 2019.](https://github.com/RhinoSecurityLabs/pacu)