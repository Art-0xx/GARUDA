---
type: detection_rule
title: "Notepad Password Files Discovery"
rule_id: 3b4e950b-a3ea-44d3-877e-432071990709
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1083]
---

# Notepad Password Files Discovery

## Description
Detects the execution of Notepad to open a file that has the string "password" which may indicate unauthorized access to credentials or suspicious activity.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|endswith:
  - password*.txt
  - password*.csv
  - password*.doc
  - password*.xls
  Image|endswith: \notepad.exe
  ParentImage|endswith: \explorer.exe
```

## MITRE ATT&CK
- T1083

## False Positives
- Legitimate use of opening files from remote hosts by administrators or users. However, storing passwords in text readable format could potentially be a violation of the organization's policy. Any match should be investigated further.

## References
- https://thedfirreport.com/2025/02/24/confluence-exploit-leads-to-lockbit-ransomware/
- https://intel.thedfirreport.com/eventReports/view/57

## Metadata
- **Author:** The DFIR Report
- **Date:** 2025-02-21
- **Rule ID:** `3b4e950b-a3ea-44d3-877e-432071990709`
- **Source file:** `windows/process_creation/proc_creation_win_notepad_local_passwd_discovery.yml`
