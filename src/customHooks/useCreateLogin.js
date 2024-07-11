import authService from '../appwrite/auth'

const useCreateLogin = async () => {
  try {
    const user = await authService.getCurrentUser()
    if (user) {
      if (user.message === "User (role: guests) missing scope (account)") {
        const session = await authService.anonymousSession()
        if (session) {
          return session.userId
        }
      } else {
        return user.$id
      }
    }
  } catch (error) {
    return error
  }
}

export default useCreateLogin
