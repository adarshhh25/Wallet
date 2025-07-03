import { useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Alert, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { SignOutButton } from '../../components/SignOutButton';
import { useTransactions } from '../../hooks/useTransactions';
import { useEffect, useState } from 'react';
import PageLoader from '../../components/PageLoader';
import { styles } from "../../assets/styles/home.styles";
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import BalanceCard from '../../components/BalanceCard';
import TransactionItem from '../../components/TransactionItem';
import NoTransactionsFound from '../../components/NoTransactionsFound';

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const {transactions, summary, isLoading, deleteTransactions, LoadData} = useTransactions(user?.id);

  const onRefresh = async () => {
    setRefreshing(true);
    await LoadData();
    setRefreshing(false);
  };

  useEffect(() => {
    if (user?.id) {
      LoadData();
    }
  }, [LoadData, user?.id]);
  
  const handleDelete = (id) => {
   Alert.alert("Delete", "Are you sure you want to delete this transaction?", [
    {
      text:"Cancel",
      style:"cancel"
    },
    {
      text:"Delete",
      style:"destructive",
      onPress: () => deleteTransactions(id)
    },
  ]);
  };

  if(isLoading && !refreshing) return <PageLoader />;

  return (
    <View style={styles.container}>
       <View style={styles.content}>
          {/* Header */}
         <View style={styles.header}>
          {/* Left */}
          <View style={styles.headerLeft}>
            <Image
            source={require("../../assets/images/logo.png")}
            style={styles.headerLogo}
            contentFit="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>
                Welcome
              </Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress?.split("@")[0] || "User"}
              </Text>
            </View>
          </View>
          {/* Right */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push("/create")}>
              <Ionicons name="add" size={20} color="#FFF"/>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton/>
          </View>
         </View>

         <BalanceCard summary={summary}/>
      </View>

      <FlatList
      style={styles.transactionsList}
      contentContainerStyle={styles.transactionsListContent}
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <TransactionItem item={item} onDelete={handleDelete}/>}
      ListEmptyComponent={<NoTransactionsFound/>}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </View>
  )
}
