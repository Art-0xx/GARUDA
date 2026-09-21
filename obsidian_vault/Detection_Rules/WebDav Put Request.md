---
type: detection_rule
title: "WebDav Put Request"
rule_id: 705072a5-bb6f-4ced-95b6-ecfa6602090b
platform: network
level: low
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1048.003]
---

# WebDav Put Request

## Description
A General detection for WebDav user-agent being used to PUT files on a WebDav network share. This could be an indicator of exfiltration.

## Log Source
```yaml
product: zeek
service: http
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  id.resp_h|cidr:
  - 10.0.0.0/8
  - 127.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
  - 169.254.0.0/16
selection:
  method: PUT
  user_agent|contains: WebDAV
```

## MITRE ATT&CK
- T1048.003

## False Positives
- Unknown

## References
- https://github.com/OTRF/detection-hackathon-apt29/issues/17

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-05-02
- **Rule ID:** `705072a5-bb6f-4ced-95b6-ecfa6602090b`
- **Source file:** `network/zeek/zeek_http_webdav_put_request.yml`
