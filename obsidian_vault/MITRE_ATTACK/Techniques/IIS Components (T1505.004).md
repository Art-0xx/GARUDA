---
mitre_data:
  id: T1505.004
  linker_tags:
  - mitre/attack/linker/persistence/iis_components
  name: IIS Components
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# IIS Components (`T1505.004`)

Adversaries may install malicious components that run on Internet Information Services (IIS) web servers to establish persistence. IIS provides several mechanisms to extend the functionality of the web servers. For example, Internet Server Application Programming Interface (ISAPI) extensions and filters can be installed to examine and/or modify incoming and outgoing IIS web requests. Extensions and filters are deployed as DLL files that export three functions: <code>Get{Extension/Filter}Version</code>, <code>Http{Extension/Filter}Proc</code>, and (optionally) <code>Terminate{Extension/Filter}</code>. IIS modules may also be installed to extend IIS web servers.[^fn8][^fn9][^fn5][^fn3]

Adversaries may install malicious ISAPI extensions and filters to observe and/or modify traffic, execute commands on compromised machines, or proxy command and control traffic. ISAPI extensions and filters may have access to all IIS web requests and responses. For example, an adversary may abuse these mechanisms to modify HTTP responses in order to distribute malicious commands/content to previously comprised hosts.[^fn9][^fn8][^fn7][^fn1][^fn3][^fn10]

Adversaries may also install malicious IIS modules to observe and/or modify traffic. IIS 7.0 introduced modules that provide the same unrestricted access to HTTP requests and responses as ISAPI extensions and filters. IIS modules can be written as a DLL that exports <code>RegisterModule</code>, or as a .NET application that interfaces with ASP.NET APIs to access IIS HTTP requests.[^fn6][^fn3][^fn4]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Server Software Component (T1505)|Server Software Component]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1505.004](https://attack.mitre.org/techniques/T1505/004)
- [Falcone, R. (2018, January 25). OilRig uses RGDoor IIS Backdoor on Targets in the Middle East. Retrieved July 6, 2018.](https://researchcenter.paloaltonetworks.com/2018/01/unit42-oilrig-uses-rgdoor-iis-backdoor-targets-middle-east/)

[^fn1]: [Dell SecureWorks Counter Threat Unit Threat Intelligence. (2015, August 5). Threat Group-3390 Targets Organizations for Cyberespionage. Retrieved August 18, 2018.](https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage)
[^fn3]: [Grunzweig, J. (2013, December 9). The Curious Case of the Malicious IIS Module. Retrieved June 3, 2021.](https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/the-curious-case-of-the-malicious-iis-module/)
[^fn4]: [Hromcová, Z., Cherepanov, A. (2021). Anatomy of Native IIS Malware. Retrieved September 9, 2021.](https://i.blackhat.com/USA21/Wednesday-Handouts/us-21-Anatomy-Of-Native-Iis-Malware-wp.pdf)
[^fn5]: [Julien. (2011, February 2). IIS Backdoor. Retrieved June 3, 2021.](https://web.archive.org/web/20170106175935/http:/esec-lab.sogeti.com/posts/2011/02/02/iis-backdoor.html)
[^fn6]: [Microsoft. (2007, November 24). IIS Modules Overview. Retrieved June 17, 2021.](https://docs.microsoft.com/en-us/iis/get-started/introduction-to-iis/iis-modules-overview)
[^fn7]: [Microsoft. (2017, June 16). Intercepting All Incoming IIS Requests. Retrieved June 3, 2021.](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525696(v=vs.90))
[^fn8]: [Microsoft. (2017, June 16). ISAPI Extension Overview. Retrieved June 3, 2021.](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525172(v=vs.90))
[^fn9]: [Microsoft. (2017, June 16). ISAPI Filter Overview. Retrieved June 3, 2021.](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524610(v=vs.90))
[^fn10]: [MMPC. (2012, October 3). Malware signed with the Adobe code signing certificate. Retrieved June 3, 2021.](https://web.archive.org/web/20140804175025/http:/blogs.technet.com/b/mmpc/archive/2012/10/03/malware-signed-with-the-adobe-code-signing-certificate.aspx)