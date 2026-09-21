---
type: detection_rule
title: "Curl File Upload To File Sharing Websites"
rule_id: e328cc73-f92a-42fb-b3fa-7c2cffda981a
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# Curl File Upload To File Sharing Websites

## Description
Detects usage of curl to upload files to known file sharing domains, which may indicate data exfiltration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_domain:
  CommandLine|contains:
  - 0x0.st
  - bashupload.com
  - chunk.io
  - file.io
  - filebin.net
  - pastebin
  - send.firefox.com
  - temp.sh
  - transfer.sh
  - ufile.io
  - uploadfiles.io
  - wetransfer.com
  - x0.at
selection_cli_flags:
- CommandLine|contains:
  - ' --form'
  - ' --upload-file'
  - ' --data'
  - ' -X POST'
  - ' --request POST '
- CommandLine|re:
  - \s-[FTd]\s
  - \s-sT\s
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
```

## MITRE ATT&CK
- T1567.002

## False Positives
- Legitimate file uploads to these services by administrators or developers

## References
- https://unit42.paloaltonetworks.com/advanced-backdoor-squidoor/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-03-29
- **Rule ID:** `e328cc73-f92a-42fb-b3fa-7c2cffda981a`
- **Source file:** `windows/process_creation/proc_creation_win_curl_upload_file_sharing_websites.yml`
