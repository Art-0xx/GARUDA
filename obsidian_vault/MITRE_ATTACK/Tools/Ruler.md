---
tags:
  - mitre/attack/tool
---

# Ruler (`S0358`)

[Ruler](https://attack.mitre.org/software/S0358) is a tool to abuse Microsoft Exchange services. It is publicly available on GitHub and the tool is executed via the command line. The creators of [Ruler](https://attack.mitre.org/software/S0358) have also released a defensive tool, NotRuler, to detect its usage.[^fn1][^fn2]



# Platform(s)

- Windows
- Office Suite

# Techniques Used

## Outlook Rules

[Ruler](https://attack.mitre.org/software/S0358) can be used to automate the abuse of Outlook Rules to establish persistence.[\[SensePost Ruler GitHub\]](https://github.com/sensepost/ruler) 

- *Technique:* [[../Techniques/Outlook Rules (T1137.005)|Outlook Rules]]

## Outlook Forms

[Ruler](https://attack.mitre.org/software/S0358) can be used to automate the abuse of Outlook Forms to establish persistence.[\[SensePost Ruler GitHub\]](https://github.com/sensepost/ruler)

- *Technique:* [[../Techniques/Outlook Forms (T1137.003)|Outlook Forms]]

## Outlook Home Page

[Ruler](https://attack.mitre.org/software/S0358) can be used to automate the abuse of Outlook Home Pages to establish persistence.[\[SensePost Ruler GitHub\]](https://github.com/sensepost/ruler) 

- *Technique:* [[../Techniques/Outlook Home Page (T1137.004)|Outlook Home Page]]

## Email Account

[Ruler](https://attack.mitre.org/software/S0358) can be used to enumerate Exchange users and dump the GAL.[\[SensePost Ruler GitHub\]](https://github.com/sensepost/ruler)

- *Technique:* [[../Techniques/Email Account (T1087.003)|Email Account]]


# External References(s)

- [S0358](https://attack.mitre.org/software/S0358)

[^fn1]: [SensePost. (2016, August 18). Ruler: A tool to abuse Exchange services. Retrieved February 4, 2019.](https://github.com/sensepost/ruler)
[^fn2]: [SensePost. (2017, September 21). NotRuler - The opposite of Ruler, provides blue teams with the ability to detect Ruler usage against Exchange. Retrieved February 4, 2019.](https://github.com/sensepost/notruler)