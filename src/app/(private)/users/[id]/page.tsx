import React,{FC} from 'react';


type Params = Promise<{ id: string }>
type SearchParams = Promise<{[key:string]: string | string[] | undefined}>
type MyProps ={
    params: Params;
    searchParams:SearchParams
}
const UserPage:FC<MyProps> = async ({params, searchParams}) => {
    const {id} = await params;
    const {xxx} = await searchParams;
    const user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res => res.json())
    return (
        <div>
            {JSON.stringify(user)}
            <hr/>
            {xxx}
        </div>
    );
};

export default UserPage;