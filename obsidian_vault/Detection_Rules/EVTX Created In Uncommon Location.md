---
type: detection_rule
title: "EVTX Created In Uncommon Location"
rule_id: 65236ec7-ace0-4f0c-82fd-737b04fd4dcb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.001]
---

# EVTX Created In Uncommon Location

## Description
Detects the creation of new files with the ".evtx" extension in non-common or non-standard location.
This could indicate tampering with default EVTX locations in order to evade security controls or simply exfiltration of event log to search for sensitive information within.
Note that backup software and legitimate administrator might perform similar actions during troubleshooting.

## Log Source
```yaml
category: file_event
definition: 'Requirements: The ".evtx" extension should be monitored via a Sysmon
  configuration. Example: <TargetFilename condition="end with">.evtx<TargetFilename>'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_baseimage:
  TargetFilename|endswith: \Windows\System32\winevt\Logs\
  TargetFilename|startswith: C:\ProgramData\Microsoft\Windows\Containers\BaseImages\
filter_main_path:
  TargetFilename|startswith: C:\Windows\System32\winevt\Logs\
selection:
  TargetFilename|endswith: .evtx
```

## MITRE ATT&CK
- T1685.001

## False Positives
- Administrator or backup activity
- An unknown bug seems to trigger the Windows "svchost" process to drop EVTX files in the "C:\Windows\Temp" directory in the form "<log_name">_<uuid>.evtx". See https://superuser.com/questions/1371229/low-disk-space-after-filling-up-c-windows-temp-with-evtx-and-txt-files

## References
- https://learn.microsoft.com/en-us/windows/win32/eventlog/eventlog-key

## Metadata
- **Author:** D3F7A5105
- **Date:** 2023-01-02
- **Rule ID:** `65236ec7-ace0-4f0c-82fd-737b04fd4dcb`
- **Source file:** `windows/file/file_event/file_event_win_create_evtx_non_common_locations.yml`
