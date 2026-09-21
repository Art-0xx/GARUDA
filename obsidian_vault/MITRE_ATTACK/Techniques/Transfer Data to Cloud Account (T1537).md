---
mitre_data:
  id: T1537
  linker_tags:
  - mitre/attack/linker/exfiltration/transfer_data_to_cloud_account
  name: Transfer Data to Cloud Account
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Transfer Data to Cloud Account (`T1537`)

Adversaries may exfiltrate data by transferring the data, including through sharing/syncing and creating backups of cloud environments, to another cloud account they control on the same service.

A defender who is monitoring for large transfers to outside the cloud environment through normal file transfers or over command and control channels may not be watching for data transfers to another account within the same cloud provider. Such transfers may utilize existing cloud provider APIs and the internal address space of the cloud provider to blend into normal traffic or avoid data transfers over external network interfaces.[^fn2]

Adversaries may also use cloud-native mechanisms to share victim data with adversary-controlled cloud accounts, such as creating anonymous file sharing links or, in Azure, a shared access signature (SAS) URI.[^fn5]

Incidents have been observed where adversaries have created backups of cloud instances and transferred them to separate accounts.[^fn6] 


# Platform(s)

- IaaS
- Office Suite
- SaaS

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1537](https://attack.mitre.org/techniques/T1537)
- [Amazon Web Services. (n.d.). Share an Amazon EBS snapshot. Retrieved March 2, 2022.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html)
- [Delegate access with a shared access signature. (2019, December 18). Delegate access with a shared access signature. Retrieved March 2, 2022.](https://docs.microsoft.com/en-us/rest/api/storageservices/delegate-access-with-shared-access-signature)
- [Microsoft Azure. (2021, December 29). Blob snapshots. Retrieved March 2, 2022.](https://docs.microsoft.com/en-us/azure/storage/blobs/snapshots-overview)

[^fn2]: [Clint Gibler and Scott Piper. (2021, January 4). Lesser Known Techniques for Attacking AWS Environments. Retrieved March 4, 2024.](https://tldrsec.com/p/blog-lesser-known-aws-attacks)
[^fn5]: [Microsoft. (2023, June 7). Grant limited access to Azure Storage resources using shared access signatures (SAS). Retrieved March 4, 2024.](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)
[^fn6]: [Mueller, R. (2018, July 13). Indictment - United States of America vs. VIKTOR BORISOVICH NETYKSHO, et al. Retrieved November 17, 2024.](https://cdn.cnn.com/cnn/2018/images/07/13/gru.indictment.pdf)