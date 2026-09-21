---
mitre_data:
  id: T1543.002
  linker_tags:
  - mitre/attack/linker/persistence/systemd_service
  - mitre/attack/linker/privilege_escalation/systemd_service
  name: Systemd Service
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Systemd Service (`T1543.002`)

Adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. Systemd is a system and service manager commonly used for managing background daemon processes (also known as services) and other system resources.[^fn4] Systemd is the default initialization (init) system on many Linux distributions replacing legacy init systems, including SysVinit and Upstart, while remaining backwards compatible.  

Systemd utilizes unit configuration files with the `.service` file extension to encode information about a service's process. By default, system level unit files are stored in the `/systemd/system` directory of the root owned directories (`/`). User level unit files are stored in the `/systemd/user` directories of the user owned directories (`$HOME`).[^fn9] 

Inside the `.service` unit files, the following directives are used to execute commands:[^fn3]  

* `ExecStart`, `ExecStartPre`, and `ExecStartPost` directives execute when a service is started manually by `systemctl` or on system start if the service is set to automatically start.
* `ExecReload` directive executes when a service restarts. 
* `ExecStop`, `ExecStopPre`, and `ExecStopPost` directives execute when a service is stopped.  

Adversaries have created new service files, altered the commands a `.service` file’s directive executes, and modified the user directive a `.service` file executes as, which could result in privilege escalation. Adversaries may also place symbolic links in these directories, enabling systemd to find these payloads regardless of where they reside on the filesystem.[^fn2][^fn1][^fn7] 

The `.service` file’s User directive can be used to run service as a specific user, which could result in privilege escalation based on specific user/group permissions. 

Systemd services can be created via systemd generators, which support the dynamic generation of unit files. Systemd generators are small executables that run during boot or configuration reloads to dynamically create or modify systemd unit files by converting non-native configurations into services, symlinks, or drop-ins (i.e., [Boot or Logon Initialization Scripts](https://attack.mitre.org/techniques/T1037)).[^fn8][^fn5]


# Platform(s)

- Linux

# Parent Technique(s)

- [[../Techniques/Create or Modify System Process (T1543)|Create or Modify System Process]]

# Tool(s)

- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1543.002](https://attack.mitre.org/techniques/T1543/002)
- [Pepe Berba. (2022, January 30). Hunting for Persistence in Linux (Part 3): Systemd, Timers, and Cron. Retrieved March 20, 2023.](https://pberba.github.io/security/2022/01/30/linux-threat-hunting-for-persistence-systemd-timers-cron/)

[^fn1]: [airwalk. (2023, January 1). A guide to backdooring Unix systems. Retrieved May 31, 2023.](http://www.ouah.org/backdoors.html)
[^fn2]: [Anomali Labs. (2019, March 15). Rocke Evolves Its Arsenal With a New Malware Family Written in Golang. Retrieved April 24, 2019.](https://www.anomali.com/blog/rocke-evolves-its-arsenal-with-a-new-malware-family-written-in-golang)
[^fn3]: [Free Desktop. (n.d.). systemd.service — Service unit configuration. Retrieved March 20, 2023.](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
[^fn4]: [Linux man-pages. (2014, January). systemd(1) - Linux manual page. Retrieved April 23, 2019.](http://man7.org/linux/man-pages/man1/systemd.1.html)
[^fn5]: [Pepe Berba. (2022, February 7). Hunting for Persistence in Linux (Part 5): Systemd Generators. Retrieved April 8, 2025.](https://pberba.github.io/security/2022/02/07/linux-threat-hunting-for-persistence-systemd-generators/)
[^fn7]: [Rapid7. (2016, June 22). Service Persistence. Retrieved April 23, 2019.](https://www.rapid7.com/db/modules/exploit/linux/local/service_persistence)
[^fn8]: [Ruben Groenewoud. (2024, August 20). Linux Detection Engineering -  A primer on persistence mechanisms. Retrieved March 18, 2025.](https://www.elastic.co/security-labs/primer-on-persistence-mechanisms)
[^fn9]: [Tony Lambert. (2022, November 13). ATT&CK T1501: Understanding systemd service persistence. Retrieved March 20, 2023.](https://redcanary.com/blog/attck-t1501-understanding-systemd-service-persistence/)