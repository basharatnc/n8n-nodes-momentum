# n8n-nodes-momentum

This is an n8n community node. It lets you integrate NowCerts with your n8n workflows.

The Momentum Node allows seamless integration with the NowCerts API, enabling you to automate creating and updating prospects, insureds, policies, and tasks etc within your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Install this node via:

```bash
pnpm install n8n-nodes-momentum
# or
npm install n8n-nodes-momentum
```

## Operations

- Create Prospect
- Create Insured
- Create Policy
- Create Task

## Credentials

This node requires authentication with the NowCerts API. You will need:

- **Base URL** (usually `https://api.nowcerts.com/api`)
- **Username** (your NowCerts username)
- **Password** (your NowCerts password)
- **Client ID** (provided by NowCerts)

Set up your credentials inside n8n under the **Momentum API** credential type.

## Compatibility

- Requires n8n version: **>=1.0.0**
- Tested on Node.js version **18.10** and higher
- Tested with pnpm **9.1+**

## Usage

When using this node:
- Provide the correct JSON structure for each operation (Prospect, Insured, Policy, Task).
- Authentication is handled internally. Make sure your credentials are valid.
- For any issues with authentication, check that your NowCerts account has the required API access.

If you're new to n8n, check the [Try it out](https://docs.n8n.io/try-it-out/) documentation to get started.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [NowCerts API Documentation](https://api.nowcerts.com/Help)

## Version history

- **0.1.0**: Initial release with basic support for creating Prospects, Insureds, Policies, and Tasks.