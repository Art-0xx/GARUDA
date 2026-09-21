---
type: detection_rule
title: "Unsigned DLL Loaded by Windows Utility"
rule_id: b5de0c9a-6f19-43e0-af4e-55ad01f550af
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011, attack.t1218.010]
---

# Unsigned DLL Loaded by Windows Utility

## Description
Detects windows utilities loading an unsigned or untrusted DLL.
Adversaries often abuse those programs to proxy execution of malicious code.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_assembly:
  ImageLoaded|endswith: .dll
  ImageLoaded|startswith: C:\Windows\assembly\NativeImages
  Image|endswith: \RegAsm.exe
  Image|startswith:
  - C:\Windows\SysWOW64\
  - C:\Windows\System32\
  - C:\Windows\Microsoft.NET\Framework64
filter_main_sig_status:
  SignatureStatus:
  - errorChaining
  - errorCode_endpoint
  - errorExpired
  - trusted
  - Valid
filter_main_sig_status_empty:
  SignatureStatus:
  - ''
  - '-'
filter_main_sig_status_null:
  SignatureStatus: null
filter_main_signed:
  Signed: 'true'
filter_main_signed_empty:
  Signed:
  - ''
  - '-'
filter_main_signed_null:
  Signed: null
filter_main_windows_installer:
  Image:
  - C:\Windows\SysWOW64\rundll32.exe
  - C:\Windows\System32\rundll32.exe
  ImageLoaded|endswith:
  - .tmp-\Microsoft.Deployment.WindowsInstaller.dll
  - .tmp-\Avira.OE.Setup.CustomActions.dll
  ImageLoaded|startswith: C:\Windows\Installer\
filter_optional_klite_codec:
  Image:
  - C:\Windows\SysWOW64\regsvr32.exe
  - C:\Windows\System32\regsvr32.exe
  ImageLoaded|startswith:
  - C:\Program Files (x86)\K-Lite Codec Pack\
  - C:\Program Files\K-Lite Codec Pack\
selection:
  Image|endswith:
  - \InstallUtil.exe
  - \RegAsm.exe
  - \RegSvcs.exe
  - \regsvr32.exe
  - \rundll32.exe
```

## MITRE ATT&CK
- T1218.011
- T1218.010

## False Positives
- Unknown

## References
- https://www.elastic.co/security-labs/Hunting-for-Suspicious-Windows-Libraries-for-Execution-and-Evasion
- https://akhere.hashnode.dev/hunting-unsigned-dlls-using-kql
- https://unit42.paloaltonetworks.com/unsigned-dlls/?web_view=true

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-02-28
- **Rule ID:** `b5de0c9a-6f19-43e0-af4e-55ad01f550af`
- **Source file:** `windows/image_load/image_load_susp_unsigned_dll.yml`
