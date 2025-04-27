import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class MomentumApi implements ICredentialType {
	name = 'momentumApi';
	displayName = 'Momentum API';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',  
			default: 'https://api.nowcerts.com/api',
			placeholder: 'https://api.nowcerts.com/api',
			required: true,
			description: 'Base URL for the NowCerts API.',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',  
			default: '',
			required: true,
			description: 'The username for the NowCerts API authentication.',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string', 
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'The password for the NowCerts API authentication.',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',  
			default: '',
			required: true,
			description: 'The client ID for the NowCerts API.',
		},
	];
}
