import { useContext, useCallback } from 'react';
import AuthContext from '../context/AuthContext.jsx';

const useAuth = () => {
  const { userInfo } = useContext(AuthContext);

  const getAuthHeaders = useCallback(() => {
    if (!userInfo || !userInfo.token) {
      console.warn('No user info or token available');
      return {};
    }
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
  }, [userInfo]);

  return { getAuthHeaders };
};

export default useAuth;
