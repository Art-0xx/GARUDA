---
type: detection_rule
title: "Linux HackTool Execution"
rule_id: a015e032-146d-4717-8944-7a1884122111
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1587]
---

# Linux HackTool Execution

## Description
Detects known hacktool execution based on image name.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_c2_framework_cobaltstrike:
  Image|contains:
  - /cobaltstrike
  - /teamserver
selection_c2_frameworks:
  Image|endswith:
  - /crackmapexec
  - /havoc
  - /merlin-agent
  - /merlinServer-Linux-x64
  - /msfconsole
  - /msfvenom
  - /ps-empire server
  - /ps-empire
  - /sliver-client
  - /sliver-server
  - /Villain.py
selection_exploit_tools:
  Image|endswith:
  - /aircrack-ng
  - /bloodhound-python
  - /bpfdos
  - /ebpfki
  - /evil-winrm
  - /hashcat
  - /hoaxshell.py
  - /hydra
  - /john
  - /ncrack
  - /nxc-ubuntu-latest
  - /pidhide
  - /pspy32
  - /pspy32s
  - /pspy64
  - /pspy64s
  - /setoolkit
  - /sqlmap
  - /writeblocker
selection_linpeas:
  Image|contains: /linpeas
selection_scanners:
  Image|endswith:
  - /autorecon
  - /httpx
  - /legion
  - /naabu
  - /netdiscover
  - /nuclei
  - /recon-ng
selection_scanners_sniper:
  Image|contains: /sniper
selection_web_enum:
  Image|endswith:
  - /dirb
  - /dirbuster
  - /eyewitness
  - /feroxbuster
  - /ffuf
  - /gobuster
  - /wfuzz
  - /whatweb
selection_web_vuln:
  Image|endswith:
  - /joomscan
  - /nikto
  - /wpscan
```

## MITRE ATT&CK
- T1587

## False Positives
- Unlikely

## References
- https://github.com/Gui774ume/ebpfkit
- https://github.com/pathtofile/bad-bpf
- https://github.com/carlospolop/PEASS-ng
- https://github.com/t3l3machus/hoaxshell
- https://github.com/t3l3machus/Villain

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Georg Lauenstein (sure[secure])
- **Date:** 2023-01-03
- **Rule ID:** `a015e032-146d-4717-8944-7a1884122111`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_hktl_execution.yml`
