---
type: detection_rule
title: "Potential Defense Evasion Via Right-to-Left Override"
rule_id: ad691d92-15f2-4181-9aa4-723c74f9ddc3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.002]
---

# Potential Defense Evasion Via Right-to-Left Override

## Description
Detects the presence of the "u202+E" character, which causes a terminal, browser, or operating system to render text in a right-to-left sequence.
This character is used as an obfuscation and masquerading techniques by adversaries to trick users into opening malicious files.

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
  - \u202e
  - '[U+202E]'
  - "\u202E"
```

## MITRE ATT&CK
- T1036.002

## False Positives
- Commandlines that contains scriptures such as arabic or hebrew might make use of this character

## References
- https://redcanary.com/blog/right-to-left-override/
- https://www.malwarebytes.com/blog/news/2014/01/the-rtlo-method
- https://unicode-explorer.com/c/202E
- https://tria.ge/241015-l98snsyeje/behavioral2
- https://unprotect.it/technique/right-to-left-override-rlo-extension-spoofing/

## Metadata
- **Author:** Micah Babinski, @micahbabinski, Swachchhanda Shrawan Poudel (Nextron Systems), Luc Génaux
- **Date:** 2023-02-15
- **Rule ID:** `ad691d92-15f2-4181-9aa4-723c74f9ddc3`
- **Source file:** `windows/process_creation/proc_creation_win_susp_right_to_left_override.yml`
