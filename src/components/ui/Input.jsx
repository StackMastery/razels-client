import { VscEye , VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";

const Input = ({className, ...props}) => {
    return (
        <>
            <input className={`w-full bg-transparent outline-none px-5 py-2 border dark:border-border-1 rounded-xl focus:ring-2 dark:ring-border-1 ring-border-2 ${className}`} {...props}/>
        </>
    );
}

const InputPass = ({className, ...props}) => {

    const [isPassword, setisPassword] = useState(true);

    return (
        <>
            <div>
                <input type={isPassword ? 'password' : 'text' } className={`w-full bg-transparent outline-none px-5 py-2 border dark:border-border-1 rounded-xl focus:ring-2 dark:ring-border-1 ring-border-2 ${className}`} {...props}/>
                <div className="w-full flex justify-end -mt-7 px-5">
                    <button onClick={() => {setisPassword(!isPassword)}} type="button" className="text-xl cursor-pointer">
                        {
                            isPassword
                                ? <VscEye />
                                : <VscEyeClosed />
                        }
                    </button>
                </div>
            </div>
        </>
    );
}

export { Input, InputPass }