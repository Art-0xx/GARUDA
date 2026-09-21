---
type: detection_rule
title: "Suspicious Browser Child Process - MacOS"
rule_id: 0250638a-2b28-4541-86fc-ea4c558fa0c6
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1189, attack.t1203, attack.t1059]
---

# Suspicious Browser Child Process - MacOS

## Description
Detects suspicious child processes spawned from browsers. This could be a result of a potential web browser exploitation.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_chrome:
  CommandLine|contains:
  - /Volumes/Google Chrome/Google Chrome.app/Contents/Frameworks/*/Resources/install.sh
  - /Applications/Google Chrome.app/Contents/Frameworks/Google Chrome Framework.framework/*/Resources/keystone_promote_preflight.sh
  - /Applications/Google Chrome.app/Contents/Frameworks/Google Chrome Framework.framework/*/Resources/keystone_promote_postflight.sh
  ParentImage|contains:
  - Google Chrome Helper
  - Google Chrome
filter_main_chromerecovery:
  CommandLine|contains|all:
  - /Users/
  - /Library/Application Support/Google/Chrome/recovery/
  - /ChromeRecovery
  ParentImage|contains:
  - Google Chrome Helper
  - Google Chrome
filter_main_generic:
  CommandLine|contains: --defaults-torrc
filter_main_ms_autoupdate:
  CommandLine|contains: /Library/Application Support/Microsoft/MAU*/Microsoft AutoUpdate.app/Contents/MacOS/msupdate
filter_main_ms_edge:
  CommandLine|contains:
  - IOPlatformExpertDevice
  - hw.model
  ParentImage|contains: Microsoft Edge
filter_optional_empty:
  CommandLine: ''
filter_optional_null:
  CommandLine: null
selection:
  Image|endswith:
  - /bash
  - /curl
  - /dash
  - /ksh
  - /osascript
  - /perl
  - /php
  - /pwsh
  - /python
  - /sh
  - /tcsh
  - /wget
  - /zsh
  ParentImage|contains:
  - com.apple.WebKit.WebContent
  - firefox
  - Google Chrome Helper
  - Google Chrome
  - Microsoft Edge
  - Opera
  - Safari
  - Tor Browser
```

## MITRE ATT&CK
- T1189
- T1203
- T1059

## False Positives
- Legitimate browser install, update and recovery scripts

## References
- https://fr.slideshare.net/codeblue_jp/cb19-recent-apt-attack-on-crypto-exchange-employees-by-heungsoo-kang
- https://github.com/elastic/detection-rules/blob/4312d8c9583be524578a14fe6295c3370b9a9307/rules/macos/execution_initial_access_suspicious_browser_childproc.toml

## Metadata
- **Author:** Sohan G (D4rkCiph3r)
- **Date:** 2023-04-05
- **Rule ID:** `0250638a-2b28-4541-86fc-ea4c558fa0c6`
- **Source file:** `macos/process_creation/proc_creation_macos_susp_browser_child_process.yml`
