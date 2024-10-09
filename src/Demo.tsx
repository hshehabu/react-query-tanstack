import React, { useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "./api";
export default function Demo() {
  const queryClient = new QueryClient();

  const [search , setSearch] = useState("")
  const [title, setTitle] = useState("");
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ["todos" , {search}],
    staleTime : 1000,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todos) => {
        return <div key={todos.id}>{todos.title}</div>;
      })}
    </div>
  );
}
