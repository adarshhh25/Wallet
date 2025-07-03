// styles/home.styles.js
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  welcomeContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textDark,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  addButtonText: {
    color: COLORS.white,
    marginLeft: 4,
    fontWeight: "500",
  },
  signOutButton: {
    padding: 8,
  },
  balanceCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  balanceTitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.textDark,
    marginBottom: 16,
  },
  balanceStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceStatItem: {
    flex: 1,
  },
  balanceStatLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  balanceStatAmount: {
    fontSize: 18,
    fontWeight: "600",
  },
  statDivider: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
    paddingLeft: 16,
    marginLeft: 16,
  },
  transactionsList: {
    flex: 1,
  },
  transactionsListContent: {
    padding: 16,
    paddingTop: 0,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  transactionContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionLeft: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.textDark,
    marginBottom: 4,
  },
  transactionCategory: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  deleteButton: {
    padding: 8,
    marginLeft: 8,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    marginTop: 40,
  },
  emptyStateIcon: {
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.textDark,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: "center",
    marginBottom: 24,
  },
  emptyStateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  emptyStateButtonText: {
    color: COLORS.white,
    fontWeight: "500",
    marginLeft: 8,
  },
});
