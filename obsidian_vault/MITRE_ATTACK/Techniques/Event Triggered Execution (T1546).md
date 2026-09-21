---
mitre_data:
  id: T1546
  linker_tags:
  - mitre/attack/linker/privilege_escalation/event_triggered_execution
  - mitre/attack/linker/persistence/event_triggered_execution
  name: Event Triggered Execution
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Event Triggered Execution (`T1546`)

Adversaries may establish persistence and/or elevate privileges using system mechanisms that trigger execution based on specific events. Various operating systems have means to monitor and subscribe to events such as logons or other user activity such as running specific applications/binaries. Cloud environments may also support various functions and services that monitor and can be invoked in response to specific cloud events.[^fn4][^fn5][^fn2]

Adversaries may abuse these mechanisms as a means of maintaining persistent access to a victim via repeatedly executing malicious code. After gaining access to a victim system, adversaries may create/modify event triggers to point to malicious content that will be executed whenever the event trigger is invoked.[^fn1][^fn6][^fn3]

Since the execution can be proxied by an account with higher permissions, such as SYSTEM or service accounts, an adversary may be able to abuse these triggered execution mechanisms to escalate their privileges. 


# Platform(s)

- Linux
- macOS
- Windows
- SaaS
- IaaS
- Office Suite

# Sub-Technique(s)

- [[../Techniques/PowerShell Profile (T1546.013)|PowerShell Profile]]
- [[../Techniques/LC_LOAD_DYLIB Addition (T1546.006)|LC_LOAD_DYLIB Addition]]
- [[../Techniques/Application Shimming (T1546.011)|Application Shimming]]
- [[../Techniques/Trap (T1546.005)|Trap]]
- [[../Techniques/Image File Execution Options Injection (T1546.012)|Image File Execution Options Injection]]
- [[../Techniques/Accessibility Features (T1546.008)|Accessibility Features]]
- [[../Techniques/AppCert DLLs (T1546.009)|AppCert DLLs]]
- [[../Techniques/Windows Management Instrumentation Event Subscription (T1546.003)|Windows Management Instrumentation Event Subscription]]
- [[../Techniques/Change Default File Association (T1546.001)|Change Default File Association]]
- [[../Techniques/Emond (T1546.014)|Emond]]
- [[../Techniques/Unix Shell Configuration Modification (T1546.004)|Unix Shell Configuration Modification]]
- [[../Techniques/Component Object Model Hijacking (T1546.015)|Component Object Model Hijacking]]
- [[../Techniques/Python Startup Hooks (T1546.018)|Python Startup Hooks]]
- [[../Techniques/AppInit DLLs (T1546.010)|AppInit DLLs]]
- [[../Techniques/Screensaver (T1546.002)|Screensaver]]
- [[../Techniques/Installer Packages (T1546.016)|Installer Packages]]
- [[../Techniques/Udev Rules (T1546.017)|Udev Rules]]
- [[../Techniques/Netsh Helper DLL (T1546.007)|Netsh Helper DLL]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546](https://attack.mitre.org/techniques/T1546)

[^fn1]: [Ballenthin, W., et al. (2015). Windows Management Instrumentation (WMI) Offense, Defense, and Forensics. Retrieved March 30, 2016.](https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf)
[^fn2]: [Berk Veral. (2020, March 9). Real-life cybercrime stories from DART, the Microsoft Detection and Response Team. Retrieved May 27, 2022.](https://www.microsoft.com/security/blog/2020/03/09/real-life-cybercrime-stories-dart-microsoft-detection-and-response-team)
[^fn3]: [Claud Xiao, Cong Zheng, Yanhui Jia. (2017, April 6). New IoT/Linux Malware Targets DVRs, Forms Botnet. Retrieved February 19, 2018.](https://researchcenter.paloaltonetworks.com/2017/04/unit42-new-iotlinux-malware-targets-dvrs-forms-botnet/)
[^fn4]: [Daniel Grzelak. (2016, July 9). Backdooring an AWS account. Retrieved May 27, 2022.](https://medium.com/daniel-grzelak/backdooring-an-aws-account-da007d36f8f9)
[^fn5]: [Eric Saraga. (2022, February 2). Using Power Automate for Covert Data Exfiltration in Microsoft 365. Retrieved May 27, 2022.](https://www.varonis.com/blog/power-automate-data-exfiltration)
[^fn6]: [Patrick Wardle. (2015). Malware Persistence on OS X Yosemite. Retrieved July 10, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)