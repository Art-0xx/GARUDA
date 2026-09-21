---
type: detection_rule
title: "RegAsm.EXE Execution Without CommandLine Flags or Files"
rule_id: 651f87f7-12db-47f9-84c5-f27b081b94b6
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.009]
---

# RegAsm.EXE Execution Without CommandLine Flags or Files

## Description
Detects the execution of "RegAsm.exe" without a commandline flag or file, which might indicate potential process injection activity.
Usually "RegAsm.exe" should point to a dedicated DLL file or call the help with the "/?" flag.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|endswith:
  - RegAsm
  - RegAsm.exe
  - RegAsm.exe"
  - RegAsm.exe'
selection_img:
- Image|endswith: \RegAsm.exe
- OriginalFileName: RegAsm.exe
```

## MITRE ATT&CK
- T1218.009

## False Positives
- Legitimate use of Regasm by developers.

## References
- https://www.mcafee.com/blogs/other-blogs/mcafee-labs/agent-teslas-unique-approach-vbs-and-steganography-for-delivery-and-intrusion/
- https://www.zscaler.fr/blogs/security-research/threat-actors-exploit-cve-2017-11882-deliver-agent-tesla
- https://learn.microsoft.com/en-us/dotnet/framework/tools/regasm-exe-assembly-registration-tool
- https://app.any.run/tasks/ea944b89-69d8-49c8-ac1f-5c76ad300db2
- https://www.joesandbox.com/analysis/1467354/0/html

## Metadata
- **Author:** frack113
- **Date:** 2025-06-04
- **Rule ID:** `651f87f7-12db-47f9-84c5-f27b081b94b6`
- **Source file:** `windows/process_creation/proc_creation_win_regasm_no_flag_or_dll_execution.yml`
