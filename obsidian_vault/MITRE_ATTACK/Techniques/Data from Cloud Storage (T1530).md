---
mitre_data:
  id: T1530
  linker_tags:
  - mitre/attack/linker/collection/data_from_cloud_storage
  name: Data from Cloud Storage
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data from Cloud Storage (`T1530`)

Adversaries may access data from cloud storage.

Many IaaS providers offer solutions for online data object storage such as Amazon S3, Azure Storage, and Google Cloud Storage. Similarly, SaaS enterprise platforms such as Office 365 and Google Workspace provide cloud-based document storage to users through services such as OneDrive and Google Drive, while SaaS application providers such as Slack, Confluence, Salesforce, and Dropbox may provide cloud storage solutions as a peripheral or primary use case of their platform. 

In some cases, as with IaaS-based cloud storage, there exists no overarching application (such as SQL or Elasticsearch) with which to interact with the stored objects: instead, data from these solutions is retrieved directly though the [Cloud API](https://attack.mitre.org/techniques/T1059/009). In SaaS applications, adversaries may be able to collect this data directly from APIs or backend cloud storage objects, rather than through their front-end application or interface (i.e., [Data from Information Repositories](https://attack.mitre.org/techniques/T1213)). 

Adversaries may collect sensitive data from these cloud storage solutions. Providers typically offer security guides to help end users configure systems, though misconfigurations are a common problem.[^fn1][^fn2][^fn4] There have been numerous incidents where cloud storage has been improperly secured, typically by unintentionally allowing public access to unauthenticated users, overly-broad access by all users, or even access for any anonymous person outside the control of the Identity Access Management system without even needing basic user permissions.

This open access may expose various types of sensitive data, such as credit cards, personally identifiable information, or medical records.[^fn7][^fn3][^fn5][^fn6]

Adversaries may also obtain then abuse leaked credentials from source repositories, logs, or other means as a way to gain access to cloud storage objects.


# Platform(s)

- IaaS
- Office Suite
- SaaS

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/TruffleHog|TruffleHog]]
- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1530](https://attack.mitre.org/techniques/T1530)

[^fn1]: [Amazon. (2019, May 17). How can I secure the files in my Amazon S3 bucket?. Retrieved October 4, 2019.](https://aws.amazon.com/premiumsupport/knowledge-center/secure-s3-resources/)
[^fn2]: [Amlekar, M., Brooks, C., Claman, L., et. al.. (2019, March 20). Azure Storage security guide. Retrieved October 4, 2019.](https://docs.microsoft.com/en-us/azure/storage/common/storage-security-guide)
[^fn3]: [Barrett, B.. (2019, July 11). Hack Brief: A Card-Skimming Hacker Group Hit 17K Domains—and Counting. Retrieved October 4, 2019.](https://www.wired.com/story/magecart-amazon-cloud-hacks/)
[^fn4]: [Google. (2019, September 16). Best practices for Cloud Storage. Retrieved October 4, 2019.](https://cloud.google.com/storage/docs/best-practices)
[^fn5]: [HIPAA Journal. (2017, October 11). 47GB of Medical Records and Test Results Found in Unsecured Amazon S3 Bucket. Retrieved October 4, 2019.](https://www.hipaajournal.com/47gb-medical-records-unsecured-amazon-s3-bucket/)
[^fn6]: [Justin Schoenfeld, Aaron Didier. (2021, May 4). Transferring leverage in a ransomware attack. Retrieved July 14, 2022.](https://redcanary.com/blog/rclone-mega-extortion/)
[^fn7]: [Trend Micro. (2017, November 6). A Misconfigured Amazon S3 Exposed Almost 50 Thousand PII in Australia. Retrieved October 4, 2019.](https://www.trendmicro.com/vinfo/us/security/news/virtualization-and-cloud/a-misconfigured-amazon-s3-exposed-almost-50-thousand-pii-in-australia)