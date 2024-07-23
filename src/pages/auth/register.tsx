import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography,Input,Checkbox, Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import InputWithPrefix from "../../components/input/Input_with_prefix";
import InputWithPreAndBehindfix from "../../components/input/Input_with_pre_and_back";

export default function Register() {
  return (
    <div className="flex flex-col flex-wrap justify-start items-start p-4 md:p-16 lg:p-10 xl:px-48 xl:pt-40 gap-6">
      <div>
        <Typography variant="h5" className="font-[Rubik,sans-self]">
        Sign In to your Account
      </Typography>
      </div>
      
        <div className="w-full">
            <InputWithPrefix />
        </div>
        <div className="w-full">
            <InputWithPrefix />
        </div>
        <div className="w-full">
            <InputWithPreAndBehindfix />
        </div>
        <Typography className="text-sm font-[Rubik,sans-self] text-gray-500">Your password must have at least 8 characters</Typography>
        <div className="flex flex-row items-center w-full">
            <Checkbox  crossOrigin={undefined} className="rounded-none font-bold text-black"/>
            <Typography className="font-[Rubik,sans-self]">By creating an account means you agree to the <span className="font-bold">Terms & Conditions</span> and our <span className="font-bold">Privacy Policy</span></Typography>
        </div>
        <div className="px-2 w-full">
            <Button variant="filled" className="w-full p-4"><Link to="/" className="font-[Rubik,sans-self] text-base normal-case">Sign Up</Link></Button>
        </div>
        <div className="w-full py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">Or sign in with</div>
        <div className="w-full flex flex-row flex-wrap gap-3 justify-stretch">
            <Button variant="outlined" className="flex flex-row gap-2 justify-center w-[45%] normal-case">
                <Icon icon="devicon:google" className="text-sm"/>Google
            </Button>
            <Button variant="outlined" className="flex flex-row gap-2 justify-center w-[45%] normal-case">
                <Icon icon="logos:facebook" className="text-sm"/>Facebook
            </Button>
        </div>
        <div className="flex flex-row w-full justify-center"><Typography >Don’t have an account? <Link to="/login" className="font-bold">Sing In</Link></Typography></div>
    </div>
  );
}