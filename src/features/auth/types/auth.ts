export interface AuthState {
    user: null | { id: string; name: string; email: string };
    token: string | null;
}