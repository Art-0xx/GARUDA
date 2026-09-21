---
mitre_data:
  id: T1619
  linker_tags:
  - mitre/attack/linker/discovery/cloud_storage_object_discovery
  name: Cloud Storage Object Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Cloud Storage Object Discovery (`T1619`)

Adversaries may enumerate objects in cloud storage infrastructure. Adversaries may use this information during automated discovery to shape follow-on behaviors, including requesting all or specific objects from cloud storage.  Similar to [File and Directory Discovery](https://attack.mitre.org/techniques/T1083) on a local host, after identifying available storage services (i.e. [Cloud Infrastructure Discovery](https://attack.mitre.org/techniques/T1580)) adversaries may access the contents/objects stored in cloud infrastructure.

Cloud service providers offer APIs allowing users to enumerate objects stored within cloud storage. Examples include ListObjectsV2 in AWS [^fn1] and List Blobs in Azure[^fn2] .


# Platform(s)

- IaaS

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/TruffleHog|TruffleHog]]
- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1619](https://attack.mitre.org/techniques/T1619)

[^fn1]: [Amazon - ListObjectsV2. Retrieved October 4, 2021.](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html)
[^fn2]: [Microsoft - List Blobs. (n.d.). Retrieved October 4, 2021.](https://docs.microsoft.com/en-us/rest/api/storageservices/list-blobs)