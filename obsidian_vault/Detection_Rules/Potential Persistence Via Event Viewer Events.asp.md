---
type: detection_rule
title: "Potential Persistence Via Event Viewer Events.asp"
rule_id: a1e11042-a74a-46e6-b07c-c4ce8ecc239b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potential Persistence Via Event Viewer Events.asp

## Description
Detects potential registry persistence technique using the Event Viewer "Events.asp" technique

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_cleaner:
  Details: (Empty)
filter_default_redirect_program:
  Details: '%%SystemRoot%%\PCHealth\HelpCtr\Binaries\HelpCtr.exe'
  Image|endswith: C:\WINDOWS\system32\svchost.exe
  TargetObject|endswith: \Microsoft\Windows NT\CurrentVersion\Event Viewer\MicrosoftRedirectionProgram
filter_default_redirect_program_cli:
  Details: -url hcp://services/centers/support?topic=%%s
  Image|endswith: C:\WINDOWS\system32\svchost.exe
  TargetObject|endswith: \Microsoft\Windows NT\CurrentVersion\Event Viewer\MicrosoftRedirectionProgramCommandLineParameters
filter_url:
  Details: http://go.microsoft.com/fwlink/events.asp
selection:
  TargetObject|contains:
  - \Microsoft\Windows NT\CurrentVersion\Event Viewer\MicrosoftRedirectionProgram
  - \Microsoft\Windows NT\CurrentVersion\Event Viewer\MicrosoftRedirectionURL
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://twitter.com/nas_bench/status/1626648985824788480
- https://admx.help/?Category=Windows_7_2008R2&Policy=Microsoft.Policies.InternetCommunicationManagement::EventViewer_DisableLinks
- https://www.hexacorn.com/blog/2019/02/15/beyond-good-ol-run-key-part-103/
- https://github.com/redcanaryco/atomic-red-team/blob/f296668303c29d3f4c07e42bdd2b28d8dd6625f9/atomics/T1112/T1112.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-17
- **Rule ID:** `a1e11042-a74a-46e6-b07c-c4ce8ecc239b`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_event_viewer_events_asp.yml`
