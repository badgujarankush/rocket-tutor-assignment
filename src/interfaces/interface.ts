export interface RegisterUser {
  email: string;
  password: string;
  display_name: string;
  unique_name: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;

  user_id: string;

  phone_number: string | null;

  birth_date: string | null;

  github_link: string | null;

  about_me: string | null;

  pronouns: string | null;

  avatar_link: string | null;
}

export interface User {
  id: string;

  email: string;

  display_name: string;

  unique_name: string;

  is_active: boolean;

  is_staff: boolean;

  is_superuser: boolean;

  thumbnail: string | null;

  data_joined: string;

  profile: UserProfile;
}

export interface Transaction {
  transaction_id: string;
  amount: number;
  category_id: number;
  description: string;
  date: string;
  transaction_type: string;
  receipt_id: string | undefined;
  receipt_url: string | undefined;
  currency: string;
  user_id: string;
}

export interface CreateTransactionType {
  amount: number;
  category_id: number | undefined; // for this task this will always be undefined;
  description: string;
  transaction_date: string;
  transaction_type: string;
  currency: string | undefined;
  receipt: File | undefined;
}
