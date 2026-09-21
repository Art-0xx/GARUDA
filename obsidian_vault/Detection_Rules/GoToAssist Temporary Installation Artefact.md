---
type: detection_rule
title: "GoToAssist Temporary Installation Artefact"
rule_id: 5d756aee-ad3e-4306-ad95-cb1abec48de2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# GoToAssist Temporary Installation Artefact

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
  TargetFilename|contains: \AppData\Local\Temp\LogMeInInc\GoToAssist Remote Support
    Expert\
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-4---gotoassist-files-detected-test-on-windows

## Metadata
- **Author:** frack113
- **Date:** 2022-02-13
- **Rule ID:** `5d756aee-ad3e-4306-ad95-cb1abec48de2`
- **Source file:** `windows/file/file_event/file_event_win_gotoopener_artefact.yml`
