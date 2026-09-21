---
type: detection_rule
title: "Antivirus - Password Dumper Signature"
rule_id: 78cc2dd2-7d20-4d32-93ff-057084c38b93
platform: category
level: critical
status: stable
tags: [detection, sigma, category]
mitre_tags: [attack.t1003, attack.t1558, attack.t1003.001, attack.t1003.002]
---

# Antivirus - Password Dumper Signature

## Description
Detects a highly relevant Antivirus alert that reports password dumpers and stealers.
This event must not be ignored just because the AV has blocked the malware but investigate, how it came there in the first place and check if passwords need to be reset.

## Log Source
```yaml
category: antivirus
```

## Detection Logic
```yaml
condition: selection
selection:
- Signature|startswith: PWS
- Signature|contains:
  - Certify
  - DCSync
  - Creddump
  - DumpCreds
  - DumpLsass
  - DumpPert
  - FormBook
  - HTool/WCE
  - Kekeo
  - Lazagne
  - LsassDump
  - Lummast
  - Mimikatz
  - MultiDump
  - Multiverze
  - Nanodump
  - NativeDump
  - Outflank
  - PShlSpy
  - PSWTool
  - PWCrack
  - PWDump
  - PWS.
  - PWSX
  - pypykatz
  - Rubeus
  - SafetyKatz
  - SecurityTool
  - SharpChrome
  - SharpDPAPI
  - SharpDump
  - SharpKatz
  - SharpS.
  - ShpKatz
  - Steal
  - TrickDump
  - wsass
```

## MITRE ATT&CK
- T1003
- T1558
- T1003.001
- T1003.002

## False Positives
- Unlikely

## References
- https://www.nextron-systems.com/?s=antivirus
- https://www.virustotal.com/gui/file/5fcda49ee7f202559a6cbbb34edb65c33c9a1e0bde9fa2af06a6f11b55ded619
- https://www.virustotal.com/gui/file/a4edfbd42595d5bddb442c82a02cf0aaa10893c1bf79ea08b9ce576f82749448

## Metadata
- **Author:** Florian Roth (Nextron Systems), Arnim Rupp
- **Date:** 2018-09-09
- **Rule ID:** `78cc2dd2-7d20-4d32-93ff-057084c38b93`
- **Source file:** `category/antivirus/av_password_dumper.yml`
