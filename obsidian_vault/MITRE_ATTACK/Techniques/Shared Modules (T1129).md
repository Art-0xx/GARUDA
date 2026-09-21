---
mitre_data:
  id: T1129
  linker_tags:
  - mitre/attack/linker/execution/shared_modules
  name: Shared Modules
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Shared Modules (`T1129`)

Adversaries may execute malicious payloads via loading shared modules. Shared modules are executable files that are loaded into processes to provide access to reusable code, such as specific custom functions or invoking OS API functions (i.e., [Native API](https://attack.mitre.org/techniques/T1106)).

Adversaries may use this functionality as a way to execute arbitrary payloads on a victim system. For example, adversaries can modularize functionality of their malware into shared objects that perform various functions such as managing C2 network communications or execution of specific actions on objective.

The Linux & macOS module loader can load and execute shared objects from arbitrary local paths. This functionality resides in `dlfcn.h` in functions such as `dlopen` and `dlsym`. Although macOS can execute `.so` files, common practice uses `.dylib` files.[^fn2][^fn5][^fn1][^fn3]

The Windows module loader can be instructed to load DLLs from arbitrary local paths and arbitrary Universal Naming Convention (UNC) network paths. This functionality resides in `NTDLL.dll` and is part of the Windows [Native API](https://attack.mitre.org/techniques/T1106) which is called from functions like `LoadLibrary` at run time.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1129](https://attack.mitre.org/techniques/T1129)

[^fn1]: [ Alex Turing, Hui Wang. (2021, April 28). RotaJakiro: A long live secret backdoor with 0 VT detection. Retrieved June 14, 2023.](https://blog.netlab.360.com/stealth_rotajakiro_backdoor_en/)
[^fn2]: [Apple. (2012, July 23). Overview of Dynamic Libraries. Retrieved September 7, 2023.](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html)
[^fn3]: [Erye Hernandez and Danny Tsechansky. (2017, June 22). The New and Improved macOS Backdoor from OceanLotus. Retrieved September 8, 2023.](https://unit42.paloaltonetworks.com/unit42-new-improved-macos-backdoor-oceanlotus/)
[^fn4]: [Microsoft. (2023, April 28). What is a DLL. Retrieved September 7, 2023.](https://learn.microsoft.com/troubleshoot/windows-client/deployment/dynamic-link-library)
[^fn5]: [Wheeler, D. (2003, April 11). Shared Libraries. Retrieved September 7, 2023.](https://tldp.org/HOWTO/Program-Library-HOWTO/shared-libraries.html)