---
mitre_data:
  id: T1552.004
  linker_tags:
  - mitre/attack/linker/credential_access/private_keys
  name: Private Keys
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Private Keys (`T1552.004`)

Adversaries may search for private key certificate files on compromised systems for insecurely stored credentials. Private cryptographic keys and certificates are used for authentication, encryption/decryption, and digital signatures.[^fn6] Common key and certificate file extensions include: .key, .pgp, .gpg, .ppk., .p12, .pem, .pfx, .cer, .p7b, .asc. 

Adversaries may also look in common key directories, such as <code>~/.ssh</code> for SSH keys on * nix-based systems or <code>C:&#92;Users&#92;(username)&#92;.ssh&#92;</code> on Windows. Adversary tools may also search compromised systems for file extensions relating to cryptographic keys and certificates.[^fn4][^fn1]

When a device is registered to Entra ID, a device key and a transport key are generated and used to verify the device’s identity.[^fn5] An adversary with access to the device may be able to export the keys in order to impersonate the device.[^fn3]

On network devices, private keys may be exported via [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as `crypto pki export`.[^fn2] 

Some private keys require a password or passphrase for operation, so an adversary may also use [Input Capture](https://attack.mitre.org/techniques/T1056) for keylogging or attempt to [Brute Force](https://attack.mitre.org/techniques/T1110) the passphrase off-line. These private keys can be used to authenticate to [Remote Services](https://attack.mitre.org/techniques/T1021) like SSH or for use in decrypting other collected files such as email.


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Mimikatz|Mimikatz]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.004](https://attack.mitre.org/techniques/T1552/004)

[^fn1]: [Bar, T., Conant, S., Efraim, L. (2016, June 28). Prince of Persia – Game Over. Retrieved July 5, 2017.](https://researchcenter.paloaltonetworks.com/2016/06/unit42-prince-of-persia-game-over/)
[^fn2]: [Cisco. (2023, February 17). Chapter: Deploying RSA Keys Within a PKI . Retrieved March 27, 2023.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_conn_pki/configuration/xe-17/sec-pki-xe-17-book/sec-deploy-rsa-pki.html#GUID-1CB802D8-9DE3-447F-BECE-CF22F5E11436)
[^fn3]: [Dr. Nestori Syynimaa. (2022, February 15). Stealing and faking Azure AD device identities. Retrieved February 21, 2023.](https://aadinternals.com/post/deviceidentity/)
[^fn4]: [Kaspersky Labs. (2014, February 11). Unveiling “Careto” - The Masked APT. Retrieved July 5, 2017.](https://web.archive.org/web/20141031134104/http://kasperskycontenthub.com/wp-content/uploads/sites/43/vlpdfs/unveilingthemask_v1.0.pdf)
[^fn5]: [Microsoft. (2022, September 9). What is a Primary Refresh Token?. Retrieved February 21, 2023.](https://learn.microsoft.com/en-us/azure/active-directory/devices/concept-primary-refresh-token)
[^fn6]: [Wikipedia. (2017, June 29). Public-key cryptography. Retrieved July 5, 2017.](https://en.wikipedia.org/wiki/Public-key_cryptography)