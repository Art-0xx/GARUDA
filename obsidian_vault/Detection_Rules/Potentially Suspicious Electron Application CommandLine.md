---
type: detection_rule
title: "Potentially Suspicious Electron Application CommandLine"
rule_id: 378a05d8-963c-46c9-bcce-13c7657eac99
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious Electron Application CommandLine

## Description
Detects potentially suspicious CommandLine of electron apps (teams, discord, slack, etc.). This could be a sign of abuse to proxy execution through a signed binary.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - --browser-subprocess-path
  - --gpu-launcher
  - --renderer-cmd-prefix
  - --utility-cmd-prefix
selection_img:
- Image|endswith:
  - \chrome.exe
  - \code.exe
  - \discord.exe
  - \GitHubDesktop.exe
  - \keybase.exe
  - \msedge_proxy.exe
  - \msedge.exe
  - \msedgewebview2.exe
  - \msteams.exe
  - \slack.exe
  - \Teams.exe
- OriginalFileName:
  - chrome.exe
  - code.exe
  - discord.exe
  - GitHubDesktop.exe
  - keybase.exe
  - msedge_proxy.exe
  - msedge.exe
  - msedgewebview2.exe
  - msteams.exe
  - slack.exe
  - Teams.exe
```

## False Positives
- Legitimate usage for debugging purposes

## References
- https://positive.security/blog/ms-officecmd-rce
- https://lolbas-project.github.io/lolbas/Binaries/Teams/
- https://lolbas-project.github.io/lolbas/Binaries/Msedge/
- https://lolbas-project.github.io/lolbas/Binaries/msedgewebview2/
- https://medium.com/@MalFuzzer/one-electron-to-rule-them-all-dc2e9b263daf

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-05
- **Rule ID:** `378a05d8-963c-46c9-bcce-13c7657eac99`
- **Source file:** `windows/process_creation/proc_creation_win_susp_electron_execution_proxy.yml`
