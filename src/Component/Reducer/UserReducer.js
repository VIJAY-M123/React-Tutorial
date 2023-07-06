const Intial = {
        Users: [],
}

const UserReducre = (state = Intial, action) => {
        switch (action.type) {
                case "ADD":
                        return {
                                ...state,
                                Users: [...state.Users, action.getdata]
                        }
                default:
                        return state;
        }

}
export default UserReducre;