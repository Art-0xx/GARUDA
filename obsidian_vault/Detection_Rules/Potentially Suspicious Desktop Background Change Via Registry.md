---
type: detection_rule
title: "Potentially Suspicious Desktop Background Change Via Registry"
rule_id: 85b88e05-dadc-430b-8a9e-53ff1cd30aae
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112, attack.t1491.001]
---

# Potentially Suspicious Desktop Background Change Via Registry

## Description
Detects registry value settings that would replace the user's desktop background.
This is a common technique used by malware to change the desktop background to a ransom note or other image.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_keys and 1 of selection_values_* and not 1 of filter_main_* and
  not 1 of filter_optional_*
filter_main_empty:
  Details: (Empty)
  TargetObject|endswith: \Control Panel\Desktop\Wallpaper
filter_main_explorer:
  Image|endswith: C:\Windows\Explorer.EXE
filter_main_svchost:
  Image|endswith: \svchost.exe
filter_optional_ec2launch:
  Image:
  - C:\Program Files\Amazon\EC2Launch\EC2Launch.exe
  - C:\Program Files (x86)\Amazon\EC2Launch\EC2Launch.exe
  TargetObject|endswith: \Control Panel\Desktop\Wallpaper
selection_keys:
  TargetObject|contains:
  - Control Panel\Desktop
  - CurrentVersion\Policies\ActiveDesktop
  - CurrentVersion\Policies\System
selection_values_1:
  Details: DWORD (0x00000001)
  TargetObject|endswith: NoChangingWallpaper
selection_values_2:
  TargetObject|endswith: \Wallpaper
selection_values_3:
  Details: '2'
  TargetObject|endswith: \WallpaperStyle
```

## MITRE ATT&CK
- T1112
- T1491.001

## False Positives
- Administrative scripts that change the desktop background to a company logo or other image.

## References
- https://www.attackiq.com/2023/09/20/emulating-rhysida/
- https://research.checkpoint.com/2023/the-rhysida-ransomware-activity-analysis-and-ties-to-vice-society/
- https://www.trendmicro.com/en_us/research/23/h/an-overview-of-the-new-rhysida-ransomware.html
- https://www.virustotal.com/gui/file/a864282fea5a536510ae86c77ce46f7827687783628e4f2ceb5bf2c41b8cd3c6/behavior
- https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.WindowsDesktop::Wallpaper

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Stephen Lincoln @slincoln-aiq (AttackIQ)
- **Date:** 2023-12-21
- **Rule ID:** `85b88e05-dadc-430b-8a9e-53ff1cd30aae`
- **Source file:** `windows/registry/registry_set/registry_set_desktop_background_change.yml`
