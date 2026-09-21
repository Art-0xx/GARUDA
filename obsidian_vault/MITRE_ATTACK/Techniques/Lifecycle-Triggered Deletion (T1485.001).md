---
mitre_data:
  id: T1485.001
  linker_tags:
  - mitre/attack/linker/impact/lifecycle-triggered_deletion
  name: Lifecycle-Triggered Deletion
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Lifecycle-Triggered Deletion (`T1485.001`)

Adversaries may modify the lifecycle policies of a cloud storage bucket to destroy all objects stored within.  

Cloud storage buckets often allow users to set lifecycle policies to automate the migration, archival, or deletion of objects after a set period of time.[^fn1][^fn2][^fn4] If a threat actor has sufficient permissions to modify these policies, they may be able to delete all objects at once. 

For example, in AWS environments, an adversary with the `PutLifecycleConfiguration` permission may use the `PutBucketLifecycle` API call to apply a lifecycle policy to an S3 bucket that deletes all objects in the bucket after one day.[^fn5][^fn3] In addition to destroying data for purposes of extortion and [Financial Theft](https://attack.mitre.org/techniques/T1657), adversaries may also perform this action on buckets storing cloud logs for [Indicator Removal](https://attack.mitre.org/techniques/T1070).[^fn6]


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Data Destruction (T1485)|Data Destruction]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1485.001](https://attack.mitre.org/techniques/T1485/001)

[^fn1]: [AWS. (n.d.). Managing the lifecycle of objects. Retrieved September 25, 2024.](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
[^fn2]: [Google Cloud. (n.d.). Object Lifecycle Management. Retrieved September 25, 2024.](https://cloud.google.com/storage/docs/lifecycle)
[^fn3]: [Halcyon RISE Team. (2025, January 13). Abusing AWS Native Services: Ransomware Encrypting S3 Buckets with SSE-C. Retrieved March 18, 2025.](https://www.halcyon.ai/blog/abusing-aws-native-services-ransomware-encrypting-s3-buckets-with-sse-c)
[^fn4]: [Microsoft Azure. (2024, July 3). Configure a lifecycle management policy. Retrieved September 25, 2024.](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure?tabs=azure-portal)
[^fn5]: [Ofir Balassiano and Ofir Shaty. (2023, November 29). Ransomware in the Cloud: Breaking Down the Attack Vectors. Retrieved September 25, 2024.](https://www.paloaltonetworks.com/blog/prisma-cloud/ransomware-data-protection-cloud/)
[^fn6]: [Stratus Red Team. (n.d.). CloudTrail Logs Impairment Through S3 Lifecycle Rule. Retrieved September 25, 2024.](https://stratus-red-team.cloud/attack-techniques/AWS/aws.defense-evasion.cloudtrail-lifecycle-rule/)