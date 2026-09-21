---
type: detection_rule
title: "Suspicious Curl.EXE Download"
rule_id: e218595b-bbe7-4ee5-8a96-f32a24ad3468
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Curl.EXE Download

## Description
Detects a suspicious curl process start on Windows and outputs the requested document to a local file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_curl and 1 of selection_susp_* and not 1 of filter_optional_*
filter_optional_git_windows:
  CommandLine|contains|all:
  - '--silent --show-error --output '
  - gfw-httpget-
  - AppData
  Image: C:\Program Files\Git\mingw64\bin\curl.exe
  ParentImage: C:\Program Files\Git\usr\bin\sh.exe
selection_curl:
- Image|endswith: \curl.exe
- Product: The curl executable
selection_susp_extensions:
  CommandLine|endswith:
  - .dll
  - .gif
  - .jpeg
  - .jpg
  - .png
  - .temp
  - .tmp
  - .txt
  - .vbe
  - .vbs
selection_susp_locations:
  CommandLine|contains:
  - '%AppData%'
  - '%Public%'
  - '%Temp%'
  - '%tmp%'
  - \AppData\
  - \Desktop\
  - \Temp\
  - \Users\Public\
  - C:\PerfLogs\
  - C:\ProgramData\
  - C:\Windows\Temp\
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://twitter.com/max_mal_/status/1542461200797163522
- https://web.archive.org/web/20200128160046/https://twitter.com/reegun21/status/1222093798009790464
- https://github.com/pr0xylife/Qakbot/blob/4f0795d79dabee5bc9dd69f17a626b48852e7869/Qakbot_AA_23.06.2022.txt
- https://www.volexity.com/blog/2022/07/28/sharptongue-deploys-clever-mail-stealing-browser-extension-sharpext/
- https://github.com/redcanaryco/atomic-red-team/blob/0f229c0e42bfe7ca736a14023836d65baa941ed2/atomics/T1105/T1105.md#atomic-test-18---curl-download-file

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-07-03
- **Rule ID:** `e218595b-bbe7-4ee5-8a96-f32a24ad3468`
- **Source file:** `windows/process_creation/proc_creation_win_curl_susp_download.yml`
