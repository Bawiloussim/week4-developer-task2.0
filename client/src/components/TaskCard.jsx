import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

// Amélioration : Ajout de CardDescription et meilleure structure visuelle
import { CardDescription } from "@/components/ui/card";

export default function TaskCard({ task, onToggle, onDelete }){
    return (
        <Card
            className={`relative animation-fads
            ${task.completed ? 'bg-green-50 dark:bg-green-900' : 'bg-white dark:bg-zinc-800'} shadow-md hover:shadow-lg transition-shadow duration-300`}
        >
            <CardHeader>
                <CardTitle
                    className={`text-lg font-semibold ${task.completed ? 'text-green-900 dark:text-green-50' : 'text-zinc-900 dark:text-zinc-50'}`}
                >
                    {task.title}
                </CardTitle>
                {task.description && (
                    <CardDescription className="text-zinc-500 dark:text-zinc-300 text-sm mt-1">
                        {task.description}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${task.completed ? 'bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100' : 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100'}`}>{task.completed ? 'Complétée' : 'En cours'}</span>
                </div>
            </CardContent>
            <CardFooter className="flex gap-2 justify-end">
                <Button variant="outline" onClick={onToggle} title={task.completed ? 'Marquer comme non complétée' : 'Marquer comme complétée'}>
                    <CheckCircleIcon className={`h-5 w-5 ${task.completed ? 'text-green-600' : 'text-zinc-400'}`} />
                </Button>
                <Button variant="ghost" onClick={onDelete} title="Supprimer">
                    <TrashIcon className="h-5 w-5 text-red-500" />
                </Button>
            </CardFooter>
        </Card>
    );
}