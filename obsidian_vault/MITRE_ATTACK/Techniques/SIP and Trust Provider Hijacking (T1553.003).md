---
mitre_data:
  id: T1553.003
  linker_tags:
  - mitre/attack/linker/defense_impairment/sip_and_trust_provider_hijacking
  name: SIP and Trust Provider Hijacking
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# SIP and Trust Provider Hijacking (`T1553.003`)

Adversaries may tamper with SIP and trust provider components to mislead the operating system and application control tools when conducting signature validation checks. In user mode, Windows Authenticode [^fn4] digital signatures are used to verify a file's origin and integrity, variables that may be used to establish trust in signed code (ex: a driver with a valid Microsoft signature may be handled as safe). The signature validation process is handled via the WinVerifyTrust application programming interface (API) function,  [^fn5] which accepts an inquiry and coordinates with the appropriate trust provider, which is responsible for validating parameters of a signature. [^fn2]

Because of the varying executable file types and corresponding signature formats, Microsoft created software components called Subject Interface Packages (SIPs) [^fn6] to provide a layer of abstraction between API functions and files. SIPs are responsible for enabling API functions to create, retrieve, calculate, and verify signatures. Unique SIPs exist for most file formats (Executable, PowerShell, Installer, etc., with catalog signing providing a catch-all  [^fn3]) and are identified by globally unique identifiers (GUIDs). [^fn2]

Similar to [Code Signing](https://attack.mitre.org/techniques/T1553/002), adversaries may abuse this architecture to subvert trust controls and bypass security policies that allow only legitimately signed code to execute on a system. Adversaries may hijack SIP and trust provider components to mislead operating system and application control tools to classify malicious (or any) code as signed by: [^fn2]

* Modifying the <code>Dll</code> and <code>FuncName</code> Registry values in <code>HKLM\SOFTWARE[\WOW6432Node\]Microsoft\Cryptography\OID\EncodingType 0\CryptSIPDllGetSignedDataMsg\{SIP_GUID}</code> that point to the dynamic link library (DLL) providing a SIP’s CryptSIPDllGetSignedDataMsg function, which retrieves an encoded digital certificate from a signed file. By pointing to a maliciously-crafted DLL with an exported function that always returns a known good signature value (ex: a Microsoft signature for Portable Executables) rather than the file’s real signature, an adversary can apply an acceptable signature value to all files using that SIP [^fn1] (although a hash mismatch will likely occur, invalidating the signature, since the hash returned by the function will not match the value computed from the file).
* Modifying the <code>Dll</code> and <code>FuncName</code> Registry values in <code>HKLM\SOFTWARE\[WOW6432Node\]Microsoft\Cryptography\OID\EncodingType 0\CryptSIPDllVerifyIndirectData\{SIP_GUID}</code> that point to the DLL providing a SIP’s CryptSIPDllVerifyIndirectData function, which validates a file’s computed hash against the signed hash value. By pointing to a maliciously-crafted DLL with an exported function that always returns TRUE (indicating that the validation was successful), an adversary can successfully validate any file (with a legitimate signature) using that SIP [^fn1] (with or without hijacking the previously mentioned CryptSIPDllGetSignedDataMsg function). This Registry value could also be redirected to a suitable exported function from an already present DLL, avoiding the requirement to drop and execute a new file on disk.
* Modifying the <code>DLL</code> and <code>Function</code> Registry values in <code>HKLM\SOFTWARE\[WOW6432Node\]Microsoft\Cryptography\Providers\Trust\FinalPolicy\{trust provider GUID}</code> that point to the DLL providing a trust provider’s FinalPolicy function, which is where the decoded and parsed signature is checked and the majority of trust decisions are made. Similar to hijacking SIP’s CryptSIPDllVerifyIndirectData function, this value can be redirected to a suitable exported function from an already present DLL or a maliciously-crafted DLL (though the implementation of a trust provider is complex).
* **Note:** The above hijacks are also possible without modifying the Registry via [DLL](https://attack.mitre.org/techniques/T1574/001) search order hijacking.

Hijacking SIP or trust provider components can also enable persistent code execution, since these malicious components may be invoked by any application that performs code signing or signature validation. [^fn2]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Subvert Trust Controls (T1553)|Subvert Trust Controls]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1553.003](https://attack.mitre.org/techniques/T1553/003)

[^fn1]: [Graeber, M. (2017, September 14). PoCSubjectInterfacePackage. Retrieved January 31, 2018.](https://github.com/mattifestation/PoCSubjectInterfacePackage)
[^fn2]: [Graeber, M. (2017, September). Subverting Trust in Windows. Retrieved January 31, 2018.](https://specterops.io/assets/resources/SpecterOps_Subverting_Trust_in_Windows.pdf)
[^fn3]: [Hudek, T. (2017, April 20). Catalog Files and Digital Signatures. Retrieved January 31, 2018.](https://docs.microsoft.com/windows-hardware/drivers/install/catalog-files)
[^fn4]: [Microsoft. (n.d.). Authenticode. Retrieved January 31, 2018.](https://msdn.microsoft.com/library/ms537359.aspx)
[^fn5]: [Microsoft. (n.d.). WinVerifyTrust function. Retrieved January 31, 2018.](https://msdn.microsoft.com/library/windows/desktop/aa388208.aspx)
[^fn6]: [Navarro, E. (2008, July 11). SIP’s (Subject Interface Package) and Authenticode. Retrieved January 31, 2018.](https://blogs.technet.microsoft.com/eduardonavarro/2008/07/11/sips-subject-interface-package-and-authenticode/)