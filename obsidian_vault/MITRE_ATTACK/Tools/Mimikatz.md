---
tags:
  - mitre/attack/tool
---

# Mimikatz (`S0002`)

[Mimikatz](https://attack.mitre.org/software/S0002) is a credential dumper capable of obtaining plaintext Windows account logins and passwords, along with many other features that make it useful for testing the security of networks. [^fn1] [^fn2]



# Platform(s)

- Windows

# Techniques Used

## Credentials from Password Stores

[Mimikatz](https://attack.mitre.org/software/S0002) performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. It contains functionality to acquire information about credentials in many ways, including from the credential vault and DPAPI.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[GitHub Mimikatz lsadump Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)[\[Directory Services Internals DPAPI Backup Keys Oct 2015\]](https://www.dsinternals.com/en/retrieving-dpapi-backup-keys-from-active-directory/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)[\[Cobalt Strike Manual 4.3 November 2020\]](https://web.archive.org/web/20210708035426/https://www.cobaltstrike.com/downloads/csmanual43.pdf)	

- *Technique:* [[../Techniques/Credentials from Password Stores (T1555)|Credentials from Password Stores]]

## Rogue Domain Controller

[Mimikatz](https://attack.mitre.org/software/S0002)’s <code>LSADUMP::DCShadow</code> module can be used to make AD updates by temporarily setting a computer to be a DC.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)

- *Technique:* [[../Techniques/Rogue Domain Controller (T1207)|Rogue Domain Controller]]

## Private Keys

[Mimikatz](https://attack.mitre.org/software/S0002)'s <code>CRYPTO::Extract</code> module can extract keys by interacting with Windows cryptographic application programming interface (API) functions.[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)

- *Technique:* [[../Techniques/Private Keys (T1552.004)|Private Keys]]

## SID-History Injection

[Mimikatz](https://attack.mitre.org/software/S0002)'s <code>MISC::AddSid</code> module can append any SID or user/group account to a user's SID-History. [Mimikatz](https://attack.mitre.org/software/S0002) also utilizes [SID-History Injection](https://attack.mitre.org/techniques/T1134/005) to expand the scope of other components such as generated Kerberos Golden Tickets and DCSync beyond a single domain.[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)[\[AdSecurity Kerberos GT Aug 2015\]](https://adsecurity.org/?p=1640)

- *Technique:* [[../Techniques/SID-History Injection (T1134.005)|SID-History Injection]]

## Security Support Provider

The [Mimikatz](https://attack.mitre.org/software/S0002) credential dumper contains an implementation of an SSP.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)

- *Technique:* [[../Techniques/Security Support Provider (T1547.005)|Security Support Provider]]

## Pass the Hash

[Mimikatz](https://attack.mitre.org/software/S0002)'s <code>SEKURLSA::Pth</code> module can impersonate a user, with only a password hash, to execute arbitrary commands.[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)[\[Cobalt Strike Manual 4.3 November 2020\]](https://web.archive.org/web/20210708035426/https://www.cobaltstrike.com/downloads/csmanual43.pdf)

- *Technique:* [[../Techniques/Pass the Hash (T1550.002)|Pass the Hash]]

## Account Manipulation

The [Mimikatz](https://attack.mitre.org/software/S0002) credential dumper has been extended to include Skeleton Key domain controller authentication bypass functionality. The <code>LSADUMP::ChangeNTLM</code> and <code>LSADUMP::SetNTLM</code> modules can also manipulate the password hash of an account without knowing the clear text value.[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)[\[Metcalf 2015\]](http://adsecurity.org/?p=1275)

- *Technique:* [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

## Credentials from Web Browsers

[Mimikatz](https://attack.mitre.org/software/S0002) performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. It contains functionality to acquire information about credentials in many ways, including from DPAPI.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[GitHub Mimikatz lsadump Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)[\[Directory Services Internals DPAPI Backup Keys Oct 2015\]](https://www.dsinternals.com/en/retrieving-dpapi-backup-keys-from-active-directory/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)	

- *Technique:* [[../Techniques/Credentials from Web Browsers (T1555.003)|Credentials from Web Browsers]]

## Golden Ticket

[Mimikatz](https://attack.mitre.org/software/S0002)'s kerberos module can create golden tickets.[\[GitHub Mimikatz kerberos Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-kerberos)[\[Cobalt Strike Manual 4.3 November 2020\]](https://web.archive.org/web/20210708035426/https://www.cobaltstrike.com/downloads/csmanual43.pdf)

- *Technique:* [[../Techniques/Golden Ticket (T1558.001)|Golden Ticket]]

## Security Account Manager

[Mimikatz](https://attack.mitre.org/software/S0002) performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. It contains functionality to acquire information about credentials in many ways, including from the SAM table.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[GitHub Mimikatz lsadump Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)[\[Directory Services Internals DPAPI Backup Keys Oct 2015\]](https://www.dsinternals.com/en/retrieving-dpapi-backup-keys-from-active-directory/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/Security Account Manager (T1003.002)|Security Account Manager]]

## LSASS Memory

[Mimikatz](https://attack.mitre.org/software/S0002) performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. It contains functionality to acquire information about credentials in many ways, including from the LSASS Memory.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[GitHub Mimikatz lsadump Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)[\[Directory Services Internals DPAPI Backup Keys Oct 2015\]](https://www.dsinternals.com/en/retrieving-dpapi-backup-keys-from-active-directory/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/LSASS Memory (T1003.001)|LSASS Memory]]

## Silver Ticket

[Mimikatz](https://attack.mitre.org/software/S0002)'s kerberos module can create silver tickets.[\[GitHub Mimikatz kerberos Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-kerberos)

- *Technique:* [[../Techniques/Silver Ticket (T1558.002)|Silver Ticket]]

## Windows Credential Manager

[Mimikatz](https://attack.mitre.org/software/S0002) contains functionality to acquire credentials from the Windows Credential Manager.[\[Delpy Mimikatz Crendential Manager\]](https://github.com/gentilkiwi/mimikatz/wiki/howto-~-credential-manager-saved-credentials)

- *Technique:* [[../Techniques/Windows Credential Manager (T1555.004)|Windows Credential Manager]]

## LSA Secrets

[Mimikatz](https://attack.mitre.org/software/S0002) performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. It contains functionality to acquire information about credentials in many ways, including from the LSA.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[GitHub Mimikatz lsadump Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)[\[Directory Services Internals DPAPI Backup Keys Oct 2015\]](https://www.dsinternals.com/en/retrieving-dpapi-backup-keys-from-active-directory/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/LSA Secrets (T1003.004)|LSA Secrets]]

## Pass the Ticket

[Mimikatz](https://attack.mitre.org/software/S0002)’s <code>LSADUMP::DCSync</code> and <code>KERBEROS::PTT</code> modules implement the three steps required to extract the krbtgt account hash and create/use Kerberos tickets.[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)[\[AdSecurity Kerberos GT Aug 2015\]](https://adsecurity.org/?p=1640)[\[Harmj0y DCSync Sept 2015\]](https://web.archive.org/web/20150923020927/http://www.harmj0y.net/blog/redteaming/mimikatz-and-dcsync-and-extrasids-oh-my/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)

- *Technique:* [[../Techniques/Pass the Ticket (T1550.003)|Pass the Ticket]]

## Steal or Forge Authentication Certificates

[Mimikatz](https://attack.mitre.org/software/S0002)'s `CRYPTO` module can create and export various types of authentication certificates.[\[Adsecurity Mimikatz Guide\]](https://adsecurity.org/?page_id=1821)

- *Technique:* [[../Techniques/Steal or Forge Authentication Certificates (T1649)|Steal or Forge Authentication Certificates]]

## DCSync

[Mimikatz](https://attack.mitre.org/software/S0002) performs credential dumping to obtain account and password information useful in gaining access to additional systems and enterprise network resources. It contains functionality to acquire information about credentials in many ways, including from DCSync/NetSync.[\[Deply Mimikatz\]](https://github.com/gentilkiwi/mimikatz)[\[GitHub Mimikatz lsadump Module\]](https://github.com/gentilkiwi/mimikatz/wiki/module-~-lsadump)[\[Directory Services Internals DPAPI Backup Keys Oct 2015\]](https://www.dsinternals.com/en/retrieving-dpapi-backup-keys-from-active-directory/)[\[NCSC Joint Report Public Tools\]](https://www.ncsc.gov.uk/report/joint-report-on-publicly-available-hacking-tools)[\[Cobalt Strike Manual 4.3 November 2020\]](https://web.archive.org/web/20210708035426/https://www.cobaltstrike.com/downloads/csmanual43.pdf)

- *Technique:* [[../Techniques/DCSync (T1003.006)|DCSync]]


# External References(s)

- [S0002](https://attack.mitre.org/software/S0002)

[^fn1]: [Deply, B. (n.d.). Mimikatz. Retrieved September 29, 2015.](https://github.com/gentilkiwi/mimikatz)
[^fn2]: [Metcalf, S. (2015, November 13). Unofficial Guide to Mimikatz & Command Reference. Retrieved December 23, 2015.](https://adsecurity.org/?page_id=1821)