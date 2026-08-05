import Image from "next/image";


export default function RightPanel(){
    return (
        <>
        <Image
        src="/images/login-image.jpg"
        alt="Login illustration"
        width={600}
        height={900}
         className="rounded-3xl object-cover"
        />

        </>

    );
}