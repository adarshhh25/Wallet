import { Slot } from "expo-router";
import Safescreen from "@/components/Safescreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
       <Safescreen>
        <Slot/>
       </Safescreen>
       <StatusBar style="dark"/>
    </ClerkProvider>
  );
}
 


