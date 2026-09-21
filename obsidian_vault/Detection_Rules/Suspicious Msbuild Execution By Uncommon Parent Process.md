---
type: detection_rule
title: "Suspicious Msbuild Execution By Uncommon Parent Process"
rule_id: 33be4333-2c6b-44f4-ae28-102cdbde0a31
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Msbuild Execution By Uncommon Parent Process

## Description
Detects suspicious execution of 'Msbuild.exe' by a uncommon parent process

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter_parent
filter_parent:
  ParentImage|endswith:
  - \devenv.exe
  - \cmd.exe
  - \msbuild.exe
  - \python.exe
  - \explorer.exe
  - \nuget.exe
selection:
- Image|endswith: \MSBuild.exe
- OriginalFileName: MSBuild.exe
```

## False Positives
- Unknown

## References
- https://app.any.run/tasks/abdf586e-df0c-4d39-89a7-06bf24913401/
- https://www.echotrail.io/insights/search/msbuild.exe

## Metadata
- **Author:** frack113
- **Date:** 2022-11-17
- **Rule ID:** `33be4333-2c6b-44f4-ae28-102cdbde0a31`
- **Source file:** `windows/process_creation/proc_creation_win_msbuild_susp_parent_process.yml`
