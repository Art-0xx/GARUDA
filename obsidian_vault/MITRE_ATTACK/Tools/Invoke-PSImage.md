---
tags:
  - mitre/attack/tool
---

# Invoke-PSImage (`S0231`)

[Invoke-PSImage](https://attack.mitre.org/software/S0231) takes a PowerShell script and embeds the bytes of the script into the pixels of a PNG image. It generates a one liner for executing either from a file of from the web. Example of usage is embedding the PowerShell code from the Invoke-Mimikatz module and embed it into an image file. By calling the image file from a macro for example, the macro will download the picture and execute the PowerShell code, which in this case will dump the passwords. [^fn1]



# Techniques Used

## Steganography

[Invoke-PSImage](https://attack.mitre.org/software/S0231) can be used to embed a PowerShell script within the pixels of a PNG file.[\[GitHub Invoke-PSImage\]](https://github.com/peewpw/Invoke-PSImage)

- *Technique:* [[../Techniques/Steganography (T1027.003)|Steganography]]

## Embedded Payloads

[Invoke-PSImage](https://attack.mitre.org/software/S0231) can be used to embed payload data within a new image file.[\[GitHub PSImage\]](https://github.com/peewpw/Invoke-PSImage)

- *Technique:* [[../Techniques/Embedded Payloads (T1027.009)|Embedded Payloads]]


# External References(s)

- [S0231](https://attack.mitre.org/software/S0231)

[^fn1]: [Adams, B. (2017, December 17). Invoke-PSImage. Retrieved April 10, 2018.](https://github.com/peewpw/Invoke-PSImage)