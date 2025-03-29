import React from "react";
import MessageList from "../components/MessageList";

function AdminDashboard() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <MessageList />
        </div>
    );
}

export default AdminDashboard;
