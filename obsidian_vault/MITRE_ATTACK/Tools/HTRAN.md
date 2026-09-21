---
tags:
  - mitre/attack/tool
---

# HTRAN (`S0040`)

[HTRAN](https://attack.mitre.org/software/S0040) is a tool that proxies connections through intermediate hops and aids users in disguising their true geographical location. It can be used by adversaries to hide their location when interacting with the victim networks. [^fn2][^fn3]



# Platform(s)

- Linux
- Windows

# Techniques Used

## Proxy

[HTRAN](https://attack.mitre.org/software/S0040) can proxy TCP socket connections to obfuscate command and control infrastructure.[\[Operation Quantum Entanglement\]](https://web.archive.org/web/20210920193513/https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/Proxy (T1090)|Proxy]]

## Rootkit

[HTRAN](https://attack.mitre.org/software/S0040) can install a rootkit to hide network connections from the host OS.[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/Rootkit (T1014)|Rootkit]]

## Process Injection

[HTRAN](https://attack.mitre.org/software/S0040) can inject into into running processes.[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/Process Injection (T1055)|Process Injection]]


# External References(s)

- [S0040](https://attack.mitre.org/software/S0040)

[^fn2]: [Haq, T., Moran, N., Vashisht, S., Scott, M. (2014, September). OPERATION QUANTUM ENTANGLEMENT. Retrieved November 17, 2024.](https://web.archive.org/web/20210920193513/https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf)
[^fn3]: [The Australian Cyber Security Centre (ACSC), the Canadian Centre for Cyber Security (CCCS), the New Zealand National Cyber Security Centre (NZ NCSC), CERT New Zealand, the UK National Cyber Security Centre (UK NCSC) and the US National Cybersecurity and Communications Integration Center (NCCIC). (2018, October 11). Joint report on publicly available hacking tools. Retrieved March 11, 2019.](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)