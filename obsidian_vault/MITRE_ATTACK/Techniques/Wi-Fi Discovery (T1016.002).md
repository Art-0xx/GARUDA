---
mitre_data:
  id: T1016.002
  linker_tags:
  - mitre/attack/linker/discovery/wi-fi_discovery
  name: Wi-Fi Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Wi-Fi Discovery (`T1016.002`)

Adversaries may search for information about Wi-Fi networks, such as network names and passwords, on compromised systems. Adversaries may use Wi-Fi information as part of [Account Discovery](https://attack.mitre.org/techniques/T1087), [Remote System Discovery](https://attack.mitre.org/techniques/T1018), and other discovery or [Credential Access](https://attack.mitre.org/tactics/TA0006) activity to support both ongoing and future campaigns.

Adversaries may collect various types of information about Wi-Fi networks from hosts. For example, on Windows names and passwords of all Wi-Fi networks a device has previously connected to may be available through `netsh wlan show profiles` to enumerate Wi-Fi names and then `netsh wlan show profile “Wi-Fi name” key=clear` to show a Wi-Fi network’s corresponding password.[^fn6][^fn4][^fn2] Additionally, names and other details of locally reachable Wi-Fi networks can be discovered using calls to `wlanAPI.dll` [Native API](https://attack.mitre.org/techniques/T1106) functions.[^fn1]

On Linux, names and passwords of all Wi-Fi-networks a device has previously connected to may be available in files under ` /etc/NetworkManager/system-connections/`.[^fn3] On macOS, the password of a known Wi-Fi may be identified with ` security find-generic-password -wa wifiname` (requires admin username/password).[^fn5]



# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1016.002](https://attack.mitre.org/techniques/T1016/002)

[^fn1]: [Binary Defense. (n.d.). Emotet Evolves With new Wi-Fi Spreader. Retrieved September 8, 2023.](https://www.binarydefense.com/resources/blog/emotet-evolves-with-new-wi-fi-spreader/)
[^fn2]: [Check Point. (2022, January 11). APT35 exploits Log4j vulnerability to distribute new modular PowerShell toolkit. Retrieved January 24, 2022.](https://research.checkpoint.com/2022/apt35-exploits-log4j-vulnerability-to-distribute-new-modular-powershell-toolkit/)
[^fn3]: [Geeks for Geeks. (n.d.). Wi-Fi Password of All Connected Networks in Windows/Linux. Retrieved September 8, 2023.](https://www.geeksforgeeks.org/wi-fi-password-connected-networks-windowslinux/)
[^fn4]: [Hossein Jazi. (2020, April 16). New AgentTesla variant steals WiFi credentials. Retrieved September 8, 2023.](https://www.malwarebytes.com/blog/news/2020/04/new-agenttesla-variant-steals-wifi-credentials)
[^fn5]: [Ruslana Lishchuk. (2021, March 26). How to Find a Saved Wi-Fi Password on a Mac. Retrieved September 8, 2023.](https://mackeeper.com/blog/find-wi-fi-password-on-mac/)
[^fn6]: [Sergiu Gatlan. (2020, April 16). Hackers steal WiFi passwords using upgraded Agent Tesla malware. Retrieved September 8, 2023.](https://www.bleepingcomputer.com/news/security/hackers-steal-wifi-passwords-using-upgraded-agent-tesla-malware/)