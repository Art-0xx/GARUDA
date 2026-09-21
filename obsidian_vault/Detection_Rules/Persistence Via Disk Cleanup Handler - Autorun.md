---
type: detection_rule
title: "Persistence Via Disk Cleanup Handler - Autorun"
rule_id: d4e2745c-f0c6-4bde-a3ab-b553b3f693cc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Persistence Via Disk Cleanup Handler - Autorun

## Description
Detects when an attacker modifies values of the Disk Cleanup Handler in the registry to achieve persistence via autorun.
The disk cleanup manager is part of the operating system.
It displays the dialog box […] The user has the option of enabling or disabling individual handlers by selecting or clearing their check box in the disk cleanup manager's UI.
Although Windows comes with a number of disk cleanup handlers, they aren't designed to handle files produced by other applications.
Instead, the disk cleanup manager is designed to be flexible and extensible by enabling any developer to implement and register their own disk cleanup handler.
Any developer can extend the available disk cleanup services by implementing and registering a disk cleanup handler.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: root and 1 of selection_*
root:
  TargetObject|contains: \SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\
selection_autorun:
  Details: DWORD (0x00000001)
  TargetObject|contains: \Autorun
selection_pre_after:
  Details|contains:
  - cmd
  - powershell
  - rundll32
  - mshta
  - cscript
  - wscript
  - wsl
  - \Users\Public\
  - \Windows\TEMP\
  - \Microsoft\Windows\Start Menu\Programs\Startup\
  TargetObject|contains:
  - \CleanupString
  - \PreCleanupString
```

## False Positives
- Unknown

## References
- https://persistence-info.github.io/Data/diskcleanuphandler.html
- https://www.hexacorn.com/blog/2018/09/02/beyond-good-ol-run-key-part-86/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `d4e2745c-f0c6-4bde-a3ab-b553b3f693cc`
- **Source file:** `windows/registry/registry_set/registry_set_disk_cleanup_handler_autorun_persistence.yml`
