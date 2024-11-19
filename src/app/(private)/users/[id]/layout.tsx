import {Metadata} from "next";

export const  metadata:Metadata = {
    title: '',
    description: 'PublicLayout metadata'
}
type Props = {children: React.ReactNode}
const UserLayout = ({children}:Props)=>{

    return (
        <div>
            <div>User Layout</div>
            {children}
        </div>
    )
}

export default UserLayout;