---
mitre_data:
  id: T1546.015
  linker_tags:
  - mitre/attack/linker/privilege_escalation/component_object_model_hijacking
  - mitre/attack/linker/persistence/component_object_model_hijacking
  name: Component Object Model Hijacking
  related_tactics:
  - privilege_escalation
  - persistence
tags:
- mitre/attack/technique
---



# Component Object Model Hijacking (`T1546.015`)

Adversaries may establish persistence by executing malicious content triggered by hijacked references to Component Object Model (COM) objects. COM is a system within Windows to enable interaction between software components through the operating system.[^fn3]  References to various COM objects are stored in the Registry. 

Adversaries may use the COM system to insert malicious code that can be executed in place of legitimate software through hijacking the COM references and relationships as a means for persistence. Hijacking a COM object requires a change in the Registry to replace a reference to a legitimate system component which may cause that component to not work when executed. When that system component is executed through normal system operation the adversary's code will be executed instead.[^fn2] An adversary is likely to hijack objects that are used frequently enough to maintain a consistent level of persistence, but are unlikely to break noticeable functionality within the system as to avoid system instability that could lead to detection. 

One variation of COM hijacking involves abusing Type Libraries (TypeLibs), which provide metadata about COM objects, such as their interfaces and methods. Adversaries may modify Registry keys associated with TypeLibs to redirect legitimate COM object functionality to malicious scripts or payloads. Unlike traditional COM hijacking, which commonly uses local DLLs, this variation may leverage the "script:" moniker to execute remote scripts hosted on external servers.[^fn4] This approach enables stealthy execution of code while maintaining persistence, as the remote payload would be automatically downloaded whenever the hijacked COM object is accessed.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PcShare|PcShare]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1546.015](https://attack.mitre.org/techniques/T1546/015)
- [Ewing, P. Strom, B. (2016, September 15). How to Hunt: Detecting Persistence & Evasion with the COM. Retrieved September 15, 2016.](https://www.elastic.co/blog/how-hunt-detecting-persistence-evasion-com)

[^fn2]: [G DATA. (2014, October). COM Object hijacking: the discreet way of persistence. Retrieved August 13, 2016.](https://blog.gdatasoftware.com/2014/10/23941-com-object-hijacking-the-discreet-way-of-persistence)
[^fn3]: [Microsoft. (n.d.). The Component Object Model. Retrieved August 18, 2016.](https://msdn.microsoft.com/library/ms694363.aspx)
[^fn4]: [RELIAQUEST THREAT RESEARCH TEAM. (2025, April 11). Threat Spotlight: Hijacked and Hidden: New Backdoor and Persistence Technique. Retrieved June 27, 2025.](https://reliaquest.com/blog/threat-spotlight-hijacked-and-hidden-new-backdoor-and-persistence-technique/)