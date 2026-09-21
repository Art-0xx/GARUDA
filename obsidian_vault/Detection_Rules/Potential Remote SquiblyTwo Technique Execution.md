---
type: detection_rule
title: "Potential Remote SquiblyTwo Technique Execution"
rule_id: 8d63dadf-b91b-4187-87b6-34a1114577ea
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1220, attack.t1059.005, attack.t1059.007]
---

# Potential Remote SquiblyTwo Technique Execution

## Description
Detects potential execution of the SquiblyTwo technique that leverages Windows Management Instrumentation (WMI)
to execute malicious code remotely. This technique bypasses application whitelisting by using wmic.exe to process
malicious XSL (eXtensible Stylesheet Language) scripts that can contain embedded JScript or VBScript.
The attack typically works by fetching XSL content from a remote source (using HTTP/HTTPS) and executing it
with full trust privileges directly in memory, avoiding disk-based detection mechanisms. This is a common
LOLBin (Living Off The Land Binary) technique used for defense evasion and code execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ://
  - \\\\
  CommandLine|contains|windash: '/format:'
selection_pe:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
- Hashes|contains:
  - IMPHASH=1B1A3F43BF37B5BFE60751F2EE2F326E
  - IMPHASH=37777A96245A3C74EB217308F3546F4C
  - IMPHASH=9D87C9D67CE724033C0B40CC4CA1B206
  - IMPHASH=B12619881D79C3ACADF45E752A58554A
  - IMPHASH=16A48C3CABF98A9DC1BF02C07FE1EA00
```

## MITRE ATT&CK
- T1047
- T1220
- T1059.005
- T1059.007

## False Positives
- Unknown

## References
- https://web.archive.org/web/20190209154607/https://subt0x11.blogspot.com/2018/04/wmicexe-whitelisting-bypass-hacking.html
- https://twitter.com/mattifestation/status/986280382042595328
- https://atomicredteam.io/defense-evasion/T1220/
- https://lolbas-project.github.io/lolbas/Binaries/Wmic/
- https://x.com/byrne_emmy12099/status/1932346420226658668

## Metadata
- **Author:** Markus Neis, Florian Roth, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2019-01-16
- **Rule ID:** `8d63dadf-b91b-4187-87b6-34a1114577ea`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_squiblytwo_bypass.yml`
