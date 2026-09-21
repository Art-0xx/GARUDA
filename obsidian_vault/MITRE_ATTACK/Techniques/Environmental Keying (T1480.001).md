---
mitre_data:
  id: T1480.001
  linker_tags:
  - mitre/attack/linker/stealth/environmental_keying
  name: Environmental Keying
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Environmental Keying (`T1480.001`)

Adversaries may environmentally key payloads or other features of malware to evade defenses and constraint execution to a specific target environment. Environmental keying uses cryptography to constrain execution or actions based on adversary supplied environment specific conditions that are expected to be present on the target. Environmental keying is an implementation of [Execution Guardrails](https://attack.mitre.org/techniques/T1480) that utilizes cryptographic techniques for deriving encryption/decryption keys from specific types of values in a given computing environment.[^fn3]

Values can be derived from target-specific elements and used to generate a decryption key for an encrypted payload. Target-specific values can be derived from specific network shares, physical devices, software/software versions, files, joined AD domains, system time, and local/external IP addresses.[^fn2][^fn1][^fn4][^fn6] By generating the decryption keys from target-specific environmental values, environmental keying can make sandbox detection, anti-virus detection, crowdsourcing of information, and reverse engineering difficult.[^fn2] These difficulties can slow down the incident response process and help adversaries hide their tactics, techniques, and procedures (TTPs).

Similar to [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027), adversaries may use environmental keying to help protect their TTPs and evade detection. Environmental keying may be used to deliver an encrypted payload to the target that will use target-specific values to decrypt the payload before execution.[^fn2][^fn4][^fn6][^fn5] By utilizing target-specific values to decrypt the payload the adversary can avoid packaging the decryption key with the payload or sending it over a potentially monitored network connection. Depending on the technique for gathering target-specific values, reverse engineering of the encrypted payload can be exceptionally difficult.[^fn2] This can be used to prevent exposure of capabilities in environments that are not intended to be compromised or operated within.

Like other [Execution Guardrails](https://attack.mitre.org/techniques/T1480), environmental keying can be used to prevent exposure of capabilities in environments that are not intended to be compromised or operated within. This activity is distinct from typical [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497). While use of [Virtualization/Sandbox Evasion](https://attack.mitre.org/techniques/T1497) may involve checking for known sandbox values and continuing with execution only if there is no match, the use of environmental keying will involve checking for an expected target-specific value that must match for decryption and subsequent execution to be successful.


# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/Execution Guardrails (T1480)|Execution Guardrails]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1480.001](https://attack.mitre.org/techniques/T1480/001)

[^fn1]: [Kafeine. (2016, December 13). Home Routers Under Attack via Malvertising on Windows, Android Devices. Retrieved January 16, 2019.](https://www.proofpoint.com/us/threat-insight/post/home-routers-under-attack-malvertising-windows-android-devices)
[^fn2]: [Kaspersky Lab. (2012, August). Gauss: Abnormal Distribution. Retrieved January 17, 2019.](https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/20134940/kaspersky-lab-gauss.pdf)
[^fn3]: [Riordan, J., Schneier, B. (1998, June 18). Environmental Key Generation towards Clueless Agents. Retrieved January 18, 2019.](https://www.schneier.com/academic/paperfiles/paper-clueless-agents.pdf)
[^fn4]: [Song, C., et al. (2012, August 7). Impeding Automated Malware Analysis with Environment-sensitive Malware. Retrieved January 18, 2019.](https://pdfs.semanticscholar.org/2721/3d206bc3c1e8c229fb4820b6af09e7f975da.pdf)
[^fn5]: [Warren, R. (2017, August 2). Demiguise: virginkey.js. Retrieved January 17, 2019.](https://github.com/nccgroup/demiguise/blob/master/examples/virginkey.js)
[^fn6]: [Warren, R. (2017, August 8). Smuggling HTA files in Internet Explorer/Edge. Retrieved November 17, 2024.](http://web.archive.org/web/20200608093807/https://www.nccgroup.com/uk/about-us/newsroom-and-events/blogs/2017/august/smuggling-hta-files-in-internet-exploreredge/)