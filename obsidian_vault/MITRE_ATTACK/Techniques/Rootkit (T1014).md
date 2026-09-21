---
mitre_data:
  id: T1014
  linker_tags:
  - mitre/attack/linker/stealth/rootkit
  name: Rootkit
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Rootkit (`T1014`)

Adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. Rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system API calls that supply system information. [^fn3] 

Rootkits or rootkit enabling functionality may reside at the user or kernel level in the operating system or lower, to include a hypervisor or [System Firmware](https://attack.mitre.org/techniques/T1542/001). [^fn4] Rootkits have been seen for Windows, Linux, and Mac OS X systems. [^fn1] [^fn2]

Rootkits that reside or modify boot sectors are known as [Bootkit](https://attack.mitre.org/techniques/T1542/003)s and specifically target the boot process of the operating system.


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/HTRAN|HTRAN]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1014](https://attack.mitre.org/techniques/T1014)

[^fn1]: [Kurtz, G. (2012, November 19). HTTP iframe Injecting Linux Rootkit. Retrieved December 21, 2017.](https://www.crowdstrike.com/blog/http-iframe-injecting-linux-rootkit/)
[^fn2]: [Pan, M., Tsai, S. (2014). You can’t see me: A Mac OS X Rootkit uses the tricks you haven't known yet. Retrieved December 21, 2017.](http://www.blackhat.com/docs/asia-14/materials/Tsai/WP-Asia-14-Tsai-You-Cant-See-Me-A-Mac-OS-X-Rootkit-Uses-The-Tricks-You-Havent-Known-Yet.pdf)
[^fn3]: [Symantec. (n.d.). Windows Rootkit Overview. Retrieved December 21, 2017.](https://www.symantec.com/avcenter/reference/windows.rootkit.overview.pdf)
[^fn4]: [Wikipedia. (2016, June 1). Rootkit. Retrieved June 2, 2016.](https://en.wikipedia.org/wiki/Rootkit)