---
mitre_data:
  id: T1091
  linker_tags:
  - mitre/attack/linker/lateral_movement/replication_through_removable_media
  - mitre/attack/linker/initial_access/replication_through_removable_media
  name: Replication Through Removable Media
  related_tactics:
  - lateral_movement
  - initial_access
tags:
- mitre/attack/technique
---



# Replication Through Removable Media (`T1091`)

Adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of Autorun features when the media is inserted into a system and executes. In the case of Lateral Movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. In the case of Initial Access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.

Mobile devices may also be used to infect PCs with malware if connected via USB.[^fn3] This infection may be achieved using devices (Android, iOS, etc.) and, in some instances, USB charging cables.[^fn1][^fn2] For example, when a smartphone is connected to a system, it may appear to be mounted similar to a USB-connected disk drive. If malware that is compatible with the connected system is on the mobile device, the malware could infect the machine (especially if Autorun features are enabled).


# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]
- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1091](https://attack.mitre.org/techniques/T1091)

[^fn1]: [Lucian Constantin. (2014, January 23). Windows malware tries to infect Android devices connected to PCs. Retrieved May 25, 2022.](https://www.computerworld.com/article/2486903/windows-malware-tries-to-infect-android-devices-connected-to-pcs.html)
[^fn2]: [Zack Whittaker. (2019, August 12). This hacker’s iPhone charging cable can hijack your computer. Retrieved May 25, 2022.](https://techcrunch.com/2019/08/12/iphone-charging-cable-hack-computer-def-con/)
[^fn3]: [Zhaohui Wang & Angelos Stavrou. (n.d.). Exploiting Smart-Phone USB Connectivity For Fun And Profit. Retrieved May 25, 2022.](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.226.3427&rep=rep1&type=pdf)