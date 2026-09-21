---
mitre_data:
  id: T1546.014
  linker_tags:
  - mitre/attack/linker/privilege_escalation/emond
  - mitre/attack/linker/persistence/emond
  name: Emond
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Emond (`T1546.014`)

Adversaries may gain persistence and elevate privileges by executing malicious content triggered by the Event Monitor Daemon (emond). Emond is a [Launch Daemon](https://attack.mitre.org/techniques/T1543/004) that accepts events from various services, runs them through a simple rules engine, and takes action. The emond binary at <code>/sbin/emond</code> will load any rules from the <code>/etc/emond.d/rules/</code> directory and take action once an explicitly defined event takes place.

The rule files are in the plist format and define the name, event type, and action to take. Some examples of event types include system startup and user authentication. Examples of actions are to run a system command or send an email. The emond service will not launch if there is no file present in the QueueDirectories path <code>/private/var/db/emondClients</code>, specified in the [Launch Daemon](https://attack.mitre.org/techniques/T1543/004) configuration file at<code>/System/Library/LaunchDaemons/com.apple.emond.plist</code>.[^fn2][^fn1][^fn3]

Adversaries may abuse this service by writing a rule to execute commands when a defined event occurs, such as system start up or user authentication.[^fn2][^fn1][^fn3] Adversaries may also be able to escalate privileges from administrator to root as the emond service is executed with root privileges by the [Launch Daemon](https://attack.mitre.org/techniques/T1543/004) service.


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.014](https://attack.mitre.org/techniques/T1546/014)

[^fn1]: [Reynolds, James. (2016, April 7). What is emond?. Retrieved September 10, 2019.](http://www.magnusviri.com/Mac/what-is-emond.html)
[^fn2]: [Ross, Chris. (2018, January 17). Leveraging Emond on macOS For Persistence. Retrieved September 10, 2019.](https://www.xorrior.com/emond-persistence/)
[^fn3]: [Stokes, Phil. (2019, June 17). HOW MALWARE PERSISTS ON MACOS. Retrieved September 10, 2019.](https://www.sentinelone.com/blog/how-malware-persists-on-macos/)