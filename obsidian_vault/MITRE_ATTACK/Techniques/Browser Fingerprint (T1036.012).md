---
mitre_data:
  id: T1036.012
  linker_tags:
  - mitre/attack/linker/stealth/browser_fingerprint
  name: Browser Fingerprint
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Browser Fingerprint (`T1036.012`)

Adversaries may attempt to blend in with legitimate traffic by spoofing browser and system attributes like operating system, system language, platform, user-agent string, resolution, time zone, etc.  The HTTP User-Agent request header is a string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent.[^fn1]

Adversaries may gather this information through [System Information Discovery](https://attack.mitre.org/techniques/T1082) or by users navigating to adversary-controlled websites, and then use that information to craft their web traffic to evade defenses.[^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.012](https://attack.mitre.org/techniques/T1036/012)

[^fn1]: [MDN contributors. (2025, July 4). User-Agent header. Retrieved October 19, 2025.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/User-Agent)
[^fn2]: [Zengrui Liu, Prakash Shrestha, and Nitesh Saxena. (2021, October 19). Retrieved April 15, 2026.](https://arxiv.org/pdf/2110.10129)