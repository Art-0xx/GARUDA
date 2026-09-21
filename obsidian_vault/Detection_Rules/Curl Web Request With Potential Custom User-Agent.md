---
type: detection_rule
title: "Curl Web Request With Potential Custom User-Agent"
rule_id: 85de1f22-d189-44e4-8239-dc276b45379b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Curl Web Request With Potential Custom User-Agent

## Description
Detects execution of "curl.exe" with a potential custom "User-Agent". Attackers can leverage this to download or exfiltrate data via "curl" to a domain that only accept specific "User-Agent" strings

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_header_* and selection_user_agent
selection_header_flag_1:
  CommandLine|re: \s-H\s
selection_header_flag_2:
  CommandLine|contains: --header
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
selection_user_agent:
  CommandLine|contains: 'User-Agent:'
```

## False Positives
- Unknown

## References
- https://labs.withsecure.com/publications/fin7-target-veeam-servers
- https://github.com/WithSecureLabs/iocs/blob/344203de742bb7e68bd56618f66d34be95a9f9fc/FIN7VEEAM/iocs.csv

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-27
- **Rule ID:** `85de1f22-d189-44e4-8239-dc276b45379b`
- **Source file:** `windows/process_creation/proc_creation_win_curl_custom_user_agent.yml`
