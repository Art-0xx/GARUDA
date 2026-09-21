---
type: detection_rule
title: "Suspicious Camera and Microphone Access"
rule_id: 62120148-6b7a-42be-8b91-271c04e281a3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1125, attack.t1123]
---

# Suspicious Camera and Microphone Access

## Description
Detects Processes accessing the camera and microphone from suspicious folder

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_1:
  TargetObject|contains|all:
  - \Software\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\
  - \NonPackaged
selection_2:
  TargetObject|contains:
  - microphone
  - webcam
selection_3:
  TargetObject|contains:
  - :#Windows#Temp#
  - :#$Recycle.bin#
  - :#Temp#
  - :#Users#Public#
  - :#Users#Default#
  - :#Users#Desktop#
```

## MITRE ATT&CK
- T1125
- T1123

## False Positives
- Unlikely, there could be conferencing software running from a Temp folder accessing the devices

## References
- https://medium.com/@7a616368/can-you-track-processes-accessing-the-camera-and-microphone-7e6885b37072

## Metadata
- **Author:** Den Iuzvyk
- **Date:** 2020-06-07
- **Rule ID:** `62120148-6b7a-42be-8b91-271c04e281a3`
- **Source file:** `windows/registry/registry_event/registry_event_susp_mic_cam_access.yml`
