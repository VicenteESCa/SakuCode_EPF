import { createContext, useContext, useState, ReactNode } from 'react'
import { User, registerRequest } from '../api/auth'

interface AuthContextType {
    signup: (user: User) => Promise<void>;
    user: User | null;
    isAuthenticated: boolean;
    errors: any;
}

export const AuthContext = createContext<AuthContextType|null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if ( !context ) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}

type AuthProviderProps = {
    children: ReactNode;
};
  
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [ user, setUser ] = useState<User | null>(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    const signup = async (user: User) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error: any) {
            setErrors(error.response.data);
            console.log("Failed to signup: ", error);
        }
    }

    return (
        <AuthContext.Provider
            value = {{
                signup,
                user,
                isAuthenticated,
                errors,
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}