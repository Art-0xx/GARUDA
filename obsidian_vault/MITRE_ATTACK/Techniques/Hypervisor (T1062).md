---
mitre_data:
  id: T1062
  linker_tags:
  - mitre/attack/linker/persistence/hypervisor
  name: Hypervisor
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Hypervisor (`T1062`)

**This technique has been deprecated and should no longer be used.**

A type-1 hypervisor is a software layer that sits between the guest operating systems and system's hardware. [^fn2] It presents a virtual running environment to an operating system. An example of a common hypervisor is Xen. [^fn3] A type-1 hypervisor operates at a level below the operating system and could be designed with [Rootkit](https://attack.mitre.org/techniques/T1014) functionality to hide its existence from the guest operating system. [^fn4] A malicious hypervisor of this nature could be used to persist on systems through interruption.


# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1062](https://attack.mitre.org/techniques/T1062)
- https://capec.mitre.org/data/definitions/552.html
- [virtualization.info. (Interviewer) & Liguori, A. (Interviewee). (2006, August 11). Debunking Blue Pill myth &#91;Interview transcript&#93;. Retrieved November 13, 2014.](http://virtualization.info/en/news/2006/08/debunking-blue-pill-myth.html)

[^fn2]: [Wikipedia. (2016, May 23). Hypervisor. Retrieved June 11, 2016.](https://en.wikipedia.org/wiki/Hypervisor)
[^fn3]: [Xen. (n.d.). In Wikipedia. Retrieved November 13, 2014.](http://en.wikipedia.org/wiki/Xen)
[^fn4]: [Myers, M., and Youndt, S. (2007). An Introduction to Hardware-Assisted Virtual Machine (HVM) Rootkits. Retrieved November 13, 2014.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.90.8832&rep=rep1&type=pdf)