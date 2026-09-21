---
tags:
  - mitre/attack/tool
---

# esentutl (`S0404`)

[esentutl](https://attack.mitre.org/software/S0404) is a command-line tool that provides database utilities for the Windows Extensible Storage Engine.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Direct Volume Access

[esentutl](https://attack.mitre.org/software/S0404) can use the Volume Shadow Copy service to copy locked files such as `ntds.dit`.[\[LOLBAS Esentutl\]](https://lolbas-project.github.io/lolbas/Binaries/Esentutl/)[\[Cary Esentutl\]](https://dfironthemountain.wordpress.com/2018/12/06/locked-file-access-using-esentutl-exe/)

- *Technique:* [[../Techniques/Direct Volume Access (T1006)|Direct Volume Access]]

## Lateral Tool Transfer

[esentutl](https://attack.mitre.org/software/S0404) can be used to copy files to/from a remote share.[\[LOLBAS Esentutl\]](https://lolbas-project.github.io/lolbas/Binaries/Esentutl/)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]

## NTDS

[esentutl](https://attack.mitre.org/software/S0404) can copy `ntds.dit` using the Volume Shadow Copy service.[\[LOLBAS Esentutl\]](https://lolbas-project.github.io/lolbas/Binaries/Esentutl/)[\[Cary Esentutl\]](https://dfironthemountain.wordpress.com/2018/12/06/locked-file-access-using-esentutl-exe/)

- *Technique:* [[../Techniques/NTDS (T1003.003)|NTDS]]

## NTFS File Attributes

[esentutl](https://attack.mitre.org/software/S0404) can be used to read and write alternate data streams.[\[LOLBAS Esentutl\]](https://lolbas-project.github.io/lolbas/Binaries/Esentutl/)

- *Technique:* [[../Techniques/NTFS File Attributes (T1564.004)|NTFS File Attributes]]

## Ingress Tool Transfer

[esentutl](https://attack.mitre.org/software/S0404) can be used to copy files from a given URL.[\[LOLBAS Esentutl\]](https://lolbas-project.github.io/lolbas/Binaries/Esentutl/)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Data from Local System

[esentutl](https://attack.mitre.org/software/S0404) can be used to collect data from local file systems.[\[Red Canary 2021 Threat Detection Report March 2021\]](https://resource.redcanary.com/rs/003-YRU-314/images/2021-Threat-Detection-Report.pdf?mkt_tok=MDAzLVlSVS0zMTQAAAF_PIlmhNTaG2McG4X_foM-cIr20UfyB12MIQ10W0HbtMRwxGOJaD0Xj6CRTNg_S-8KniRxtf9xzhz_ACvm_TpbJAIgWCV8yIsFgbhb8cuaZA)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]


# External References(s)

- [S0404](https://attack.mitre.org/software/S0404)

[^fn1]: [Microsoft. (2016, August 30). Esentutl. Retrieved September 3, 2019.](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh875546(v=ws.11))