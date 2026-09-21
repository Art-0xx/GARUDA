---
tags:
  - mitre/attack/tool
---

# Rclone (`S1040`)

[Rclone](https://attack.mitre.org/software/S1040) is a command line program for syncing files with cloud storage services such as Dropbox, Google Drive, Amazon S3, and MEGA. [Rclone](https://attack.mitre.org/software/S1040) has been used in a number of ransomware campaigns, including those associated with the [Conti](https://attack.mitre.org/software/S0575) and DarkSide Ransomware-as-a-Service operations.[^fn4][^fn3][^fn1][^fn5][^fn2]



# Platform(s)

- Linux
- Windows
- macOS

# Techniques Used

## Exfiltration to Cloud Storage

[Rclone](https://attack.mitre.org/software/S1040) can exfiltrate data to cloud storage services such as Dropbox, Google Drive, Amazon S3, and MEGA.[\[Rclone\]](https://rclone.org)[\[DFIR Conti Bazar Nov 2021\]](https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/)

- *Technique:* [[../Techniques/Exfiltration to Cloud Storage (T1567.002)|Exfiltration to Cloud Storage]]

## File and Directory Discovery

[Rclone](https://attack.mitre.org/software/S1040) can list files and directories with the `ls`, `lsd`, and `lsl` commands.[\[Rclone\]](https://rclone.org)

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]

## Data Transfer Size Limits

The [Rclone](https://attack.mitre.org/software/S1040) "chunker" overlay supports splitting large files in smaller chunks during upload to circumvent size limits.[\[Rclone\]](https://rclone.org)[\[DFIR Conti Bazar Nov 2021\]](https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/)

- *Technique:* [[../Techniques/Data Transfer Size Limits (T1030)|Data Transfer Size Limits]]

## Archive via Utility

[Rclone](https://attack.mitre.org/software/S1040) can compress files using `gzip` prior to exfiltration.[\[Rclone\]](https://rclone.org)

- *Technique:* [[../Techniques/Archive via Utility (T1560.001)|Archive via Utility]]

## Exfiltration Over Asymmetric Encrypted Non-C2 Protocol

[Rclone](https://attack.mitre.org/software/S1040) can exfiltrate data over SFTP or HTTPS via WebDAV.[\[Rclone\]](https://rclone.org)

- *Technique:* [[../Techniques/Exfiltration Over Asymmetric Encrypted Non-C2 Protocol (T1048.002)|Exfiltration Over Asymmetric Encrypted Non-C2 Protocol]]

## Exfiltration Over Unencrypted Non-C2 Protocol

[Rclone](https://attack.mitre.org/software/S1040) can exfiltrate data over FTP or HTTP, including HTTP via WebDAV.[\[Rclone\]](https://rclone.org)

- *Technique:* [[../Techniques/Exfiltration Over Unencrypted Non-C2 Protocol (T1048.003)|Exfiltration Over Unencrypted Non-C2 Protocol]]


# External References(s)

- [S1040](https://attack.mitre.org/software/S1040)

[^fn1]: [ Aaron Greetham. (2021, May 27). Detecting Rclone – An Effective Tool for Exfiltration. Retrieved August 30, 2022.](https://research.nccgroup.com/2021/05/27/detecting-rclone-an-effective-tool-for-exfiltration/)
[^fn2]: [DFIR Report. (2021, November 29). CONTInuing the Bazar Ransomware Story. Retrieved September 29, 2022.](https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/)
[^fn3]: [Justin Schoenfeld and Aaron Didier. (2021, May 4). Rclone Wars: Transferring leverage in a ransomware attack. Retrieved August 30, 2022.](https://redcanary.com/blog/rclone-mega-extortion/)
[^fn4]: [Nick Craig-Wood. (n.d.). Rclone syncs your files to cloud storage. Retrieved August 30, 2022.](https://rclone.org)
[^fn5]: [Ramarcus Baylor. (2021, May 12). DarkSide Ransomware Gang: An Overview. Retrieved August 30, 2022.](https://unit42.paloaltonetworks.com/darkside-ransomware/)