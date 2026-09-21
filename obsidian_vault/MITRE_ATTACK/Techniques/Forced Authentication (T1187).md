---
mitre_data:
  id: T1187
  linker_tags:
  - mitre/attack/linker/credential_access/forced_authentication
  name: Forced Authentication
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Forced Authentication (`T1187`)

Adversaries may gather credential material by invoking or forcing a user to automatically provide authentication information through a mechanism in which they can intercept.

The Server Message Block (SMB) protocol is commonly used in Windows networks for authentication and communication between systems for access to resources and file sharing. When a Windows system attempts to connect to an SMB resource it will automatically attempt to authenticate and send credential information for the current user to the remote system.[^fn9] This behavior is typical in enterprise environments so that users do not need to enter credentials to access network resources.

Web Distributed Authoring and Versioning (WebDAV) is also typically used by Windows systems as a backup protocol when SMB is blocked or fails. WebDAV is an extension of HTTP and will typically operate over TCP ports 80 and 443.[^fn6][^fn4]

Adversaries may take advantage of this behavior to gain access to user account hashes through forced SMB/WebDAV authentication. An adversary can send an attachment to a user through spearphishing that contains a resource link to an external server controlled by the adversary  (i.e. [Template Injection](https://attack.mitre.org/techniques/T1221)), or place a specially crafted file on navigation path for privileged accounts (e.g. .SCF file placed on desktop) or on a publicly accessible share to be accessed by victim(s). When the user's system accesses the untrusted resource, it will attempt authentication and send information, including the user's hashed credentials, over SMB to the adversary-controlled server.[^fn3] With access to the credential hash, an adversary can perform off-line [Brute Force](https://attack.mitre.org/techniques/T1110) cracking to gain access to plaintext credentials.[^fn2]

There are several different ways this can occur.[^fn5] Some specifics from in-the-wild use include:

* A spearphishing attachment containing a document with a resource that is automatically loaded when the document is opened (i.e. [Template Injection](https://attack.mitre.org/techniques/T1221)). The document can include, for example, a request similar to <code>file[:]//[remote address]/Normal.dotm</code> to trigger the SMB request.[^fn8]
* A modified .LNK or .SCF file with the icon filename pointing to an external reference such as <code>\\[remote address]\pic.png</code> that will force the system to load the resource when the icon is rendered to repeatedly gather credentials.[^fn8]

Alternatively, by leveraging the <code>EfsRpcOpenFileRaw</code> function, an adversary can send SMB requests to a remote system's MS-EFSRPC interface and force the victim computer to initiate an authentication procedure and share its authentication details. The Encrypting File System Remote Protocol (EFSRPC) is a protocol used in Windows networks for maintenance and management operations on encrypted data that is stored remotely to be accessed over a network. Utilization of <code>EfsRpcOpenFileRaw</code> function in EFSRPC is used to open an encrypted object on the server for backup or restore. Adversaries can collect this data and abuse it as part of a NTLM relay attack to gain access to remote systems on the same internal network.[^fn1][^fn7]




# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1187](https://attack.mitre.org/techniques/T1187)

[^fn1]: [Condon, Caitlin. (2022, April 24). PetitPotam: Novel Attack Chain Can Fully Compromise Windows Domains. Retrieved May 30, 2025.](https://www.rapid7.com/blog/post/2021/08/03/petitpotam-novel-attack-chain-can-fully-compromise-windows-domains-running-ad-cs/)
[^fn2]: [Cylance. (2015, April 13). Redirect to SMB. Retrieved December 21, 2017.](https://www.cylance.com/content/dam/cylance/pdfs/white_papers/RedirectToSMB.pdf)
[^fn3]: [Dunning, J. (2016, August 1). Hashjacking. Retrieved December 21, 2017.](https://github.com/hob0/hashjacking)
[^fn4]: [Microsoft. (n.d.). Managing WebDAV Security (IIS 6.0). Retrieved November 17, 2024.](https://web.archive.org/web/20100210125749/https://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/4beddb35-0cba-424c-8b9b-a5832ad8e208.mspx)
[^fn5]: [Osanda Malith Jayathissa. (2017, March 24). Places of Interest in Stealing NetNTLM Hashes. Retrieved January 26, 2018.](https://osandamalith.com/2017/03/24/places-of-interest-in-stealing-netntlm-hashes/)
[^fn6]: [Stevens, D. (2017, November 13). WebDAV Traffic To Malicious Sites. Retrieved December 21, 2017.](https://blog.didierstevens.com/2017/11/13/webdav-traffic-to-malicious-sites/)
[^fn7]: [topotam. (2021, July 18). PetitPotam. PoC tool to coerce Windows hosts to authenticate to other machines. Retrieved May 30, 2025.](https://github.com/topotam/PetitPotam)
[^fn8]: [US-CERT. (2017, October 20). Alert (TA17-293A): Advanced Persistent Threat Activity Targeting Energy and Other Critical Infrastructure Sectors. Retrieved November 2, 2017.](https://www.us-cert.gov/ncas/alerts/TA17-293A)
[^fn9]: [Wikipedia. (2017, December 16). Server Message Block. Retrieved December 21, 2017.](https://en.wikipedia.org/wiki/Server_Message_Block)