---
type: detection_rule
title: "Network Connection Initiated To AzureWebsites.NET By Non-Browser Process"
rule_id: 5c80b618-0dbb-46e6-acbb-03d90bcb6d83
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1102, attack.t1102.001]
---

# Network Connection Initiated To AzureWebsites.NET By Non-Browser Process

## Description
Detects an initiated network connection by a non browser process on the system to "azurewebsites.net". The latter was often used by threat actors as a malware hosting and exfiltration site.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_avant:
  Image|endswith: \avant.exe
  Image|startswith:
  - C:\Program Files (x86)\Avant Browser\
  - C:\Program Files\Avant Browser\
filter_main_brave:
  Image|endswith: \brave.exe
  Image|startswith: C:\Program Files\BraveSoftware\
filter_main_chrome:
  Image:
  - C:\Program Files\Google\Chrome\Application\chrome.exe
  - C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
filter_main_chrome_appdata:
  Image|endswith: \AppData\Local\Google\Chrome\Application\chrome.exe
  Image|startswith: C:\Users\
filter_main_defender:
  Image|contains:
  - C:\Program Files\Windows Defender Advanced Threat Protection\
  - C:\Program Files\Windows Defender\
  - C:\ProgramData\Microsoft\Windows Defender\Platform\
  Image|endswith:
  - \MsMpEng.exe
  - \MsSense.exe
filter_main_discord:
  Image|contains: \AppData\Local\Discord\
  Image|endswith: \Discord.exe
filter_main_edge_1:
- Image|startswith: C:\Program Files (x86)\Microsoft\EdgeWebView\Application\
- Image|endswith: \WindowsApps\MicrosoftEdge.exe
- Image:
  - C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
  - C:\Program Files\Microsoft\Edge\Application\msedge.exe
filter_main_edge_2:
  Image|endswith:
  - \msedge.exe
  - \msedgewebview2.exe
  Image|startswith:
  - C:\Program Files (x86)\Microsoft\EdgeCore\
  - C:\Program Files\Microsoft\EdgeCore\
filter_main_empty:
  Image: ''
filter_main_falkon:
  Image|endswith: \falkon.exe
  Image|startswith:
  - C:\Program Files\Falkon\
  - C:\Program Files (x86)\Falkon\
filter_main_firefox:
  Image:
  - C:\Program Files\Mozilla Firefox\firefox.exe
  - C:\Program Files (x86)\Mozilla Firefox\firefox.exe
filter_main_firefox_appdata:
  Image|endswith: \AppData\Local\Mozilla Firefox\firefox.exe
  Image|startswith: C:\Users\
filter_main_flock:
  Image|contains: \AppData\Local\Flock\
  Image|endswith: \Flock.exe
filter_main_ie:
  Image:
  - C:\Program Files (x86)\Internet Explorer\iexplore.exe
  - C:\Program Files\Internet Explorer\iexplore.exe
filter_main_maxthon:
  Image|contains: \AppData\Local\Maxthon\
  Image|endswith: \maxthon.exe
filter_main_null:
  Image: null
filter_main_opera:
  Image|contains: \AppData\Local\Programs\Opera\
  Image|endswith: \opera.exe
filter_main_phoebe:
  Image|contains: \AppData\Local\Phoebe\
  Image|endswith: \Phoebe.exe
filter_main_prtg:
  Image|endswith:
  - C:\Program Files (x86)\PRTG Network Monitor\PRTG Probe.exe
  - C:\Program Files\PRTG Network Monitor\PRTG Probe.exe
filter_main_qtweb:
  Image|endswith: \QtWeb.exe
  Image|startswith:
  - C:\Program Files (x86)\QtWeb\
  - C:\Program Files\QtWeb\
filter_main_safari:
  Image|contains:
  - C:\Program Files (x86)\Safari\
  - C:\Program Files\Safari\
  Image|endswith: \safari.exe
filter_main_seamonkey:
  Image|endswith: \seamonkey.exe
  Image|startswith:
  - C:\Program Files\SeaMonkey\
  - C:\Program Files (x86)\SeaMonkey\
filter_main_slimbrowser:
  Image|endswith: \slimbrowser.exe
  Image|startswith:
  - C:\Program Files\SlimBrowser\
  - C:\Program Files (x86)\SlimBrowser\
filter_main_vivaldi:
  Image|contains: \AppData\Local\Vivaldi\
  Image|endswith: \vivaldi.exe
filter_main_whale:
  Image|endswith: \whale.exe
  Image|startswith:
  - C:\Program Files\Naver\Naver Whale\
  - C:\Program Files (x86)\Naver\Naver Whale\
filter_main_whaterfox:
  Image|endswith: \Waterfox.exe
  Image|startswith:
  - C:\Program Files\Waterfox\
  - C:\Program Files (x86)\Waterfox\
selection:
  DestinationHostname|endswith: azurewebsites.net
  Initiated: 'true'
```

## MITRE ATT&CK
- T1102
- T1102.001

## False Positives
- Unknown

## References
- https://www.sentinelone.com/labs/wip26-espionage-threat-actors-abuse-cloud-infrastructure-in-targeted-telco-attacks/
- https://symantec-enterprise-blogs.security.com/threat-intelligence/harvester-new-apt-attacks-asia
- https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/
- https://intezer.com/blog/research/how-we-escaped-docker-in-azure-functions/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-06-24
- **Rule ID:** `5c80b618-0dbb-46e6-acbb-03d90bcb6d83`
- **Source file:** `windows/network_connection/net_connection_win_domain_azurewebsites.yml`
