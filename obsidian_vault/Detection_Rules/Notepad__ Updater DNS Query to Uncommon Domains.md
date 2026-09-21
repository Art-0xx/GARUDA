---
type: detection_rule
title: "Notepad++ Updater DNS Query to Uncommon Domains"
rule_id: 2074e137-1b73-4e2d-88ba-5a3407dbdce0
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1195.002, attack.t1557]
---

# Notepad++ Updater DNS Query to Uncommon Domains

## Description
Detects when the Notepad++ updater (gup.exe) makes DNS queries to domains that are not part of the known legitimate update infrastructure.
This could indicate potential exploitation of the updater mechanism or suspicious network activity that warrants further investigation.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_notepad_legit_domain:
  QueryName: notepad-plus-plus.org
filter_optional_github_legit_domain:
- QueryName|endswith: .githubusercontent.com
- QueryName: github.com
filter_optional_google_storage_legit_domain:
  QueryName|endswith: .googleapis.com
filter_optional_sourceforge_legit_domain:
  QueryName|endswith: .sourceforge.net
filter_optional_uncommon_domains:
  QueryName|endswith:
  - .azurewebsites.net
  - block.opendns.com
  - gateway.zscalerthree.net
selection:
  Image|endswith: \gup.exe
```

## MITRE ATT&CK
- T1195.002
- T1557

## False Positives
- Some legitimate network misconfigurations or proxy issues causing unexpected DNS queries.
- Other legitimate query to official domains not listed in the filter, needing tuning.

## References
- https://notepad-plus-plus.org/news/v889-released/
- https://www.heise.de/en/news/Notepad-updater-installed-malware-11109726.html
- https://www.rapid7.com/blog/post/tr-chrysalis-backdoor-dive-into-lotus-blossoms-toolkit/
- https://www.validin.com/blog/exploring_notepad_plus_plus_network_indicators/
- https://securelist.com/notepad-supply-chain-attack/118708/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-02-02
- **Rule ID:** `2074e137-1b73-4e2d-88ba-5a3407dbdce0`
- **Source file:** `windows/dns_query/dns_query_win_gup_query_to_uncommon_domains.yml`
