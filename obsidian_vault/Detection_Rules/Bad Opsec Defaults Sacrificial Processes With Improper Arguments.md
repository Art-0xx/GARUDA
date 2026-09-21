---
type: detection_rule
title: "Bad Opsec Defaults Sacrificial Processes With Improper Arguments"
rule_id: a7c3d773-caef-227e-a7e7-c2f13c622329
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Bad Opsec Defaults Sacrificial Processes With Improper Arguments

## Description
Detects attackers using tooling with bad opsec defaults.
E.g. spawning a sacrificial process to inject a capability into the process without taking into account how the process is normally run.
One trivial example of this is using rundll32.exe without arguments as a sacrificial process (default in CS, now highlighted by c2lint), running WerFault without arguments (Kraken - credit am0nsec), and other examples.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_optional_*
filter_optional_chromium_installer:
  CommandLine|endswith: rundll32.exe
  Image|endswith: \rundll32.exe
  ParentCommandLine|contains: '--uninstall '
  ParentImage|contains:
  - \AppData\Local\BraveSoftware\Brave-Browser\Application\
  - \AppData\Local\Google\Chrome\Application\
  ParentImage|endswith: \Installer\setup.exe
filter_optional_edge_update:
  CommandLine|endswith: rundll32.exe
  Image|endswith: \rundll32.exe
  ParentImage|contains: \AppData\Local\Microsoft\EdgeUpdate\Install\{
selection_regasm:
  CommandLine|endswith: regasm.exe
  Image|endswith: \regasm.exe
selection_regsvcs:
  CommandLine|endswith: regsvcs.exe
  Image|endswith: \regsvcs.exe
selection_regsvr32:
  CommandLine|endswith: regsvr32.exe
  Image|endswith: \regsvr32.exe
selection_rundll32:
  CommandLine|endswith: rundll32.exe
  Image|endswith: \rundll32.exe
selection_werfault:
  CommandLine|endswith: WerFault.exe
  Image|endswith: \WerFault.exe
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unlikely

## References
- https://blog.malwarebytes.com/malwarebytes-news/2020/10/kraken-attack-abuses-wer-service/
- https://www.cobaltstrike.com/help-opsec
- https://twitter.com/CyberRaiju/status/1251492025678983169
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/regsvr32
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/rundll32

## Metadata
- **Author:** Oleg Kolesnikov @securonix invrep_de, oscd.community, Florian Roth (Nextron Systems), Christian Burkard (Nextron Systems)
- **Date:** 2020-10-23
- **Rule ID:** `a7c3d773-caef-227e-a7e7-c2f13c622329`
- **Source file:** `windows/process_creation/proc_creation_win_susp_bad_opsec_sacrificial_processes.yml`
