---
mitre_data:
  id: T1546.007
  linker_tags:
  - mitre/attack/linker/privilege_escalation/netsh_helper_dll
  - mitre/attack/linker/persistence/netsh_helper_dll
  name: Netsh Helper DLL
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Netsh Helper DLL (`T1546.007`)

Adversaries may establish persistence by executing malicious content triggered by Netsh Helper DLLs. Netsh.exe (also referred to as Netshell) is a command-line scripting utility used to interact with the network configuration of a system. It contains functionality to add helper DLLs for extending functionality of the utility.[^fn2] The paths to registered netsh.exe helper DLLs are entered into the Windows Registry at <code>HKLM\SOFTWARE\Microsoft\Netsh</code>.

Adversaries can use netsh.exe helper DLLs to trigger execution of arbitrary code in a persistent manner. This execution would take place anytime netsh.exe is executed, which could happen automatically, with another persistence technique, or if other software (ex: VPN) is present on the system that executes netsh.exe as part of its normal functionality.[^fn3][^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tool(s)

- [[../Tools/netsh|netsh]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.007](https://attack.mitre.org/techniques/T1546/007)

[^fn1]: [Demaske, M. (2016, September 23). USING NETSHELL TO EXECUTE EVIL DLLS AND PERSIST ON A HOST. Retrieved April 8, 2017.](https://htmlpreview.github.io/?https://github.com/MatthewDemaske/blogbackup/blob/master/netshell.html)
[^fn2]: [Microsoft. (n.d.). Using Netsh. Retrieved February 13, 2017.](https://technet.microsoft.com/library/bb490939.aspx)
[^fn3]: [Smeets, M. (2016, September 26). NetshHelperBeacon. Retrieved February 13, 2017.](https://github.com/outflankbv/NetshHelperBeacon)