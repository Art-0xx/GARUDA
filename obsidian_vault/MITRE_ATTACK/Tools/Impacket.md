---
tags:
  - mitre/attack/tool
---

# Impacket (`S0357`)

[Impacket](https://attack.mitre.org/software/S0357) is an open source collection of modules written in Python for programmatically constructing and manipulating network protocols. [Impacket](https://attack.mitre.org/software/S0357) contains several tools for remote service execution, Kerberos manipulation, Windows credential dumping, packet sniffing, and relay attacks.[^fn1]



# Platform(s)

- Linux
- macOS
- Windows

# Techniques Used

## Name Resolution Poisoning and SMB Relay

[Impacket](https://attack.mitre.org/software/S0357) modules like ntlmrelayx and smbrelayx can be used in conjunction with [Network Sniffing](https://attack.mitre.org/techniques/T1040) and [Name Resolution Poisoning and SMB Relay](https://attack.mitre.org/techniques/T1557/001) to gather NetNTLM credentials for [Brute Force](https://attack.mitre.org/techniques/T1110) or relay attacks that can gain code execution.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/Name Resolution Poisoning and SMB Relay (T1557.001)|Name Resolution Poisoning and SMB Relay]]

## Network Sniffing

[Impacket](https://attack.mitre.org/software/S0357) can be used to sniff network traffic via an interface or raw socket.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/Network Sniffing (T1040)|Network Sniffing]]

## Kerberoasting

[Impacket](https://attack.mitre.org/software/S0357) modules like GetUserSPNs can be used to get Service Principal Names (SPNs) for user accounts. The output is formatted to be compatible with cracking tools like John the Ripper and Hashcat.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

## NTDS

SecretsDump and [Mimikatz](https://attack.mitre.org/software/S0002) modules within [Impacket](https://attack.mitre.org/software/S0357) can perform credential dumping to obtain account and password information from NTDS.dit.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/NTDS (T1003.003)|NTDS]]

## Service Execution

[Impacket](https://attack.mitre.org/software/S0357) contains various modules emulating other service execution tools such as [PsExec](https://attack.mitre.org/software/S0029).[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/Service Execution (T1569.002)|Service Execution]]

## LSASS Memory

SecretsDump and [Mimikatz](https://attack.mitre.org/software/S0002) modules within [Impacket](https://attack.mitre.org/software/S0357) can perform credential dumping to obtain account and password information.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Windows Management Instrumentation

[Impacket](https://attack.mitre.org/software/S0357)'s `wmiexec` module can be used to execute commands through WMI.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)[\[Sygnia VelvetAnt 2024A\]](https://www.sygnia.co/blog/china-nexus-threat-group-velvet-ant/)

- *Technique:* [[../Techniques/Windows Management Instrumentation (T1047)|Windows Management Instrumentation]]

## Security Account Manager

SecretsDump and [Mimikatz](https://attack.mitre.org/software/S0002) modules within [Impacket](https://attack.mitre.org/software/S0357) can perform credential dumping to obtain account and password information.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/Security Account Manager (T1003.002)|Security Account Manager]]

## Lateral Tool Transfer

[Impacket](https://attack.mitre.org/software/S0357) has used its `wmiexec` command, leveraging Windows Management Instrumentation, to remotely stage and execute payloads in victim networks.[\[Sygnia VelvetAnt 2024A\]](https://www.sygnia.co/blog/china-nexus-threat-group-velvet-ant/)

- *Technique:* [[../Techniques/Lateral Tool Transfer (T1570)|Lateral Tool Transfer]]

## LSA Secrets

SecretsDump and [Mimikatz](https://attack.mitre.org/software/S0002) modules within [Impacket](https://attack.mitre.org/software/S0357) can perform credential dumping to obtain account and password information.[\[Impacket Tools\]](https://www.secureauth.com/labs/open-source-tools/impacket)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]

## Ccache Files

[Impacket](https://attack.mitre.org/software/S0357) tools – such as <code>getST.py</code> or <code>ticketer.py</code> – can be used to steal or forge Kerberos tickets using ccache files given a password, hash, aesKey, or TGT.[\[Kerberos GNU/Linux\]](https://adepts.of0x.cc/kerberos-thievery-linux/)[\[on security kerberos linux\]](https://www.onsecurity.io/blog/abusing-kerberos-from-linux/)

- *Technique:* [[../Techniques/Ccache Files (T1558.005)|Ccache Files]]


# External References(s)

- [S0357](https://attack.mitre.org/software/S0357)

[^fn1]: [SecureAuth. (n.d.).  Retrieved January 15, 2019.](https://www.secureauth.com/labs/open-source-tools/impacket)