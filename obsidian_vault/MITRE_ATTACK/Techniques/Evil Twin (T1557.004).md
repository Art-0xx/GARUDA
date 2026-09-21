---
mitre_data:
  id: T1557.004
  linker_tags:
  - mitre/attack/linker/credential_access/evil_twin
  - mitre/attack/linker/collection/evil_twin
  name: Evil Twin
  related_tactics:
  - credential_access
  - collection
tags:
- mitre/attack/technique
---



# Evil Twin (`T1557.004`)

Adversaries may host seemingly genuine Wi-Fi access points to deceive users into connecting to malicious networks as a way of supporting follow-on behaviors such as [Network Sniffing](https://attack.mitre.org/techniques/T1040), [Transmitted Data Manipulation](https://attack.mitre.org/techniques/T1565/002), or [Input Capture](https://attack.mitre.org/techniques/T1056).[^fn4]

By using a Service Set Identifier (SSID) of a legitimate Wi-Fi network, fraudulent Wi-Fi access points may trick devices or users into connecting to malicious Wi-Fi networks.[^fn1][^fn2]  Adversaries may provide a stronger signal strength or block access to Wi-Fi access points to coerce or entice victim devices into connecting to malicious networks.[^fn3]  A Wi-Fi Pineapple – a network security auditing and penetration testing tool – may be deployed in Evil Twin attacks for ease of use and broader range. Custom certificates may be used in an attempt to intercept HTTPS traffic. 

Similarly, adversaries may also listen for client devices sending probe requests for known or previously connected networks (Preferred Network Lists or PNLs). When a malicious access point receives a probe request, adversaries can respond with the same SSID to imitate the trusted, known network.[^fn3]  Victim devices are led to believe the responding access point is from their PNL and initiate a connection to the fraudulent network.

Upon logging into the malicious Wi-Fi access point, a user may be directed to a fake login page or captive portal webpage to capture the victim’s credentials. Once a user is logged into the fraudulent Wi-Fi network, the adversary may able to monitor network activity, manipulate data, or steal additional credentials. Locations with high concentrations of public Wi-Fi access, such as airports, coffee shops, or libraries, may be targets for adversaries to set up illegitimate Wi-Fi access points. 


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Adversary-in-the-Middle (T1557)|Adversary-in-the-Middle]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]
- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1557.004](https://attack.mitre.org/techniques/T1557/004)

[^fn1]: [AO Kaspersky Lab. (n.d.). Evil twin attacks and how to prevent them. Retrieved September 17, 2024.](https://usa.kaspersky.com/resource-center/preemptive-safety/evil-twin-attacks)
[^fn2]: [Gihan, Kavishka. (2021, August 8). Wireless Security— Evil Twin Attack. Retrieved September 17, 2024.](https://kavigihan.medium.com/wireless-security-evil-twin-attack-d3842f4aef59)
[^fn3]: [Ryan, Gabriel. (2019, October 28). Modern Wireless Tradecraft Pt I — Basic Rogue AP Theory — Evil Twin and Karma Attacks. Retrieved September 17, 2024.](https://posts.specterops.io/modern-wireless-attacks-pt-i-basic-rogue-ap-theory-evil-twin-and-karma-attacks-35a8571550ee)
[^fn4]: [Toulas, Bill. (2024, July 1). Australian charged for ‘Evil Twin’ WiFi attack on plane. Retrieved September 17, 2024.](https://www.bleepingcomputer.com/news/security/australian-charged-for-evil-twin-wifi-attack-on-plane/)