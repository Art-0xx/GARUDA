---
type: detection_rule
title: "Antivirus - Web Shell Detection Signature"
rule_id: fdf135a2-9241-4f96-a114-bb404948f736
platform: category
level: high
status: test
tags: [detection, sigma, category]
mitre_tags: [attack.t1505.003]
---

# Antivirus - Web Shell Detection Signature

## Description
Detects a highly relevant Antivirus alert that reports a web shell.
It's highly recommended to tune this rule to the specific strings used by your anti virus solution by downloading a big WebShell repository from e.g. github and checking the matches.
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
  - ASP.
  - IIS/BackDoor
  - JAVA/Backdoor
  - JSP.
  - Perl.
  - PHP.
  - Troj/ASP
  - Troj/JSP
  - Troj/PHP
  - VBS/Uxor
- Signature|contains:
  - ASP_
  - 'ASP:'
  - ASP.Agent
  - ASP/
  - Aspdoor
  - ASPXSpy
  - Backdoor.ASP
  - Backdoor.Java
  - Backdoor.JSP
  - Backdoor.PHP
  - Backdoor.VBS
  - Backdoor/ASP
  - Backdoor/Java
  - Backdoor/JSP
  - Backdoor/PHP
  - Backdoor/VBS
  - C99shell
  - Chopper
  - filebrowser
  - JSP_
  - 'JSP:'
  - JSP.Agent
  - JSP/
  - 'Perl:'
  - Perl/
  - PHP_
  - 'PHP:'
  - PHP.Agent
  - PHP/
  - PHPShell
  - PShlSpy
  - SinoChoper
  - Trojan.ASP
  - Trojan.JSP
  - Trojan.PHP
  - Trojan.VBS
  - VBS.Agent
  - VBS/Agent
  - Webshell
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Unlikely

## References
- https://www.nextron-systems.com/?s=antivirus
- https://github.com/tennc/webshell
- https://www.virustotal.com/gui/file/bd1d52289203866645e556e2766a21d2275877fbafa056a76fe0cf884b7f8819/detection
- https://www.virustotal.com/gui/file/308487ed28a3d9abc1fec7ebc812d4b5c07ab025037535421f64c60d3887a3e8/detection
- https://www.virustotal.com/gui/file/7d3cb8a8ff28f82b07f382789247329ad2d7782a72dde9867941f13266310c80/detection

## Metadata
- **Author:** Florian Roth (Nextron Systems), Arnim Rupp
- **Date:** 2018-09-09
- **Rule ID:** `fdf135a2-9241-4f96-a114-bb404948f736`
- **Source file:** `category/antivirus/av_webshell.yml`
