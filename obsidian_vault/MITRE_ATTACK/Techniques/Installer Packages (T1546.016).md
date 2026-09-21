---
mitre_data:
  id: T1546.016
  linker_tags:
  - mitre/attack/linker/privilege_escalation/installer_packages
  - mitre/attack/linker/persistence/installer_packages
  name: Installer Packages
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Installer Packages (`T1546.016`)

Adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content. Installer packages are OS specific and contain the resources an operating system needs to install applications on a system. Installer packages can include scripts that run prior to installation as well as after installation is complete. Installer scripts may inherit elevated permissions when executed. Developers often use these scripts to prepare the environment for installation, check requirements, download dependencies, and remove files after installation.[^fn6]

Using legitimate applications, adversaries have distributed applications with modified installer scripts to execute malicious content. When a user installs the application, they may be required to grant administrative permissions to allow the installation. At the end of the installation process of the legitimate application, content such as macOS `postinstall` scripts can be executed with the inherited elevated permissions. Adversaries can use these scripts to execute a malicious executable or install other malicious components (such as a [Launch Daemon](https://attack.mitre.org/techniques/T1543/004)) with the elevated permissions.[^fn1][^fn5][^fn3][^fn2]

Depending on the distribution, Linux versions of package installer scripts are sometimes called maintainer scripts or post installation scripts. These scripts can include `preinst`, `postinst`, `prerm`, `postrm` scripts and run as root when executed.

For Windows, the Microsoft Installer services uses `.msi` files to manage the installing, updating, and uninstalling of applications. These installation routines may also include instructions to perform additional actions that may be abused by adversaries.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.016](https://attack.mitre.org/techniques/T1546/016)

[^fn1]: [Brandon Dalton. (2022, August 9). A bundle of nerves: Tweaking macOS security controls to thwart application bundle manipulation. Retrieved September 27, 2022.](https://redcanary.com/blog/mac-application-bundles/)
[^fn2]: [Debian Policy Manual v4.6.1.1. (2022, August 14). Package maintainer scripts and installation procedure. Retrieved September 27, 2022.](https://www.debian.org/doc/debian-policy/ch-maintainerscripts.html#s-mscriptsinstact)
[^fn3]: [Global Research & Analysis Team, Kaspersky Lab (GReAT). (2018, August 23). Operation AppleJeus: Lazarus hits cryptocurrency exchange with fake installer and macOS malware. Retrieved September 27, 2022.](https://securelist.com/operation-applejeus/87553/)
[^fn4]: [Microsoft. (2021, January 7). Installation Procedure Tables Group. Retrieved December 27, 2023.](https://learn.microsoft.com/windows/win32/msi/installation-procedure-tables-group)
[^fn5]: [Patrick Wardle. (2020, June 29). OSX.EvilQuest Uncovered part i: infection, persistence, and more!. Retrieved March 18, 2021.](https://objective-see.com/blog/blog_0x59.html)
[^fn6]: [Rich Trouton. (2019, August 9). Installer Package Scripting: Making your deployments easier, one ! at a time. Retrieved September 27, 2022.](https://cpb-us-e1.wpmucdn.com/sites.psu.edu/dist/4/24696/files/2019/07/psumac2019-345-Installer-Package-Scripting-Making-your-deployments-easier-one-at-a-time.pdf)