---
type: detection_rule
title: "Potentially Suspicious Named Pipe Created Via Mkfifo"
rule_id: 999c3b12-0a8c-40b6-8e13-dd7d62b75c7a
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
---

# Potentially Suspicious Named Pipe Created Via Mkfifo

## Description
Detects the creation of a new named pipe using the "mkfifo" utility in a potentially suspicious location

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' /tmp/'
  Image|endswith: /mkfifo
```

## False Positives
- Unknown

## References
- https://dev.to/0xbf/use-mkfifo-to-create-named-pipe-linux-tips-5bbk
- https://www.mandiant.com/resources/blog/barracuda-esg-exploited-globally

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-16
- **Rule ID:** `999c3b12-0a8c-40b6-8e13-dd7d62b75c7a`
- **Source file:** `linux/process_creation/proc_creation_lnx_mkfifo_named_pipe_creation_susp_location.yml`
