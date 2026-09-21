---
tags:
  - mitre/attack/tool
---

# cipher.exe (`S1205`)

[cipher.exe](https://attack.mitre.org/software/S1205) is a native Microsoft utility that manages encryption of directories and files on NTFS (New Technology File System) partitions by using the Encrypting File System (EFS).[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Disk Content Wipe

[cipher.exe](https://attack.mitre.org/software/S1205) can be used to overwrite deleted data in specified folders.[\[Nearest Neighbor Volexity\]](https://www.volexity.com/blog/2024/11/22/the-nearest-neighbor-attack-how-a-russian-apt-weaponized-nearby-wi-fi-networks-for-covert-access/)

- *Technique:* [[../Techniques/Disk Content Wipe (T1561.001)|Disk Content Wipe]]


# External References(s)

- [S1205](https://attack.mitre.org/software/S1205)

[^fn1]: [Microsoft Support. (n.d.). Cipher.exe Security Tool for the Encrypting File System. Retrieved February 25, 2025.](https://support.microsoft.com/en-us/topic/cipher-exe-security-tool-for-the-encrypting-file-system-56c85edd-85cf-ac07-f2f7-ca2d35dab7e4)