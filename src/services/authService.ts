// authService.ts
export const authService = {
    login: (username: string, password: string): boolean => {
      // აქ შეგიძლიათ ჩასვათ API მოთხოვნა
      if (username === "admin" && password === "password") {
        localStorage.setItem("auth", "true");
        return true;
      }
      return false;
    },
    logout: () => {
      localStorage.removeItem("auth");
    },
    isAuthenticated: (): boolean => {
      return localStorage.getItem("auth") === "true";
    }
  };
  