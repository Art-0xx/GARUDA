---
mitre_data:
  id: T1550.002
  linker_tags:
  - mitre/attack/linker/lateral_movement/pass_the_hash
  name: Pass the Hash
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Pass the Hash (`T1550.002`)

Adversaries may “pass the hash” using stolen password hashes to move laterally within an environment, bypassing normal system access controls. Pass the hash (PtH) is a method of authenticating as a user without having access to the user's cleartext password. This method bypasses standard authentication steps that require a cleartext password, moving directly into the portion of the authentication that uses the password hash.

When performing PtH, valid password hashes for the account being used are captured using a [Credential Access](https://attack.mitre.org/tactics/TA0006) technique. Captured hashes are used with PtH to authenticate as that user. Once authenticated, PtH may be used to perform actions on local or remote systems.

Adversaries may also use stolen password hashes to "overpass the hash." Similar to PtH, this involves using a password hash to authenticate as a user but also uses the password hash to create a valid Kerberos ticket. This ticket can then be used to perform [Pass the Ticket](https://attack.mitre.org/techniques/T1550/003) attacks.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Use Alternate Authentication Material (T1550)|Use Alternate Authentication Material]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Pass-The-Hash Toolkit|Pass-The-Hash Toolkit]]
- [[../Tools/Mimikatz|Mimikatz]]
- [[../Tools/CrackMapExec|CrackMapExec]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1550.002](https://attack.mitre.org/techniques/T1550/002)

[^fn1]: [Warren, J. (2019, February 26). How to Detect Overpass-the-Hash Attacks. Retrieved February 4, 2021.](https://stealthbits.com/blog/how-to-detect-overpass-the-hash-attacks/)