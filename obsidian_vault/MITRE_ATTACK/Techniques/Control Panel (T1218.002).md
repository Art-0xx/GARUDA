---
mitre_data:
  id: T1218.002
  linker_tags:
  - mitre/attack/linker/stealth/control_panel
  name: Control Panel
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Control Panel (`T1218.002`)

Adversaries may abuse control.exe to proxy execution of malicious payloads. The Windows Control Panel process binary (control.exe) handles execution of Control Panel items, which are utilities that allow users to view and adjust computer settings.

Control Panel items are registered executable (.exe) or Control Panel (.cpl) files, the latter are actually renamed dynamic-link library (.dll) files that export a <code>CPlApplet</code> function.[^fn4][^fn5] For ease of use, Control Panel items typically include graphical menus available to users after being registered and loaded into the Control Panel.[^fn4] Control Panel items can be executed directly from the command line, programmatically via an application programming interface (API) call, or by simply double-clicking the file.[^fn4] [^fn5][^fn1]

Malicious Control Panel items can be delivered via [Phishing](https://attack.mitre.org/techniques/T1566) campaigns[^fn5][^fn1] or executed as part of multi-stage malware.[^fn2] Control Panel items, specifically CPL files, may also bypass application and/or file extension allow lists.

Adversaries may also rename malicious DLL files (.dll) with Control Panel file extensions (.cpl) and register them to <code>HKCU\Software\Microsoft\Windows\CurrentVersion\Control Panel\Cpls</code>. Even when these registered DLLs do not comply with the CPL file specification and do not export <code>CPlApplet</code> functions, they are loaded and executed through its <code>DllEntryPoint</code> when Control Panel is executed. CPL files not exporting <code>CPlApplet</code> are not directly executable.[^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.002](https://attack.mitre.org/techniques/T1218/002)

[^fn1]: [Bernardino, J. (2013, December 17). Control Panel Files Used As Malicious Attachments. Retrieved January 18, 2018.](https://blog.trendmicro.com/trendlabs-security-intelligence/control-panel-files-used-as-malicious-attachments/)
[^fn2]: [Grunzweig, J. and Miller-Osborn, J. (2017, November 10). New Malware with Ties to SunOrcal Discovered. Retrieved November 16, 2017.](https://researchcenter.paloaltonetworks.com/2017/11/unit42-new-malware-with-ties-to-sunorcal-discovered/)
[^fn3]: [Hromcova, Z. and Cherpanov, A. (2020, June). INVISIMOLE: THE HIDDEN PART OF THE STORY. Retrieved July 16, 2020.](https://www.welivesecurity.com/wp-content/uploads/2020/06/ESET_InvisiMole.pdf)
[^fn4]: [M. (n.d.). Implementing Control Panel Items. Retrieved January 18, 2018.](https://msdn.microsoft.com/library/windows/desktop/cc144185.aspx)
[^fn5]: [Mercês, F. (2014, January 27). CPL Malware - Malicious Control Panel Items. Retrieved January 18, 2018.](https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-cpl-malware.pdf)