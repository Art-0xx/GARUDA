---
tags:
  - mitre/attack/tool
---

# Expand (`S0361`)

[Expand](https://attack.mitre.org/software/S0361) is a Windows utility used to expand one or more compressed CAB files.[^fn1] It has been used by [BBSRAT](https://attack.mitre.org/software/S0127) to decompress a CAB file into executable content.[^fn2]



# Platform(s)

- Windows

# Techniques Used

## Deobfuscate/Decode Files or Information

[Expand](https://attack.mitre.org/software/S0361) can be used to decompress a local or remote CAB file into an executable.[\[Microsoft Expand Utility\]](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/expand)

- *Technique:* [[../Techniques/Deobfuscate_Decode Files or Information (T1140)|Deobfuscate/Decode Files or Information]]

## Lateral Tool Transfer

[Expand](https://attack.mitre.org/software/S0361) can be used to download or upload a file over a network share.[\[LOLBAS Expand\]](https://lolbas-project.github.io/lolbas/Binaries/Expand/)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]

## NTFS File Attributes

[Expand](https://attack.mitre.org/software/S0361) can be used to download or copy a file into an alternate data stream.[\[LOLBAS Expand\]](https://lolbas-project.github.io/lolbas/Binaries/Expand/)

- *Technique:* [[../Techniques/NTFS File Attributes (T1564.004)|NTFS File Attributes]]


# External References(s)

- [S0361](https://attack.mitre.org/software/S0361)

[^fn1]: [Microsoft. (2017, October 15). Expand. Retrieved February 19, 2019.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/expand)
[^fn2]: [Lee, B. Grunzweig, J. (2015, December 22). BBSRAT Attacks Targeting Russian Organizations Linked to Roaming Tiger. Retrieved August 19, 2016.](http://researchcenter.paloaltonetworks.com/2015/12/bbsrat-attacks-targeting-russian-organizations-linked-to-roaming-tiger/)