---
mitre_data:
  id: T1559.003
  linker_tags:
  - mitre/attack/linker/execution/xpc_services
  name: XPC Services
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# XPC Services (`T1559.003`)

Adversaries can provide malicious content to an XPC service daemon for local code execution. macOS uses XPC services for basic inter-process communication between various processes, such as between the XPC Service daemon and third-party application privileged helper tools. Applications can send messages to the XPC Service daemon, which runs as root, using the low-level XPC Service <code>C API</code> or the high level <code>NSXPCConnection API</code> in order to handle tasks that require elevated privileges (such as network connections). Applications are responsible for providing the protocol definition which serves as a blueprint of the XPC services. Developers typically use XPC Services to provide applications stability and privilege separation between the application client and the daemon.[^fn1][^fn2]

Adversaries can abuse XPC services to execute malicious content. Requests for malicious execution can be passed through the application's XPC Services handler.[^fn3][^fn4] This may also include identifying and abusing improper XPC client validation and/or poor sanitization of input parameters to conduct [Exploitation for Privilege Escalation](https://attack.mitre.org/techniques/T1068).


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Inter-Process Communication (T1559)|Inter-Process Communication]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1559.003](https://attack.mitre.org/techniques/T1559/003)

[^fn1]: [Apple. (2016, September 9). Creating XPC Services. Retrieved April 19, 2022.](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingXPCServices.html#//apple_ref/doc/uid/10000172i-SW6-SW1)
[^fn2]: [Apple. (n.d.). Retrieved October 12, 2021.](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/DesigningDaemons.html)
[^fn3]: [Mickey Jin. (2021, June 3). CVE-2021-30724: CVMServer Vulnerability in macOS and iOS. Retrieved October 12, 2021.](https://www.trendmicro.com/en_us/research/21/f/CVE-2021-30724_CVMServer_Vulnerability_in_macOS_and_iOS.html)
[^fn4]: [Wojciech Reguła. (2020, June 29). Learn XPC exploitation. Retrieved October 12, 2021.](https://wojciechregula.blog/post/learn-xpc-exploitation-part-3-code-injections/)