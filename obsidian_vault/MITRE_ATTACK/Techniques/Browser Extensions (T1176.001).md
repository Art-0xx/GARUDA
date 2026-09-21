---
mitre_data:
  id: T1176.001
  linker_tags:
  - mitre/attack/linker/persistence/browser_extensions
  name: Browser Extensions
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Browser Extensions (`T1176.001`)

Adversaries may abuse internet browser extensions to establish persistent access to victim systems. Browser extensions or plugins are small programs that can add functionality to and customize aspects of internet browsers. They can be installed directly via a local file or custom URL or through a browser's app store - an official online platform where users can browse, install, and manage extensions for a specific web browser. Extensions generally inherit the web browser's permissions previously granted.[^fn13][^fn4] 
 
Malicious extensions can be installed into a browser through malicious app store downloads masquerading as legitimate extensions, through social engineering, or by an adversary that has already compromised a system. Security can be limited on browser app stores, so it may not be difficult for malicious extensions to defeat automated scanners.[^fn6] Depending on the browser, adversaries may also manipulate an extension's update url to install updates from an adversary-controlled server or manipulate the mobile configuration file to silently install additional extensions. 

Adversaries may abuse how chromium-based browsers load extensions by modifying or replacing the Preferences and/or Secure Preferences files to silently install malicious extensions. When the browser is not running, adversaries can alter these files, ensuring the extension is loaded, granted desired permissions, and will persist in browser sessions. This method does not require user consent and extensions are silently loaded in the background from disk or from the browser's trusted store.[^fn1]
  
Previous to macOS 11, adversaries could silently install browser extensions via the command line using the <code>profiles</code> tool to install malicious <code>.mobileconfig</code> files. In macOS 11+, the use of the <code>profiles</code> tool can no longer install configuration profiles; however, <code>.mobileconfig</code> files can be planted and installed with user interaction.[^fn3] 
 
Once the extension is installed, it can browse to websites in the background, steal all information that a user enters into a browser (including credentials), and be used as an installer for a RAT for persistence.[^fn2][^fn5][^fn9][^fn8] 

There have also been instances of botnets using a persistent backdoor through malicious Chrome extensions for [Command and Control](https://attack.mitre.org/tactics/TA0011).[^fn12][^fn7] Adversaries may also use browser extensions to modify browser permissions and components, privacy settings, and other security controls for [Stealth](https://attack.mitre.org/tactics/TA0005).[^fn11][^fn10] 


# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/Software Extensions (T1176)|Software Extensions]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1176.001](https://attack.mitre.org/techniques/T1176/001)

[^fn1]: [  Pulsedive Threat Research. (2025, March 21). Rilide - An Information Stealing Browser Extension. Retrieved September 22, 2025.](https://blog.pulsedive.com/rilide-an-information-stealing-browser-extension/)
[^fn2]: [Brinkmann, M. (2017, September 19). First Chrome extension with JavaScript Crypto Miner detected. Retrieved November 16, 2017.](https://www.ghacks.net/2017/09/19/first-chrome-extension-with-javascript-crypto-miner-detected/)
[^fn3]: [Chris Ross. (2019, February 8). No Place Like Chrome. Retrieved April 27, 2021.](https://www.xorrior.com/No-Place-Like-Chrome/)
[^fn4]: [Chrome. (n.d.). What are Extensions?. Retrieved November 16, 2017.](https://developer.chrome.com/extensions)
[^fn5]: [De Tore, M., Warner, J. (2018, January 15). MALICIOUS CHROME EXTENSIONS ENABLE CRIMINALS TO IMPACT OVER HALF A MILLION USERS AND GLOBAL BUSINESSES. Retrieved January 17, 2018.](https://www.icebrg.io/blog/malicious-chrome-extensions-enable-criminals-to-impact-over-half-a-million-users-and-global-businesses)
[^fn6]: [Jagpal, N., et al. (2015, August). Trends and Lessons from Three Years Fighting Malicious Extensions. Retrieved November 17, 2017.](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43824.pdf)
[^fn7]: [Kjaer, M. (2016, July 18). Malware in the browser: how you might get hacked by a Chrome extension. Retrieved September 12, 2024.](https://web.archive.org/web/20240608001937/https://kjaer.io/extension-malware/)
[^fn8]: [Marinho, R. (n.d.). "Catch-All" Google Chrome Malicious Extension Steals All Posted Data. Retrieved November 16, 2017.](https://isc.sans.edu/forums/diary/CatchAll+Google+Chrome+Malicious+Extension+Steals+All+Posted+Data/22976/https:/threatpost.com/malicious-chrome-extension-steals-data-posted-to-any-website/128680/))
[^fn9]: [Marinho, R. (n.d.). (Banker(GoogleChromeExtension)).targeting. Retrieved November 18, 2017.](https://isc.sans.edu/forums/diary/BankerGoogleChromeExtensiontargetingBrazil/22722/)
[^fn10]: [Microsoft Threat Intelligence. (2020, December 10). Widespread malware campaign seeks to silently inject ads into search results, affects multiple browsers. Retrieved February 26, 2024.](https://www.microsoft.com/en-us/security/blog/2020/12/10/widespread-malware-campaign-seeks-to-silently-inject-ads-into-search-results-affects-multiple-browsers/)
[^fn11]: [Raggi, Michael. Proofpoint Threat Research Team. (2021, February 25). TA413 Leverages New FriarFox Browser Extension to Target the Gmail Accounts of Global Tibetan Organizations. Retrieved November 17, 2024.](https://www.proofpoint.com/uk/blog/threat-insight/ta413-leverages-new-friarfox-browser-extension-target-gmail-accounts-global)
[^fn12]: [Vachon, F., Faou, M. (2017, July 20). Stantinko: A massive adware campaign operating covertly since 2012. Retrieved November 16, 2017.](https://www.welivesecurity.com/2017/07/20/stantinko-massive-adware-campaign-operating-covertly-since-2012/)
[^fn13]: [Wikipedia. (2017, October 8). Browser Extension. Retrieved January 11, 2018.](https://en.wikipedia.org/wiki/Browser_extension)