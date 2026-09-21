---
type: detection_rule
title: "Suspicious Space Characters in RunMRU Registry Path - ClickFix"
rule_id: 7a1b4c5e-8f3d-4b9a-7c2e-1f4a5b8c6d9e
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.004, attack.t1027.010]
---

# Suspicious Space Characters in RunMRU Registry Path - ClickFix

## Description
Detects the occurrence of numerous space characters in RunMRU registry paths, which may indicate execution via phishing lures using clickfix techniques to hide malicious commands in the Windows Run dialog box from naked eyes.

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
  TargetObject|contains: \Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU\
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
- https://github.com/JohnHammond/recaptcha-phish

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-04
- **Rule ID:** `7a1b4c5e-8f3d-4b9a-7c2e-1f4a5b8c6d9e`
- **Source file:** `windows/registry/registry_set/registry_set_susp_runmru_space_character.yml`
