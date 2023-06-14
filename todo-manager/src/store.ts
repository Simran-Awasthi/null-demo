import { User } from 'firebase/auth'
import { create } from 'zustand'
interface UserStore{
    user: User|null;
    setUser: (user:User|null)=> void;
    loading:boolean;
    setLoading: (loading:boolean)=> void
}

const useUserStore = create<UserStore>((set) => ({
   user:null,
   setUser:  (user)=> set({user:user}),
   loading:false,
   setLoading:(loading)=>set({loading:loading})
}))
 export default useUserStore