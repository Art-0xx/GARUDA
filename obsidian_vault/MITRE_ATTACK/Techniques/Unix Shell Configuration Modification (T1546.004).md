---
mitre_data:
  id: T1546.004
  linker_tags:
  - mitre/attack/linker/privilege_escalation/unix_shell_configuration_modification
  - mitre/attack/linker/persistence/unix_shell_configuration_modification
  name: Unix Shell Configuration Modification
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Unix Shell Configuration Modification (`T1546.004`)

Adversaries may establish persistence through executing malicious commands triggered by a user’s shell. User [Unix Shell](https://attack.mitre.org/techniques/T1059/004)s execute several configuration scripts at different points throughout the session based on events. For example, when a user opens a command-line interface or remotely logs in (such as via SSH) a login shell is initiated. The login shell executes scripts from the system (<code>/etc</code>) and the user’s home directory (<code>~/</code>) to configure the environment. All login shells on a system use /etc/profile when initiated. These configuration scripts run at the permission level of their directory and are often used to set environment variables, create aliases, and customize the user’s environment. When the shell exits or terminates, additional shell scripts are executed to ensure the shell exits appropriately. 

Adversaries may attempt to establish persistence by inserting commands into scripts automatically executed by shells. Using bash as an example, the default shell for most GNU/Linux systems, adversaries may add commands that launch malicious binaries into the <code>/etc/profile</code> and <code>/etc/profile.d</code> files.[^fn12][^fn5] These files typically require root permissions to modify and are executed each time any shell on a system launches. For user level permissions, adversaries can insert malicious commands into <code>~/.bash_profile</code>, <code>~/.bash_login</code>, or <code>~/.profile</code> which are sourced when a user opens a command-line interface or connects remotely.[^fn2][^fn3] Since the system only executes the first existing file in the listed order, adversaries have used <code>~/.bash_profile</code> to ensure execution. Adversaries have also leveraged the <code>~/.bashrc</code> file which is additionally executed if the connection is established remotely or an additional interactive shell is opened, such as a new tab in the command-line interface.[^fn8][^fn2][^fn1][^fn7] Some malware targets the termination of a program to trigger execution, adversaries can use the <code>~/.bash_logout</code> file to execute malicious commands at the end of a session. 

For macOS, the functionality of this technique is similar but may leverage zsh, the default shell for macOS 10.15+. When the Terminal.app is opened, the application launches a zsh login shell and a zsh interactive shell. The login shell configures the system environment using <code>/etc/profile</code>, <code>/etc/zshenv</code>, <code>/etc/zprofile</code>, and <code>/etc/zlogin</code>.[^fn4][^fn9][^fn10][^fn6] The login shell then configures the user environment with <code>~/.zprofile</code> and <code>~/.zlogin</code>. The interactive shell uses the <code>~/.zshrc</code> to configure the user environment. Upon exiting, <code>/etc/zlogout</code> and <code>~/.zlogout</code> are executed. For legacy programs, macOS executes <code>/etc/bashrc</code> on startup.


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.004](https://attack.mitre.org/techniques/T1546/004)
- [Patrick Wardle. (2019, September 17). Writing a File Monitor with Apple's Endpoint Security Framework. Retrieved December 17, 2020.](https://objective-see.com/blog/blog_0x48.html)

[^fn1]: [Anomali Threat Research. (2018, December 6). Pulling Linux Rabbit/Rabbot Malware Out of a Hat. Retrieved December 17, 2020.](https://www.anomali.com/blog/pulling-linux-rabbit-rabbot-malware-out-of-a-hat)
[^fn2]: [Anomali Threat Research. (2019, October 15). Illicit Cryptomining Threat Actor Rocke Changes Tactics, Now More Difficult to Detect. Retrieved December 17, 2020.](https://www.anomali.com/blog/illicit-cryptomining-threat-actor-rocke-changes-tactics-now-more-difficult-to-detect)
[^fn3]: [ArchWiki. (2021, January 19). Bash. Retrieved February 25, 2021.](https://wiki.archlinux.org/index.php/Bash#Invocation)
[^fn4]: [Armin Briegel. (2019, June 5). Moving to zsh, part 2: Configuration Files. Retrieved February 25, 2021.](https://scriptingosx.com/2019/06/moving-to-zsh-part-2-configuration-files/)
[^fn5]: [Benjamin Cane. (2013, September 16). Understanding a little more about /etc/profile and /etc/bashrc. Retrieved September 25, 2024.](https://web.archive.org/web/20220316014323/http://bencane.com/2013/09/16/understanding-a-little-more-about-etcprofile-and-etcbashrc/)
[^fn6]: [Cedric Owens. (2021, May 22). macOS MS Office Sandbox Brain Dump. Retrieved August 20, 2021.](https://cedowens.medium.com/macos-ms-office-sandbox-brain-dump-4509b5fed49a)
[^fn7]: [Cesar Anjos. (2018, May 31). Shell Logins as a Magento Reinfection Vector. Retrieved December 17, 2020.](https://blog.sucuri.net/2018/05/shell-logins-as-a-magento-reinfection-vector.html)
[^fn8]: [Claud Xiao and Cong Zheng. (2017, April 6). New IoT/Linux Malware Targets DVRs, Forms Botnet. Retrieved December 17, 2020.](https://unit42.paloaltonetworks.com/unit42-new-iotlinux-malware-targets-dvrs-forms-botnet/)
[^fn9]: [Leo Pitt. (2020, August 6). Persistent JXA - A poor man's Powershell for macOS. Retrieved January 11, 2021.](https://posts.specterops.io/persistent-jxa-66e1c3cd1cf5)
[^fn10]: [Leo Pitt. (2020, November 11). Github - PersistentJXA/BashProfilePersist.js. Retrieved January 11, 2021.](https://github.com/D00MFist/PersistentJXA/blob/master/BashProfilePersist.js)
[^fn12]: [Paul Litvak. (2020, May 4). Kaiji: New Chinese Linux malware turning to Golang. Retrieved December 17, 2020.](https://www.intezer.com/blog/research/kaiji-new-chinese-linux-malware-turning-to-golang/)