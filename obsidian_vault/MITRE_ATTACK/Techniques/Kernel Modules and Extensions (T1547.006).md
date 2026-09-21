---
mitre_data:
  id: T1547.006
  linker_tags:
  - mitre/attack/linker/persistence/kernel_modules_and_extensions
  - mitre/attack/linker/privilege_escalation/kernel_modules_and_extensions
  name: Kernel Modules and Extensions
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Kernel Modules and Extensions (`T1547.006`)

Adversaries may modify the kernel to automatically execute programs on system boot. Loadable Kernel Modules (LKMs) are pieces of code that can be loaded and unloaded into the kernel upon demand. They extend the functionality of the kernel without the need to reboot the system. For example, one type of module is the device driver, which allows the kernel to access hardware connected to the system.[^fn13] 

When used maliciously, LKMs can be a type of kernel-mode [Rootkit](https://attack.mitre.org/techniques/T1014) that run with the highest operating system privilege (Ring 0).[^fn12] Common features of LKM based rootkits include: hiding itself, selective hiding of files, processes and network activity, as well as log tampering, providing authenticated backdoors, and enabling root access to non-privileged users.[^fn6]

Kernel extensions, also called kext, are used in macOS to load functionality onto a system similar to LKMs for Linux. Since the kernel is responsible for enforcing security and the kernel extensions run as apart of the kernel, kexts are not governed by macOS security policies. Kexts are loaded and unloaded through <code>kextload</code> and <code>kextunload</code> commands. Kexts need to be signed with a developer ID that is granted privileges by Apple allowing it to sign Kernel extensions. Developers without these privileges may still sign kexts but they will not load unless SIP is disabled. If SIP is enabled, the kext signature is verified before being added to the AuxKC.[^fn3]

Since macOS Catalina 10.15, kernel extensions have been deprecated in favor of System Extensions. However, kexts are still allowed as "Legacy System Extensions" since there is no System Extension for Kernel Programming Interfaces.[^fn2]

Adversaries can use LKMs and kexts to conduct [Persistence](https://attack.mitre.org/tactics/TA0003) and/or [Privilege Escalation](https://attack.mitre.org/tactics/TA0004) on a system. Examples have been found in the wild, and there are some relevant open source projects as well.[^fn5][^fn8][^fn4][^fn9][^fn16][^fn17][^fn10][^fn14]


# Platform(s)

- macOS
- Linux

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.006](https://attack.mitre.org/techniques/T1547/006)
- [Apple. (2019, May 3). Configuration Profile Reference. Retrieved September 23, 2021.](https://developer.apple.com/business/documentation/Configuration-Profile-Reference.pdf)
- [Henderson, B. (2006, September 24). How To Insert And Remove LKMs. Retrieved November 17, 2024.](https://tldp.org/HOWTO/Module-HOWTO/x197.html)
- [Pikeralpha. (2017, August 29). User Approved Kernel Extension Loading…. Retrieved September 23, 2021.](https://pikeralpha.wordpress.com/2017/08/29/user-approved-kernel-extension-loading/)
- [Richard Purves. (2017, November 9). MDM and the Kextpocalypse . Retrieved September 23, 2021.](https://richard-purves.com/2017/11/09/mdm-and-the-kextpocalypse-2/)
- [Wikipedia. (2018, March 17). Loadable kernel module. Retrieved April 9, 2018.](https://en.wikipedia.org/wiki/Loadable_kernel_module#Linux)

[^fn2]: [Apple. (n.d.). Deprecated Kernel Extensions and System Extension Alternatives. Retrieved November 4, 2020.](https://developer.apple.com/support/kernel-extensions/)
[^fn3]: [Apple. (n.d.). System and kernel extensions in macOS. Retrieved March 31, 2022.](https://support.apple.com/guide/deployment/system-and-kernel-extensions-in-macos-depa5fb8376f/web)
[^fn4]: [Augusto, I. (2018, March 8). Reptile - LMK Linux rootkit. Retrieved April 9, 2018.](https://github.com/f0rb1dd3n/Reptile)
[^fn5]: [Case, A. (2012, October 10). Phalanx 2 Revealed: Using Volatility to Analyze an Advanced Linux Rootkit. Retrieved April 9, 2018.](https://volatility-labs.blogspot.com/2012/10/phalanx-2-revealed-using-volatility-to.html)
[^fn6]: [Chuvakin, A. (2003, February). An Overview of Rootkits. Retrieved September 12, 2024.](https://www.megasecurity.org/papers/Rootkits.pdf)
[^fn8]: [Kurtz, G. (2012, November 19). HTTP iframe Injecting Linux Rootkit. Retrieved December 21, 2017.](https://www.crowdstrike.com/blog/http-iframe-injecting-linux-rootkit/)
[^fn9]: [Mello, V. (2018, March 8). Diamorphine - LMK rootkit for Linux Kernels 2.6.x/3.x/4.x (x86 and x86_64). Retrieved April 9, 2018.](https://github.com/m0nad/Diamorphine)
[^fn10]: [Mikhail, K. (2014, October 16). The Ventir Trojan: assemble your MacOS spy. Retrieved April 6, 2018.](https://securelist.com/the-ventir-trojan-assemble-your-macos-spy/67267/)
[^fn12]: [Pomerantz, O., Salzman, P. (2003, April 4). Modules vs Programs. Retrieved November 17, 2024.](https://tldp.org/LDP/lkmpg/2.4/html/x437.html)
[^fn13]: [Pomerantz, O., Salzman, P.. (2003, April 4). The Linux Kernel Module Programming Guide. Retrieved April 6, 2018.](https://www.tldp.org/LDP/lkmpg/2.4/lkmpg.pdf)
[^fn14]: [Remillano, A., Urbanec, J. (2019, September 19). Skidmap Linux Malware Uses Rootkit Capabilities to Hide Cryptocurrency-Mining Payload. Retrieved June 4, 2020.](https://blog.trendmicro.com/trendlabs-security-intelligence/skidmap-linux-malware-uses-rootkit-capabilities-to-hide-cryptocurrency-mining-payload/)
[^fn16]: [Wardle, P. (2015, April). Malware Persistence on OS X Yosemite. Retrieved April 6, 2018.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)
[^fn17]: [Wardle, P. (2017, September 8). High Sierra’s ‘Secure Kernel Extension Loading’ is Broken. Retrieved November 17, 2024.](https://objective-see.org/blog/blog_0x21.html)