---
type: detection_rule
title: "Potential Suspicious Browser Launch From Document Reader Process"
rule_id: 1193d960-2369-499f-a158-7b50a31df682
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002]
---

# Potential Suspicious Browser Launch From Document Reader Process

## Description
Detects when a browser process or browser tab is launched from an application that handles document files such as Adobe, Microsoft Office, etc. And connects to a web application over http(s), this could indicate a possible phishing attempt.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_microsoft_help:
  CommandLine|contains: https://go.microsoft.com/fwlink/
filter_optional_foxit:
  CommandLine|contains:
  - http://ad.foxitsoftware.com/adlog.php?
  - https://globe-map.foxitservice.com/go.php?do=redirect
selection:
  CommandLine|contains: http
  Image|endswith:
  - \brave.exe
  - \chrome.exe
  - \firefox.exe
  - \msedge.exe
  - \opera.exe
  - \maxthon.exe
  - \seamonkey.exe
  - \vivaldi.exe
  ParentImage|contains:
  - Acrobat Reader
  - Microsoft Office
  - PDF Reader
```

## MITRE ATT&CK
- T1204.002

## False Positives
- Unlikely in most cases, further investigation should be done in the commandline of the browser process to determine the context of the URL accessed.

## References
- https://app.any.run/tasks/69c5abaa-92ad-45ba-8c53-c11e23e05d04/
- https://app.any.run/tasks/64043a79-165f-4052-bcba-e6e49f847ec1/

## Metadata
- **Author:** Joseph Kamau
- **Date:** 2024-05-27
- **Rule ID:** `1193d960-2369-499f-a158-7b50a31df682`
- **Source file:** `windows/process_creation/proc_creation_win_susp_browser_launch_from_document_reader_process.yml`
