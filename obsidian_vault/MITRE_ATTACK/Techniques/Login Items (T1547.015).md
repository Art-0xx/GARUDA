---
mitre_data:
  id: T1547.015
  linker_tags:
  - mitre/attack/linker/persistence/login_items
  - mitre/attack/linker/privilege_escalation/login_items
  name: Login Items
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Login Items (`T1547.015`)

Adversaries may add login items to execute upon user login to gain persistence or escalate privileges. Login items are applications, documents, folders, or server connections that are automatically launched when a user logs in.[^fn5] Login items can be added via a shared file list or Service Management Framework.[^fn1] Shared file list login items can be set using scripting languages such as [AppleScript](https://attack.mitre.org/techniques/T1059/002), whereas the Service Management Framework uses the API call <code>SMLoginItemSetEnabled</code>.

Login items installed using the Service Management Framework leverage <code>launchd</code>, are not visible in the System Preferences, and can only be removed by the application that created them.[^fn1][^fn15] Login items created using a shared file list are visible in System Preferences, can hide the application when it launches, and are executed through LaunchServices, not launchd, to open applications, documents, or URLs without using Finder.[^fn3] Users and applications use login items to configure their user environment to launch commonly used services or applications, such as email, chat, and music applications.

Adversaries can utilize [AppleScript](https://attack.mitre.org/techniques/T1059/002) and [Native API](https://attack.mitre.org/techniques/T1106) calls to create a login item to spawn malicious executables.[^fn7] Prior to version 10.5 on macOS, adversaries can add login items by using [AppleScript](https://attack.mitre.org/techniques/T1059/002) to send an Apple events to the “System Events” process, which has an AppleScript dictionary for manipulating login items.[^fn4] Adversaries can use a command such as <code>tell application “System Events” to make login item at end with properties /path/to/executable</code>.[^fn8][^fn6][^fn9] This command adds the path of the malicious executable to the login item file list located in <code>~/Library/Application Support/com.apple.backgroundtaskmanagementagent/backgrounditems.btm</code>.[^fn8] Adversaries can also use login items to launch executables that can be used to control the victim system remotely or as a means to gain privilege escalation by prompting for user credentials.[^fn13][^fn10][^fn12]


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.015](https://attack.mitre.org/techniques/T1547/015)
- [Apple. (2018, June 4). Launch Services Keys. Retrieved October 5, 2021.](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW1)
- [Patrick Wardle. (2018, July 23). Block Blocking Login Items. Retrieved October 1, 2021.](https://objective-see.com/blog/blog_0x31.html)
- [Stokes, Phil. (2019, June 17). HOW MALWARE PERSISTS ON MACOS. Retrieved September 10, 2019.](https://www.sentinelone.com/blog/how-malware-persists-on-macos/)

[^fn1]: [Apple. (2016, September 13). Adding Login Items. Retrieved July 11, 2017.](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLoginItems.html)
[^fn3]: [Apple. (n.d.). Launch Services. Retrieved October 5, 2021.](https://developer.apple.com/documentation/coreservices/launch_services)
[^fn4]: [Apple. (n.d.). Login Items AE. Retrieved October 4, 2021.](https://developer.apple.com/library/archive/samplecode/LoginItemsAE/Introduction/Intro.html#//apple_ref/doc/uid/DTS10003788)
[^fn5]: [Apple. (n.d.). Open items automatically when you log in on Mac. Retrieved October 1, 2021.](https://support.apple.com/guide/mac-help/open-items-automatically-when-you-log-in-mh15189/mac)
[^fn6]: [fluffybunny. (2019, July 9). OSX.Dok Analysis. Retrieved November 17, 2024.](https://web.archive.org/web/20221007144948/http://www.hexed.in/2019/07/osxdok-analysis.html)
[^fn7]: [hoakley. (2018, May 22). Running at startup: when to use a Login Item or a LaunchAgent/LaunchDaemon. Retrieved October 5, 2021.](https://eclecticlight.co/2018/05/22/running-at-startup-when-to-use-a-login-item-or-a-launchagent-launchdaemon/)
[^fn8]: [hoakley. (2021, September 16). How to run an app or tool at startup. Retrieved October 5, 2021.](https://eclecticlight.co/2021/09/16/how-to-run-an-app-or-tool-at-startup/)
[^fn9]: [kaloprominat. (2013, July 30). macos: manage add list remove login items apple script. Retrieved October 5, 2021.](https://gist.github.com/kaloprominat/6111584)
[^fn10]: [Ofer Caspi. (2017, May 4). OSX Malware is Catching Up, and it wants to Read Your HTTPS Traffic. Retrieved October 5, 2021.](https://blog.checkpoint.com/2017/04/27/osx-malware-catching-wants-read-https-traffic/)
[^fn12]: [Patrick Wardle. (2019, June 20). Burned by Fire(fox). Retrieved October 1, 2021.](https://objective-see.com/blog/blog_0x44.html)
[^fn13]: [Patrick Wardle. (n.d.). Mac Malware of 2017. Retrieved September 21, 2018.](https://objective-see.com/blog/blog_0x25.html)
[^fn15]: [Tim Schroeder. (2013, April 21). SMLoginItemSetEnabled Demystified. Retrieved November 17, 2024.](https://web.archive.org/web/20160216034946/https://blog.timschroeder.net/2013/04/21/smloginitemsetenabled-demystified/)