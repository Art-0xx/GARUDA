---
tags:
  - mitre/attack/tool
---

# Peirates (`S0683`)

[Peirates](https://attack.mitre.org/software/S0683) is a post-exploitation Kubernetes exploitation framework with a focus on gathering service account tokens for lateral movement and privilege escalation. The tool is written in GoLang and publicly available on GitHub.[^fn1]



# Platform(s)

- Containers

# Techniques Used

## Container and Resource Discovery

[Peirates](https://attack.mitre.org/software/S0683) can enumerate Kubernetes pods in a given namespace.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Container and Resource Discovery (T1613)|Container and Resource Discovery]]

## Container Administration Command

[Peirates](https://attack.mitre.org/software/S0683) can use `kubectl` or the Kubernetes API to run commands.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Container Administration Command (T1609)|Container Administration Command]]

## Escape to Host

[Peirates](https://attack.mitre.org/software/S0683) can gain a reverse shell on a host node by mounting the Kubernetes hostPath.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Escape to Host (T1611)|Escape to Host]]

## Application Access Token

[Peirates](https://attack.mitre.org/software/S0683) can use stolen service account tokens to perform its operations. It also enables adversaries to switch between valid service accounts.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Application Access Token (T1550.001)|Application Access Token]]

## Data from Cloud Storage

[Peirates](https://attack.mitre.org/software/S0683) can dump the contents of AWS S3 buckets. It can also retrieve service account tokens from kOps buckets in Google Cloud Storage or S3.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Data from Cloud Storage (T1530)|Data from Cloud Storage]]

## Network Service Discovery

[Peirates](https://attack.mitre.org/software/S0683) can initiate a port scan against a given IP address.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Container API

[Peirates](https://attack.mitre.org/software/S0683) can query the Kubernetes API for secrets.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Container API (T1552.007)|Container API]]

## Cloud Storage Object Discovery

[Peirates](https://attack.mitre.org/software/S0683) can list AWS S3 buckets.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Cloud Storage Object Discovery (T1619)|Cloud Storage Object Discovery]]

## Cloud Instance Metadata API

[Peirates](https://attack.mitre.org/software/S0683) can query the query AWS and GCP metadata APIs for secrets.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Cloud Instance Metadata API (T1552.005)|Cloud Instance Metadata API]]

## Steal Application Access Token

[Peirates](https://attack.mitre.org/software/S0683) gathers Kubernetes service account tokens using a variety of techniques.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Steal Application Access Token (T1528)|Steal Application Access Token]]

## Cloud Accounts

[Peirates](https://attack.mitre.org/software/S0683) can use stolen service account tokens to perform its operations.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Cloud Accounts (T1078.004)|Cloud Accounts]]

## Deploy Container

[Peirates](https://attack.mitre.org/software/S0683) can deploy a pod that mounts its node’s root file system, then execute a command to create a reverse shell on the node.[\[Peirates GitHub\]](https://github.com/inguardians/peirates)

- *Technique:* [[../Techniques/Deploy Container (T1610)|Deploy Container]]


# External References(s)

- [S0683](https://attack.mitre.org/software/S0683)

[^fn1]: [InGuardians. (2022, January 5). Peirates GitHub. Retrieved February 8, 2022.](https://github.com/inguardians/peirates)