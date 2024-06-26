---
title: "Q & A"
sidebar_position: 1
---

# Frequently Asked Questions

### Q. Which browsers are supported?

The browser is currently optimized for Google Chrome and also works with Firefox. However, we do not currently support Safari or other browsers. If you find any issues using Chromoscope in your browser, please submit a GitHub issue:

https://github.com/hms-dbmi/chromoscope/issues

### Q. What are the requirements for using AWS CLI or AWS APIs to visualize data stored on private S3 buckets?

[Two prerequisites](../loading-data/loading-private-data) must be met:

1. appropriate [AWS security credentials setup](../loading-data/loading-private-data#aws-security-credentials-setup); and
2. correct formatting of the cross-origin resource sharing [(CORS) configuration file](../loading-data/loading-private-data#cors-configuration-file). 

Refer to the documentation linked for further details.
