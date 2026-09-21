---
mitre_data:
  id: T1647
  linker_tags:
  - mitre/attack/linker/defense_impairment/plist_file_modification
  name: Plist File Modification
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Plist File Modification (`T1647`)

Adversaries may modify property list files (plist files) to enable other malicious activity, while also potentially evading and bypassing system defenses. macOS applications use plist files, such as the <code>info.plist</code> file, to store properties and configuration settings that inform the operating system how to handle the application at runtime. Plist files are structured metadata in key-value pairs formatted in XML based on Apple's Core Foundation DTD. Plist files can be saved in text or binary format.[^fn2] 

Adversaries can modify key-value pairs in plist files to influence system behaviors, such as hiding the execution of an application (i.e. [Hidden Window](https://attack.mitre.org/techniques/T1564/003)) or running additional commands for persistence (ex: [Launch Agent](https://attack.mitre.org/techniques/T1543/001)/[Launch Daemon](https://attack.mitre.org/techniques/T1543/004) or [Re-opened Applications](https://attack.mitre.org/techniques/T1547/007)).

For example, adversaries can add a malicious application path to the `~/Library/Preferences/com.apple.dock.plist` file, which controls apps that appear in the Dock. Adversaries can also modify the <code>LSUIElement</code> key in an application’s <code>info.plist</code> file  to run the app in the background. Adversaries can also insert key-value pairs to insert environment variables, such as <code>LSEnvironment</code>, to enable persistence via [Dynamic Linker Hijacking](https://attack.mitre.org/techniques/T1574/006).[^fn3][^fn1]


# Platform(s)

- macOS

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1647](https://attack.mitre.org/techniques/T1647)

[^fn1]: [ESET. (2012, January 1). OSX/Flashback. Retrieved April 19, 2022.](https://www.welivesecurity.com/wp-content/uploads/200x/white-papers/osx_flashback.pdf)
[^fn2]: [FileInfo.com team. (2019, November 26). .PLIST File Extension. Retrieved October 12, 2021.](https://fileinfo.com/extension/plist)
[^fn3]: [Patrick Wardle. (2022, January 1). The Art of Mac Malware Volume 0x1:Analysis. Retrieved April 19, 2022.](https://taomm.org/PDFs/vol1/CH%200x02%20Persistence.pdf)