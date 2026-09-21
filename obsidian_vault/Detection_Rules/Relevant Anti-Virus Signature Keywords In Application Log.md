---
type: detection_rule
title: "Relevant Anti-Virus Signature Keywords In Application Log"
rule_id: 78bc5783-81d9-4d73-ac97-59f6db4f72a8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1588]
---

# Relevant Anti-Virus Signature Keywords In Application Log

## Description
Detects potentially highly relevant antivirus events in the application log based on known virus signature names and malware keywords.

## Log Source
```yaml
product: windows
service: application
```

## Detection Logic
```yaml
condition: keywords and not 1 of filter_optional_*
filter_optional_generic:
- anti_ransomware_service.exe
- Anti-Ransomware
- Crack
- cyber-protect-service.exe
- encryptor
- Keygen
filter_optional_information:
  Level: 4
filter_optional_restartmanager:
  Provider_Name: Microsoft-Windows-RestartManager
keywords:
- Adfind
- 'ASP/BackDoor '
- ATK/
- Backdoor.ASP
- Backdoor.Cobalt
- Backdoor.JSP
- Backdoor.PHP
- Blackworm
- Brutel
- BruteR
- Chopper
- Cobalt
- COBEACON
- Cometer
- CRYPTES
- Cryptor
- Destructor
- DumpCreds
- Exploit.Script.CVE
- FastReverseProxy
- Filecoder
- 'GrandCrab '
- HackTool
- HKTL
- HTool-
- /HTool
- .HTool
- IISExchgSpawnCMD
- Impacket
- 'JSP/BackDoor '
- Keylogger
- Koadic
- Krypt
- Lazagne
- Metasploit
- Meterpreter
- MeteTool
- mikatz
- Mimikatz
- Mpreter
- MsfShell
- Nighthawk
- Packed.Generic.347
- PentestPowerShell
- Phobos
- 'PHP/BackDoor '
- Potato
- PowerSploit
- PowerSSH
- PshlSpy
- PSWTool
- PWCrack
- PWDump
- Ransom
- Rozena
- Ryzerlo
- Sbelt
- Seatbelt
- 'SecurityTool '
- SharpDump
- Shellcode
- Sliver
- Splinter
- Swrort
- Tescrypt
- TeslaCrypt
- TurtleLoader
- Valyria
- Webshell
```

## MITRE ATT&CK
- T1588

## False Positives
- Some software piracy tools (key generators, cracks) are classified as hack tools

## References
- https://www.virustotal.com/gui/file/13828b390d5f58b002e808c2c4f02fdd920e236cc8015480fa33b6c1a9300e31
- https://www.virustotal.com/gui/file/15b57c1b68cd6ce3c161042e0f3be9f32d78151fe95461eedc59a79fc222c7ed
- https://www.virustotal.com/gui/file/5092b2672b4cb87a8dd1c2e6047b487b95995ad8ed5e9fc217f46b8bfb1b8c01
- https://www.nextron-systems.com/?s=antivirus

## Metadata
- **Author:** Florian Roth (Nextron Systems), Arnim Rupp
- **Date:** 2017-02-19
- **Rule ID:** `78bc5783-81d9-4d73-ac97-59f6db4f72a8`
- **Source file:** `windows/builtin/application/Other/win_av_relevant_match.yml`
