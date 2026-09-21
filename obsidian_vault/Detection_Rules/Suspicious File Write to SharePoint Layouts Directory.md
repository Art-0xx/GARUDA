---
type: detection_rule
title: "Suspicious File Write to SharePoint Layouts Directory"
rule_id: 1f0489be-b496-4ddf-b3a9-5900f2044e9c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1190, attack.t1505.003]
---

# Suspicious File Write to SharePoint Layouts Directory

## Description
Detects suspicious file writes to SharePoint layouts directory which could indicate webshell activity or post-exploitation.
This behavior has been observed in the exploitation of SharePoint vulnerabilities such as CVE-2025-49704, CVE-2025-49706 or CVE-2025-53770.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \w3wp.exe
  TargetFilename|contains:
  - \15\TEMPLATE\LAYOUTS\
  - \16\TEMPLATE\LAYOUTS\
  TargetFilename|endswith:
  - .asax
  - .ascx
  - .ashx
  - .asmx
  - .asp
  - .aspx
  - .bat
  - .cmd
  - .cer
  - .config
  - .hta
  - .js
  - .jsp
  - .jspx
  - .php
  - .ps1
  - .vbs
  TargetFilename|startswith:
  - C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\
  - C:\Program Files (x86)\Common Files\Microsoft Shared\Web Server Extensions\
```

## MITRE ATT&CK
- T1190
- T1505.003

## False Positives
- Unknown

## References
- https://unit42.paloaltonetworks.com/microsoft-sharepoint-cve-2025-49704-cve-2025-49706-cve-2025-53770/
- https://www.microsoft.com/en-us/security/blog/2025/07/22/disrupting-active-exploitation-of-on-premises-sharepoint-vulnerabilities/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-24
- **Rule ID:** `1f0489be-b496-4ddf-b3a9-5900f2044e9c`
- **Source file:** `windows/file/file_event/file_event_win_susp_filewrite_in_sharepoint_layouts_dir.yml`
