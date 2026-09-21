---
type: detection_rule
title: "Python Initiated Connection"
rule_id: bef0bc5a-b9ae-425d-85c6-7b2d705980c6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1046]
---

# Python Initiated Connection

## Description
Detects a Python process initiating a network connection. While this often relates to package installation, it can also indicate a potential malicious script communicating with a C&C server.

## Log Source
```yaml
category: network_connection
definition: 'Requirements: Field enrichment is required for the filters to work. As
  field such as CommandLine and ParentImage are not available by default on this event
  type'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_local_communication:
  DestinationIp: 127.0.0.1
  SourceIp: 127.0.0.1
filter_main_pip:
  CommandLine|contains|all:
  - pip.exe
  - install
filter_optional_conda:
  CommandLine|contains|all:
  - :\ProgramData\Anaconda3\Scripts\conda-script.py
  - update
  ParentImage: C:\ProgramData\Anaconda3\Scripts\conda.exe
filter_optional_conda_jupyter_notebook:
  CommandLine|contains: C:\ProgramData\Anaconda3\Scripts\jupyter-notebook-script.py
  ParentImage: C:\ProgramData\Anaconda3\python.exe
selection:
  Image|contains|all:
  - \python
  - .exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1046

## False Positives
- Legitimate python scripts using the socket library or similar will trigger this. Apply additional filters and perform an initial baseline before deploying.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1046/T1046.md#atomic-test-4---port-scan-using-python
- https://pypi.org/project/scapy/

## Metadata
- **Author:** frack113
- **Date:** 2021-12-10
- **Rule ID:** `bef0bc5a-b9ae-425d-85c6-7b2d705980c6`
- **Source file:** `windows/network_connection/net_connection_win_python.yml`
