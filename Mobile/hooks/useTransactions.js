import {useCallback, useState } from "react";
import { Alert } from "react-native";

const API_URL = "https://wallet-api-61i9.onrender.com/api";

export const useTransactions = (userId) => {
    const [transactions, setTransactions] = useState([]);
    const [summary, setSummary] = useState({
        balance: 0,
        income: 0,
        expense: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    const fetchTransactions = useCallback(
        async (userId) => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.log("Error fetching transactions:", error);
        }
    }, [userId]);

    const fetchSummary = useCallback(
        async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.log("Error fetching transactions:", error);
        }
    }, [userId]);

    const LoadData = useCallback(async () => {
        if(!userId) return;
        
        setIsLoading(true);
        try {
            await Promise.all([fetchTransactions(), fetchSummary()]);
        } catch (error) {
            console.log("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchTransactions, fetchSummary, userId]);

    const deleteTransactions = useCallback(async () => {
         try {
            const response = await fetch(
               `${API_URL}/transactions/${id}`, {
                method: "DELETE",});
            if(!response.ok) {
                throw new Error("Failed to delete transaction");
            }
            LoadData();
         } catch (error) {
            console.error("Error deleting transaction:", error);
            Alert.alert("Error", error.message);
         }
    });

   return {transactions,summary, isLoading, deleteTransactions, LoadData}
}