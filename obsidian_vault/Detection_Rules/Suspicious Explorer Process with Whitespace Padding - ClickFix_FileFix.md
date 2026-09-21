---
type: detection_rule
title: "Suspicious Explorer Process with Whitespace Padding - ClickFix/FileFix"
rule_id: 3ae9974a-eb09-4044-8e70-8980a50c12c8
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.004, attack.t1027.010]
---

# Suspicious Explorer Process with Whitespace Padding - ClickFix/FileFix

## Description
Detects process creation with suspicious whitespace padding followed by a '#' character, which may indicate ClickFix or FileFix techniques used to conceal malicious commands from visual inspection.
ClickFix and FileFix are social engineering attack techniques where adversaries distribute phishing documents or malicious links that deceive users into opening the Windows Run dialog box or File Explorer search bar.
The victims are then instructed to paste commands from their clipboard, which contain extensive whitespace padding using various Unicode space characters to push the actual malicious command far to the right, effectively hiding it from immediate view.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_explorer:
  CommandLine|contains: '#'
  ParentImage|endswith: \explorer.exe
selection_space_variation:
  CommandLine|contains:
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
- Unknown

## References
- https://expel.com/blog/cache-smuggling-when-a-picture-isnt-a-thousand-words/
- https://mrd0x.com/filefix-clickfix-alternative/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-04
- **Rule ID:** `3ae9974a-eb09-4044-8e70-8980a50c12c8`
- **Source file:** `windows/process_creation/proc_creation_win_susp_clickfix_filefix_whitespace_padding.yml`
