---
type: detection_rule
title: "Local System Accounts Discovery - MacOs"
rule_id: ddf36b67-e872-4507-ab2e-46bda21b842c
platform: macos
level: low
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1087.001]
---

# Local System Accounts Discovery - MacOs

## Description
Detects enumeration of local system accounts on MacOS systems.
This can be used by attackers to identify accounts for lateral movement or privilege escalation.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: 1 of selection*
selection_dscacheutil:
  CommandLine|contains|all:
  - -q
  - user
  Image|endswith: /dscacheutil
selection_dscl:
  CommandLine|contains|all:
  - list
  - /users
  Image|endswith: /dscl
selection_home_dir_listing:
  CommandLine|endswith:
  - /Users
  - /Users'
  - /Users"
  Image|endswith: /ls
selection_id:
  Image|endswith: /id
selection_logged_in_users:
  Image|endswith:
  - /who
  - /w
  - /users
  - /last
selection_loginwindow_prefs:
  CommandLine|contains: com.apple.loginwindow
  Image|endswith:
  - /defaults
  - /plutil
selection_lsof:
  CommandLine|contains: -u
  Image|endswith: /lsof
selection_passwd_sudo:
  CommandLine|contains:
  - /etc/passwd
  - /etc/sudoers
  Image|endswith:
  - /cat
  - /awk
  - /grep
selection_root:
  CommandLine|contains: '''*:0:'''
```

## MITRE ATT&CK
- T1087.001

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1087.001/T1087.001.md
- https://ss64.com/osx/dscl.html
- https://ss64.com/mac/dscacheutil.html

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-08
- **Rule ID:** `ddf36b67-e872-4507-ab2e-46bda21b842c`
- **Source file:** `macos/process_creation/proc_creation_macos_local_account.yml`
