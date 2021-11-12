import { apiUrl } from 'utils/config'

interface IParamsProps {
  method: 'GET' | 'POST';
  data?: any;
}

/*
 * Api thunks
 */
export const api = {
	getHeaders: () => ({ 'Content-Type': 'application/json' }),
	_fetch: (uri: string, { method, data }: IParamsProps) => {
		return fetch(`${apiUrl}${uri}`, {
			method: method,
			headers: api.getHeaders(),
			body: JSON.stringify(data)
		}).then(response => response.json())
			.catch(response => {
				console.log(response)
				if(response.status >= 400) throw new Error(response.message)
				return response.message
			})

	},
	get: (uri: string, params?: IParamsProps) => api._fetch(uri, { ...params, method: 'GET' }),
	post: (uri: string, data: any) => api._fetch(uri, { data: data, method: 'POST' })
}
