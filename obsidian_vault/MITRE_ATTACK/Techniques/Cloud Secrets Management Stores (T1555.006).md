---
mitre_data:
  id: T1555.006
  linker_tags:
  - mitre/attack/linker/credential_access/cloud_secrets_management_stores
  name: Cloud Secrets Management Stores
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Cloud Secrets Management Stores (`T1555.006`)

Adversaries may acquire credentials from cloud-native secret management solutions such as AWS Secrets Manager, GCP Secret Manager, Azure Key Vault, and Terraform Vault.  

Secrets managers support the secure centralized management of passwords, API keys, and other credential material. Where secrets managers are in use, cloud services can dynamically acquire credentials via API requests rather than accessing secrets insecurely stored in plain text files or environment variables.  

If an adversary is able to gain sufficient privileges in a cloud environment – for example, by obtaining the credentials of high-privileged [Cloud Accounts](https://attack.mitre.org/techniques/T1078/004) or compromising a service that has permission to retrieve secrets – they may be able to request secrets from the secrets manager. This can be accomplished via commands such as `get-secret-value` in AWS, `gcloud secrets describe` in GCP, and `az key vault secret show` in Azure.[^fn4][^fn1][^fn2][^fn3][^fn5]

**Note:** this technique is distinct from [Cloud Instance Metadata API](https://attack.mitre.org/techniques/T1552/005) in that the credentials are being directly requested from the cloud secrets manager, rather than through the medium of the instance metadata API.


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]
- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1555.006](https://attack.mitre.org/techniques/T1555/006)

[^fn1]: [Alessandro Brucato. (2023, July 11). SCARLETEEL 2.0: Fargate, Kubernetes, and Crypto. Retrieved September 25, 2023.](https://sysdig.com/blog/scarleteel-2-0/)
[^fn2]: [AWS. (n.d.). Retrieve secrets from AWS Secrets Manager. Retrieved September 25, 2023.](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html)
[^fn3]: [Google Cloud. (n.d.). List secrets and view secret details. Retrieved September 25, 2023.](https://cloud.google.com/secret-manager/docs/view-secret-details)
[^fn4]: [Ian Ahl. (2023, September 20). LUCR-3: SCATTERED SPIDER GETTING SAAS-Y IN THE CLOUD. Retrieved September 25, 2023.](https://permiso.io/blog/lucr-3-scattered-spider-getting-saas-y-in-the-cloud)
[^fn5]: [Microsoft. (2023, January 13). Quickstart: Set and retrieve a secret from Azure Key Vault using Azure CLI. Retrieved September 25, 2023.](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-cli)