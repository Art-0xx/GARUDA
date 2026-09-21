---
tags:
  - mitre/attack/tool
---

# Quick Assist (`S1209`)

[Quick Assist](https://attack.mitre.org/software/S1209) is a remote assistance tool primarily for Microsoft Windows, although a macOS version also exists. [Quick Assist](https://attack.mitre.org/software/S1209) allows for remote screen sharing and, with end user approval, remote control and command execution on the enabling device.[^fn1][^fn2]



# Platform(s)

- Windows
- macOS

# Techniques Used

## Web Protocols

[Quick Assist](https://attack.mitre.org/software/S1209) communicates over TCP 443 via HTTPS to a remote session server, under which RDP traffic is transferred.[\[Microsoft Quick Assist 2024\]](https://learn.microsoft.com/en-us/windows/client-management/client-tools/quick-assist)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Screen Capture

[Quick Assist](https://attack.mitre.org/software/S1209) allows for the remote administrator to take screenshots of the running system.[\[Microsoft Quick Assist 2024\]](https://learn.microsoft.com/en-us/windows/client-management/client-tools/quick-assist)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]

## Video Capture

[Quick Assist](https://attack.mitre.org/software/S1209) allows for the remote administrator to view the interactive session of the running machine, including full screen activity.[\[Microsoft Quick Assist 2024\]](https://learn.microsoft.com/en-us/windows/client-management/client-tools/quick-assist)[\[Microsoft Storm-1811 2024\]](https://www.microsoft.com/en-us/security/blog/2024/05/15/threat-actors-misusing-quick-assist-in-social-engineering-attacks-leading-to-ransomware/)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]


# External References(s)

- [S1209](https://attack.mitre.org/software/S1209)

[^fn1]: [Microsoft Threat Intelligence. (2024, May 15). Threat actors misusing Quick Assist in social engineering attacks leading to ransomware. Retrieved March 14, 2025.](https://www.microsoft.com/en-us/security/blog/2024/05/15/threat-actors-misusing-quick-assist-in-social-engineering-attacks-leading-to-ransomware/)
[^fn2]: [Microsoft. (2024, September 4). Use Quick Assist to help users. Retrieved March 14, 2025.](https://learn.microsoft.com/en-us/windows/client-management/client-tools/quick-assist)