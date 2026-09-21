---
mitre_data:
  id: T1056.001
  linker_tags:
  - mitre/attack/linker/collection/keylogging
  - mitre/attack/linker/credential_access/keylogging
  name: Keylogging
  related_tactics:
  - collection
  - credential_access
tags:
- mitre/attack/technique
---



# Keylogging (`T1056.001`)

Adversaries may log user keystrokes to intercept credentials as the user types them. Keylogging is likely to be used to acquire credentials for new access opportunities when [OS Credential Dumping](https://attack.mitre.org/techniques/T1003) efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured. In order to increase the likelihood of capturing credentials quickly, an adversary may also perform actions such as clearing browser cookies to force users to reauthenticate to systems.[^fn1]

Keylogging is the most prevalent type of input capture, with many different ways of intercepting keystrokes.[^fn3] Some methods include:

* Hooking API callbacks used for processing keystrokes. Unlike [Credential API Hooking](https://attack.mitre.org/techniques/T1056/004), this focuses solely on API functions intended for processing keystroke data.
* Reading raw keystroke data from the hardware buffer.
* Windows Registry modifications.
* Custom drivers.
* [Modify System Image](https://attack.mitre.org/techniques/T1601) may provide adversaries with hooks into the operating system of network devices to read raw keystrokes for login sessions.[^fn2] 


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Input Capture (T1056)|Input Capture]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/DCRAT|DCRAT]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]
- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1056.001](https://attack.mitre.org/techniques/T1056/001)

[^fn1]: [An, J and Malhotra, A. (2021, November 10). North Korean attackers use malicious blogs to deliver malware to high-profile South Korean targets. Retrieved December 29, 2021.](https://blog.talosintelligence.com/2021/11/kimsuky-abuses-blogs-delivers-malware.html)
[^fn2]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)
[^fn3]: [Tinaztepe,  E. (n.d.). The Adventures of a Keystroke:  An in-depth look into keyloggers on Windows. Retrieved April 27, 2016.](http://opensecuritytraining.info/Keylogging_files/The%20Adventures%20of%20a%20Keystroke.pdf)