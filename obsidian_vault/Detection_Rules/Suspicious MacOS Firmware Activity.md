---
type: detection_rule
title: "Suspicious MacOS Firmware Activity"
rule_id: 7ed2c9f7-c59d-4c82-a7e2-f859aa676099
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
---

# Suspicious MacOS Firmware Activity

## Description
Detects when a user manipulates with Firmward Password on MacOS. NOTE - this command has been disabled on silicon-based apple computers.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection1
selection1:
  CommandLine|contains:
  - setpasswd
  - full
  - delete
  - check
  Image: /usr/sbin/firmwarepasswd
```

## False Positives
- Legitimate administration activities

## References
- https://github.com/usnistgov/macos_security/blob/932a51f3e819dd3e02ebfcf3ef433cfffafbe28b/rules/os/os_firmware_password_require.yaml
- https://www.manpagez.com/man/8/firmwarepasswd/
- https://support.apple.com/guide/security/firmware-password-protection-sec28382c9ca/web

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-09-30
- **Rule ID:** `7ed2c9f7-c59d-4c82-a7e2-f859aa676099`
- **Source file:** `macos/process_creation/proc_creation_macos_susp_macos_firmware_activity.yml`
