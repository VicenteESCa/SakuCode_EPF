import { createContext, useContext, useState, ReactNode } from 'react'
import { UserSignUp, UserSignIn, registerRequest, loginRequest } from '../api/auth'

interface AuthContextType {
    signin: (user: UserSignIn) => Promise<void>;
    signup: (user: UserSignUp) => Promise<void>;
    user: UserSignUp | null;
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
    const [ user, setUser ] = useState<UserSignUp | null>(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    const signup = async (user: UserSignUp) => {
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

    const signin = async (req: UserSignIn) => {
        try {
            const res = await loginRequest(req);

            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);

        } catch (error: any) {
            setErrors(error.response.data);
            console.log("Failed to signin: ", error);
        }
    }

    return (
        <AuthContext.Provider
            value = {{
                signin,
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