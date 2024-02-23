export default defineEventHandler(async (event) => {
	const {accessToken, client, uid} = await readBody(event)
	setCookie(event, "access-token", accessToken)
	setCookie(event, "client", client)
	setCookie(event, "uid", uid)
	return 200
})