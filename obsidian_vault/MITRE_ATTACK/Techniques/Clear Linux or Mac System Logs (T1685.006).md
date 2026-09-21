---
mitre_data:
  id: T1685.006
  linker_tags:
  - mitre/attack/linker/defense_impairment/clear_linux_or_mac_system_logs
  name: Clear Linux or Mac System Logs
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Clear Linux or Mac System Logs (`T1685.006`)

Adversaries may clear system logs to hide evidence of an intrusion. macOS and Linux both keep track of system or user-initiated actions via system logs. The majority of native system logging is stored under the `/var/log/` directory. Subfolders in this directory categorize logs by their related functions, such as:[^fn1]

* `/var/log/messages:`: General and system-related messages
* `/var/log/secure or /var/log/auth.log`: Authentication logs
* `/var/log/utmp or /var/log/wtmp`: Login records
* `/var/log/kern.log`: Kernel logs
* `/var/log/cron.log`: Crond logs
* `/var/log/maillog`: Mail server logs
* `/var/log/httpd/`: Web server access and error logs


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Disable or Modify Tools (T1685)|Disable or Modify Tools]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1685.006](https://attack.mitre.org/techniques/T1685/006)

[^fn1]: [Marcel. (2018, April 19). 12 Critical Linux Log Files You Must be Monitoring. Retrieved March 29, 2020.](https://www.eurovps.com/blog/important-linux-log-files-you-must-be-monitoring/)