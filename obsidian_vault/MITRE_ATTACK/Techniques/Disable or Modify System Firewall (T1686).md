---
mitre_data:
  id: T1686
  linker_tags:
  - mitre/attack/linker/defense_impairment/disable_or_modify_system_firewall
  name: Disable or Modify System Firewall
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Disable or Modify System Firewall (`T1686`)

Adversaries may disable or modify host-based or network firewalls to impair defensive mechanisms and enable further action. Once an adversary has gathered sufficient privileges, they can tamper with firewall services, policies, or rule sets to remove restrictions on inbound or outbound traffic. For example, this may include turning off firewall profiles, altering existing rules to permit previously blocked ports or protocols, or adding new rules that create covert communication paths (e.g., adding a new firewall rule for a well-known protocol (such as RDP) using a non-traditional and potentially less securitized port.[^fn3]

Adversaries may disable or modify firewalls using different behaviors, depending on the platform. For example, in ESXi, firewall rules may be modified directly via the esxcli (e.g., via esxcli network firewall set) or via the vCenter user interface.[^fn1][^fn2]


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Windows Host Firewall (T1686.003)|Windows Host Firewall]]
- [[../Techniques/Network Device Firewall (T1686.002)|Network Device Firewall]]
- [[../Techniques/Cloud Firewall (T1686.001)|Cloud Firewall]]

# Tool(s)

- [[../Tools/netsh|netsh]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1686](https://attack.mitre.org/techniques/T1686)

[^fn1]: [Broadcom. (2025, March 24). Add Allowed IP Addresses for an ESXi Host by Using the VMware Host Client. Retrieved March 26, 2025.](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/7-0/add-allowed-ip-addresses-for-an-esxi-host-by-using-the-vmware-host-client.html)
[^fn2]: [Pham Duy Phuc, Max Kersten, Noël Keijzer, and Michaël Schrijver. (2024, February 14). RansomHouse am See. Retrieved March 26, 2025.](https://www.trellix.com/en-au/blogs/research/ransomhouse-am-see/)
[^fn3]: [The DFIR Report. (2022, March 1). "Change RDP port" #ContiLeaks. Retrieved September 12, 2024.](https://x.com/TheDFIRReport/status/1498657772254240768)