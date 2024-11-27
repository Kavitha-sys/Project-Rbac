const menu = [

    {
        id:0,
        displayName:'Home',
        path:'dashboard',
        role:['USER', 'ADMIN'] //access role
    },
    {
        id:1,
        displayName:'Admin Panel',
        path:'admin',
        role:['ADMIN'] //access role
    },
    {
        id:2,
        displayName:'Users',
        path:'users',
        role:['ADMIN'] //access role
    },
    {
        id:2,
        displayName:'User Info',
        path:'user-info',
        role:['USER'] //access role
    }
]

//Function to get menu items based on the user role base
export const getMenu =(userRole)=>{
    //filter the menu items based on the user role
    return menu.filter((item)=> item.role.includers(userRole.toUpperCase()))

}



