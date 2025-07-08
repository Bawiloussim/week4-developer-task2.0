import {
    Dialog, DialogTrigger, DialogContent, 
    DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TaskDialog({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () =>{
        onSubmit({ title, description });
        setTitle("");
        setDescription("");
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Task</DialogTitle>
                </DialogHeader>
                <Input
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-4"
                />
                <Textarea
                    placeholder="Description de la tâche"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mb-4"
                />
                <DialogFooter>
                    <Button variant="secondary" onClick={() => setTitle("")}>
                        Cancel
                    </Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogFooter>
            </DialogContent>
            <DialogClose />
        </Dialog>
    );

} 