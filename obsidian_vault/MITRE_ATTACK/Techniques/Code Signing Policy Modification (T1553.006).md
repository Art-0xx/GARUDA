---
mitre_data:
  id: T1553.006
  linker_tags:
  - mitre/attack/linker/defense_impairment/code_signing_policy_modification
  name: Code Signing Policy Modification
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Code Signing Policy Modification (`T1553.006`)

Adversaries may modify code signing policies to enable execution of unsigned or self-signed code. Code signing provides a level of authenticity on a program from a developer and a guarantee that the program has not been tampered with. Security controls can include enforcement mechanisms to ensure that only valid, signed code can be run on an operating system. 

Some of these security controls may be enabled by default, such as Driver Signature Enforcement (DSE) on Windows or System Integrity Protection (SIP) on macOS.[^fn5][^fn1] Other such controls may be disabled by default but are configurable through application controls, such as only allowing signed Dynamic-Link Libraries (DLLs) to execute on a system. Since it can be useful for developers to modify default signature enforcement policies during the development and testing of applications, disabling of these features may be possible with elevated permissions.[^fn4][^fn1]

Adversaries may modify code signing policies in a number of ways, including through use of command-line or GUI utilities, [Modify Registry](https://attack.mitre.org/techniques/T1112), rebooting the computer in a debug/recovery mode, or by altering the value of variables in kernel memory.[^fn6][^fn1][^fn3][^fn8] Examples of commands that can modify the code signing policy of a system include <code>bcdedit.exe -set TESTSIGNING ON</code> on Windows and <code>csrutil disable</code> on macOS.[^fn6][^fn1] Depending on the implementation, successful modification of a signing policy may require reboot of the compromised system. Additionally, some implementations can introduce visible artifacts for the user (ex: a watermark in the corner of the screen stating the system is in Test Mode). Adversaries may attempt to remove such artifacts.[^fn2]

To gain access to kernel memory to modify variables related to signature checks, such as modifying <code>g_CiOptions</code> to disable Driver Signature Enforcement, adversaries may conduct [Exploitation for Privilege Escalation](https://attack.mitre.org/techniques/T1068) using a signed, but vulnerable driver.[^fn7][^fn8]


# Platform(s)

- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Subvert Trust Controls (T1553)|Subvert Trust Controls]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1553.006](https://attack.mitre.org/techniques/T1553/006)

[^fn1]: [Apple. (n.d.). Disabling and Enabling System Integrity Protection. Retrieved April 22, 2021.](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection)
[^fn2]: [F-Secure Labs. (2014). BlackEnergy & Quedagh: The convergence of crimeware and APT attacks. Retrieved March 24, 2016.](https://blog-assets.f-secure.com/wp-content/uploads/2019/10/15163408/BlackEnergy_Quedagh.pdf)
[^fn3]: [Glyer, C., Kazanciyan, R. (2012, August 22). The “Hikit” Rootkit: Advanced and Persistent Attack Techniques (Part 2). Retrieved November 17, 2024.](https://web.archive.org/web/20210920172620/https://www.fireeye.com/blog/threat-research/2012/08/hikit-rootkit-advanced-persistent-attack-techniques-part-2.html)
[^fn4]: [Microsoft. (2017, April 20). Installing an Unsigned Driver during Development and Test. Retrieved April 22, 2021.](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/installing-an-unsigned-driver-during-development-and-test)
[^fn5]: [Microsoft. (2017, June 1). Digital Signatures for Kernel Modules on Windows. Retrieved April 22, 2021.](https://docs.microsoft.com/en-us/previous-versions/windows/hardware/design/dn653559(v=vs.85)?redirectedfrom=MSDN)
[^fn6]: [Microsoft. (2021, February 15). Enable Loading of Test Signed Drivers. Retrieved April 22, 2021.](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/the-testsigning-boot-configuration-option)
[^fn7]: [Reichel, D. and Idrizovic, E. (2020, June 17). AcidBox: Rare Malware Repurposing Turla Group Exploit Targeted Russian Organizations. Retrieved March 16, 2021.](https://unit42.paloaltonetworks.com/acidbox-rare-malware/)
[^fn8]: [TDL Project. (2016, February 4). TDL (Turla Driver Loader). Retrieved April 22, 2021.](https://github.com/hfiref0x/TDL)