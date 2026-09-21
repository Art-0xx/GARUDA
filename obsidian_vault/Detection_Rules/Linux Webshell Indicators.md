---
type: detection_rule
title: "Linux Webshell Indicators"
rule_id: 818f7b24-0fba-4c49-a073-8b755573b9c7
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1505.003]
---

# Linux Webshell Indicators

## Description
Detects suspicious sub processes of web server processes

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: 1 of selection_parent_* and selection_child_processes and not 1 of filter_optional_*
filter_optional_ip_neigh:
  CommandLine|contains: ip neigh show
  ParentImage|endswith: /node
selection_child_processes:
  Image|endswith:
  - /whoami
  - /ifconfig
  - /ip
  - /bin/uname
  - /bin/cat
  - /bin/crontab
  - /hostname
  - /iptables
  - /netstat
  - /pwd
  - /route
selection_parent_general:
  ParentImage|endswith:
  - /httpd
  - /lighttpd
  - /nginx
  - /apache2
  - /node
  - /caddy
selection_parent_tomcat:
  ParentCommandLine|contains|all:
  - /bin/java
  - tomcat
selection_parent_websphere:
  ParentCommandLine|contains|all:
  - /bin/java
  - websphere
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Web applications that invoke Linux command line tools

## References
- https://www.acunetix.com/blog/articles/web-shells-101-using-php-introduction-web-shells-part-2/
- https://media.defense.gov/2020/Jun/09/2002313081/-1/-1/0/CSI-DETECT-AND-PREVENT-WEB-SHELL-MALWARE-20200422.PDF

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-10-15
- **Rule ID:** `818f7b24-0fba-4c49-a073-8b755573b9c7`
- **Source file:** `linux/process_creation/proc_creation_lnx_webshell_detection.yml`
