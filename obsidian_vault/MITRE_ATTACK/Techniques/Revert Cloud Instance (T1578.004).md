---
mitre_data:
  id: T1578.004
  linker_tags:
  - mitre/attack/linker/defense_impairment/revert_cloud_instance
  name: Revert Cloud Instance
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Revert Cloud Instance (`T1578.004`)

An adversary may revert changes made to a cloud instance after they have performed malicious activities in attempt to evade detection and remove evidence of their presence. In highly virtualized environments, such as cloud-based infrastructure, this may be accomplished by restoring virtual machine (VM) or data storage snapshots through the cloud management dashboard or cloud APIs.

Another variation of this technique is to utilize temporary storage attached to the compute instance. Most cloud providers provide various types of storage including persistent, local, and/or ephemeral, with the ephemeral types often reset upon stop/restart of the VM.[^fn2][^fn1]


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Modify Cloud Compute Infrastructure (T1578)|Modify Cloud Compute Infrastructure]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1578.004](https://attack.mitre.org/techniques/T1578/004)

[^fn1]: [Google. (2019, October 7). Restoring and deleting persistent disk snapshots. Retrieved October 8, 2019.](https://cloud.google.com/compute/docs/disks/restore-and-delete-snapshots)
[^fn2]: [Hardiman, N.. (2012, March 20). Backing up and restoring snapshots on Amazon EC2 machines. Retrieved October 8, 2019.](https://www.techrepublic.com/blog/the-enterprise-cloud/backing-up-and-restoring-snapshots-on-amazon-ec2-machines/)