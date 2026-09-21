---
mitre_data:
  id: T1125
  linker_tags:
  - mitre/attack/linker/collection/video_capture
  name: Video Capture
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Video Capture (`T1125`)

An adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. Images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.

Malware or scripts may be used to interact with the devices through an available API provided by the operating system or an application to capture video or images. Video or image files may be written to disk and exfiltrated later. This technique differs from [Screen Capture](https://attack.mitre.org/techniques/T1113) due to use of specific devices or applications for video recording rather than capturing the victim's screen.

In macOS, there are a few different malware samples that record the user's webcam such as FruitFly and Proton. [^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/ConnectWise|ConnectWise]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]
- [[../Tools/Quick Assist|Quick Assist]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1125](https://attack.mitre.org/techniques/T1125)

[^fn1]: [Patrick Wardle. (n.d.). Retrieved March 20, 2018.](https://objective-see.com/blog/blog_0x25.html)