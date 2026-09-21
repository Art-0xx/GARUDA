---
tags:
  - mitre/attack/tool
---

# Out1 (`S0594`)

[Out1](https://attack.mitre.org/software/S0594) is a remote access tool written in python and used by [MuddyWater](https://attack.mitre.org/groups/G0069) since at least 2021.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## Web Protocols

[Out1](https://attack.mitre.org/software/S0594) can use HTTP and HTTPS in communications with remote hosts.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Web Protocols (T1071.001)|Web Protocols]]

## Obfuscated Files or Information

[Out1](https://attack.mitre.org/software/S0594) has the ability to encode data.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

## Windows Command Shell

[Out1](https://attack.mitre.org/software/S0594) can use native command line for execution.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## Data from Local System

[Out1](https://attack.mitre.org/software/S0594) can copy files and Registry data from compromised hosts.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Data from Local System (T1005)|Data from Local System]]

## Local Email Collection

[Out1](https://attack.mitre.org/software/S0594) can parse e-mails on a target machine.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Local Email Collection (T1114.001)|Local Email Collection]]


# External References(s)

- [S0594](https://attack.mitre.org/software/S0594)

[^fn1]: [Peretz, A. and Theck, E. (2021, March 5). Earth Vetala – MuddyWater Continues to Target Organizations in the Middle East. Retrieved March 18, 2021.](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)