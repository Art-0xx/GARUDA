---
mitre_data:
  id: T1574.014
  linker_tags:
  - mitre/attack/linker/stealth/appdomainmanager
  - mitre/attack/linker/execution/appdomainmanager
  name: AppDomainManager
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# AppDomainManager (`T1574.014`)

Adversaries may execute their own malicious payloads by hijacking how the .NET `AppDomainManager` loads assemblies. The .NET framework uses the `AppDomainManager` class to create and manage one or more isolated runtime environments (called application domains) inside a process to host the execution of .NET applications. Assemblies (`.exe` or `.dll` binaries compiled to run as .NET code) may be loaded into an application domain as executable code.[^fn2] 

Known as "AppDomainManager injection," adversaries may execute arbitrary code by hijacking how .NET applications load assemblies. For example, malware may create a custom application domain inside a target process to load and execute an arbitrary assembly. Alternatively, configuration files (`.config`) or process environment variables that define .NET runtime settings may be tampered with to instruct otherwise benign .NET applications to load a malicious assembly (identified by name) into the target process.[^fn1][^fn3][^fn4]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.014](https://attack.mitre.org/techniques/T1574/014)

[^fn1]: [Administrator. (2020, May 26). APPDOMAINMANAGER INJECTION AND DETECTION. Retrieved March 28, 2024.](https://pentestlaboratories.com/2020/05/26/appdomainmanager-injection-and-detection/)
[^fn2]: [Microsoft. (2021, September 15). Application domains. Retrieved March 28, 2024.](https://learn.microsoft.com/dotnet/framework/app-domains/application-domains)
[^fn3]: [PwC Threat Intelligence. (2023, October 25). Yellow Liderc ships its scripts and delivers IMAPLoader malware. Retrieved March 29, 2024.](https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/yellow-liderc-ships-its-scripts-delivers-imaploader-malware.html)
[^fn4]: [Spagnola, N. (2023, May 5). AppDomain Manager Injection: New Techniques For Red Teams. Retrieved March 29, 2024.](https://www.rapid7.com/blog/post/2023/05/05/appdomain-manager-injection-new-techniques-for-red-teams/)