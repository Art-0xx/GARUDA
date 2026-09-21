---
mitre_data:
  id: T1546.018
  linker_tags:
  - mitre/attack/linker/persistence/python_startup_hooks
  - mitre/attack/linker/privilege_escalation/python_startup_hooks
  name: Python Startup Hooks
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Python Startup Hooks (`T1546.018`)

Adversaries may achieve persistence by leveraging Python’s startup mechanisms, including path configuration (`.pth`) files and the `sitecustomize.py` or `usercustomize.py` modules. These files are automatically processed during the initialization of the Python interpreter, allowing for the execution of arbitrary code whenever Python is invoked.[^fn3]

Path configuration files are designed to extend Python’s module search paths through the use of import statements. If a `.pth` file is placed in Python's `site-packages` or `dist-packages` directories, any lines beginning with `import` will be executed automatically on Python invocation.[^fn2] Similarly, if `sitecustomize.py` or `usercustomize.py` is present in the Python path, these files will be imported during interpreter startup, and any code they contain will be executed.[^fn1]

Adversaries may abuse these mechanisms to establish persistence on systems where Python is widely used (e.g., for automation or scripting in production environments).  


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Event Triggered Execution (T1546)|Event Triggered Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1546.018](https://attack.mitre.org/techniques/T1546/018)

[^fn1]: [Python. (n.d.). site — Site-specific configuration hook. Retrieved May 22, 2025.](https://docs.python.org/3/library/site.html)
[^fn2]: [Stephan Berger. (2025, January 14). Analysis of Python's .pth files as a persistence mechanism. Retrieved May 22, 2025.](https://dfir.ch/posts/publish_python_pth_extension/)
[^fn3]: [Volexity Threat Research. (2024, April 12). Zero-Day Exploitation of Unauthenticated Remote Code Execution Vulnerability in GlobalProtect (CVE-2024-3400). Retrieved May 22, 2025.](https://www.volexity.com/blog/2024/04/12/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400/)