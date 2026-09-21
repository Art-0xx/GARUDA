---
type: detection_rule
title: "JScript Compiler Execution"
rule_id: 52788a70-f1da-40dd-8fbd-73b5865d6568
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127]
---

# JScript Compiler Execution

## Description
Detects the execution of the "jsc.exe" (JScript Compiler).
Attacker might abuse this in order to compile JScript files on the fly and bypassing application whitelisting.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \jsc.exe
- OriginalFileName: jsc.exe
```

## MITRE ATT&CK
- T1127

## False Positives
- Legitimate use to compile JScript by developers.

## References
- https://lolbas-project.github.io/lolbas/Binaries/Jsc/
- https://www.phpied.com/make-your-javascript-a-windows-exe/
- https://twitter.com/DissectMalware/status/998797808907046913

## Metadata
- **Author:** frack113
- **Date:** 2022-05-02
- **Rule ID:** `52788a70-f1da-40dd-8fbd-73b5865d6568`
- **Source file:** `windows/process_creation/proc_creation_win_jsc_execution.yml`
