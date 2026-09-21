---
mitre_data:
  id: T1580
  linker_tags:
  - mitre/attack/linker/discovery/cloud_infrastructure_discovery
  name: Cloud Infrastructure Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Cloud Infrastructure Discovery (`T1580`)

An adversary may attempt to discover infrastructure and resources that are available within an infrastructure-as-a-service (IaaS) environment. This includes compute service resources such as instances, virtual machines, and snapshots as well as resources of other services including the storage and database services.

Cloud providers offer methods such as APIs and commands issued through CLIs to serve information about infrastructure. For example, AWS provides a <code>DescribeInstances</code> API within the Amazon EC2 API that can return information about one or more instances within an account, the <code>ListBuckets</code> API that returns a list of all buckets owned by the authenticated sender of the request, the <code>HeadBucket</code> API to determine a bucket’s existence along with access permissions of the request sender, or the <code>GetPublicAccessBlock</code> API to retrieve access block configuration for a bucket.[^fn5][^fn6][^fn3][^fn2] Similarly, GCP's Cloud SDK CLI provides the <code>gcloud compute instances list</code> command to list all Google Compute Engine instances in a project [^fn7], and Azure's CLI command <code>az vm list</code> lists details of virtual machines.[^fn9] In addition to API commands, adversaries can utilize open source tools to discover cloud storage infrastructure through [Wordlist Scanning](https://attack.mitre.org/techniques/T1595/003).[^fn10]

An adversary may enumerate resources using a compromised user's access keys to determine which are available to that user.[^fn1] The discovery of these available resources may help adversaries determine their next steps in the Cloud environment, such as establishing Persistence.[^fn8]An adversary may also use this information to change the configuration to make the bucket publicly accessible, allowing data to be accessed without authentication. Adversaries have also may use infrastructure discovery APIs such as <code>DescribeDBInstances</code> to determine size, owner, permissions, and network ACLs of database resources. [^fn4] Adversaries can use this information to determine the potential value of databases and discover the requirements to access them. Unlike in [Cloud Service Discovery](https://attack.mitre.org/techniques/T1526), this technique focuses on the discovery of components of the provided services rather than the services themselves.


# Platform(s)

- IaaS

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1580](https://attack.mitre.org/techniques/T1580)

[^fn1]: [A. Randazzo, B. Manahan and S. Lipton. (2020, April 28). Finding Evil in AWS. Retrieved June 25, 2020.](https://expel.io/blog/finding-evil-in-aws/)
[^fn2]: [Amazon Web Services. (n.d.). AWS HeadBucket. Retrieved February 14, 2022.](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html)
[^fn3]: [Amazon Web Services. (n.d.). Retrieved May 28, 2021.](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html)
[^fn4]: [Amazon Web Services. (n.d.). Retrieved May 28, 2021.](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html)
[^fn5]: [Amazon. (n.d.). describe-instance-information. Retrieved March 3, 2020.](https://docs.aws.amazon.com/cli/latest/reference/ssm/describe-instance-information.html)
[^fn6]: [Amazon. (n.d.). DescribeInstances. Retrieved May 26, 2020.](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html)
[^fn7]: [Google. (n.d.). gcloud compute instances list. Retrieved May 26, 2020.](https://cloud.google.com/sdk/gcloud/reference/compute/instances/list)
[^fn8]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)
[^fn9]: [Microsoft. (n.d.). az ad user. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/cli/azure/ad/user?view=azure-cli-latest)
[^fn10]: [Vasilios Hioureas. (2019, September 13). Hacking with AWS: incorporating leaky buckets into your OSINT workflow. Retrieved February 14, 2022.](https://blog.malwarebytes.com/researchers-corner/2019/09/hacking-with-aws-incorporating-leaky-buckets-osint-workflow/)