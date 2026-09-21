---
mitre_data:
  id: T1204.001
  linker_tags:
  - mitre/attack/linker/execution/malicious_link
  name: Malicious Link
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Malicious Link (`T1204.001`)

An adversary may rely upon a user clicking a malicious link in order to gain execution. Users may be subjected to social engineering to get them to click on a link that will lead to code execution. This user action will typically be observed as follow-on behavior from [Spearphishing Link](https://attack.mitre.org/techniques/T1566/002). Clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via [Exploitation for Client Execution](https://attack.mitre.org/techniques/T1203). Links may also lead users to download files that require execution via [Malicious File](https://attack.mitre.org/techniques/T1204/002).


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/User Execution (T1204)|User Execution]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1204.001](https://attack.mitre.org/techniques/T1204/001)
