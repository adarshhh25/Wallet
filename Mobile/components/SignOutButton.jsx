import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { styles } from '../assets/styles/home.styles';

export function SignOutButton() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={24} color={COLORS.textDark} />
    </TouchableOpacity>
  );
}
