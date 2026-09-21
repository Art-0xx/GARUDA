---
type: detection_rule
title: "New RUN Key Pointing to Suspicious Folder"
rule_id: 02ee49e2-e294-4d0f-9278-f5b3212fc588
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# New RUN Key Pointing to Suspicious Folder

## Description
Detects suspicious new RUN key element pointing to an executable in a suspicious folder

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_target and (selection_suspicious_paths_1 or (all of selection_suspicious_paths_user_*
  )) and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_windows_update:
  Details|contains:
  - \AppData\Local\Temp\
  - C:\Windows\Temp\
  Details|contains|all:
  - 'rundll32.exe '
  - C:\WINDOWS\system32\advpack.dll,DelNodeRunDLL32
  Image|startswith: C:\Windows\SoftwareDistribution\Download\
  TargetObject|contains: \Microsoft\Windows\CurrentVersion\RunOnce\
filter_optional_spotify:
  Details|endswith: Spotify.exe --autostart --minimized
  Image|endswith:
  - C:\Program Files\Spotify\Spotify.exe
  - C:\Program Files (x86)\Spotify\Spotify.exe
  - \AppData\Roaming\Spotify\Spotify.exe
  TargetObject|endswith: SOFTWARE\Microsoft\Windows\CurrentVersion\Run\Spotify
selection_suspicious_paths_1:
  Details|contains:
  - :\Perflogs
  - :\ProgramData'
  - :\Windows\Temp
  - :\Temp
  - \AppData\Local\Temp
  - \AppData\Roaming
  - :\$Recycle.bin
  - :\Users\Default
  - :\Users\public
  - '%temp%'
  - '%tmp%'
  - '%Public%'
  - '%AppData%'
selection_suspicious_paths_user_1:
  Details|contains: :\Users\
selection_suspicious_paths_user_2:
  Details|contains:
  - \Favorites
  - \Favourites
  - \Contacts
  - \Music
  - \Pictures
  - \Documents
  - \Photos
selection_target:
  TargetObject|contains:
  - \Software\Microsoft\Windows\CurrentVersion\Run
  - \Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
  - \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Software using weird folders for updates

## References
- https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** Florian Roth (Nextron Systems), Markus Neis, Sander Wiebing, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2018-08-25
- **Rule ID:** `02ee49e2-e294-4d0f-9278-f5b3212fc588`
- **Source file:** `windows/registry/registry_set/registry_set_susp_run_key_img_folder.yml`
