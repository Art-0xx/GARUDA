---
tags: 
  - mitre/attack/data_component
---

# Container Creation (`DC0072`)

"Container Creation" data component captures details about the initial construction of a container in a containerized environment. This includes events where a new container is instantiated, such as through Docker, Kubernetes, or other container orchestration platforms. Monitoring these events helps detect unauthorized or potentially malicious container creation. Examples:

- Docker Example: `docker create my-container`, `docker run --name=my-container nginx:latest`
- Kubernetes Example: `kubectl run my-pod --image=nginx`, `kubectl create deployment my-deployment --image=nginx`
- Cloud Container Services Example
    - AWS ECS: Task or service creation (`RunTask` or `CreateService`).
    - Azure Container Instances: Deployment of a container group.
    - Google Kubernetes Engine (GKE): Creation of new pods via GCP APIs.





