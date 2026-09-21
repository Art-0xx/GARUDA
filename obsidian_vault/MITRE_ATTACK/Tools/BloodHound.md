---
tags:
  - mitre/attack/tool
---

# BloodHound (`S0521`)

[BloodHound](https://attack.mitre.org/software/S0521) is an Active Directory (AD) reconnaissance tool that can reveal hidden relationships and identify attack paths within an AD environment.[^fn3][^fn2][^fn1]



# Platform(s)

- Windows

# Techniques Used

## Domain Groups

[BloodHound](https://attack.mitre.org/software/S0521) can collect information about domain groups and members.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]

## Group Policy Discovery

[BloodHound](https://attack.mitre.org/software/S0521) has the ability to collect local admin information via GPO.[\[GitHub Bloodhound\]](https://github.com/BloodHoundAD/BloodHound)

- *Technique:* [[../Techniques/Group Policy Discovery (T1615)|Group Policy Discovery]]

## Archive Collected Data

[BloodHound](https://attack.mitre.org/software/S0521) can compress data collected by its SharpHound ingestor into a ZIP file to be written to disk.[\[GitHub Bloodhound\]](https://github.com/BloodHoundAD/BloodHound)[\[Trend Micro Black Basta October 2022\]](https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html)

- *Technique:* [[../Techniques/Archive Collected Data (T1560)|Archive Collected Data]]

## Local Groups

[BloodHound](https://attack.mitre.org/software/S0521) can collect information about local groups and members.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/Local Groups (T1069.001)|Local Groups]]

## Domain Account

[BloodHound](https://attack.mitre.org/software/S0521) can collect information about domain users, including identification of domain admin accounts.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/Domain Account (T1087.002)|Domain Account]]

## Local Account

[BloodHound](https://attack.mitre.org/software/S0521) can identify users with local administrator rights.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/Local Account (T1087.001)|Local Account]]

## System Owner/User Discovery

[BloodHound](https://attack.mitre.org/software/S0521) can collect information on user sessions.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/System Owner_User Discovery (T1033)|System Owner/User Discovery]]

## Remote System Discovery

[BloodHound](https://attack.mitre.org/software/S0521) can enumerate and collect the properties of domain computers, including domain controllers.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/Remote System Discovery (T1018)|Remote System Discovery]]

## Native API

[BloodHound](https://attack.mitre.org/software/S0521) can use .NET API calls in the SharpHound ingestor component to pull Active Directory data.[\[GitHub Bloodhound\]](https://github.com/BloodHoundAD/BloodHound)

- *Technique:* [[../Techniques/Native API (T1106)|Native API]]

## PowerShell

[BloodHound](https://attack.mitre.org/software/S0521) can use PowerShell to pull Active Directory information from the target environment.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Domain Trust Discovery

[BloodHound](https://attack.mitre.org/software/S0521) has the ability to map domain trusts and identify misconfigurations for potential abuse.[\[CrowdStrike BloodHound April 2018\]](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]


# External References(s)

- [S0521](https://attack.mitre.org/software/S0521)

[^fn1]: [Dantzig, M. v., Schamper, E. (2019, December 19). Operation Wocao: Shining a light on one of China’s hidden hacking groups. Retrieved October 8, 2020.](https://www.fox-it.com/media/kadlze5c/201912_report_operation_wocao.pdf)
[^fn2]: [Red Team Labs. (2018, April 24). Hidden Administrative Accounts: BloodHound to the Rescue. Retrieved October 28, 2020.](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)
[^fn3]: [Robbins, A., Vazarkar, R., and Schroeder, W. (2016, April 17). Bloodhound: Six Degrees of Domain Admin. Retrieved March 5, 2019.](https://github.com/BloodHoundAD/BloodHound)