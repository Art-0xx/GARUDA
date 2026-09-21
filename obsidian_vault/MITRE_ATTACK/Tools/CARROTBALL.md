---
tags:
  - mitre/attack/tool
---

# CARROTBALL (`S0465`)

[CARROTBALL](https://attack.mitre.org/software/S0465) is an FTP downloader utility that has been in use since at least 2019. [CARROTBALL](https://attack.mitre.org/software/S0465) has been used as a downloader to install [SYSCON](https://attack.mitre.org/software/S0464).[^fn1]



# Platform(s)

- Windows

# Techniques Used

## File Transfer Protocols

[CARROTBALL](https://attack.mitre.org/software/S0465) has the ability to use FTP in C2 communications.[\[Unit 42 CARROTBAT January 2020\]](https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/)

- *Technique:* [[../Techniques/File Transfer Protocols (T1071.002)|File Transfer Protocols]]

## Ingress Tool Transfer

[CARROTBALL](https://attack.mitre.org/software/S0465) has the ability to download and install a remote payload.[\[Unit 42 CARROTBAT January 2020\]](https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/)

- *Technique:* [[../Techniques/Ingress Tool Transfer (T1105)|Ingress Tool Transfer]]

## Malicious File

[CARROTBALL](https://attack.mitre.org/software/S0465) has been executed through users being lured into opening malicious e-mail attachments.[\[Unit 42 CARROTBAT January 2020\]](https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/)

- *Technique:* [[../Techniques/Malicious File (T1204.002)|Malicious File]]

## Obfuscated Files or Information

[CARROTBALL](https://attack.mitre.org/software/S0465) has used a custom base64 alphabet to decode files.[\[Unit 42 CARROTBAT January 2020\]](https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/)

- *Technique:* [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]


# External References(s)

- [S0465](https://attack.mitre.org/software/S0465)

[^fn1]: [McCabe, A. (2020, January 23). The Fractured Statue Campaign: U.S. Government Agency Targeted in Spear-Phishing Attacks. Retrieved June 2, 2020.](https://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/)