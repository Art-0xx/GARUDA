---
mitre_data:
  id: T1548.004
  linker_tags:
  - mitre/attack/linker/privilege_escalation/elevated_execution_with_prompt
  name: Elevated Execution with Prompt
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Elevated Execution with Prompt (`T1548.004`)

Adversaries may leverage the <code>AuthorizationExecuteWithPrivileges</code> API to escalate privileges by prompting the user for credentials.[^fn1] The purpose of this API is to give application developers an easy way to perform operations with root privileges, such as for application installation or updating. This API does not validate that the program requesting root privileges comes from a reputable source or has been maliciously modified. 

Although this API is deprecated, it still fully functions in the latest releases of macOS. When calling this API, the user will be prompted to enter their credentials but no checks on the origin or integrity of the program are made. The program calling the API may also load world writable files which can be modified to perform malicious behavior with elevated privileges.

Adversaries may abuse <code>AuthorizationExecuteWithPrivileges</code> to obtain root privileges in order to install malicious software on victims and install persistence mechanisms.[^fn3][^fn2][^fn4] This technique may be combined with [Masquerading](https://attack.mitre.org/techniques/T1036) to trick the user into granting escalated privileges to malicious code.[^fn3][^fn2] This technique has also been shown to work by modifying legitimate programs present on the machine that make use of this API.[^fn3]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Abuse Elevation Control Mechanism (T1548)|Abuse Elevation Control Mechanism]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1548.004](https://attack.mitre.org/techniques/T1548/004)

[^fn1]: [Apple. (n.d.). Apple Developer Documentation - AuthorizationExecuteWithPrivileges. Retrieved August 8, 2019.](https://developer.apple.com/documentation/security/1540038-authorizationexecutewithprivileg)
[^fn2]: [Carbon Black Threat Analysis Unit. (2019, February 12). New macOS Malware Variant of Shlayer (OSX) Discovered. Retrieved August 8, 2019.](https://blogs.vmware.com/security/2020/02/vmware-carbon-black-tau-threat-analysis-shlayer-macos.html)
[^fn3]: [Patrick Wardle. (2017). Death by 1000 installers; it's all broken!. Retrieved August 8, 2019.](https://speakerdeck.com/patrickwardle/defcon-2017-death-by-1000-installers-its-all-broken?slide=8)
[^fn4]: [Patrick Wardle. (2018, February 17). Tearing Apart the Undetected (OSX)Coldroot RAT. Retrieved August 8, 2019.](https://objective-see.com/blog/blog_0x2A.html)