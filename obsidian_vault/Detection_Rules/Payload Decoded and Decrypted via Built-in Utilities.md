---
type: detection_rule
title: "Payload Decoded and Decrypted via Built-in Utilities"
rule_id: 234dc5df-40b5-49d1-bf53-0d44ce778eca
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059, attack.t1204, attack.t1140]
---

# Payload Decoded and Decrypted via Built-in Utilities

## Description
Detects when a built-in utility is used to decode and decrypt a payload after a macOS disk image (DMG) is executed. Malware authors may attempt to evade detection and trick users into executing malicious code by encoding and encrypting their payload and placing it in a disk image file. This behavior is consistent with adware or malware families such as Bundlore and Shlayer.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - /Volumes/
  - enc
  - -base64
  - ' -d '
  Image|endswith: /openssl
```

## MITRE ATT&CK
- T1059
- T1204
- T1140

## False Positives
- Unknown

## References
- https://github.com/elastic/protections-artifacts/commit/746086721fd385d9f5c6647cada1788db4aea95f#diff-5d42c3d772e04f1e8d0eb60f5233bc79def1ea73105a2d8822f44164f77ef823

## Metadata
- **Author:** Tim Rauch (rule), Elastic (idea)
- **Date:** 2022-10-17
- **Rule ID:** `234dc5df-40b5-49d1-bf53-0d44ce778eca`
- **Source file:** `macos/process_creation/proc_creation_macos_payload_decoded_and_decrypted.yml`
