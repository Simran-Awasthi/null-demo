import { User } from 'firebase/auth'
import { create } from 'zustand'
interface UserStore{
    user: User|null;
    setUser: (user:User|null)=> void
}

const useUserStore = create<UserStore>((set) => ({
   user:null,
   setUser:  (user)=> set({user:user})
}))
 export default useUserStore