---
mitre_data:
  id: T1133
  linker_tags:
  - mitre/attack/linker/persistence/external_remote_services
  - mitre/attack/linker/initial_access/external_remote_services
  name: External Remote Services
  related_tactics:
  - persistence
  - initial_access
tags:
- mitre/attack/technique
---



# External Remote Services (`T1133`)

Adversaries may leverage external-facing remote services to initially access and/or persist within a network. Remote services such as VPNs, Citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. There are often remote service gateways that manage connections and credential authentication for these services. Services such as [Windows Remote Management](https://attack.mitre.org/techniques/T1021/006) and [VNC](https://attack.mitre.org/techniques/T1021/005) can also be used externally.[^fn2]

Access to [Valid Accounts](https://attack.mitre.org/techniques/T1078) to use the service is often a requirement, which could be obtained through credential pharming or by obtaining the credentials from users after compromising the enterprise network.[^fn1] Access to remote services may be used as a redundant or persistent access mechanism during an operation.

Access may also be gained through an exposed service that doesn’t require authentication. In containerized environments, this may include an exposed Docker API, Kubernetes API server, kubelet, or web application such as the Kubernetes dashboard.[^fn6][^fn3]

Adversaries may also establish persistence on network by configuring a Tor hidden service on a compromised system. Adversaries may utilize the tool `ShadowLink` to facilitate the installation and configuration of the Tor hidden service. Tor hidden service is then accessible via the Tor network because `ShadowLink` sets up a .onion address on the compromised system. `ShadowLink` may be used to forward any inbound connections to RDP, allowing the adversaries to have remote access.[^fn5] Adversaries may get `ShadowLink` to persist on a system by masquerading it as an MS Defender application.[^fn4]


# Platform(s)

- Containers
- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1133](https://attack.mitre.org/techniques/T1133)

[^fn1]: [Adair, S. (2015, October 7). Virtual Private Keylogging: Cisco Web VPNs Leveraged for Access and Persistence. Retrieved March 20, 2017.](https://www.volexity.com/blog/2015/10/07/virtual-private-keylogging-cisco-web-vpns-leveraged-for-access-and-persistence/)
[^fn2]: [Apple Support. (n.d.). Set up a computer running VNC software for Remote Desktop. Retrieved August 18, 2021.](https://support.apple.com/guide/remote-desktop/set-up-a-computer-running-vnc-software-apdbed09830/mac)
[^fn3]: [Chen, J. et al. (2021, February 3). Hildegard: New TeamTNT Cryptojacking Malware Targeting Kubernetes. Retrieved April 5, 2021.](https://unit42.paloaltonetworks.com/hildegard-malware-teamtnt/)
[^fn4]: [Microsoft Threat Intelligence. (2023, December 7). Russian threat actors dig in, prepare to seize on war fatigue. Retrieved June 18, 2025.](https://www.microsoft.com/en-us/security/security-insider/intelligence-reports/russian-threat-actors-dig-in-prepare-to-seize-on-war-fatigue)
[^fn5]: [Microsoft Threat Intelligence. (2025, February 12). The BadPilot campaign: Seashell Blizzard subgroup conducts multiyear global access operation. Retrieved June 18, 2025.](https://www.microsoft.com/en-us/security/blog/2025/02/12/the-badpilot-campaign-seashell-blizzard-subgroup-conducts-multiyear-global-access-operation/?ref=thestack.technology)
[^fn6]: [Remillano II, A., et al. (2020, June 20). XORDDoS, Kaiji Variants Target Exposed Docker Servers. Retrieved April 5, 2021.](https://www.trendmicro.com/en_us/research/20/f/xorddos-kaiji-botnet-malware-variants-target-exposed-docker-servers.html)