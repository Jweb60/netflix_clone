import { useState, useCallback } from "react";
import Input from "@/components/Input";



const Auth = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, SetPassword] = useState("");
  
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, [])
  
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">

            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? "S'identifier" : "S'inscrire"}
            </h2>

            <div className="flex flex-col gap-4">
    
              {variant === 'register' &&  (
              
                  <Input 
                  label="Username"  
                  onChange={(e: any) => setName(e.target.value)}
                  id="name"                
                  value={name}
                  />
                  )}
                  <Input 
                  label="E-mail"  
                  onChange={(e: any) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  value={email}
                  />
                  <Input 
                  label="Mot de passe"  
                  onChange={(e: any) => SetPassword(e.target.value)}
                  id="password"
                  type="password"
                  value={password}
                  />
            </div>

            <button className="bg-red-600 py-6 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ">
              {variant === 'login' ? "S'identifier" : "S'inscrire"}
              </button>

              <p className="text-neutral-500 mt-12">
                {variant === 'login' ? "Première visite sur Netflix ?" : "Vous avez déjà un compte ?"}
            
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                  {variant === 'login' ? "S'inscrire" : "S'identifier"}
                </span>
              </p>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Auth;