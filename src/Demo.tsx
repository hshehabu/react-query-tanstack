import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./api";
export default function Demo () {

    const {data : todos , isLoading } = useQuery({
        queryFn: ()=>fetchTodos() ,
        queryKey: ["todos"]
    });
    return (
        <div>
            <b>React query</b>
        </div>
    )
}