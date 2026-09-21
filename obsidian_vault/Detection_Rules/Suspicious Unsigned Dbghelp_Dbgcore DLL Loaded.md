---
type: detection_rule
title: "Suspicious Unsigned Dbghelp/Dbgcore DLL Loaded"
rule_id: bdc64095-d59a-42a2-8588-71fd9c9d9abc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Suspicious Unsigned Dbghelp/Dbgcore DLL Loaded

## Description
Detects the load of dbghelp/dbgcore DLL (used to make memory dumps) by suspicious processes.
Tools like ProcessHacker and some attacker tradecract use MiniDumpWriteDump API found in dbghelp.dll or dbgcore.dll.
As an example, SilentTrynity C2 Framework has a module that leverages this API to dump the contents of Lsass.exe and transfer it over the network back to the attacker's machine.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|endswith:
  - \dbghelp.dll
  - \dbgcore.dll
  Signed: 'false'
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows/win32/api/minidumpapiset/nf-minidumpapiset-minidumpwritedump
- https://www.pinvoke.net/default.aspx/dbghelp/MiniDumpWriteDump.html
- https://medium.com/@fsx30/bypass-edrs-memory-protection-introduction-to-hooking-2efb21acffd6

## Metadata
- **Author:** Perez Diego (@darkquassar), oscd.community, Ecco
- **Date:** 2019-10-27
- **Rule ID:** `bdc64095-d59a-42a2-8588-71fd9c9d9abc`
- **Source file:** `windows/image_load/image_load_dll_dbghelp_dbgcore_unsigned_load.yml`
