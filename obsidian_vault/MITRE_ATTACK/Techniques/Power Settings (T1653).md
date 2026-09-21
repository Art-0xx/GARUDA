---
mitre_data:
  id: T1653
  linker_tags:
  - mitre/attack/linker/persistence/power_settings
  name: Power Settings
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Power Settings (`T1653`)

Adversaries may impair a system's ability to hibernate, reboot, or shut down in order to extend access to infected machines. When a computer enters a dormant state, some or all software and hardware may cease to operate which can disrupt malicious activity.[^fn1]

Adversaries may abuse system utilities and configuration settings to maintain access by preventing machines from entering a state, such as standby, that can terminate malicious activity.[^fn7][^fn6]

For example, `powercfg` controls all configurable power system settings on a Windows system and can be abused to prevent an infected host from locking or shutting down.[^fn4] Adversaries may also extend system lock screen timeout settings.[^fn3] Other relevant settings, such as disk and hibernate timeout, can be similarly abused to keep the infected machine running even if no user is active.[^fn2]

Aware that some malware cannot survive system reboots, adversaries may entirely delete files used to invoke system shut down or reboot.[^fn5]


# Platform(s)

- Windows
- Linux
- macOS
- Network Devices

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1653](https://attack.mitre.org/techniques/T1653)

[^fn1]: [AVG. (n.d.). Should You Shut Down, Sleep or Hibernate Your PC or Mac Laptop?. Retrieved June 8, 2023.](https://www.avg.com/en/signal/should-you-shut-down-sleep-or-hibernate-your-pc-or-mac-laptop)
[^fn2]: [Avira. (2019, November 28). CoinLoader: A Sophisticated Malware Loader Campaign. Retrieved June 5, 2023.](https://www.avira.com/en/blog/coinloader-a-sophisticated-malware-loader-campaign)
[^fn3]: [Bethany Hardin, Lavine Oluoch, Tatiana Vollbrecht. (2022, November 14). BATLOADER: The Evasive Downloader Malware. Retrieved June 5, 2023.](https://blogs.vmware.com/security/2022/11/batloader-the-evasive-downloader-malware.html)
[^fn4]: [Douglas Bonderud. (2018, September 17). Two New Monero Malware Attacks Target Windows and Android Users. Retrieved June 5, 2023.](https://securityintelligence.com/news/two-new-monero-malware-attacks-target-windows-and-android-users/)
[^fn5]: [Joie Salvio and Roy Tay. (2023, June 20). Condi DDoS Botnet Spreads via TP-Link's CVE-2023-1389. Retrieved September 5, 2023.](https://www.fortinet.com/blog/threat-research/condi-ddos-botnet-spreads-via-tp-links-cve-2023-1389)
[^fn6]: [Man7. (n.d.). systemd-sleep.conf(5) — Linux manual page. Retrieved June 7, 2023.](https://man7.org/linux/man-pages/man5/systemd-sleep.conf.5.html)
[^fn7]: [Microsoft. (2021, December 15). Powercfg command-line options. Retrieved June 5, 2023.](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options?adlt=strict)