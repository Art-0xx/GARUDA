---
mitre_data:
  id: T1569.001
  linker_tags:
  - mitre/attack/linker/execution/launchctl
  name: Launchctl
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Launchctl (`T1569.001`)

Adversaries may abuse launchctl to execute commands or programs. Launchctl interfaces with launchd, the service management framework for macOS. Launchctl supports taking subcommands on the command-line, interactively, or even redirected from standard input.[^fn3]

Adversaries use launchctl to execute commands and programs as [Launch Agent](https://attack.mitre.org/techniques/T1543/001)s or [Launch Daemon](https://attack.mitre.org/techniques/T1543/004)s. Common subcommands include: <code>launchctl load</code>,<code>launchctl unload</code>, and <code>launchctl start</code>. Adversaries can use scripts or manually run the commands <code>launchctl load -w "%s/Library/LaunchAgents/%s"</code> or <code>/bin/launchctl load</code> to execute [Launch Agent](https://attack.mitre.org/techniques/T1543/001)s or [Launch Daemon](https://attack.mitre.org/techniques/T1543/004)s.[^fn1][^fn2]



# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/System Services (T1569)|System Services]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1569.001](https://attack.mitre.org/techniques/T1569/001)

[^fn1]: [Dani Creus, Tyler Halfpop, Robert Falcone. (2016, September 26). Sofacy's 'Komplex' OS X Trojan. Retrieved July 8, 2017.](https://researchcenter.paloaltonetworks.com/2016/09/unit42-sofacys-komplex-os-x-trojan/)
[^fn2]: [Phil Stokes. (2021, February 16). 20 Common Tools & Techniques Used by macOS Threat Actors & Malware. Retrieved August 23, 2021.](https://labs.sentinelone.com/20-common-tools-techniques-used-by-macos-threat-actors-malware/)
[^fn3]: [SS64. (n.d.). launchctl. Retrieved March 28, 2020.](https://ss64.com/osx/launchctl.html)