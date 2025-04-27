import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class MomentumApi implements ICredentialType {
	name = 'momentumApi';
	displayName = 'Momentum API';
	documentationUrl = '';
	properties = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string' as NodePropertyTypes,
			default: 'https://api.nowcerts.com/api',
			placeholder: 'https://api.nowcerts.com/api',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string' as NodePropertyTypes,
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}