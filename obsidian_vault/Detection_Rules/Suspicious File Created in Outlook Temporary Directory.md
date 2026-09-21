---
type: detection_rule
title: "Suspicious File Created in Outlook Temporary Directory"
rule_id: fabb0e80-030c-4e3e-a104-d09676991ac3
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1566.001]
---

# Suspicious File Created in Outlook Temporary Directory

## Description
Detects the creation of files with suspicious file extensions in the temporary directory that Outlook uses when opening attachments.
This can be used to detect spear-phishing campaigns that use suspicious files as attachments, which may contain malicious code.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_extension:
  TargetFilename|endswith:
  - .cpl
  - .hta
  - .iso
  - .rdp
  - .svg
  - .vba
  - .vbe
  - .vbs
selection_location:
- TargetFilename|contains:
  - \AppData\Local\Packages\Microsoft.Outlook_
  - \AppData\Local\Microsoft\Olk\Attachments\
- TargetFilename|contains|all:
  - \AppData\Local\Microsoft\Windows\
  - \Content.Outlook\
```

## MITRE ATT&CK
- T1566.001

## False Positives
- Opening of headers or footers in email signatures that include SVG images or legitimate SVG attachments

## References
- https://vipre.com/blog/svg-phishing-attacks-the-new-trick-in-the-cybercriminals-playbook/
- https://thecyberexpress.com/rogue-rdp-files-used-in-ukraine-cyberattacks/
- https://www.microsoft.com/en-us/security/blog/2024/10/29/midnight-blizzard-conducts-large-scale-spear-phishing-campaign-using-rdp-files/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-22
- **Rule ID:** `fabb0e80-030c-4e3e-a104-d09676991ac3`
- **Source file:** `windows/file/file_event/file_event_win_office_outlook_susp_file_creation_in_temp_dir.yml`
