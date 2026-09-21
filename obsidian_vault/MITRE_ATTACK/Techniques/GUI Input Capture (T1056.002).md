---
mitre_data:
  id: T1056.002
  linker_tags:
  - mitre/attack/linker/collection/gui_input_capture
  - mitre/attack/linker/credential_access/gui_input_capture
  name: GUI Input Capture
  related_tactics:
  - collection
  - credential_access
tags:
- mitre/attack/technique
---



# GUI Input Capture (`T1056.002`)

Adversaries may mimic common operating system GUI components to prompt users for credentials with a seemingly legitimate prompt. When programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: [Bypass User Account Control](https://attack.mitre.org/techniques/T1548/002)).

Adversaries may mimic this functionality to prompt users for credentials with a seemingly legitimate prompt for a number of reasons that mimic normal usage, such as a fake installer requiring additional access or a fake malware removal suite.[^fn5] This type of prompt can be used to collect credentials via various languages such as [AppleScript](https://attack.mitre.org/techniques/T1059/002)[^fn1][^fn3][^fn2] and [PowerShell](https://attack.mitre.org/techniques/T1059/001).[^fn1][^fn4][^fn2] On Linux systems adversaries may launch dialog boxes prompting users for credentials from malicious shell scripts or the command line (i.e. [Unix Shell](https://attack.mitre.org/techniques/T1059/004)).[^fn2]

Adversaries may also mimic common software authentication requests, such as those from browsers or email clients. This may also be paired with user activity monitoring (i.e., [Browser Information Discovery](https://attack.mitre.org/techniques/T1217) and/or [Application Window Discovery](https://attack.mitre.org/techniques/T1010)) to spoof prompts when users are naturally accessing sensitive sites/data.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Input Capture (T1056)|Input Capture]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1056.002](https://attack.mitre.org/techniques/T1056/002)

[^fn1]: [Foss, G. (2014, October 3). Do You Trust Your Computer?. Retrieved December 17, 2018.](https://logrhythm.com/blog/do-you-trust-your-computer/)
[^fn2]: [Johann Rehberger. (2021, April 18). Spoofing credential dialogs on macOS Linux and Windows. Retrieved August 19, 2021.](https://embracethered.com/blog/posts/2021/spoofing-credential-dialogs/)
[^fn3]: [Marc-Etienne M.Leveille. (2016, July 6). New OSX/Keydnap malware is hungry for credentials. Retrieved July 3, 2017.](https://www.welivesecurity.com/2016/07/06/new-osxkeydnap-malware-hungry-credentials/)
[^fn4]: [Nelson, M. (2015, January 21). Phishing for Credentials: If you want it, just ask!. Retrieved December 17, 2018.](https://enigma0x3.net/2015/01/21/phishing-for-credentials-if-you-want-it-just-ask/)
[^fn5]: [Sergei Shevchenko. (2015, June 4). New Mac OS Malware Exploits Mackeeper. Retrieved July 3, 2017.](https://baesystemsai.blogspot.com/2015/06/new-mac-os-malware-exploits-mackeeper.html)