---
type: detection_rule
title: "Suspicious Double Extension File Execution"
rule_id: 1cdd9a09-06c9-4769-99ff-626e2b3991b8
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1566.001]
---

# Suspicious Double Extension File Execution

## Description
Detects suspicious use of an .exe extension after a non-executable file extension like .pdf.exe, a set of spaces or underlines to cloak the executable file in spear phishing campaigns

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
  - '      .exe'
  - ______.exe
  - .doc.exe
  - .doc.js
  - .docx.exe
  - .docx.js
  - .gif.exe
  - .jpeg.exe
  - .jpg.exe
  - .mkv.exe
  - .mov.exe
  - .mp3.exe
  - .mp4.exe
  - .pdf.exe
  - .pdf.js
  - .png.exe
  - .ppt.exe
  - .ppt.js
  - .pptx.exe
  - .pptx.js
  - .rtf.exe
  - .rtf.js
  - .svg.exe
  - .txt.exe
  - .txt.js
  - .xls.exe
  - .xls.js
  - .xlsx.exe
  - .xlsx.js
  - "\u2800\u2800\u2800\u2800\u2800\u2800.exe"
  Image|endswith:
  - '      .exe'
  - ______.exe
  - .doc.exe
  - .doc.js
  - .docx.exe
  - .docx.js
  - .gif.exe
  - .jpeg.exe
  - .jpg.exe
  - .mkv.exe
  - .mov.exe
  - .mp3.exe
  - .mp4.exe
  - .pdf.exe
  - .pdf.js
  - .png.exe
  - .ppt.exe
  - .ppt.js
  - .pptx.exe
  - .pptx.js
  - .rtf.exe
  - .rtf.js
  - .svg.exe
  - .txt.exe
  - .txt.js
  - .xls.exe
  - .xls.js
  - .xlsx.exe
  - .xlsx.js
  - "\u2800\u2800\u2800\u2800\u2800\u2800.exe"
```

## MITRE ATT&CK
- T1566.001

## False Positives
- Unknown

## References
- https://blu3-team.blogspot.com/2019/06/misleading-extensions-xlsexe-docexe.html
- https://twitter.com/blackorbird/status/1140519090961825792
- https://cloud.google.com/blog/topics/threat-intelligence/cybercriminals-weaponize-fake-ai-websites

## Metadata
- **Author:** Florian Roth (Nextron Systems), @blu3_team (idea), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-06-26
- **Rule ID:** `1cdd9a09-06c9-4769-99ff-626e2b3991b8`
- **Source file:** `windows/process_creation/proc_creation_win_susp_double_extension.yml`
