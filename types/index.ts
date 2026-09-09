export type UserRole = 'super_admin' | 'admin' | 'user';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  balance: number;
  pendingBalance: number;
  totalEarned: number;
  createdAt: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  rewardAmount: number;
  taskUrl: string;
  category: string;
  active: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
}
