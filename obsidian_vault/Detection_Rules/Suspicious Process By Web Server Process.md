---
type: detection_rule
title: "Suspicious Process By Web Server Process"
rule_id: 8202070f-edeb-4d31-a010-a26c72ac5600
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003, attack.t1190]
---

# Suspicious Process By Web Server Process

## Description
Detects potentially suspicious processes being spawned by a web server process which could be the result of a successfully placed web shell or exploitation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_webserver_* and selection_anomaly_children and not 1 of
  filter_main_*
filter_main_fp_1:
  CommandLine|endswith: Windows\system32\cmd.exe /c C:\ManageEngine\ADManager "Plus\ES\bin\elasticsearch.bat
    -Enode.name=RMP-NODE1 -pelasticsearch-pid.txt
  ParentImage|endswith: \java.exe
filter_main_fp_2:
  CommandLine|contains|all:
  - sc query
  - ADManager Plus
  ParentImage|endswith: \java.exe
selection_anomaly_children:
  Image|endswith:
  - \arp.exe
  - \at.exe
  - \bash.exe
  - \bitsadmin.exe
  - \certutil.exe
  - \cmd.exe
  - \cscript.exe
  - \dsget.exe
  - \hostname.exe
  - \nbtstat.exe
  - \net.exe
  - \net1.exe
  - \netdom.exe
  - \netsh.exe
  - \nltest.exe
  - \ntdsutil.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \qprocess.exe
  - \query.exe
  - \qwinsta.exe
  - \reg.exe
  - \rundll32.exe
  - \sc.exe
  - \sh.exe
  - \wmic.exe
  - \wscript.exe
  - \wusa.exe
selection_webserver_characteristics_tomcat1:
  ParentImage|contains:
  - -tomcat-
  - \tomcat
  ParentImage|endswith:
  - \java.exe
  - \javaw.exe
selection_webserver_characteristics_tomcat2:
  ParentCommandLine|contains:
  - CATALINA_HOME
  - catalina.home
  - catalina.jar
  ParentImage|endswith:
  - \java.exe
  - \javaw.exe
selection_webserver_image:
  ParentImage|endswith:
  - \caddy.exe
  - \httpd.exe
  - \nginx.exe
  - \php-cgi.exe
  - \php.exe
  - \tomcat.exe
  - \UMWorkerProcess.exe
  - \w3wp.exe
  - \ws_TomcatService.exe
```

## MITRE ATT&CK
- T1505.003
- T1190

## False Positives
- Particular web applications may spawn a shell process legitimately

## References
- https://media.defense.gov/2020/Jun/09/2002313081/-1/-1/0/CSI-DETECT-AND-PREVENT-WEB-SHELL-MALWARE-20200422.PDF

## Metadata
- **Author:** Thomas Patzke, Florian Roth (Nextron Systems), Zach Stanford @svch0st, Tim Shelton, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-01-16
- **Rule ID:** `8202070f-edeb-4d31-a010-a26c72ac5600`
- **Source file:** `windows/process_creation/proc_creation_win_webshell_susp_process_spawned_from_webserver.yml`
