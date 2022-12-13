export function logout() {
    localStorage.removeItem('@rgranatodutra/KenzieHub:userID');
    localStorage.removeItem('@rgranatodutra/KenzieHub:authToken');
    window.location.assign('/login');
};