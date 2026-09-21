---
mitre_data:
  id: T1543.004
  linker_tags:
  - mitre/attack/linker/persistence/launch_daemon
  - mitre/attack/linker/privilege_escalation/launch_daemon
  name: Launch Daemon
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Launch Daemon (`T1543.004`)

Adversaries may create or modify Launch Daemons to execute malicious payloads as part of persistence. Launch Daemons are plist files used to interact with Launchd, the service management framework used by macOS. Launch Daemons require elevated privileges to install, are executed for every user on a system prior to login, and run in the background without the need for user interaction. During the macOS initialization startup, the launchd process loads the parameters for launch-on-demand system-level daemons from plist files found in <code>/System/Library/LaunchDaemons/</code> and <code>/Library/LaunchDaemons/</code>. Required Launch Daemons parameters include a <code>Label</code> to identify the task, <code>Program</code> to provide a path to the executable, and <code>RunAtLoad</code> to specify when the task is run. Launch Daemons are often used to provide access to shared resources, updates to software, or conduct automation tasks.[^fn1][^fn5][^fn4]

Adversaries may install a Launch Daemon configured to execute at startup by using the <code>RunAtLoad</code> parameter set to <code>true</code> and the <code>Program</code> parameter set to the malicious executable path. The daemon name may be disguised by using a name from a related operating system or benign software (i.e. [Masquerading](https://attack.mitre.org/techniques/T1036)). When the Launch Daemon is executed, the program inherits administrative permissions.[^fn3][^fn6]

Additionally, system configuration changes (such as the installation of third party package managing software) may cause folders such as <code>usr/local/bin</code> to become globally writeable. So, it is possible for poor configurations to allow an adversary to modify executables referenced by current Launch Daemon's plist files.[^fn2][^fn7]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Create or Modify System Process (T1543)|Create or Modify System Process]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1543.004](https://attack.mitre.org/techniques/T1543/004)

[^fn1]: [Apple. (n.d.). Creating Launch Daemons and Agents. Retrieved July 10, 2017.](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)
[^fn2]: [Bradley Kemp. (2021, May 10). LaunchDaemon Hijacking: privilege escalation and persistence via insecure folder permissions. Retrieved July 26, 2021.](https://bradleyjkemp.dev/post/launchdaemon-hijacking/)
[^fn3]: [Claud Xiao. (n.d.). WireLurker: A New Era in iOS and OS X Malware. Retrieved July 10, 2017.](https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/reports/Unit_42/unit42-wirelurker.pdf)
[^fn4]: [Dennis German. (2020, November 20). launchd Keywords for plists. Retrieved October 7, 2021.](https://www.real-world-systems.com/docs/launchdPlist.1.html)
[^fn5]: [Patrick Wardle. (2014, September). Methods of Malware Persistence on Mac OS X. Retrieved July 5, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)
[^fn6]: [Patrick Wardle. (2016, February 29). Let's Play Doctor: Practical OS X Malware Detection & Analysis. Retrieved November 17, 2024.](https://papers.put.as/papers/macosx/2016/RSA_OSX_Malware.pdf)
[^fn7]: [Stokes, Phil. (2019, June 17). HOW MALWARE PERSISTS ON MACOS. Retrieved September 10, 2019.](https://www.sentinelone.com/blog/how-malware-persists-on-macos/)