import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function AuthTabs() {
  return (
    <Tabs defaultValue="signup" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">
          Sign Up
        </TabsTrigger>

        <TabsTrigger value="signin">
          Sign In
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}