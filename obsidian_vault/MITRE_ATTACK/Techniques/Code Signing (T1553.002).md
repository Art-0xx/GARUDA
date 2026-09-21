---
mitre_data:
  id: T1553.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/code_signing
  name: Code Signing
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Code Signing (`T1553.002`)

Adversaries may create, acquire, or steal code signing materials to sign their malware or tools. Code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with. [^fn4] The certificates used during an operation may be created, acquired, or stolen by the adversary. [^fn2] [^fn3] Unlike [Invalid Code Signature](https://attack.mitre.org/techniques/T1036/001), this activity will result in a valid signature.

Code signing to verify software on first run can be used on modern Windows and macOS systems. It is not used on Linux due to the decentralized nature of the platform. [^fn4][^fn1]

Code signing certificates may be used to bypass security policies that require signed code to execute on a system. 


# Platform(s)

- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Subvert Trust Controls (T1553)|Subvert Trust Controls]]

# Tool(s)

- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1553.002](https://attack.mitre.org/techniques/T1553/002)

[^fn1]: [Howard Oakley. (2020, November 16). Checks on executable code in Catalina and Big Sur: a first draft. Retrieved September 21, 2022.](https://eclecticlight.co/2020/11/16/checks-on-executable-code-in-catalina-and-big-sur-a-first-draft/)
[^fn2]: [Ladikov, A. (2015, January 29). Why You Shouldn’t Completely Trust Files Signed with Digital Certificates. Retrieved March 31, 2016.](https://securelist.com/why-you-shouldnt-completely-trust-files-signed-with-digital-certificates/68593/)
[^fn3]: [Shinotsuka, H. (2013, February 22). How Attackers Steal Private Keys from Digital Certificates. Retrieved March 31, 2016.](http://www.symantec.com/connect/blogs/how-attackers-steal-private-keys-digital-certificates)
[^fn4]: [Wikipedia. (2015, November 10). Code Signing. Retrieved March 31, 2016.](https://en.wikipedia.org/wiki/Code_signing)