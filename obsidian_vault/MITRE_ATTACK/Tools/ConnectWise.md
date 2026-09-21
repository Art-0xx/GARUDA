---
tags:
  - mitre/attack/tool
---

# ConnectWise (`S0591`)

[ConnectWise](https://attack.mitre.org/software/S0591) is a legitimate remote administration tool that has been used since at least 2016 by threat actors including [MuddyWater](https://attack.mitre.org/groups/G0069) and [GOLD SOUTHFIELD](https://attack.mitre.org/groups/G0115) to connect to and conduct lateral movement in target environments.[^fn2][^fn3]



# Platform(s)

- Windows

# Techniques Used

## Video Capture

[ConnectWise](https://attack.mitre.org/software/S0591) can record video on remote hosts.[\[Anomali Static Kitten February 2021\]](https://www.anomali.com/blog/probable-iranian-cyber-actors-static-kitten-conducting-cyberespionage-campaign-targeting-uae-and-kuwait-government-agencies)

- *Technique:* [[../Techniques/Video Capture (T1125)|Video Capture]]

## PowerShell

[ConnectWise](https://attack.mitre.org/software/S0591) can be used to execute PowerShell commands on target machines.[\[Anomali Static Kitten February 2021\]](https://www.anomali.com/blog/probable-iranian-cyber-actors-static-kitten-conducting-cyberespionage-campaign-targeting-uae-and-kuwait-government-agencies)

- *Technique:* [[../Techniques/PowerShell (T1059.001)|PowerShell]]

## Screen Capture

[ConnectWise](https://attack.mitre.org/software/S0591) can take screenshots on remote hosts.[\[Anomali Static Kitten February 2021\]](https://www.anomali.com/blog/probable-iranian-cyber-actors-static-kitten-conducting-cyberespionage-campaign-targeting-uae-and-kuwait-government-agencies)

- *Technique:* [[../Techniques/Screen Capture (T1113)|Screen Capture]]


# External References(s)

- [S0591](https://attack.mitre.org/software/S0591)

[^fn2]: [Mele, G. et al. (2021, February 10). Probable Iranian Cyber Actors, Static Kitten, Conducting Cyberespionage Campaign Targeting UAE and Kuwait Government Agencies. Retrieved March 17, 2021.](https://www.anomali.com/blog/probable-iranian-cyber-actors-static-kitten-conducting-cyberespionage-campaign-targeting-uae-and-kuwait-government-agencies)
[^fn3]: [Peretz, A. and Theck, E. (2021, March 5). Earth Vetala – MuddyWater Continues to Target Organizations in the Middle East. Retrieved March 18, 2021.](https://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html)