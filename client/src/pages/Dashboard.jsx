import { useState, useEffect } from "react";
import API from "../services/api";
import Navbar from "../components/navbar";
import TaskCard from "../components/TaskCard";
import TaskDialog from "../components/TaskDialog";
import { toast } from "sonner";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);

    const load = async () => {
        try {
            const response = await API.get("/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Failed to load tasks:", error);
            toast({
                title: "Error",
                description: "Failed to load tasks",
                variant: "destructive"
            });
        }
    };
    useEffect(() =>{ load() }, []);

    const createTask  = async (payload) => {
        try {
            const response = await API.post("/tasks", payload);
            setTasks((prevTasks) => [...prevTasks, response.data]);
            toast({
                title: "Success",
                description: "Task created successfully",
                variant: "default"
            });
        } catch (error) {
            console.error("Failed to create task:", error);
            toast({
                title: "Error",
                description: "Failed to create task",
                variant: "destructive"
            });
        }
    };

    const toggleTask = async (id) => {
        try {
            const task = tasks.find((t) => t.id === id);
            const res = await API.patch(`/tasks/${id}`, {
                completed: !task.completed
            });
            setTasks((prevTasks) =>
                prevTasks.map((t) => (t.id === id ? res.data : t))
            );
            toast({
                title: "Success",
                description: "Task updated successfully",
                variant: "default"
            });
        } catch (error) {
            console.error("Failed to update task:", error);
            toast({
                title: "Error",
                description: "Failed to update task",
                variant: "destructive"
            });
        }
    };
    const deleteTask = async (id) => {
        try {
            await API.delete(`/tasks/${id}`);
            setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
            toast({
                title: "Success",
                description: "Task deleted successfully",
                variant: "default"
            });
        } catch (error) {
            console.error("Failed to delete task:", error);
            toast({
                title: "Error",
                description: "Failed to delete task",
                variant: "destructive"
            });
        }
    };
    return (
        <>
            <Navbar />
            <main className="flex-grow p-4">
                <div>
                    <h1 className="text-2xl font-bold mb-4">My Task</h1>
                    <TaskDialog onSubmit={createTask} />
                </div>

                <section
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}