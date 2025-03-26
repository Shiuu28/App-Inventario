import React from 'react'
import { RemoveUserLocalUseCase } from '../../../Domain/useCase/userLocal/RemoveUserLocal';


export const useProfileInfoViewModel = () => {

    const removeSession = async () => {
        await RemoveUserLocalUseCase();
    }

    return {
        removeSession
    }
}



export default useProfileInfoViewModel; 