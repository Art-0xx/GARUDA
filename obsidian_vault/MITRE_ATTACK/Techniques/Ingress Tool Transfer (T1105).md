---
mitre_data:
  id: T1105
  linker_tags:
  - mitre/attack/linker/command_and_control/ingress_tool_transfer
  name: Ingress Tool Transfer
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Ingress Tool Transfer (`T1105`)

Adversaries may transfer tools or other files from an external system into a compromised environment. Tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as [ftp](https://attack.mitre.org/software/S0095). Once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. [Lateral Tool Transfer](https://attack.mitre.org/techniques/T1570)). 

On Windows, adversaries may use various utilities to download tools, such as `copy`, `finger`, [certutil](https://attack.mitre.org/software/S0160), and [PowerShell](https://attack.mitre.org/techniques/T1059/001) commands such as <code>IEX(New-Object Net.WebClient).downloadString()</code> and <code>Invoke-WebRequest</code>. On Linux and macOS systems, a variety of utilities also exist, such as `curl`, `scp`, `sftp`, `tftp`, `rsync`, `finger`, and `wget`.[^fn5]  A number of these tools, such as `wget`, `curl`, and `scp`, also exist on ESXi. After downloading a file, a threat actor may attempt to verify its integrity by checking its hash value (e.g., via `certutil -hashfile`).[^fn2]

Adversaries may also abuse installers and package managers, such as `yum` or `winget`, to download tools to victim hosts. Adversaries have also abused file application features, such as the Windows `search-ms` protocol handler, to deliver malicious files to victims through remote file searches invoked by [User Execution](https://attack.mitre.org/techniques/T1204) (typically after interacting with [Phishing](https://attack.mitre.org/techniques/T1566) lures).[^fn1]

Files can also be transferred using various [Web Service](https://attack.mitre.org/techniques/T1102)s as well as native or otherwise present tools on the victim system.[^fn6] In some cases, adversaries may be able to leverage services that sync between a web-based and an on-premises client, such as Dropbox or OneDrive, to transfer files onto victim systems. For example, by compromising a cloud account and logging into the service's web portal, an adversary may be able to trigger an automatic syncing process that transfers the file onto the victim's machine.[^fn3]


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/RemoteUtilities|RemoteUtilities]]
- [[../Tools/certutil|certutil]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/CARROTBALL|CARROTBALL]]
- [[../Tools/BITSAdmin|BITSAdmin]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/MCMD|MCMD]]
- [[../Tools/Donut|Donut]]
- [[../Tools/cmd|cmd]]
- [[../Tools/esentutl|esentutl]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/ftp|ftp]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1105](https://attack.mitre.org/techniques/T1105)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn1]: [ Mathanraj Thangaraju, Sijo Jacob. (2023, July 26). Beyond File Search: A Novel Method for Exploiting the "search-ms" URI Protocol Handler. Retrieved March 15, 2024.](https://www.trellix.com/blogs/research/beyond-file-search-a-novel-method/)
[^fn2]: [COSMICENERGY: New OT Malware Possibly Related To Russian Emergency Response Exercises. (2023, May 25). Ken Proska, Daniel Kapellmann Zafra, Keith Lunden, Corey Hildebrandt, Rushikesh Nandedkar, Nathan Brubaker. Retrieved March 18, 2025.](https://cloud.google.com/blog/topics/threat-intelligence/cosmicenergy-ot-malware-russian-response/)
[^fn3]: [David Talbot. (2013, August 21). Dropbox and Similar Services Can Sync Malware. Retrieved May 31, 2023.](https://www.technologyreview.com/2013/08/21/83143/dropbox-and-similar-services-can-sync-malware/)
[^fn5]: [LOLBAS. (n.d.). LOLBAS Mapped to T1105. Retrieved March 11, 2022.](https://lolbas-project.github.io/#t1105)
[^fn6]: [Positive Technologies. (2016, December 16). Cobalt Snatch. Retrieved October 9, 2018.](https://www.ptsecurity.com/upload/corporate/ww-en/analytics/Cobalt-Snatch-eng.pdf)