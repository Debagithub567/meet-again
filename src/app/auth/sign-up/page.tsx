import LeftPanel from "../../../components/auth/LeftPanel";
import RightPanel from "../../../components/auth/RightPanel";


export default function SignUpPage() {
  return (<> 
  <div className="flex min-h-screen">
    <div className="w-[55%] h-screen bg-red-300">
      <LeftPanel />
    </div>
      
      <div className="w-[45%] h-screen bg-blue-300">
        <RightPanel />
      </div>
      
    </div>

    </>
  );
   
}