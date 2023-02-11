import {createServer, Model} from "miragejs"

export function makeServer({environment = "test"} = {}) {
	return createServer({
		environment,

		models: {
			user: Model,
			loginInfo: Model,
		},

		seeds(server) {
			server.create("user", {name: "Bob"})
			server.create("loginInfo", {
				logo: "Alice",
				text: 'Smooth File',
				ldap: [
					{
						ldap_id: '001',
						ldap_name: 'Plott Local'
					},
				]
			})
		},

		routes() {
			this.namespace = "api"

			// this.get("/users", (schema) => {
			// 	return schema.users.all()
			// })

			this.get("/login/info/admin", (schema) => {
				const collection = schema.loginInfos.all()
				return {
					data: collection.models[0]
				};
			})

			this.post('admin/login', )
		},
	})
}
