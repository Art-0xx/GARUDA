---
mitre_data:
  id: T1574.004
  linker_tags:
  - mitre/attack/linker/stealth/dylib_hijacking
  - mitre/attack/linker/execution/dylib_hijacking
  name: Dylib Hijacking
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# Dylib Hijacking (`T1574.004`)

Adversaries may execute their own payloads by placing a malicious dynamic library (dylib) with an expected name in a path a victim application searches at runtime. The dynamic loader will try to find the dylibs based on the sequential order of the search paths. Paths to dylibs may be prefixed with <code>@rpath</code>, which allows developers to use relative paths to specify an array of search paths used at runtime based on the location of the executable.  Additionally, if weak linking is used, such as the <code>LC_LOAD_WEAK_DYLIB</code> function, an application will still execute even if an expected dylib is not present. Weak linking enables developers to run an application on multiple macOS versions as new APIs are added.

Adversaries may gain execution by inserting malicious dylibs with the name of the missing dylib in the identified path.[^fn4][^fn2][^fn6][^fn7] Dylibs are loaded into an application's address space allowing the malicious dylib to inherit the application's privilege level and resources. Based on the application, this could result in privilege escalation and uninhibited network access. This method may also evade detection from security products since the execution is masked under a legitimate process.[^fn3][^fn5][^fn1]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Hijack Execution Flow (T1574)|Hijack Execution Flow]]

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1574.004](https://attack.mitre.org/techniques/T1574/004)

[^fn1]: [Amanda Rousseau. (2020, April 4). MacOS Dylib Injection Workshop. Retrieved March 29, 2021.](https://malwareunicorn.org/workshops/macos_dylib_injection.html#5)
[^fn2]: [Patrick Wardle. (2015, March 1). Dylib Hijacking on OS X. Retrieved March 29, 2021.](https://www.virusbulletin.com/uploads/pdf/magazine/2015/vb201503-dylib-hijacking.pdf)
[^fn3]: [Patrick Wardle. (2015). Writing Bad @$$ Malware for OS X. Retrieved July 10, 2017.](https://www.blackhat.com/docs/us-15/materials/us-15-Wardle-Writing-Bad-A-Malware-For-OS-X.pdf)
[^fn4]: [Patrick Wardle. (2019, July 2). Getting Root with Benign AppStore Apps. Retrieved March 31, 2021.](https://objective-see.com/blog/blog_0x46.html)
[^fn5]: [Patrick Wardle. (2020, August 5). The Art of Mac Malware Volume 0x1: Analysis. Retrieved November 17, 2024.](https://taomm.org/vol1/read.html)
[^fn6]: [Wardle, P., Ross, C. (2017, September 21). Empire Project Dylib Hijack Vulnerability Scanner. Retrieved April 1, 2021.](https://github.com/EmpireProject/Empire/blob/master/lib/modules/python/situational_awareness/host/osx/HijackScanner.py)
[^fn7]: [Wardle, P., Ross, C. (2018, April 8). EmpireProject Create Dylib Hijacker. Retrieved April 1, 2021.](https://github.com/EmpireProject/Empire/blob/08cbd274bef78243d7a8ed6443b8364acd1fc48b/lib/modules/python/persistence/osx/CreateHijacker.py)