---
tags:
  - mitre/attack/tool
---

# Brute Ratel C4 (`S1063`)

[Brute Ratel C4](https://attack.mitre.org/software/S1063) is a commercial red-teaming and adversarial attack simulation tool that first appeared in December 2020. [Brute Ratel C4](https://attack.mitre.org/software/S1063) was specifically designed to avoid detection by endpoint detection and response (EDR) and antivirus (AV) capabilities, and deploys agents called badgers to enable arbitrary command execution for lateral movement, privilege escalation, and persistence. In September 2022, a cracked version of [Brute Ratel C4](https://attack.mitre.org/software/S1063) was leaked in the cybercriminal underground, leading to its use by threat actors.[^fn3][^fn4][^fn2][^fn6][^fn5]



# Platform(s)

- Windows

# Techniques Used

## Portable Executable Injection

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has injected [Latrodectus](https://attack.mitre.org/software/S1160) into the Explorer.exe process on comrpomised hosts.[\[Rapid7 Fake W2 July 2024\]](https://www.rapid7.com/blog/post/2024/07/24/malware-campaign-lures-users-with-fake-w2-form/)

- *Technique:* [[../Techniques/Portable Executable Injection (T1055.002)|Portable Executable Injection]]

## Service Execution


[Brute Ratel C4](https://attack.mitre.org/software/S1063) can create Windows system services for execution.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## Windows Command Shell

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use cmd.exe for execution.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Windows Remote Management

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use WinRM for pivoting.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Windows Remote Management (T1021.006)|Windows Remote Management]]

## Screen Capture

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can take screenshots on compromised hosts.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Process Discovery

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can enumerate all processes and locate specific process IDs (PIDs).[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Process Discovery (T1057)|Process Discovery]]

## Obfuscated Files or Information

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has used encrypted payload files and maintains an encrypted configuration structure in memory.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[MDSec Brute Ratel August 2022\]](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## Windows Management Instrumentation

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use WMI to move laterally.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Match Legitimate Resource Name or Location

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has used a payload file named OneDrive.update to appear benign.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Match Legitimate Resource Name or Location (T1036.005)|Match Legitimate Resource Name or Location]]

## SMB/Windows Admin Shares

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has the ability to use SMB to pivot in compromised networks.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[MDSec Brute Ratel August 2022\]](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)[\[Dark Vortex Brute Ratel C4\]](https://bruteratel.com/)

- *Technique:* [[../Techniques/SMB_Windows Admin Shares (T1021.002)|SMB/Windows Admin Shares]]

## Data from Local System


[Brute Ratel C4](https://attack.mitre.org/software/S1063) has the ability to upload files from a compromised system.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Deobfuscate/Decode Files or Information

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has the ability to deobfuscate its payload prior to execution.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Deobfuscate_Decode Files or Information (T1140)|Deobfuscate/Decode Files or Information]]

## Domain Groups

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use `net group` for discovery on targeted domains.[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## Protocol Tunneling

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use DNS over HTTPS for C2.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/Protocol Tunneling (T1572)|Protocol Tunneling]]

## Security Software Discovery

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can detect EDR userland hooks.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]

## Disable or Modify Tools

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has the ability to hide memory artifacts and to patch Event Tracing for Windows (ETW) and the Anti Malware Scan Interface (AMSI).[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[MDSec Brute Ratel August 2022\]](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)

- *Technique:* [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

## Masquerade File Type

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has used Microsoft Word icons to hide malicious LNK files.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Masquerade File Type (T1036.008)|Masquerade File Type]]

## Domain Account

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use LDAP queries, `net group "Domain Admins" /domain` and `net user /domain` for discovery.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Remote Services

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has the ability to use RPC for lateral movement.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Remote Services (T1021)|Remote Services]]

## Reflective Code Loading

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has used reflective loading to execute malicious DLLs.[\[MDSec Brute Ratel August 2022\]](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)

- *Technique:* [[../Techniques/Reflective Code Loading (T1620)|Reflective Code Loading]]

## Network Service Discovery

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can conduct port scanning against targeted systems.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Network Service Discovery (T1046)|Network Service Discovery]]

## Domain Trust Discovery

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use LDAP queries and `nltest /domain_trusts` for domain trust discovery.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Native API

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can call multiple Windows APIs for execution, to share memory, and defense evasion.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[MDSec Brute Ratel August 2022\]](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## Web Service

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use legitimate websites for external C2 channels including Slack, Discord, and MS Teams.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Web Service (T1102)|Web Service]]

## DNS

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use DNS over HTTPS for C2.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/DNS (T1071.004)|DNS]]

## Non-Application Layer Protocol

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has the ability to use TCP for external C2.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Non-Application Layer Protocol (T1095)|Non-Application Layer Protocol]]

## Ingress Tool Transfer


[Brute Ratel C4](https://attack.mitre.org/software/S1063) can download files to compromised hosts.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[Rapid7 Fake W2 July 2024\]](https://www.rapid7.com/blog/post/2024/07/24/malware-campaign-lures-users-with-fake-w2-form/)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Dynamic API Resolution

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can call and dynamically resolve hashed APIs.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Dynamic API Resolution (T1027.007)|Dynamic API Resolution]]

## Time Based Checks

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can call `NtDelayExecution` to pause execution.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[MDSec Brute Ratel August 2022\]](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)

- *Technique:* [[../Techniques/Time Based Checks (T1497.003)|Time Based Checks]]

## DLL

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has used search order hijacking to load a malicious payload DLL as a dependency to a benign application packaged in the same ISO.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/) [Brute Ratel C4](https://attack.mitre.org/software/S1063) has loaded a malicious DLL by spoofing the name of the legitimate Version.DLL and placing it in the same folder as the digitally-signed Microsoft binary OneDriveUpdater.exe.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/DLL (T1574.001)|DLL]]

## Kerberoasting

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can decode Kerberos 5 tickets and convert it to hashcat format for subsequent cracking.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

## Malicious File

[Brute Ratel C4](https://attack.mitre.org/software/S1063) has gained execution through users opening malicious documents.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)

- *Technique:* [[../Techniques/Malicious File (T1204.002)|Malicious File]]

## Web Protocols

[Brute Ratel C4](https://attack.mitre.org/software/S1063) can use HTTPS and HTTPS for C2 communication.[\[Palo Alto Brute Ratel July 2022\]](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]


# External References(s)

- [S1063](https://attack.mitre.org/software/S1063)

[^fn2]: [Chell, D.  PART 3: How I Met Your Beacon – Brute Ratel. Retrieved February 6, 2023.](https://www.mdsec.co.uk/2022/08/part-3-how-i-met-your-beacon-brute-ratel/)
[^fn3]: [Dark Vortex. (n.d.). A Customized Command and Control Center for Red Team and Adversary Simulation. Retrieved February 7, 2023.](https://bruteratel.com/)
[^fn4]: [Harbison, M. and Renals, P. (2022, July 5). When Pentest Tools Go Brutal: Red-Teaming Tool Being Abused by Malicious Actors. Retrieved February 1, 2023.](https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/)
[^fn5]: [Kenefick, I. et al. (2022, October 12). Black Basta Ransomware Gang Infiltrates Networks via QAKBOT, Brute Ratel, and Cobalt Strike. Retrieved February 6, 2023.](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)
[^fn6]: [Thomas, W. (2022, October 5). Cracked Brute Ratel C4 framework proliferates across the cybercriminal underground. Retrieved February 6, 2023.](https://www.sans.org/blog/cracked-brute-ratel-c4-framework-proliferates-across-the-cybercriminal-underground/)