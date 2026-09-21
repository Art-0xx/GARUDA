---
type: detection_rule
title: "ADFS Database Named Pipe Connection By Uncommon Tool"
rule_id: 1ea13e8c-03ea-409b-877d-ce5c3d2c1cb3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1005]
---

# ADFS Database Named Pipe Connection By Uncommon Tool

## Description
Detects suspicious local connections via a named pipe to the AD FS configuration database (Windows Internal Database).
Used to access information such as the AD FS configuration settings which contains sensitive information used to sign SAML tokens.

## Log Source
```yaml
category: pipe_created
definition: Note that you have to configure logging for Named Pipe Events in Sysmon
  config (Event ID 17 and Event ID 18). The basic configuration is in popular sysmon
  configuration (https://github.com/SwiftOnSecurity/sysmon-config), but it is worth
  verifying. You can also use other repo, e.g. https://github.com/Neo23x0/sysmon-config,
  https://github.com/olafhartong/sysmon-modular. How to test detection? You can check
  powershell script from this site https://svch0st.medium.com/guide-to-named-pipes-and-hunting-for-cobalt-strike-pipes-dc46b2c5f575
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_generic:
  Image|endswith:
  - :\Windows\System32\mmc.exe
  - :\Windows\system32\svchost.exe
  - :\Windows\System32\wsmprovhost.exe
  - :\Windows\SysWOW64\mmc.exe
  - :\Windows\SysWOW64\wsmprovhost.exe
  - :\Windows\WID\Binn\sqlwriter.exe
  - \AzureADConnect.exe
  - \Microsoft.Identity.Health.Adfs.PshSurrogate.exe
  - \Microsoft.IdentityServer.ServiceHost.exe
  - \Microsoft.Tri.Sensor.exe
  - \sqlservr.exe
  - \tssdis.exe
selection:
  PipeName: \MICROSOFT##WID\tsql\query
```

## MITRE ATT&CK
- T1005

## False Positives
- Unknown

## References
- https://github.com/Azure/Azure-Sentinel/blob/f99542b94afe0ad2f19a82cc08262e7ac8e1428e/Detections/SecurityEvent/ADFSDBNamedPipeConnection.yaml
- https://o365blog.com/post/adfs/
- https://github.com/Azure/SimuLand

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2021-10-08
- **Rule ID:** `1ea13e8c-03ea-409b-877d-ce5c3d2c1cb3`
- **Source file:** `windows/pipe_created/pipe_created_adfs_namedpipe_connection_uncommon_tool.yml`
