import {QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Demo from "./Demo"
import React from "react"


const queryClient = new QueryClient()

function App (){
    return (
    <QueryClientProvider client={queryClient}>
        <Demo/>
    </QueryClientProvider>
    )
}

export default App