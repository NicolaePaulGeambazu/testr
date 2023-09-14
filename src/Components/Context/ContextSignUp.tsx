import React, {
  createContext, useMemo,
} from 'react';

export interface UserSetupContextProps {
  onSubmit: any,
}
export const UserSetupContext = createContext<UserSetupContextProps>({
    onSubmit: () => {},

});
interface UserSetupContextProviderProps {
  children: React.ReactNode,
}
export function UserSetupContextProvider({ children }: UserSetupContextProviderProps) {

 const onSubmit = (data: any) => {
  console.log(data);
 }
  const value = useMemo(() => ({
    onSubmit,
  }), []);
  return (
    <UserSetupContext.Provider value={value}>
      {children}
    </UserSetupContext.Provider>
  );
}