---
type: detection_rule
title: "Process Creation Attempt via Wmic.EXE"
rule_id: 526be59f-a573-4eea-b5f7-f0973207634d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Process Creation Attempt via Wmic.EXE

## Description
Detects the attempt to create a process via "wmic" with the "process call create" flag, which might
indicate an attempt to execute a malicious process on the compromised host. Adversaries may use
wmic to execute a process on the compromised host as part of their attack. This event is triggered on
on attempt and process creation can be either successful or unsuccessful.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - process
  - call
  - create
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://www.sans.org/blog/wmic-for-incident-response/
- https://github.com/redcanaryco/atomic-red-team/blob/84215139ee5127f8e3a117e063b604812bd71928/atomics/T1047/T1047.md#atomic-test-5---wmi-execute-local-process

## Metadata
- **Author:** Michael Haag, Florian Roth (Nextron Systems), juju4, oscd.community
- **Date:** 2019-01-16
- **Rule ID:** `526be59f-a573-4eea-b5f7-f0973207634d`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_process_creation.yml`
