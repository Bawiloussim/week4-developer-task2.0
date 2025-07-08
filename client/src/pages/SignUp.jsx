import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import API from "../services/api";
import { Link } from "react-router-dom";


export default function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (!email || !password) return alert("Please fill in all fields");
        setLoading(true);
        try {
            const res = await API.post("/auth/signup", { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Sign up failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-200"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-200"
                    />
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSignUp} disabled={loading} className="w-full">
                        {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                </CardFooter>
                    <p className="text-sm text-center mt-4 text-zinc-900 dark:text-zinc-300">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </Card>
        </div>
    );
} 