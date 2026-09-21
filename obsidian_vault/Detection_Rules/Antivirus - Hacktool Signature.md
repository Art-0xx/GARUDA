---
type: detection_rule
title: "Antivirus - Hacktool Signature"
rule_id: fa0c05b6-8ad3-468d-8231-c1cbccb64fba
platform: category
level: high
status: stable
tags: [detection, sigma, category]
mitre_tags: [attack.t1204]
---

# Antivirus - Hacktool Signature

## Description
Detects a highly relevant Antivirus alert that reports a hack tool or other attack tool.
This event must not be ignored just because the AV has blocked the malware but investigate, how it came there in the first place.

## Log Source
```yaml
category: antivirus
```

## Detection Logic
```yaml
condition: selection
selection:
- Signature|startswith:
  - ATK/
  - Exploit.Script.CVE
  - HKTL
  - HTOOL
  - PWS.
  - PWSX
  - SecurityTool
- Signature|contains:
  - Adfind
  - BloodH
  - BloodyAD
  - Brutel
  - BruteR
  - Cobalt
  - COBEACON
  - Cometer
  - DumpCreds
  - EDRfreeze
  - FastReverseProxy
  - Hacktool
  - Havoc
  - Impacket
  - Keylogger
  - Koadic
  - Mimikatz
  - Nighthawk
  - PentestPowerShell
  - Potato
  - PowerSploit
  - PowerSSH
  - PshlSpy
  - PSWTool
  - PWCrack
  - PWDump
  - Responder
  - Rozena
  - Rusthound
  - Sbelt
  - Seatbelt
  - SecurityTool
  - SharpDump
  - SharpHound
  - Shellcode
  - Sliver
  - Snaffler
  - SOAPHound
  - Splinter
  - Stowaway
  - Swrort
  - Trojan.Hound
  - TurtleLoader
  - Undefend
  - Undfnd
```

## MITRE ATT&CK
- T1204

## False Positives
- Unlikely

## References
- https://www.nextron-systems.com/2021/08/16/antivirus-event-analysis-cheat-sheet-v1-8-2/
- https://www.nextron-systems.com/?s=antivirus

## Metadata
- **Author:** Florian Roth (Nextron Systems), Arnim Rupp
- **Date:** 2021-08-16
- **Rule ID:** `fa0c05b6-8ad3-468d-8231-c1cbccb64fba`
- **Source file:** `category/antivirus/av_hacktool.yml`
