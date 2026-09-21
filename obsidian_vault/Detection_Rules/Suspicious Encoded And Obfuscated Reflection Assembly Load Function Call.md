---
type: detection_rule
title: "Suspicious Encoded And Obfuscated Reflection Assembly Load Function Call"
rule_id: 9c0295ce-d60d-40bd-bd74-84673b7592b1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1027]
---

# Suspicious Encoded And Obfuscated Reflection Assembly Load Function Call

## Description
Detects suspicious base64 encoded and obfuscated "LOAD" keyword used in .NET "reflection.assembly"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - OgA6ACgAIgBMACIAKwAiAG8AYQBkACIAKQ
  - oAOgAoACIATAAiACsAIgBvAGEAZAAiACkA
  - 6ADoAKAAiAEwAIgArACIAbwBhAGQAIgApA
  - OgA6ACgAIgBMAG8AIgArACIAYQBkACIAKQ
  - oAOgAoACIATABvACIAKwAiAGEAZAAiACkA
  - 6ADoAKAAiAEwAbwAiACsAIgBhAGQAIgApA
  - OgA6ACgAIgBMAG8AYQAiACsAIgBkACIAKQ
  - oAOgAoACIATABvAGEAIgArACIAZAAiACkA
  - 6ADoAKAAiAEwAbwBhACIAKwAiAGQAIgApA
  - OgA6ACgAJwBMACcAKwAnAG8AYQBkACcAKQ
  - oAOgAoACcATAAnACsAJwBvAGEAZAAnACkA
  - 6ADoAKAAnAEwAJwArACcAbwBhAGQAJwApA
  - OgA6ACgAJwBMAG8AJwArACcAYQBkACcAKQ
  - oAOgAoACcATABvACcAKwAnAGEAZAAnACkA
  - 6ADoAKAAnAEwAbwAnACsAJwBhAGQAJwApA
  - OgA6ACgAJwBMAG8AYQAnACsAJwBkACcAKQ
  - oAOgAoACcATABvAGEAJwArACcAZAAnACkA
  - 6ADoAKAAnAEwAbwBhACcAKwAnAGQAJwApA
```

## MITRE ATT&CK
- T1059.001
- T1027

## False Positives
- Unlikely

## References
- https://github.com/Neo23x0/Raccine/blob/20a569fa21625086433dcce8bb2765d0ea08dcb6/yara/mal_revil.yar
- https://thedfirreport.com/2022/05/09/seo-poisoning-a-gootloader-story/
- https://learn.microsoft.com/en-us/dotnet/api/system.appdomain.load?view=net-7.0

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-03-01
- **Rule ID:** `9c0295ce-d60d-40bd-bd74-84673b7592b1`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_reflection_assembly_load_obfusc.yml`
