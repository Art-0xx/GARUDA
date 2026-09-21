---
mitre_data:
  id: T1574.012
  linker_tags:
  - mitre/attack/linker/stealth/cor_profiler
  - mitre/attack/linker/execution/cor_profiler
  name: COR_PROFILER
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# COR_PROFILER (`T1574.012`)

Adversaries may leverage the COR_PROFILER environment variable to hijack the execution flow of programs that load the .NET CLR. The COR_PROFILER is a .NET Framework feature which allows developers to specify an unmanaged (or external of .NET) profiling DLL to be loaded into each .NET process that loads the Common Language Runtime (CLR). These profilers are designed to monitor, troubleshoot, and debug managed code executed by the .NET CLR.[^fn5][^fn4]

The COR_PROFILER environment variable can be set at various scopes (system, user, or process) resulting in different levels of influence. System and user-wide environment variable scopes are specified in the Registry, where a [Component Object Model](https://attack.mitre.org/techniques/T1559/001) (COM) object can be registered as a profiler DLL. A process scope COR_PROFILER can also be created in-memory without modifying the Registry. Starting with .NET Framework 4, the profiling DLL does not need to be registered as long as the location of the DLL is specified in the COR_PROFILER_PATH environment variable.[^fn4]

Adversaries may abuse COR_PROFILER to establish persistence that executes a malicious DLL in the context of all .NET processes every time the CLR is invoked. The COR_PROFILER can also be used to elevate privileges (ex: [Bypass User Account Control](https://attack.mitre.org/techniques/T1548/002)) if the victim .NET process executes at a higher permission level, as well as to hook and impair defenses provided by .NET processes.[^fn3][^fn2][^fn1][^fn7][^fn6]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.012](https://attack.mitre.org/techniques/T1574/012)

[^fn1]: [Almond. (2019, April 30). UAC bypass via elevated .NET applications. Retrieved June 24, 2020.](https://offsec.almond.consulting/UAC-bypass-dotnet.html)
[^fn2]: [Brown, J. (2020, May 7). Detecting COR_PROFILER manipulation for persistence. Retrieved June 24, 2020.](https://redcanary.com/blog/cor_profiler-for-persistence/)
[^fn3]: [Lambert, T. (2020, May 7). Introducing Blue Mockingbird. Retrieved May 26, 2020.](https://redcanary.com/blog/blue-mockingbird-cryptominer/)
[^fn4]: [Microsoft. (2013, February 4). Registry-Free Profiler Startup and Attach. Retrieved June 24, 2020.](https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ee471451(v=vs.100))
[^fn5]: [Microsoft. (2017, March 30). Profiling Overview. Retrieved June 24, 2020.](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview)
[^fn6]: [Smith, C. (2017, May 18). Subvert CLR Process Listing With .NET Profilers. Retrieved June 24, 2020.](https://web.archive.org/web/20170720041203/http://subt0x10.blogspot.com/2017/05/subvert-clr-process-listing-with-net.html)
[^fn7]: [Yair, O. (2019, August 19). Invisi-Shell. Retrieved June 24, 2020.](https://github.com/OmerYa/Invisi-Shell)