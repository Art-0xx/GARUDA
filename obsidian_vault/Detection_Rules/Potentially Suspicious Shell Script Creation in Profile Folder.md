---
type: detection_rule
title: "Potentially Suspicious Shell Script Creation in Profile Folder"
rule_id: 13f08f54-e705-4498-91fd-cce9d9cee9f1
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
---

# Potentially Suspicious Shell Script Creation in Profile Folder

## Description
Detects the creation of shell scripts under the "profile.d" path.

## Log Source
```yaml
category: file_event
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: /etc/profile.d/
  TargetFilename|endswith:
  - .csh
  - .sh
```

## False Positives
- Legitimate shell scripts in the "profile.d" directory could be common in your environment. Apply additional filter accordingly via "image", by adding specific filenames you "trust" or by correlating it with other events.
- Regular file creation during system update or software installation by the package manager

## References
- https://blogs.jpcert.or.jp/en/2023/05/gobrat.html
- https://jstnk9.github.io/jstnk9/research/GobRAT-Malware/
- https://www.virustotal.com/gui/file/60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3/detection
- https://www.virustotal.com/gui/file/3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1/detection

## Metadata
- **Author:** Joseliyo Sanchez, @Joseliyo_Jstnk
- **Date:** 2023-06-02
- **Rule ID:** `13f08f54-e705-4498-91fd-cce9d9cee9f1`
- **Source file:** `linux/file_event/file_event_lnx_susp_shell_script_under_profile_directory.yml`
