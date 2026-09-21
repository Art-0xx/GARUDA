---
tags:
  - mitre/attack/tool
---

# RemoteUtilities (`S0592`)

[RemoteUtilities](https://attack.mitre.org/software/S0592) is a legitimate remote administration tool that has been used by [MuddyWater](https://attack.mitre.org/groups/G0069) since at least 2021 for execution on target machines.[^fn1]



# Platform(s)

- Windows

# Techniques Used

## File and Directory Discovery

[RemoteUtilities](https://attack.mitre.org/software/S0592) can enumerate files and directories on a target machine.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Ingress Tool Transfer

[RemoteUtilities](https://attack.mitre.org/software/S0592) can upload and download files to and from a target machine.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Msiexec

[RemoteUtilities](https://attack.mitre.org/software/S0592) can use Msiexec to install a service.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Msiexec (T1218.007)|Msiexec]]

## Screen Capture

[RemoteUtilities](https://attack.mitre.org/software/S0592) can take screenshots on a compromised host.[\[Trend Micro Muddy Water March 2021\]](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]


# External References(s)

- [S0592](https://attack.mitre.org/software/S0592)

[^fn1]: [Peretz, A. and Theck, E. (2021, March 5). Earth Vetala – MuddyWater Continues to Target Organizations in the Middle East. Retrieved March 18, 2021.](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)