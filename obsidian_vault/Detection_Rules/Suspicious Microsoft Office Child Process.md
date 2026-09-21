---
type: detection_rule
title: "Suspicious Microsoft Office Child Process"
rule_id: 438025f9-5856-4663-83f7-52f878a70a50
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1204.002, attack.t1218.010]
---

# Suspicious Microsoft Office Child Process

## Description
Detects a suspicious process spawning from one of the Microsoft Office suite products (Word, Excel, PowerPoint, Publisher, Visio, etc.)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_child_*
selection_child_processes:
- OriginalFileName:
  - bitsadmin.exe
  - CertOC.exe
  - CertUtil.exe
  - Cmd.Exe
  - CMSTP.EXE
  - cscript.exe
  - curl.exe
  - HH.exe
  - IEExec.exe
  - InstallUtil.exe
  - javaw.exe
  - Microsoft.Workflow.Compiler.exe
  - msdt.exe
  - MSHTA.EXE
  - msiexec.exe
  - Msxsl.exe
  - odbcconf.exe
  - pcalua.exe
  - PowerShell.EXE
  - RegAsm.exe
  - RegSvcs.exe
  - REGSVR32.exe
  - RUNDLL32.exe
  - schtasks.exe
  - ScriptRunner.exe
  - wmic.exe
  - WorkFolders.exe
  - wscript.exe
- Image|endswith:
  - \AppVLP.exe
  - \bash.exe
  - \bitsadmin.exe
  - \certoc.exe
  - \certutil.exe
  - \cmd.exe
  - \cmstp.exe
  - \control.exe
  - \cscript.exe
  - \curl.exe
  - \forfiles.exe
  - \hh.exe
  - \ieexec.exe
  - \installutil.exe
  - \javaw.exe
  - \mftrace.exe
  - \Microsoft.Workflow.Compiler.exe
  - \msbuild.exe
  - \msdt.exe
  - \mshta.exe
  - \msidb.exe
  - \msiexec.exe
  - \msxsl.exe
  - \odbcconf.exe
  - \pcalua.exe
  - \powershell.exe
  - \pwsh.exe
  - \regasm.exe
  - \regsvcs.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \schtasks.exe
  - \scrcons.exe
  - \scriptrunner.exe
  - \sh.exe
  - \svchost.exe
  - \verclsid.exe
  - \wmic.exe
  - \workfolders.exe
  - \wscript.exe
selection_child_susp_paths:
  Image|contains:
  - \AppData\
  - \Users\Public\
  - \ProgramData\
  - \Windows\Tasks\
  - \Windows\Temp\
  - \Windows\System32\Tasks\
selection_parent:
  ParentImage|endswith:
  - \EQNEDT32.EXE
  - \EXCEL.EXE
  - \MSACCESS.EXE
  - \MSPUB.exe
  - \ONENOTE.EXE
  - \POWERPNT.exe
  - \VISIO.exe
  - \WINWORD.EXE
  - \wordpad.exe
  - \wordview.exe
```

## MITRE ATT&CK
- T1047
- T1204.002
- T1218.010

## False Positives
- Unknown

## References
- https://www.hybrid-analysis.com/sample/465aabe132ccb949e75b8ab9c5bda36d80cf2fd503d52b8bad54e295f28bbc21?environmentId=100
- https://mgreen27.github.io/posts/2018/04/02/DownloadCradle.html
- https://thedfirreport.com/2021/03/29/sodinokibi-aka-revil-ransomware/
- https://doublepulsar.com/follina-a-microsoft-office-code-execution-vulnerability-1a47fce5629e
- https://github.com/vadim-hunter/Detection-Ideas-Rules/blob/02bcbfc2bfb8b4da601bb30de0344ae453aa1afe/Threat%20Intelligence/The%20DFIR%20Report/20210329_Sodinokibi_(aka_REvil)_Ransomware.yaml

## Metadata
- **Author:** Florian Roth (Nextron Systems), Markus Neis, FPT.EagleEye Team, Vadim Khrykov, Cyb3rEng, Michael Haag, Christopher Peacock @securepeacock, @scythe_io
- **Date:** 2018-04-06
- **Rule ID:** `438025f9-5856-4663-83f7-52f878a70a50`
- **Source file:** `windows/process_creation/proc_creation_win_office_susp_child_processes.yml`
