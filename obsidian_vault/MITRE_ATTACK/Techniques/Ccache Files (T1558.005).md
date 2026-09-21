---
mitre_data:
  id: T1558.005
  linker_tags:
  - mitre/attack/linker/credential_access/ccache_files
  name: Ccache Files
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Ccache Files (`T1558.005`)


Adversaries may attempt to steal Kerberos tickets stored in credential cache files (or ccache). These files are used for short term storage of a user's active session credentials. The ccache file is created upon user authentication and allows for access to multiple services without the user having to re-enter credentials. 

The <code>/etc/krb5.conf</code> configuration file and the <code>KRB5CCNAME</code> environment variable are used to set the storage location for ccache entries. On Linux, credentials are typically stored in the `/tmp` directory with a naming format of `krb5cc_%UID%` or `krb5.ccache`. On macOS, ccache entries are stored by default in memory with an `API:{uuid}` naming scheme. Typically, users interact with ticket storage using <code>kinit</code>, which obtains a Ticket-Granting-Ticket (TGT) for the principal; <code>klist</code>, which lists obtained tickets currently held in the credentials cache; and other built-in binaries.[^fn2][^fn1]

Adversaries can collect tickets from ccache files stored on disk and authenticate as the current user without their password to perform [Pass the Ticket](https://attack.mitre.org/techniques/T1550/003) attacks. Adversaries can also use these tickets to impersonate legitimate users with elevated privileges to perform [Privilege Escalation](https://attack.mitre.org/tactics/TA0004). Tools like Kekeo can also be used by adversaries to convert ccache files to Windows format for further [Lateral Movement](https://attack.mitre.org/tactics/TA0008). On macOS, adversaries may use open-source tools or the Kerberos framework to interact with ccache files and extract TGTs or Service Tickets via lower-level APIs.[^fn4][^fn6][^fn5][^fn3] 


# Platform(s)

- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Steal or Forge Kerberos Tickets (T1558)|Steal or Forge Kerberos Tickets]]

# Tool(s)

- [[../Tools/Impacket|Impacket]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1558.005](https://attack.mitre.org/techniques/T1558/005)

[^fn1]: [ ARC Labs, Dwyer, John. Gonzalez, Eric. Hudak, Tyler. (2024, October 1). Shining a Light in the Dark – How Binary Defense Uncovered an APT Lurking in Shadows of IT. Retrieved October 7, 2024.](https://www.binarydefense.com/resources/blog/shining-a-light-in-the-dark-how-binary-defense-uncovered-an-apt-lurking-in-shadows-of-it/)
[^fn2]: [Adepts of 0xCC. (2021, January 28). The Kerberos Credential Thievery Compendium (GNU/Linux). Retrieved September 17, 2024.](https://adepts.of0x.cc/kerberos-thievery-linux/)
[^fn3]: [Benjamin Delpy. (n.d.). Kekeo. Retrieved October 4, 2021.](https://github.com/gentilkiwi/kekeo)
[^fn4]: [Cody Thomas. (2019, November 14). When Kirbi walks the Bifrost. Retrieved October 6, 2021.](https://posts.specterops.io/when-kirbi-walks-the-bifrost-4c727807744f)
[^fn5]: [Tim Wadhwa-Brown. (2018, November). Where 2 worlds collide Bringing Mimikatz et al to UNIX. Retrieved October 13, 2021.](https://labs.portcullis.co.uk/download/eu-18-Wadhwa-Brown-Where-2-worlds-collide-Bringing-Mimikatz-et-al-to-UNIX.pdf)
[^fn6]: [Trevor Haskell. (2020, April 1). Kerberos Tickets on Linux Red Teams. Retrieved October 4, 2021.](https://www.fireeye.com/blog/threat-research/2020/04/kerberos-tickets-on-linux-red-teams.html)