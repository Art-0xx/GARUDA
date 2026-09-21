---
type: detection_rule
title: "Anydesk Temporary Artefact"
rule_id: 0b9ad457-2554-44c1-82c2-d56a99c42377
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Anydesk Temporary Artefact

## Description
An adversary may use legitimate desktop support and remote access software, such as Team Viewer, Go2Assist, LogMein, AmmyyAdmin, etc, to establish an interactive command and control channel to target systems within networks.
These services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment.
Remote access tools like VNC, Ammyy, and Teamviewer are used frequently when compared with other legitimate software commonly used by adversaries. (Citation: Symantec Living off the Land)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains:
  - \AppData\Roaming\AnyDesk\user.conf
  - \AppData\Roaming\AnyDesk\system.conf
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-2---anydesk-files-detected-test-on-windows

## Metadata
- **Author:** frack113
- **Date:** 2022-02-11
- **Rule ID:** `0b9ad457-2554-44c1-82c2-d56a99c42377`
- **Source file:** `windows/file/file_event/file_event_win_anydesk_artefact.yml`
