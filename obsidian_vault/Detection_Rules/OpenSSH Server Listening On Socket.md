---
type: detection_rule
title: "OpenSSH Server Listening On Socket"
rule_id: 3ce8e9a4-bc61-4c9b-8e69-d7e2492a8781
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.004]
---

# OpenSSH Server Listening On Socket

## Description
Detects scenarios where an attacker enables the OpenSSH server and server starts to listening on SSH socket.

## Log Source
```yaml
product: windows
service: openssh
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4
  payload|startswith: 'Server listening on '
  process: sshd
```

## MITRE ATT&CK
- T1021.004

## False Positives
- Legitimate administrator activity

## References
- https://github.com/mdecrevoisier/EVTX-to-MITRE-Attack/tree/master/TA0008-Lateral%20Movement/T1021.004-Remote%20Service%20SSH
- https://winaero.com/enable-openssh-server-windows-10/
- https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse
- https://virtualizationreview.com/articles/2020/05/21/ssh-server-on-windows-10.aspx
- https://medium.com/threatpunter/detecting-adversary-tradecraft-with-image-load-event-logging-and-eql-8de93338c16

## Metadata
- **Author:** mdecrevoisier
- **Date:** 2022-10-25
- **Rule ID:** `3ce8e9a4-bc61-4c9b-8e69-d7e2492a8781`
- **Source file:** `windows/builtin/openssh/win_sshd_openssh_server_listening_on_socket.yml`
