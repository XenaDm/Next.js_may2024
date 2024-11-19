import {Metadata} from "next";

export const  metadata:Metadata = {
    title: 'PublicLayout metadata',
    description: 'PublicLayout metadata'
}
type Props = {children: React.ReactNode}
const PublicLayout = ({children}:Props)=>{

    return (
        <div>
            public layout
            {children}
        </div>
    )
}

export default PublicLayout;