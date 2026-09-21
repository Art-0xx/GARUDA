---
mitre_data:
  id: T1218.012
  linker_tags:
  - mitre/attack/linker/stealth/verclsid
  name: Verclsid
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Verclsid (`T1218.012`)

Adversaries may abuse verclsid.exe to proxy execution of malicious code. Verclsid.exe is known as the Extension CLSID Verification Host and is responsible for verifying each shell extension before they are used by Windows Explorer or the Windows Shell.[^fn5]

Adversaries may abuse verclsid.exe to execute malicious payloads. This may be achieved by running <code>verclsid.exe /S /C {CLSID}</code>, where the file is referenced by a Class ID (CLSID), a unique identification number used to identify COM objects. COM payloads executed by verclsid.exe may be able to perform various malicious actions, such as loading and executing COM scriptlets (SCT) from remote servers (similar to [Regsvr32](https://attack.mitre.org/techniques/T1218/010)). Since the binary may be signed and/or native on Windows systems, proxying execution via verclsid.exe may bypass application control solutions that do not account for its potential abuse.[^fn3][^fn2][^fn1][^fn4] 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Binary Proxy Execution (T1218)|System Binary Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1218.012](https://attack.mitre.org/techniques/T1218/012)

[^fn1]: [BOHOPS. (2018, August 18). Abusing the COM Registry Structure (Part 2): Hijacking & Loading Techniques. Retrieved August 10, 2020.](https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/)
[^fn2]: [Haag, M., Levan, K. (2017, April 6). Old Phishing Attacks Deploy a New Methodology: Verclsid.exe. Retrieved August 10, 2020.](https://redcanary.com/blog/verclsid-exe-threat-detection/)
[^fn3]: [LOLBAS. (n.d.). Verclsid.exe. Retrieved August 10, 2020.](https://lolbas-project.github.io/lolbas/Binaries/Verclsid/)
[^fn4]: [Tyrer, N. (n.d.). Instructions. Retrieved August 10, 2020.](https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5)
[^fn5]: [verclsid-exe. (2019, December 17). verclsid.exe File Information - What is it & How to Block . Retrieved November 17, 2024.](https://winosbite.com/verclsid-exe/)