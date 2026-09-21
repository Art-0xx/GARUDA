---
type: detection_rule
title: "Suspicious Space Characters in TypedPaths Registry Path - FileFix"
rule_id: 8f2a5c3d-9e4b-4a7c-8d1f-2e5a6b9c3d7e
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.004, attack.t1027.010]
---

# Suspicious Space Characters in TypedPaths Registry Path - FileFix

## Description
Detects the occurrence of numerous space characters in TypedPaths registry paths, which may indicate execution via phishing lures using file-fix techniques to hide malicious commands.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_key:
  Details|contains: '#'
  TargetObject|endswith: \Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths\url1
selection_space_variation:
  Details|contains:
  - "\u2000\u2000\u2000\u2000\u2000\u2000\u2000\u2000\u2000\u2000\u2000\u2000"
  - "\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001"
  - "\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002"
  - "\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"
  - "\u2004\u2004\u2004\u2004\u2004\u2004\u2004\u2004\u2004\u2004\u2004\u2004"
  - "\u2005\u2005\u2005\u2005\u2005\u2005\u2005\u2005\u2005\u2005\u2005\u2005"
  - "\u2006\u2006\u2006\u2006\u2006\u2006\u2006\u2006\u2006\u2006\u2006\u2006"
  - "\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007"
  - "\u2008\u2008\u2008\u2008\u2008\u2008\u2008\u2008\u2008\u2008\u2008\u2008"
  - "\u2009\u2009\u2009\u2009\u2009\u2009\u2009\u2009\u2009\u2009\u2009\u2009"
  - "\u200A\u200A\u200A\u200A\u200A\u200A\u200A\u200A\u200A\u200A\u200A\u200A"
  - "\_\_\_\_\_\_\_\_\_\_\_\_"
  - '            '
```

## MITRE ATT&CK
- T1204.004
- T1027.010

## False Positives
- Unlikely

## References
- https://expel.com/blog/cache-smuggling-when-a-picture-isnt-a-thousand-words/
- https://mrd0x.com/filefix-clickfix-alternative/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-04
- **Rule ID:** `8f2a5c3d-9e4b-4a7c-8d1f-2e5a6b9c3d7e`
- **Source file:** `windows/registry/registry_set/registry_set_susp_typedpaths_space_characters.yml`
