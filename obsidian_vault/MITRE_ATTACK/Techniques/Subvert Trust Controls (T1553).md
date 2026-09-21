---
mitre_data:
  id: T1553
  linker_tags:
  - mitre/attack/linker/defense_impairment/subvert_trust_controls
  name: Subvert Trust Controls
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Subvert Trust Controls (`T1553`)

Adversaries may undermine security controls that will either warn users of untrusted activity or prevent execution of untrusted programs. Operating systems and security products may contain mechanisms to identify programs or websites as possessing some level of trust. Examples of such features would include a program being allowed to run because it is signed by a valid code signing certificate, a program prompting the user with a warning because it has an attribute set from being downloaded from the Internet, or getting an indication that you are about to connect to an untrusted site.

Adversaries may attempt to subvert these trust mechanisms. The method adversaries use will depend on the specific mechanism they seek to subvert. Adversaries may conduct [File and Directory Permissions Modification](https://attack.mitre.org/techniques/T1222) or [Modify Registry](https://attack.mitre.org/techniques/T1112) in support of subverting these controls.[^fn1] Adversaries may also create or steal code signing certificates to acquire trust on target systems.[^fn2][^fn3] 


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Gatekeeper Bypass (T1553.001)|Gatekeeper Bypass]]
- [[../Techniques/Code Signing (T1553.002)|Code Signing]]
- [[../Techniques/SIP and Trust Provider Hijacking (T1553.003)|SIP and Trust Provider Hijacking]]
- [[../Techniques/Code Signing Policy Modification (T1553.006)|Code Signing Policy Modification]]
- [[../Techniques/Mark-of-the-Web Bypass (T1553.005)|Mark-of-the-Web Bypass]]
- [[../Techniques/Install Root Certificate (T1553.004)|Install Root Certificate]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1553](https://attack.mitre.org/techniques/T1553)

[^fn1]: [Graeber, M. (2017, September). Subverting Trust in Windows. Retrieved January 31, 2018.](https://specterops.io/assets/resources/SpecterOps_Subverting_Trust_in_Windows.pdf)
[^fn2]: [Ladikov, A. (2015, January 29). Why You Shouldn’t Completely Trust Files Signed with Digital Certificates. Retrieved March 31, 2016.](https://securelist.com/why-you-shouldnt-completely-trust-files-signed-with-digital-certificates/68593/)
[^fn3]: [Shinotsuka, H. (2013, February 22). How Attackers Steal Private Keys from Digital Certificates. Retrieved March 31, 2016.](http://www.symantec.com/connect/blogs/how-attackers-steal-private-keys-digital-certificates)