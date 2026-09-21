---
type: detection_rule
title: "Creation Of a Suspicious ADS File Outside a Browser Download"
rule_id: 573df571-a223-43bc-846e-3f98da481eca
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Creation Of a Suspicious ADS File Outside a Browser Download

## Description
Detects the creation of a suspicious ADS (Alternate Data Stream) file by software other than browsers

## Log Source
```yaml
category: create_stream_hash
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_brave:
  Image|endswith: \brave.exe
filter_optional_chrome:
  Image:
  - C:\Program Files\Google\Chrome\Application\chrome.exe
  - C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
filter_optional_edge_1:
- Image|startswith: C:\Program Files (x86)\Microsoft\EdgeWebView\Application\
- Image|endswith: \WindowsApps\MicrosoftEdge.exe
- Image:
  - C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
  - C:\Program Files\Microsoft\Edge\Application\msedge.exe
filter_optional_edge_2:
  Image|endswith:
  - \msedge.exe
  - \msedgewebview2.exe
  Image|startswith:
  - C:\Program Files (x86)\Microsoft\EdgeCore\
  - C:\Program Files\Microsoft\EdgeCore\
filter_optional_firefox:
  Image:
  - C:\Program Files\Mozilla Firefox\firefox.exe
  - C:\Program Files (x86)\Mozilla Firefox\firefox.exe
filter_optional_ie:
  Image:
  - C:\Program Files (x86)\Internet Explorer\iexplore.exe
  - C:\Program Files\Internet Explorer\iexplore.exe
filter_optional_maxthon:
  Image|endswith: \maxthon.exe
filter_optional_opera:
  Image|endswith: \opera.exe
filter_optional_safari:
  Image|endswith: \safari.exe
filter_optional_seamonkey:
  Image|endswith: \seamonkey.exe
filter_optional_snipping_tool:
  Image|endswith: \SnippingTool\SnippingTool.exe
  Image|startswith: C:\Program Files\WindowsApps\Microsoft.ScreenSketch_
  TargetFilename|contains|all:
  - \AppData\Local\Packages\Microsoft.ScreenSketch_
  - '\TempState\Screenshot '
  TargetFilename|endswith: .png:Zone.Identifier
  TargetFilename|startswith: C:\Users\
filter_optional_vivaldi:
  Image|endswith: \vivaldi.exe
filter_optional_whale:
  Image|endswith: \whale.exe
selection:
  Contents|startswith: '[ZoneTransfer]  ZoneId=3'
  TargetFilename|contains:
  - .exe
  - .scr
  - .bat
  - .cmd
  - .docx
  - .hta
  - .jse
  - .lnk
  - .pptx
  - .ps
  - .reg
  - .sct
  - .vb
  - .wsc
  - .wsf
  - .xlsx
  TargetFilename|endswith: :Zone.Identifier
```

## False Positives
- Other legitimate browsers not currently included in the filter (please add them)
- Legitimate downloads via scripting or command-line tools (Investigate to determine if it's legitimate)

## References
- https://www.bleepingcomputer.com/news/security/exploited-windows-zero-day-lets-javascript-files-bypass-security-warnings/

## Metadata
- **Author:** frack113
- **Date:** 2022-10-22
- **Rule ID:** `573df571-a223-43bc-846e-3f98da481eca`
- **Source file:** `windows/create_stream_hash/create_stream_hash_creation_internet_file.yml`
