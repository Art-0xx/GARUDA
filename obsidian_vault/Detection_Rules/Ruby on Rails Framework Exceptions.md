---
type: detection_rule
title: "Ruby on Rails Framework Exceptions"
rule_id: 0d2c3d4c-4b48-4ac3-8f23-ea845746bb1a
platform: application
level: medium
status: stable
tags: [detection, sigma, application]
mitre_tags: [attack.t1190]
---

# Ruby on Rails Framework Exceptions

## Description
Detects suspicious Ruby on Rails exceptions that could indicate exploitation attempts

## Log Source
```yaml
category: application
product: ruby_on_rails
```

## Detection Logic
```yaml
condition: keywords
keywords:
- ActionController::InvalidAuthenticityToken
- ActionController::InvalidCrossOriginRequest
- ActionController::MethodNotAllowed
- ActionController::BadRequest
- ActionController::ParameterMissing
```

## MITRE ATT&CK
- T1190

## False Positives
- Application bugs

## References
- http://edgeguides.rubyonrails.org/security.html
- http://guides.rubyonrails.org/action_controller_overview.html
- https://stackoverflow.com/questions/25892194/does-rails-come-with-a-not-authorized-exception
- https://github.com/rails/rails/blob/cd08e6bcc4cd8948fe01e0be1ea0c7ca60373a25/actionpack/lib/action_dispatch/middleware/exception_wrapper.rb

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2017-08-06
- **Rule ID:** `0d2c3d4c-4b48-4ac3-8f23-ea845746bb1a`
- **Source file:** `application/ruby/appframework_ruby_on_rails_exceptions.yml`
