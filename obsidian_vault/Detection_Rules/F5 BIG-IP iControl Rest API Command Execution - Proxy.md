---
type: detection_rule
title: "F5 BIG-IP iControl Rest API Command Execution - Proxy"
rule_id: b59c98c6-95e8-4d65-93ee-f594dfb96b17
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1190]
---

# F5 BIG-IP iControl Rest API Command Execution - Proxy

## Description
Detects POST requests to the F5 BIG-IP iControl Rest API "bash" endpoint, which allows the execution of commands on the BIG-IP

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-uri|endswith: /mgmt/tm/util/bash
  cs-method: POST
```

## MITRE ATT&CK
- T1190

## False Positives
- Legitimate usage of the BIG IP REST API to execute command for administration purposes

## References
- https://f5-sdk.readthedocs.io/en/latest/apidoc/f5.bigip.tm.util.html#module-f5.bigip.tm.util.bash
- https://community.f5.com/t5/technical-forum/icontrolrest-11-5-execute-bash-command/td-p/203029
- https://community.f5.com/t5/technical-forum/running-bash-commands-via-rest-api/td-p/272516

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Thurein Oo
- **Date:** 2023-11-08
- **Rule ID:** `b59c98c6-95e8-4d65-93ee-f594dfb96b17`
- **Source file:** `web/proxy_generic/proxy_f5_tm_utility_bash_api_request.yml`
