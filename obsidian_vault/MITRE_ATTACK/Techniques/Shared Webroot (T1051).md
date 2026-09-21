---
mitre_data:
  id: T1051
  linker_tags:
  - mitre/attack/linker/lateral_movement/shared_webroot
  name: Shared Webroot
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Shared Webroot (`T1051`)

**This technique has been deprecated and should no longer be used.**

Adversaries may add malicious content to an internally accessible website through an open network file share that contains the website's webroot or Web content directory (Citation: Microsoft Web Root OCT 2016) [^fn1] and then browse to that content with a Web browser to cause the server to execute the malicious content. The malicious content will typically run under the context and permissions of the Web server process, often resulting in local system or administrative privileges, depending on how the Web server is configured.

This mechanism of shared access and remote execution could be used for lateral movement to the system running the Web server. For example, a Web server running PHP with an open network share could allow an adversary to upload a remote access tool and PHP script to execute the RAT on the system running the Web server when a specific page is visited. [^fn2]


# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1051](https://attack.mitre.org/techniques/T1051)
- https://capec.mitre.org/data/definitions/563.html

[^fn1]: [Apache. (n.d.). Apache HTTP Server Version 2.4 Documentation - Web Site Content. Retrieved July 27, 2018.](http://httpd.apache.org/docs/2.4/getting-started.html#content)
[^fn2]: [Brandt, Andrew. (2011, February 22). Malicious PHP Scripts on the Rise. Retrieved October 3, 2018.](https://www.webroot.com/blog/2011/02/22/malicious-php-scripts-on-the-rise/)