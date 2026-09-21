---
mitre_data:
  id: T1098.006
  linker_tags:
  - mitre/attack/linker/persistence/additional_container_cluster_roles
  - mitre/attack/linker/privilege_escalation/additional_container_cluster_roles
  name: Additional Container Cluster Roles
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Additional Container Cluster Roles (`T1098.006`)

An adversary may add additional roles or permissions to an adversary-controlled user or service account to maintain persistent access to a container orchestration system. For example, an adversary with sufficient permissions may create a RoleBinding or a ClusterRoleBinding to bind a Role or ClusterRole to a Kubernetes account.[^fn4][^fn5] Where attribute-based access control (ABAC) is in use, an adversary with sufficient permissions may modify a Kubernetes ABAC policy to give the target account additional permissions.[^fn3]
 
This account modification may immediately follow [Create Account](https://attack.mitre.org/techniques/T1136) or other malicious account activity. Adversaries may also modify existing [Valid Accounts](https://attack.mitre.org/techniques/T1078) that they have compromised.  

Note that where container orchestration systems are deployed in cloud environments, as with Google Kubernetes Engine, Amazon Elastic Kubernetes Service, and Azure Kubernetes Service, cloud-based  role-based access control (RBAC) assignments or ABAC policies can often be used in place of or in addition to local permission assignments.[^fn2][^fn1][^fn6] In these cases, this technique may be used in conjunction with [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003).


# Platform(s)

- Containers

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.006](https://attack.mitre.org/techniques/T1098/006)

[^fn1]: [Amazon Web Services. (n.d.). IAM roles for service accounts. Retrieved July 14, 2023.](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html)
[^fn2]: [Google Cloud. (n.d.). Create IAM policies. Retrieved July 14, 2023.](https://cloud.google.com/kubernetes-engine/docs/how-to/iam)
[^fn3]: [Kuberenets. (n.d.). Using ABAC Authorization. Retrieved July 14, 2023.](https://kubernetes.io/docs/reference/access-authn-authz/abac/)
[^fn4]: [Kubernetes. (n.d.). Role Based Access Control Good Practices. Retrieved March 8, 2023.](https://kubernetes.io/docs/concepts/security/rbac-good-practices/)
[^fn5]: [Michael Katchinskiy, Assaf Morag. (2023, April 21). First-Ever Attack Leveraging Kubernetes RBAC to Backdoor Clusters. Retrieved July 14, 2023.](https://blog.aquasec.com/leveraging-kubernetes-rbac-to-backdoor-clusters)
[^fn6]: [Microsoft Azure. (2023, April 28). Access and identity options for Azure Kubernetes Service (AKS). Retrieved July 14, 2023.](https://learn.microsoft.com/en-us/azure/aks/concepts-identity)