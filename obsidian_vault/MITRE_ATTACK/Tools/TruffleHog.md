---
tags:
  - mitre/attack/tool
---

# TruffleHog (`S9009`)

[TruffleHog](https://attack.mitre.org/software/S9009) is an open-source secrets-discovery tool that is used to search for credentials, API keys, and encryption keys across a variety of data sources and environments.[^fn1][^fn3] [TruffleHog](https://attack.mitre.org/software/S9009) has the ability to discover credentials and secrets stored in code repositories, git history, CI/CD pipelines, among other common storage locations to include filesystems and cloud storage buckets.[^fn1][^fn2][^fn3] [TruffleHog](https://attack.mitre.org/software/S9009) was first released by its author in 2016.[^fn3]



# Platform(s)

- IaaS
- Linux
- SaaS
- Windows

# Techniques Used

## Sharepoint

[TruffleHog](https://attack.mitre.org/software/S9009) has searched SharePoint for data and credentials.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Sharepoint (T1213.002)|Sharepoint]]

## Messaging Applications

[TruffleHog](https://attack.mitre.org/software/S9009) has obtained data and credentials associated with messaging applications to include Slack.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Messaging Applications (T1213.005)|Messaging Applications]]

## Cloud Storage Object Discovery

[TruffleHog](https://attack.mitre.org/software/S9009) can enumerate cloud storage environments including Amazon Web Service (AWS) S3 buckets and Google Cloud Storage buckets.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Cloud Storage Object Discovery (T1619)|Cloud Storage Object Discovery]]

## Cloud API

[TruffleHog](https://attack.mitre.org/software/S9009) has leveraged Cloud CLI in order to enumerate and gather credentials.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Cloud API (T1059.009)|Cloud API]]

## Cloud Service Discovery

[TruffleHog](https://attack.mitre.org/software/S9009) has the ability to scan code repositories and CI/CD platforms.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Cloud Service Discovery (T1526)|Cloud Service Discovery]]

## Cloud Secrets Management Stores

[TruffleHog](https://attack.mitre.org/software/S9009) can obtain secrets from AWS Secrets and GCP Secret Manager.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog) [TruffleHog](https://attack.mitre.org/software/S9009) has also gathered passwords, secrets and API keys from source repositories, .env files, and git history.[\[Netskope Shai-Hulud November 2025\]](https://www.netskope.com/blog/shai-hulud-2-0-aggressive-automated-one-of-fastest-spreading-npm-supply-chain-attacks-ever-observed)

- *Technique:* [[../Techniques/Cloud Secrets Management Stores (T1555.006)|Cloud Secrets Management Stores]]

## Cloud Infrastructure Discovery

[TruffleHog](https://attack.mitre.org/software/S9009) can enumerate AWS Infrastructure to include EC2 instances.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Cloud Infrastructure Discovery (T1580)|Cloud Infrastructure Discovery]]

## Cloud Instance Metadata API

[TruffleHog](https://attack.mitre.org/software/S9009) can query the AWS and GCP metadata endpoints for instances and service credentials.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Cloud Instance Metadata API (T1552.005)|Cloud Instance Metadata API]]

## Steal Application Access Token

[TruffleHog](https://attack.mitre.org/software/S9009) has gathered access tokens and API tokens from CI/CD pipeline solutions and repositories.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)

- *Technique:* [[../Techniques/Steal Application Access Token (T1528)|Steal Application Access Token]]

## File and Directory Discovery

[TruffleHog](https://attack.mitre.org/software/S9009) has can browse and scan individual files and directories.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Netskope Shai-Hulud November 2025\]](https://www.netskope.com/blog/shai-hulud-2-0-aggressive-automated-one-of-fastest-spreading-npm-supply-chain-attacks-ever-observed)[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Data from Local System

[TruffleHog](https://attack.mitre.org/software/S9009) has gathered data from home directories of the victim environment.[\[Netskope Shai-Hulud November 2025\]](https://www.netskope.com/blog/shai-hulud-2-0-aggressive-automated-one-of-fastest-spreading-npm-supply-chain-attacks-ever-observed)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Cloud Accounts

[TruffleHog](https://attack.mitre.org/software/S9009) has used stolen credentials to log into cloud services to access cloud hosted repositories and other cloud storage solutions to discover sensitive data to include API Keys, tokens and credentials.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Cloud Accounts (T1078.004)|Cloud Accounts]]

## Credentials In Files

[TruffleHog](https://attack.mitre.org/software/S9009) has obtained credentials stored in config files and credential files in victim environments.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Netskope Shai-Hulud November 2025\]](https://www.netskope.com/blog/shai-hulud-2-0-aggressive-automated-one-of-fastest-spreading-npm-supply-chain-attacks-ever-observed)

- *Technique:* [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]

## Data from Cloud Storage

[TruffleHog](https://attack.mitre.org/software/S9009) has the ability to scan cloud storage services for credentials to include Amazon (AWS) S3 and Google Cloud Storage.[\[Black Hills Information Security TruffleHog January 2024\]](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Data from Cloud Storage (T1530)|Data from Cloud Storage]]

## Confluence

[TruffleHog](https://attack.mitre.org/software/S9009) has collected credentials and data associated with Confluence.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Confluence (T1213.001)|Confluence]]

## Code Repositories

[TruffleHog](https://attack.mitre.org/software/S9009) has gathered data and credentials from code repositories.[\[Github TruffleSecurity Trufflehog April 2025\]](https://github.com/trufflesecurity/trufflehog)

- *Technique:* [[../Techniques/Code Repositories (T1213.003)|Code Repositories]]


# External References(s)

- [S9009](https://attack.mitre.org/software/S9009)

[^fn1]: [Chris Traynor. (2024, January 18). Rooting For Secrets with TruffleHog. Retrieved April 15, 2026.](https://www.blackhillsinfosec.com/rooting-for-secrets-with-trufflehog/)
[^fn2]: [Gianpietro Cutolo. (2025, November 26). Shai-Hulud 2.0: Aggressive, Automated, and Fast Spreading. Retrieved April 9, 2026.](https://www.netskope.com/blog/shai-hulud-2-0-aggressive-automated-one-of-fastest-spreading-npm-supply-chain-attacks-ever-observed)
[^fn3]: [Trufflesecurity. (2026, April 8). TruffleHog Enterprise. Retrieved April 15, 2026.](https://github.com/trufflesecurity/trufflehog)