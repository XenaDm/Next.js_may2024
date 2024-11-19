import {Metadata} from "next";

export const  metadata:Metadata = {
    title: '',
    description: 'PublicLayout metadata'
}
type Props = {children: React.ReactNode}
const UsersLayout = ({children}:Props)=>{

    return (
        <div>
            <div>users layout</div>
            {children}
        </div>
    )
}

export default UsersLayout;