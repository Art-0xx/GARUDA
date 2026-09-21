---
mitre_data:
  id: T1027.004
  linker_tags:
  - mitre/attack/linker/stealth/compile_after_delivery
  name: Compile After Delivery
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Compile After Delivery (`T1027.004`)

Adversaries may attempt to make payloads difficult to discover and analyze by delivering files to victims as uncompiled code. Text-based source code files may subvert analysis and scrutiny from protections targeting executables/binaries. These payloads will need to be compiled before execution; typically via native utilities such as ilasm.exe[^fn2], csc.exe, or GCC/MinGW.[^fn1]

Source code payloads may also be encrypted, encoded, and/or embedded within other files, such as those delivered as a [Phishing](https://attack.mitre.org/techniques/T1566). Payloads may also be delivered in formats unrecognizable and inherently benign to the native OS (ex: EXEs on macOS/Linux) before later being (re)compiled into a proper executable binary with a bundled compiler and execution framework.[^fn3]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.004](https://attack.mitre.org/techniques/T1027/004)

[^fn1]: [ClearSky Cyber Security. (2018, November). MuddyWater Operations in Lebanon and Oman: Using an Israeli compromised domain for a two-stage campaign. Retrieved November 29, 2018.](https://www.clearskysec.com/wp-content/uploads/2018/11/MuddyWater-Operations-in-Lebanon-and-Oman.pdf)
[^fn2]: [Federico Quattrin, Nick Desler, Tin Tam, & Matthew Rutkoske. (2023, March 16). Hiding in Plain Sight: Monitoring and Testing for Living-Off-the-Land Binaries. Retrieved July 15, 2024.](https://www.attackiq.com/2023/03/16/hiding-in-plain-sight/)
[^fn3]: [Trend Micro. (2019, February 11). Windows App Runs on Mac, Downloads Info Stealer and Adware. Retrieved April 25, 2019.](https://blog.trendmicro.com/trendlabs-security-intelligence/windows-app-runs-on-mac-downloads-info-stealer-and-adware/)