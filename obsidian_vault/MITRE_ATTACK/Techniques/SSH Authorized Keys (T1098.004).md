---
mitre_data:
  id: T1098.004
  linker_tags:
  - mitre/attack/linker/persistence/ssh_authorized_keys
  - mitre/attack/linker/privilege_escalation/ssh_authorized_keys
  name: SSH Authorized Keys
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# SSH Authorized Keys (`T1098.004`)

Adversaries may modify the SSH <code>authorized_keys</code> file to maintain persistence on a victim host. Linux distributions, macOS, and ESXi hypervisors commonly use key-based authentication to secure the authentication process of SSH sessions for remote management. The <code>authorized_keys</code> file in SSH specifies the SSH keys that can be used for logging into the user account for which the file is configured. This file is usually found in the user's home directory under <code>&lt;user-home&gt;/.ssh/authorized_keys</code> (or, on ESXi, `/etc/ssh/keys-<username>/authorized_keys`).[^fn8] Users may edit the system’s SSH config file to modify the directives `PubkeyAuthentication` and `RSAAuthentication` to the value `yes` to ensure public key and RSA authentication are enabled, as well as modify the directive `PermitRootLogin` to the value `yes` to enable root authentication via SSH.[^fn2] The SSH config file is usually located under <code>/etc/ssh/sshd_config</code>.

Adversaries may modify SSH <code>authorized_keys</code> files directly with scripts or shell commands to add their own adversary-supplied public keys. In cloud environments, adversaries may be able to modify the SSH authorized_keys file of a particular virtual machine via the command line interface or rest API. For example, by using the Google Cloud CLI’s “add-metadata” command an adversary may add SSH keys to a user account.[^fn6][^fn3] Similarly, in Azure, an adversary may update the authorized_keys file of a virtual machine via a PATCH request to the API.[^fn7] This ensures that an adversary possessing the corresponding private key may log in as an existing user via SSH.[^fn1][^fn5] It may also lead to privilege escalation where the virtual machine or instance has distinct permissions from the requesting user.

Where authorized_keys files are modified via cloud APIs or command line interfaces, an adversary may achieve privilege escalation on the target virtual machine if they add a key to a higher-privileged user. 

SSH keys can also be added to accounts on network devices, such as with the `ip ssh pubkey-chain` [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) command.[^fn4]


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Network Devices

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.004](https://attack.mitre.org/techniques/T1098/004)

[^fn1]: [Blachman, Y. (2020, April 22). Growing Abuse of SSH Keys: Commodity Malware Campaigns Now Equipped with SSH Capabilities. Retrieved June 24, 2020.](https://www.venafi.com/blog/growing-abuse-ssh-keys-commodity-malware-campaigns-now-equipped-ssh-capabilities)
[^fn2]: [Broadcom. (2024, December 12). Allowing SSH access to VMware vSphere ESXi/ESX hosts with public/private key authentication. Retrieved March 26, 2025.](https://knowledge.broadcom.com/external/article/313767/allowing-ssh-access-to-vmware-vsphere-es.html)
[^fn3]: [Chris Moberly. (2020, February 12). Tutorial on privilege escalation and post exploitation tactics in Google Cloud Platform environments. Retrieved April 1, 2022.](https://about.gitlab.com/blog/2020/02/12/plundering-gcp-escalating-privileges-in-google-cloud-platform/)
[^fn4]: [Cisco. (2021, August 23). ip ssh pubkey-chain. Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/d1/sec-d1-cr-book/sec-cr-i3.html#wp1254331478)
[^fn5]: [Cybereason Nocturnus. (2019, June 13). New Pervasive Worm Exploiting Linux Exim Server Vulnerability. Retrieved June 24, 2020.](https://www.cybereason.com/blog/new-pervasive-worm-exploiting-linux-exim-server-vulnerability)
[^fn6]: [Google Cloud. (2022, March 31). gcloud compute instances add-metadata. Retrieved April 1, 2022.](https://cloud.google.com/sdk/gcloud/reference/compute/instances/add-metadata)
[^fn7]: [Microsoft. (n.d.). Virtual Machines - Update. Retrieved April 1, 2022.](https://docs.microsoft.com/en-us/rest/api/compute/virtual-machines/update)
[^fn8]: [ssh.com. (n.d.). Authorized_keys File in SSH. Retrieved June 24, 2020.](https://www.ssh.com/ssh/authorized_keys/)