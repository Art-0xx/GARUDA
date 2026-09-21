---
type: detection_rule
title: "Antivirus - Ransomware Signature"
rule_id: 4c6ca276-d4d0-4a8c-9e4c-d69832f8671f
platform: category
level: critical
status: test
tags: [detection, sigma, category]
mitre_tags: [attack.t1486]
---

# Antivirus - Ransomware Signature

## Description
Detects a highly relevant Antivirus alert that reports ransomware.
This event must not be ignored just because the AV has blocked the malware but investigate, how it came there in the first place.

## Log Source
```yaml
category: antivirus
```

## Detection Logic
```yaml
condition: selection
selection:
  Signature|contains:
  - Babuk
  - Babyk
  - BlackWorm
  - Chaos
  - Cobra
  - ContiCrypt
  - Crypter
  - Cryptes
  - Cryptor
  - CylanCrypt
  - DelShad
  - Destructor
  - Filecoder
  - GandCrab
  - GrandCrab
  - Haperlock
  - Hiddentear
  - HydraCrypt
  - Krypt
  - Lockbit
  - Locker
  - Mallox
  - Medusa
  - Phobos
  - Ransom
  - Rook
  - Ryuk
  - Ryzerlo
  - Stopcrypt
  - Tescrypt
  - TeslaCrypt
  - WannaCry
  - Xorist
```

## MITRE ATT&CK
- T1486

## False Positives
- Unlikely

## References
- https://www.nextron-systems.com/?s=antivirus
- https://www.virustotal.com/gui/file/43b0f7872900bd234975a0877744554f4f355dc57505517abd1ef611e1ce6916
- https://www.virustotal.com/gui/file/c312c05ddbd227cbb08958876df2b69d0f7c1b09e5689eb9d93c5b357f63eff7
- https://www.virustotal.com/gui/file/20179093c59bca3acc6ce9a4281e8462f577ffd29fd7bf51cf2a70d106062045
- https://www.virustotal.com/gui/file/554db97ea82f17eba516e6a6fdb9dc04b1d25580a1eb8cb755eeb260ad0bd61d

## Metadata
- **Author:** Florian Roth (Nextron Systems), Arnim Rupp
- **Date:** 2022-05-12
- **Rule ID:** `4c6ca276-d4d0-4a8c-9e4c-d69832f8671f`
- **Source file:** `category/antivirus/av_ransomware.yml`
