---
type: detection_rule
title: "Suspicious Parent Double Extension File Execution"
rule_id: 5e6a80c8-2d45-4633-9ef4-fa2671a39c5c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.007]
---

# Suspicious Parent Double Extension File Execution

## Description
Detect execution of suspicious double extension files in ParentCommandLine

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- ParentImage|endswith:
  - .doc.lnk
  - .docx.lnk
  - .xls.lnk
  - .xlsx.lnk
  - .ppt.lnk
  - .pptx.lnk
  - .rtf.lnk
  - .pdf.lnk
  - .txt.lnk
  - .doc.js
  - .docx.js
  - .xls.js
  - .xlsx.js
  - .ppt.js
  - .pptx.js
  - .rtf.js
  - .pdf.js
  - .txt.js
- ParentCommandLine|contains:
  - .doc.lnk
  - .docx.lnk
  - .xls.lnk
  - .xlsx.lnk
  - .ppt.lnk
  - .pptx.lnk
  - .rtf.lnk
  - .pdf.lnk
  - .txt.lnk
  - .doc.js
  - .docx.js
  - .xls.js
  - .xlsx.js
  - .ppt.js
  - .pptx.js
  - .rtf.js
  - .pdf.js
  - .txt.js
```

## MITRE ATT&CK
- T1036.007

## False Positives
- Unknown

## References
- https://www.virustotal.com/gui/file/7872d8845a332dce517adae9c3389fde5313ff2fed38c2577f3b498da786db68/behavior
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/bluebottle-banks-targeted-africa

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-06
- **Rule ID:** `5e6a80c8-2d45-4633-9ef4-fa2671a39c5c`
- **Source file:** `windows/process_creation/proc_creation_win_susp_double_extension_parent.yml`
