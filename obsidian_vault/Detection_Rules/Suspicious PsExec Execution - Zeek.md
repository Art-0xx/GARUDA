---
type: detection_rule
title: "Suspicious PsExec Execution - Zeek"
rule_id: f1b3a22a-45e6-4004-afb5-4291f9c21166
platform: network
level: high
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1021.002]
---

# Suspicious PsExec Execution - Zeek

## Description
detects execution of psexec or paexec with renamed service name, this rule helps to filter out the noise if psexec is used for legit purposes or if attacker uses a different psexec client other than sysinternal one

## Log Source
```yaml
product: zeek
service: smb_files
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  name|startswith: PSEXESVC
selection:
  name|endswith:
  - -stdin
  - -stdout
  - -stderr
  path|contains|all:
  - \\
  - \IPC$
```

## MITRE ATT&CK
- T1021.002

## False Positives
- Unknown

## References
- https://web.archive.org/web/20230329171218/https://blog.menasec.net/2019/02/threat-hunting-3-detecting-psexec.html

## Metadata
- **Author:** Samir Bousseaden, @neu5ron, Tim Shelton
- **Date:** 2020-04-02
- **Rule ID:** `f1b3a22a-45e6-4004-afb5-4291f9c21166`
- **Source file:** `network/zeek/zeek_smb_converted_win_susp_psexec.yml`
