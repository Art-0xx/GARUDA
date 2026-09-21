---
type: detection_rule
title: "DNS Query To Remote Access Software Domain From Non-Browser App"
rule_id: 4d07b1f4-cb00-4470-b9f8-b0191d48ff52
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# DNS Query To Remote Access Software Domain From Non-Browser App

## Description
An adversary may use legitimate desktop support and remote access software, such as Team Viewer, Go2Assist, LogMein, AmmyyAdmin, etc, to establish an interactive command and control channel to target systems within networks.
These services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment.
Remote access tools like VNC, Ammyy, and Teamviewer are used frequently when compared with other legitimate software commonly used by adversaries. (Citation: Symantec Living off the Land)

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_optional_*
filter_optional_avant:
  Image|endswith: \avant.exe
  Image|startswith:
  - C:\Program Files (x86)\Avant Browser\
  - C:\Program Files\Avant Browser\
filter_optional_brave:
  Image|endswith: \brave.exe
  Image|startswith: C:\Program Files\BraveSoftware\
filter_optional_chrome:
  Image:
  - C:\Program Files\Google\Chrome\Application\chrome.exe
  - C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
filter_optional_defender:
  Image|endswith:
  - \MsMpEng.exe
  - \MsSense.exe
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
filter_optional_falkon:
  Image|endswith: \falkon.exe
  Image|startswith:
  - C:\Program Files\Falkon\
  - C:\Program Files (x86)\Falkon\
filter_optional_firefox:
  Image:
  - C:\Program Files\Mozilla Firefox\firefox.exe
  - C:\Program Files (x86)\Mozilla Firefox\firefox.exe
filter_optional_flock:
  Image|contains: \AppData\Local\Flock\
  Image|endswith: \Flock.exe
filter_optional_ie:
  Image:
  - C:\Program Files (x86)\Internet Explorer\iexplore.exe
  - C:\Program Files\Internet Explorer\iexplore.exe
filter_optional_maxthon:
  Image|contains: \AppData\Local\Maxthon\
  Image|endswith: \maxthon.exe
filter_optional_midori:
  Image|contains: \AppData\Local\Programs\midori-ng\
  Image|endswith: \Midori Next Generation.exe
filter_optional_opera:
  Image|contains: \AppData\Local\Programs\Opera\
  Image|endswith: \opera.exe
filter_optional_phoebe:
  Image|contains: \AppData\Local\Phoebe\
  Image|endswith: \Phoebe.exe
filter_optional_safari:
  Image|endswith: \safari.exe
filter_optional_seamonkey:
  Image|endswith: \seamonkey.exe
  Image|startswith:
  - C:\Program Files\SeaMonkey\
  - C:\Program Files (x86)\SeaMonkey\
filter_optional_slimbrowser:
  Image|endswith: \slimbrowser.exe
  Image|startswith:
  - C:\Program Files\SlimBrowser\
  - C:\Program Files (x86)\SlimBrowser\
filter_optional_tor:
  Image|contains: \Tor Browser\
filter_optional_vivaldi:
  Image|contains: \AppData\Local\Vivaldi\
  Image|endswith: \vivaldi.exe
filter_optional_whale:
  Image|endswith: \whale.exe
  Image|startswith:
  - C:\Program Files\Naver\Naver Whale\
  - C:\Program Files (x86)\Naver\Naver Whale\
filter_optional_whaterfox:
  Image|endswith: \Waterfox.exe
  Image|startswith:
  - C:\Program Files\Waterfox\
  - C:\Program Files (x86)\Waterfox\
selection_generic:
  QueryName|endswith:
  - agent.jumpcloud.com
  - agentreporting.atera.com
  - ammyy.com
  - api.parsec.app
  - api.playanext.com
  - api.splashtop.com
  - app.atera.com
  - assist.zoho.com
  - authentication.logmeininc.com
  - beyondtrustcloud.com
  - cdn.kaseya.net
  - client.teamviewer.com
  - comserver.corporate.beanywhere.com
  - control.connectwise.com
  - downloads.zohocdn.com
  - dwservice.net
  - express.gotoassist.com
  - getgo.com
  - getscreen.me
  - integratedchat.teamviewer.com
  - join.zoho.com
  - kickstart.jumpcloud.com
  - license.bomgar.com
  - logmein-gateway.com
  - logmein.com
  - logmeincdn.http.internapcdn.net
  - n-able.com
  - net.anydesk.com
  - netsupportsoftware.com
  - parsecusercontent.com
  - pubsub.atera.com
  - relay.kaseya.net
  - relay.screenconnect.com
  - relay.splashtop.com
  - remoteassistance.support.services.microsoft.com
  - remotedesktop-pa.googleapis.com
  - remoteutilities.com
  - secure.logmeinrescue.com
  - services.vnc.com
  - static.remotepc.com
  - swi-rc.com
  - swi-tc.com
  - tailscale.com
  - telemetry.servers.qetqo.com
  - tmate.io
  - twingate.com
  - zohoassist.com
selection_rustdesk:
  QueryName|endswith: .rustdesk.com
  QueryName|startswith: rs-
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Likely with other browser software. Apply additional filters for any other browsers you might use.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-4---gotoassist-files-detected-test-on-windows
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-3---logmein-files-detected-test-on-windows
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md#atomic-test-6---ammyy-admin-software-execution
- https://redcanary.com/blog/misbehaving-rats/
- https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/hunting-for-omi-vulnerability-exploitation-with-azure-sentinel/ba-p/2764093

## Metadata
- **Author:** frack113, Connor Martin
- **Date:** 2022-07-11
- **Rule ID:** `4d07b1f4-cb00-4470-b9f8-b0191d48ff52`
- **Source file:** `windows/dns_query/dns_query_win_remote_access_software_domains_non_browsers.yml`
