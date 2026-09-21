---
mitre_data:
  id: T1087
  linker_tags:
  - mitre/attack/linker/discovery/account_discovery
  name: Account Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Account Discovery (`T1087`)

Adversaries may attempt to get a listing of valid accounts, usernames, or email addresses on a system or within a compromised environment. This information can help adversaries determine which accounts exist, which can aid in follow-on behavior such as brute-forcing, spear-phishing attacks, or account takeovers (e.g., [Valid Accounts](https://attack.mitre.org/techniques/T1078)).

Adversaries may use several methods to enumerate accounts, including abuse of existing tools, built-in commands, and potential misconfigurations that leak account names and roles or permissions in the targeted environment.

For examples, cloud environments typically provide easily accessible interfaces to obtain user lists.[^fn1][^fn2] On hosts, adversaries can use default [PowerShell](https://attack.mitre.org/techniques/T1059/001) and other command line functionality to identify accounts. Information about email addresses and accounts may also be extracted by searching an infected system’s files.


# Platform(s)

- ESXi
- IaaS
- Identity Provider
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Domain Account (T1087.002)|Domain Account]]
- [[../Techniques/Local Account (T1087.001)|Local Account]]
- [[../Techniques/Email Account (T1087.003)|Email Account]]
- [[../Techniques/Cloud Account (T1087.004)|Cloud Account]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1087](https://attack.mitre.org/techniques/T1087)
- [Stepanic, D.. (2020, January 13). Embracing offensive tooling: Building detections against Koadic using EQL. Retrieved November 17, 2024.](https://www.elastic.co/security-labs/embracing-offensive-tooling-building-detections-against-koadic-using-eql)

[^fn1]: [Amazon. (n.d.). List Users. Retrieved August 11, 2020.](https://docs.aws.amazon.com/cli/latest/reference/iam/list-users.html)
[^fn2]: [Google. (2020, June 23). gcloud iam service-accounts list. Retrieved August 4, 2020.](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/list)