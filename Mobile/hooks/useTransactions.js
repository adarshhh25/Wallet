import { useState, useCallback } from 'react';
import { API_URL } from '../constants/api';

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    balance: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const LoadData = useCallback(async () => {
    if (!userId) return;
    
    try {
      setIsLoading(true);
      console.log(`Fetching from: ${API_URL}/transactions/${userId}`);
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      // The backend returns transactions directly as an array, not nested
      const transactionsArray = Array.isArray(data) ? data : [];
      setTransactions(transactionsArray);
      
      // Calculate summary
      const income = transactionsArray
        .filter(t => parseFloat(t.amount) > 0)
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
        
      const expense = Math.abs(
        transactionsArray
          .filter(t => parseFloat(t.amount) < 0)
          .reduce((sum, t) => sum + parseFloat(t.amount), 0)
      );
      
      const balance = income - expense;
      
      setSummary({
        income,
        expense,
        balance
      });
    } catch (error) {
      console.error('Error loading transactions:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  const deleteTransactions = async (id) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete transaction');
      }
      
      // Update local state
      setTransactions(transactions.filter(t => t.id !== id));
      
      // Recalculate summary
      const deletedTransaction = transactions.find(t => t.id === id);
      if (!deletedTransaction) return;
      
      const amount = parseFloat(deletedTransaction.amount);
      
      if (amount > 0) {
        setSummary({
          ...summary,
          income: summary.income - amount,
          balance: summary.balance - amount
        });
      } else {
        setSummary({
          ...summary,
          expense: summary.expense - Math.abs(amount),
          balance: summary.balance - amount
        });
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return {
    transactions,
    summary,
    isLoading,
    deleteTransactions,
    LoadData
  };
}
