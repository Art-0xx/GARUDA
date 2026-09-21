---
mitre_data:
  id: T1480.002
  linker_tags:
  - mitre/attack/linker/stealth/mutual_exclusion
  name: Mutual Exclusion
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Mutual Exclusion (`T1480.002`)

Adversaries may constrain execution or actions based on the presence of a mutex associated with malware. A mutex is a locking mechanism used to synchronize access to a resource. Only one thread or process can acquire a mutex at a given time.[^fn4]

While local mutexes only exist within a given process, allowing multiple threads to synchronize access to a resource, system mutexes can be used to synchronize the activities of multiple processes.[^fn4] By creating a unique system mutex associated with a particular malware, adversaries can verify whether or not a system has already been compromised.[^fn2]

In Linux environments, malware may instead attempt to acquire a lock on a mutex file. If the malware is able to acquire the lock, it continues to execute; if it fails, it exits to avoid creating a second instance of itself.[^fn1][^fn5]

Mutex names may be hard-coded or dynamically generated using a predictable algorithm.[^fn3]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Execution Guardrails (T1480)|Execution Guardrails]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1480.002](https://attack.mitre.org/techniques/T1480/002)

[^fn1]: [Joakim Kennedy and Avigayil Mechtinger. (2021, March 10). New Linux Backdoor RedXOR Likely Operated by Chinese Nation-State Actor. Retrieved September 19, 2024.](https://intezer.com/blog/malware-analysis/new-linux-backdoor-redxor-likely-operated-by-chinese-nation-state-actor/)
[^fn2]: [Lenny Zeltser. (2012, July 24). Looking at Mutex Objects for Malware Discovery & Indicators of Compromise. Retrieved September 19, 2024.](https://www.sans.org/blog/looking-at-mutex-objects-for-malware-discovery-indicators-of-compromise/)
[^fn3]: [Lenny Zeltser. (2015, March 9). How Malware Generates Mutex Names to Evade Detection. Retrieved September 19, 2024.](https://isc.sans.edu/diary/How+Malware+Generates+Mutex+Names+to+Evade+Detection/19429/)
[^fn4]: [Microsoft. (2022, March 11). Mutexes. Retrieved September 19, 2024.](https://learn.microsoft.com/en-us/dotnet/standard/threading/mutexes)
[^fn5]: [Shaul Vilkomir-Preisman and Eliran Nissan. (2023, May 10). BPFDoor Malware Evolves – Stealthy Sniffing Backdoor Ups Its Game. Retrieved September 19, 2024.](https://www.deepinstinct.com/blog/bpfdoor-malware-evolves-stealthy-sniffing-backdoor-ups-its-game)