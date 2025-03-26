import React, { useEffect, useState } from 'react'
import { GetUserLocalUseCase } from '../../Domain/useCase/userLocal/GetUserLocal';
import { User } from '../../Domain/entity/User';



export const useUserLocal = () => {



    const [user, setUser] = useState<User>()
    useEffect(() => { //Permite efectos secundarios. obtiene el usuario de la sesion  
        getUserSession();
    }, []);


    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }


    return {
        user,
        getUserSession
    }

}

