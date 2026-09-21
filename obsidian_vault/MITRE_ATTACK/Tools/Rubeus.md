---
tags:
  - mitre/attack/tool
---

# Rubeus (`S1071`)

[Rubeus](https://attack.mitre.org/software/S1071) is a C# toolset designed for raw Kerberos interaction that has been used since at least 2020, including in ransomware operations.[^fn1][^fn2][^fn4][^fn3]



# Platform(s)

- Windows

# Techniques Used

## Kerberoasting

[Rubeus](https://attack.mitre.org/software/S1071) can use the `KerberosRequestorSecurityToken.GetRequest` method to request kerberoastable service tickets.[\[GitHub Rubeus March 2023\]](https://github.com/GhostPack/Rubeus)

- *Technique:* [[../Techniques/Kerberoasting (T1558.003)|Kerberoasting]]

## Domain Trust Discovery

[Rubeus](https://attack.mitre.org/software/S1071) can gather information about domain trusts.[\[DFIR Ryuk's Return October 2020\]](https://thedfirreport.com/2020/10/08/ryuks-return/)[\[DFIR Ryuk 2 Hour Speed Run November 2020\]](https://thedfirreport.com/2020/11/05/ryuk-speed-run-2-hours-to-ransom/)

- *Technique:* [[../Techniques/Domain Trust Discovery (T1482)|Domain Trust Discovery]]

## Silver Ticket

[Rubeus](https://attack.mitre.org/software/S1071) can create silver tickets.[\[GitHub Rubeus March 2023\]](https://github.com/GhostPack/Rubeus)

- *Technique:* [[../Techniques/Silver Ticket (T1558.002)|Silver Ticket]]

## AS-REP Roasting

[Rubeus](https://attack.mitre.org/software/S1071) can reveal the credentials of accounts that have Kerberos pre-authentication disabled through AS-REP roasting.[\[GitHub Rubeus March 2023\]](https://github.com/GhostPack/Rubeus)[\[DFIR Ryuk's Return October 2020\]](https://thedfirreport.com/2020/10/08/ryuks-return/)[\[DFIR Ryuk 2 Hour Speed Run November 2020\]](https://thedfirreport.com/2020/11/05/ryuk-speed-run-2-hours-to-ransom/) 

- *Technique:* [[../Techniques/AS-REP Roasting (T1558.004)|AS-REP Roasting]]

## Golden Ticket

[Rubeus](https://attack.mitre.org/software/S1071) can forge a ticket-granting ticket.[\[GitHub Rubeus March 2023\]](https://github.com/GhostPack/Rubeus)

- *Technique:* [[../Techniques/Golden Ticket (T1558.001)|Golden Ticket]]


# External References(s)

- [S1071](https://attack.mitre.org/software/S1071)

[^fn1]: [Harmj0y. (n.d.). Rubeus. Retrieved March 29, 2023.](https://github.com/GhostPack/Rubeus)
[^fn2]: [Kimberly Goody, Jeremy Kennelly, Joshua Shilko, Steve Elovitz, Douglas Bienstock. (2020, October 28). Unhappy Hour Special: KEGTAP and SINGLEMALT With a Ransomware Chaser. Retrieved October 28, 2020.](https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html)
[^fn3]: [The DFIR Report. (2020, November 5). Ryuk Speed Run, 2 Hours to Ransom. Retrieved November 6, 2020.](https://thedfirreport.com/2020/11/05/ryuk-speed-run-2-hours-to-ransom/)
[^fn4]: [The DFIR Report. (2020, October 8). Ryuk’s Return. Retrieved October 9, 2020.](https://thedfirreport.com/2020/10/08/ryuks-return/)