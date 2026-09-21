---
mitre_data:
  id: T1113
  linker_tags:
  - mitre/attack/linker/collection/screen_capture
  name: Screen Capture
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Screen Capture (`T1113`)

Adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. Screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. Taking a screenshot is also typically possible through native utilities or API calls, such as <code>CopyFromScreen</code>, <code>xwd</code>, or <code>screencapture</code>.[^fn1][^fn2]



# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/RemoteUtilities|RemoteUtilities]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/ConnectWise|ConnectWise]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/Quick Assist|Quick Assist]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1113](https://attack.mitre.org/techniques/T1113)

[^fn1]: [Microsoft. (n.d.). Graphics.CopyFromScreen Method. Retrieved March 24, 2020.](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.graphics.copyfromscreen?view=netframework-4.8)
[^fn2]: [Thomas Reed. (2017, January 18). New Mac backdoor using antiquated code. Retrieved July 5, 2017.](https://blog.malwarebytes.com/threat-analysis/2017/01/new-mac-backdoor-using-antiquated-code/)