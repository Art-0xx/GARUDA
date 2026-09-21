---
mitre_data:
  id: T1037.004
  linker_tags:
  - mitre/attack/linker/persistence/rc_scripts
  - mitre/attack/linker/privilege_escalation/rc_scripts
  name: RC Scripts
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# RC Scripts (`T1037.004`)

Adversaries may establish persistence by modifying RC scripts, which are executed during a Unix-like system’s startup. These files allow system administrators to map and start custom services at startup for different run levels. RC scripts require root privileges to modify.

Adversaries may establish persistence by adding a malicious binary path or shell commands to <code>rc.local</code>, <code>rc.common</code>, and other RC scripts specific to the Unix-like distribution.[^fn5][^fn8] Upon reboot, the system executes the script's contents as root, resulting in persistence.

Adversary abuse of RC scripts is especially effective for lightweight Unix-like distributions using the root user as default, such as ESXi hypervisors, IoT, or embedded systems.[^fn7] As ESXi servers store most system files in memory and therefore discard changes on shutdown, leveraging `/etc/rc.local.d/local.sh` is one of the few mechanisms for enabling persistence across reboots.[^fn3]

Several Unix-like systems have moved to Systemd and deprecated the use of RC scripts. This is now a deprecated mechanism in macOS in favor of Launchd.[^fn1][^fn2] This technique can be used on Mac OS X Panther v10.3 and earlier versions which still execute the RC scripts.[^fn6] To maintain backwards compatibility some systems, such as Ubuntu, will execute the RC scripts if they exist with the correct file permissions.[^fn4]


# Platform(s)

- macOS
- Linux
- Network Devices
- ESXi

# Parent Technique(s)

- [[../Techniques/Boot or Logon Initialization Scripts (T1037)|Boot or Logon Initialization Scripts]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1037.004](https://attack.mitre.org/techniques/T1037/004)

[^fn1]: [Apple. (2016, September 13). Daemons and Services Programming Guide - Creating Launch Daemons and Agents. Retrieved February 24, 2021.](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)
[^fn2]: [Apple. (2016, September 13). Startup Items. Retrieved July 11, 2017.](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/StartupItems.html)
[^fn3]: [Asher Langton. (2022, December 9). A Custom Python Backdoor for VMWare ESXi Servers. Retrieved March 26, 2025.](https://blogs.juniper.net/en-us/threat-research/a-custom-python-backdoor-for-vmware-esxi-servers)
[^fn4]: [Canonical Ltd.. (n.d.). systemd-rc-local-generator - Compatibility generator for starting /etc/rc.local and        /usr/sbin/halt.local during boot and shutdown. Retrieved February 23, 2021.](http://manpages.ubuntu.com/manpages/bionic/man8/systemd-rc-local-generator.8.html)
[^fn5]: [Iran Threats . (2017, December 5). Flying Kitten to Rocket Kitten, A Case of Ambiguity and Shared Code. Retrieved May 28, 2020.](https://iranthreats.github.io/resources/attribution-flying-rocket-kitten/)
[^fn6]: [Patrick Wardle. (2014, September). Methods of Malware Persistence on Mac OS X. Retrieved July 5, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)
[^fn7]: [Paul Litvak. (2020, May 4). Kaiji: New Chinese Linux malware turning to Golang. Retrieved December 17, 2020.](https://www.intezer.com/blog/research/kaiji-new-chinese-linux-malware-turning-to-golang/)
[^fn8]: [Sanmillan, I. (2019, May 29). HiddenWasp Malware Stings Targeted Linux Systems. Retrieved June 24, 2019.](https://www.intezer.com/blog-hiddenwasp-malware-targeting-linux-systems/)